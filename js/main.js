

((d) => {
    // DOM
    const time = d.getElementById('time'),
        greetins = d.getElementById('greeting'),
        name = d.getElementById('name'),
        focus = d.getElementById('focus');

    //Time
    function ShowRealTime() {
        let today = new Date();
        let hour = today.getHours();
        let min = today.getMinutes();
        let sec = today.getSeconds();

        //Salida del tiempo
        time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${sec}`;
        setTimeout(ShowRealTime, 1000);
    }

    //background-image

    function setHeroImage() {
        let today = new Date();
        let hour = today.getHours();
        if (hour < 12) {
            document.body.style.backgroundImage = "url('../img/morning.jpg')";
            greetins.textContent = "Good Morning";


        } else if (hour < 18) {
            document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
            greetins.textContent = "Good Afternoon";
            document.body.style.color = "white";

        } else {
            document.body.backgroundImage = "url('../img/night.jpg')";
            greetins.textContent = "Good evening";
            document.body.style.color = "white";

        }

    }

    // nombre

    function getName() {
        if (localStorage.getItem('name') === null) {
            name.textContent = "[Enter Name]";

        } else {
            name.textContent = localStorage.getItem('name');
        }

    }
    function setName(e) {
        if (e.type ==='keypress') {
            
            //asegurarse de presionar enter
            if (e.which==13 || e.keyCode==13){
                /*
                Devuelve el keyCode de la tecla presionada, o el codigo del caracter (charCode) de la tecla alfanumerica presionada. 
                 */
                localStorage.setItem("name",e.target.innerText)
                name.blur()

                /* La funcion blur quita el foco de un elemento dinamico
                 */
                
            }

        } else {
            localStorage.setItem('name', e.target.innerText);
        }
    }

    /* 
    La propiedad de sólo lectura localStorage te permite acceder al objeto local Storage;
     los datos persisten almacenados entre de las diferentes sesiones de navegación. 
     localStorage es similar a sessionStorage (en-US). 
     La única diferencia es que, mientras los datos almacenados en localStorage 
     no tienen fecha de expiración, los datos almacenados en sessionStorage 
     son eliminados cuando finaliza la sesion de navegación - lo cual ocurre cuando se cierra la página.    
    
    
    */
    function getFocus() {
        if (localStorage.getItem('focus') === null) {
            focus.textContent = '[Enter your focus]';

        } else {
            focus.textContent = localStorage.getItem('focus');

        }

    }
    function setFocus(e) {
        if (e.type ==='keypress') {
            
            //asegurarse de presionar enter
            if (e.which==13 || e.keyCode==13){
                /*
                Devuelve el keyCode de la tecla presionada, o el codigo del caracter (charCode) de la tecla alfanumerica presionada. 
                 */
                localStorage.setItem("focus",e.target.innerText)
                name.blur()

                /* La funcion blur quita el foco de un elemento dinamico
                 */
                
            }

        } else {
            localStorage.setItem('focus', e.target.innerText);
        }
    }
    name.addEventListener('keypress', setName);
    name.addEventListener('blur', setName);
    focus.addEventListener('keypress', setFocus);
    focus.addEventListener('blur', setFocus);



    //correr las funciones

    ShowRealTime();
    setHeroImage()
    getName();
    getFocus();




})(document)

