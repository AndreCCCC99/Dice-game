

/// GENERAL SHEETCODES

//fazer rect
//x,y,w ,h 
//ctx.strokeRect(100,50,200,300);
//ctx.linWidth = 5; 
//ctx.strokeStyle = "rgb(255, 0, 0)";

//REGRAS 

/* 

O jogo tem dois dados para o jogador. 

A soma das caras que calham é o que importa.
Para ganhar na primeira jogada tem de calhar 7 ou 11.
Para perder : 2, 3, 12.

Qualquer outro resultado dá 1 ponto ao jogador.
Nas outras jogadas se calhar 7 o jogador perde
e se for igual ao numero de pontos o jogador ganha. 

*/


//arc --  
//x/y/r/ angulo inicial / angulo final : usar mais 
//ctx.arc(200, 200, 50, 0, Math.PI, false);
//ctx.stroke();
/* 
function init() {
    var ctx =  document.getElementById('canvas').getContext('2d'); 
    ctx.beginPath();
    ctx.strokeStyle = "rgb(255, 0, 0)";
    ctx.arc(200, 200, 50, 0, Math.PI, false);
    ctx.fillStyle = "black";
    ctx.stroke();
    ctx.fill();
} */



var cvswidth = 400; 
var cvsheight = 300; 

var diceX = 50; 
var diceY = 50; 
var diceW = 100; 
var diceH = 100; 

var dotR = 6; 
var ctx;
var dX; 
var dY; 

var firstTurn = true;
var point;


function throwdice() {
    var sum ; 
    var ch = 1 + Math.floor(Math.random() * 6);
    sum = ch;

    dX = diceyX;
    dy = diceY;

    //desenhar a primeira cara do dado 
    drawface(ch);

    dX = diceX + 150; //posicao horizontal 

    //repetir processo 
    ch = 1 + Math.floor(Math.random()*6);

    sum += ch;

    drawface(ch);

    if(firsturn) { // para primeira jogada 
        
        
        switch(sum) {
            case 7 : 
            case 11 : 

            alert("You WIN!");
            break;

            case 2: 
            case 3: 
            case 12: 
            alert("YOU LOOOOOOSE! LOSER!");
            break;
            
            default: 
            point = sum; 
            //display por colocar
            document.getElementsByName('f').getElementById("stage").value = "Throw Again.";
            document.getElementsByName('f').getElementById("pv").value = " ";
        }
    }

    else{
        switch(sum){
            case point: 
            alert("YOU WIIIN");

            document.getElementsByName('f').getElementById("stage").value = "Back to First";
            document.getElementsByName('f').getElementById("pv").value = " ";
            firstTurn = true;
            break;

            case 7: 
            alert("YOU LOSE!");
            document.getElementsByName('f').getElementById("stage").value = "Back to First";
            document.getElementsByName('f').getElementById("pv").value = " ";
            firstTurn = true;
        }
         
    }
}


function init() {

    var ctx = document.getElementById('canvas').getContext('2d');

    dotR 


    //rect do dado 
    ctx.beginPath();
    ctx.strokeStyle = "rgb(255, 0, 0)"; 
    ctx.rect(50,50, 100, 100); 
    ctx.stroke();


    //bola de dado 
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.arc(75, 75, 8, 0, Math.PI*2, false);
    ctx.fillStyle  ="green"
    ctx.stroke();
    ctx.fill();

} 




window.onload = init;



