const myArray = ['Que bonitos ojos tienes!!', 
    'Que carnosos labios, hermosa!!', 
    'Me encantan tus chinos!!',
    'Como me gusta tu piel, tan cálida y suave!!',
    'Que linda te vez hoy, fiu fiu!!',
    'uuuuuh la la, que hermosa estas!!',
];

const meEncantaList = ['Que te ponías a perrear y moverme la colita!!', 
    'Tu forma de contar los cuentos!!', 
    'Como me miras!!',
    'La paciencia que tienes!!',
    'Cuando pestañeas de manera coqueta, me derrite!!'
];
  
var mensaje = document.getElementById("mensaje");
  
document.getElementById("piropos").onclick = () => {
    const randomElement = myArray[Math.floor(Math.random() * myArray.length)]; 
    mensaje.innerHTML = randomElement;
};

document.getElementById("meEncanta").onclick = () => {
    const randomElement = meEncantaList[Math.floor(Math.random() * myArray.length)]; 
    mensaje.innerHTML = randomElement;
};