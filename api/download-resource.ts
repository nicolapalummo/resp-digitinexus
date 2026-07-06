// GET /api/download-resource?id=N&exp=TS&sig=HMAC
// Consegna il PDF completo SOLO con firma valida e non scaduta (link ricevuto
// via email). I PDF stanno in private/freemium/ e non sono mai serviti come
// asset statici: senza firma valida risponde 403.
import { createReadStream, statSync } from 'node:fs';
import { join } from 'node:path';
import { RESOURCES, verifyResource } from './_utils';

export default function handler(req: any, res: any) {
  const id = Number.parseInt(String(req.query?.id ?? ''), 10);
  const exp = Number.parseInt(String(req.query?.exp ?? ''), 10);
  const sig = String(req.query?.sig ?? '');

  if (!verifyResource(id, exp, sig)) {
    res.status(403).json({ ok: false, error: 'link_invalid_or_expired' });
    return;
  }

  const resource = RESOURCES[id];
  try {
    const filePath = join(process.cwd(), 'private', 'freemium', resource.file);
    const { size } = statSync(filePath);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Length', String(size));
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${resource.downloadName.replace(/"/g, '')}"`,
    );
    res.setHeader('X-Robots-Tag', 'noindex');
    res.setHeader('Cache-Control', 'private, no-store');
    // Streaming (non buffer intero): evita il limite di payload delle funzioni
    // per il PDF da 8MB e riduce la memoria usata.
    createReadStream(filePath).pipe(res);
  } catch (err) {
    console.error('[download-resource] read failed', err);
    res.status(500).json({ ok: false, error: 'file_unavailable' });
  }
}
