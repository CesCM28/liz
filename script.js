const myArray = ['Que bonitos ojos tienes!!', 
    'Que carnosos labios, hermosa!!', 
    'Me encantan tus chinos!!',
];
  
var mensaje = document.getElementById("mensaje");
  
document.getElementById("piropos").onclick = () => {
    const randomElement = myArray[Math.floor(Math.random() * myArray.length)]; 
    mensaje.innerHTML = randomElement;
    console.log("entro");
};

