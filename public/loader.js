// Shows the brand loader while the Resources page boots (replaced when React mounts).
// External file (not inline) so the Content-Security-Policy can use script-src 'self'.
(function () {
  var p = location.pathname;
  if (p === '/risorse-gratuite' || p === '/en/risorse-gratuite') {
    var r = document.getElementById('root');
    if (r) r.innerHTML = '<div class="app-loader"><span class="loader"></span></div>';
  }
})();
