console.log(window.barba);
barba.hooks.after(() => {
    console.log("Transición completada, reiniciando scripts...");
    // Aquí puedes reiniciar cualquier otro script que dependa del DOM
});

barba.init({
    transitions: [
        {
            name: 'prueba',
            leave(data) {
                console.log("Saliendo de la página...");
                const done = this.async();
                document.body.classList.add('loading');
                setTimeout(() => {
                    console.log("Finalizando leave()");
                    done();
                }, 900);
            },
            enter(data) {
                console.log("Entrando a la nueva página...");
                const done = this.async();
                setTimeout(() => {
                    document.body.classList.remove('loading');
                    console.log("Finalizando enter()");
                    done();
                }, 900);
            }
        }
    ]
});

barba.hooks.after(() => {
    console.log("Página cargada completamente");
    let scripts = document.querySelectorAll("script");
    scripts.forEach(script => {
        let newScript = document.createElement("script");
        newScript.src = script.src;
        newScript.async = true;
        document.body.appendChild(newScript);
    });
});





  