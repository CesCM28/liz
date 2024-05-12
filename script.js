const myArray = ['Que bonitos ojos tienes!!', 
    'Que carnosos labios, hermosa!!', 
    'Me encantan tus chinos!!',
    'Como me gusta tu piel, tan cálida y suave!!',
    'Que linda te vez hoy, fiu fiu!!',
    'uuuuuh la la, que hermosa estas!!',
    'Me encanta tu sonrisa!!',
    'Que hermosas piernas!!',
    'Que rico hueles!! (si en este momento)',
];

const meEncantaList = ['Que te ponías a perrear y moverme la colita!!', 
    'Tu forma de contar los cuentos!!', 
    'Como me miras!!',
    'La paciencia que tienes!!',
    'Cuando pestañeas de manera coqueta, me derrite!!',
    'Que te gusta tener limpio y ordenado!!',
    'Compartir tiempo contigo y el vieje a Torreón, uff!!',
    'Cuando te arreglas y me preguntas como te vez y haces esa mirada coqueta, me derrite!!',
];

const emojis = ['&#128513;', '&#128516;', '&#128521;', '&#128522;', '&#128517;']
  
var mensaje = document.getElementById("mensaje");

var pass = document.getElementById("pass");

var piropo = document.getElementById("piropos").onclick = () => {
    print(myArray);
};

var encanta = document.getElementById("meEncanta").onclick = () => {
    print(meEncantaList);
};

document.getElementById("acceso").onclick = () => {
    if (pass.value === ""){
        pass.hidden = false;
        acceso.innerText = "prueba";
    } else {
        if(pass.value === "esencia")
            mensaje.innerHTML = "¿Te quieres casar conmigo?";
        else         
            mensaje.innerHTML = "Lo siento, es no es!!";
        
        pass.hidden = true;
        acceso.innerHTML = "ya esta!!";
        pass.value = "";
    }
};

function print(array) {
    const randomElement = array[Math.floor(Math.random() * array.length)];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    mensaje.innerHTML = randomElement + " " + randomEmoji;
}