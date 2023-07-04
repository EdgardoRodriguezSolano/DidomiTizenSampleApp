function logTV(message) {
  var tvConsole = document.getElementById('tv-console');
  var log = document.createElement('p');
  log.style.color = 'white';
  log.innerText = message;
  tvConsole.appendChild(log);
}

window.logTV = logTV;

function configureDidomi() {
  logTV("configure Didomi");
  logTV(navigator.userAgent);
  try {
    window.Didomi.notice.show();
    logTV("Didomi shown");
   } catch (e) {
     logTV('there was an error showing Didomi notice');
     logTV(e.message);
   }
}
