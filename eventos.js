let div = document.querySelector ("div");
let boton = document.querySelector ("button");

div.addEventListener("click", () =>{
alert('hola soy el div');
})

boton.addEventListener("click", (event)=>{
    alert('hola');
    event.stopPropagation();
})