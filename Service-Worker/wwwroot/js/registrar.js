// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

debugger;
let newWorker;

// O evento de clique na notificação
document.getElementById("reload").addEventListener("click", function () {
    newWorker.postMessage({ action: "skipWaiting" });
});

if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("/js/service-worker.js") // [A]
        .then(function (registration) {
            registration.addEventListener("updatefound", () => { // [B]
                // Uma atualização no Service Worker foi encontrada, instalando...
                newWorker = registration.installing; // [C]

                newWorker.addEventListener("statechange", () => {
                    // O estado do Service Worker mudou?
                    switch (newWorker.state) {
                        case "installed": {
                            // Existe um novo Service Worker disponível, mostra a notificação
                            if (navigator.serviceWorker.controller) {
                                let notification = document.getElementById("notification");
                                notification.className = "show";
                                break;
                            }
                        }
                    }
                });
            });

            // SUCESSO - ServiceWorker Registrado
            console.log(
                "ServiceWorker registrado com sucesso no escopo: ",
                registration.scope
            );
        })
        .catch(function (err) {
            // ERRO - Falha ao registrar o ServiceWorker
            console.log("Falha ao registrar o ServiceWorker: ", err);
        });
}