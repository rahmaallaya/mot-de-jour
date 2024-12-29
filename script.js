const button = document.querySelectorAll('button');
let row = 1;
let letter = 1;
const tab = ['PLANE', 'HOUSE', 'HORSE', 'CHAIR', 'CLOUD', 'DANCE', 'GRAPE', 'OCEAN', 'PLANT', 'SMILE'];

const state = {
    secret: tab[Math.floor(Math.random() * tab.length)],
};
console.log("the word:", state.secret);
const  w_element= document.querySelectorAll('.rows');
let fin = false;
let test = false;
button.forEach((element) => {
    element.addEventListener('click', function() {
        keypress(element.innerText);
    });
});

function populateWord(key){ 
    if (letter < 6){
     w_element[row - 1].querySelectorAll('.word')[letter - 1].innerText = key;
    letter += 1;   
    }
    
}
function checkWord(){
    let NbCl = 0;
    const letterele = w_element[row - 1].querySelectorAll('.word'); 
    letterele.forEach((element,index) => {
     const indexletter = state.secret.indexOf(element.innerText.toUpperCase());

     if (indexletter === index){
        NbCl += 1;
        element.classList.add('green');
        col_key(element.innerText,"green")
     }else if (indexletter > -1){
        element.classList.add('orange');
        col_key(element.innerText,"orange")
     }else {
        element.classList.add('grey');
        col_key(element.innerText,"grey")
     }
    });
    if (NbCl === 5){
        fin = true;
        test = true;
        alert('congrats you won.')
    }else if(row === 6){
        fin = true;
        alert('Good luck next time the word is : ' +state.secret)
    }
}
function col_key(c,couleur){
    key=document.querySelectorAll('.keypad');
    key.forEach((k) => {
        if(k.innerText==c){
            k.style.backgroundColor=couleur
        }
    })
}

function enterWord (){
    if (letter < 6 ) {
       alert("not enough letters");
    } else {
        checkWord();
        row += 1;
        letter = 1;
    }
}

function deleteLetter() {
    const letterele = w_element[row - 1].querySelectorAll('.word');
    for (let i = letterele.length - 1; i >= 0; i--) {
        const element = letterele[i];
        if (element.innerText !== ''){
            element.innerText = '';
            letter -= 1;
            break; 
        }    
    }
}

function keypress(key){
    if (!fin){
    if (key.toLowerCase() === 'enter') {
      enterWord(); 
    } else if (key.toLowerCase() === 'del') {
        deleteLetter();
    } else {
        populateWord(key);
    }}else{
        alert('Game over ! ')
    }
}