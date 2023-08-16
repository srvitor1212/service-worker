

console.log("[REGISTER] Registrando service worker...");


if ('serviceWorker' in navigator) {

    console.log("[REGISTER] 'serviceWorker' in navigator");

    navigator.serviceWorker
        .register('/js/service-worker.js')
        .then(function (registration) {
            console.log("[REGISTER] Registrou com sucesso: " + registration.scope);
        })
        .catch(function (error) {
            console.log("[REGISTER] ERRO: " + error);
        })

} else {
    console.log("[REGISTER] Esse navegador não suporte service worker");
}


console.log("[REGISTER] FIM: Registrando service worker...");