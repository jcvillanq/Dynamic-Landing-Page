

((d)=>{
    // DOM
    const time = d.getElementById('time'),
    greetins=d.getElementById('greeting'),
    name=d.getElementById('name'),
    focus=d.getElementById('focus');
    
    //Time
    function ShowRealTime() {
        let today=new Date();
        let hour=today.getHours();
        let min=today.getMinutes();
        let sec=today.getSeconds(); 
        
           //Salida del tiempo
        time.innerHTML=`${hour}<span>:</span>${min}<span>:</span>${sec}`;
        setTimeout(ShowRealTime,1000);
    }
    
    //background-image

    function setHeroImage() {
        let today=new Date();
        let hour=today.getHours();
        if (hour<12) {
            document.body.style.backgroundImage="url('../img/morning.jpg')";
            greetins.textContent="Good Morning";

            
        } else if(hour<18) {
            document.body.style.backgroundImage="url('../img/afternoon.jpg')";
            greetins.textContent="Good Afternoon";
            
        }else{
            document.body.backgroundImage="url('../img/night.jpg')";
            greetins.textContent="Good evening";
            document.body.style.color="white";

        }
        
    }

    //correr las funciones

    ShowRealTime();
    setHeroImage()

 


})(document)

