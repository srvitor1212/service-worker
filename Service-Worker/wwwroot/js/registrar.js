// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

debugger;
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("/js/service-worker.js")
        .then(function (registration) {
            // SUCESSO - ServiceWorker Registrado
            console.log("ServiceWorker registrado com sucesso no escopo: ", registration.scope);
            console.log("registration: ", registration);
            console.log("navigator.serviceWorker: ", navigator.serviceWorker);
        })
        .catch(function (err) {
            // ERRO - Falha ao registrar o ServiceWorker
            console.log("Falha ao registrar o ServiceWorker: ", err);
        });
} else {
    console.log("Navegador não aceite serviceWorker");
};