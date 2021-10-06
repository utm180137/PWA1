//revisamos si services worker es una propiedad en el objeto navigator,
//se registra solo si el navegador soporta los service workers
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Registro de SW exitoso', reg))
      .catch(err => console.warn('Error al tratar de registrar el sw', err))
}