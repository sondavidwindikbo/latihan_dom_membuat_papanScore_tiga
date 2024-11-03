//variabel atau pemangilan yang dimasukan kedalam suatu variabel dari html
const p1Button = document.querySelector('#p1-button');
const p2Button = document.querySelector('#p2-button');
const p1Display = document.querySelector('#p1-display');
const p2Display = document.querySelector('#p2-display');
const resetButton = document.querySelector('#reset');
const winPointOption = document.querySelector('#winPoint');

let p1Score = 0;
let p2Score = 0;
let winPoint = 3;
let gameOver = false;

//menambah function tombol reset
function reset() {
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;

}


//membuat function tombol p1 dan p2

p1Button.addEventListener('click', function(){
    if(!gameOver){
        p1Score += 1;
        if(p1Score === winPoint){
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }

    
    
})

p2Button.addEventListener('click', function(){

    if(!gameOver){
        p2Score += 1;
        if(p2Score === winPoint){
            gameOver = true;
        } 
        p2Display.textContent = p2Score;
    }
    
})


//membuat perintah ketika di klik reset
resetButton.addEventListener('click',reset);

//perintah select
winPointOption.addEventListener('change',function(){
    winPoint = parseInt(this.value);
    reset();
})
