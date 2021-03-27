

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
// some

function throwdice() {
    var sum ; 
    var ch = 1 + Math.floor(Math.random() * 6);
    sum = ch;

    dX = diceX;
    dy = diceY;

    //desenhar a primeira cara do dado 
    drawface(ch);

    dX = diceX + 150; //posicao horizontal 

    //repetir processo 
    ch = 1 + Math.floor(Math.random()*6);

    sum += ch;

    drawface(ch);

    if(firstTurn) { // para primeira jogada 
        
        
        switch(sum) {
            case 7 : 
            case 11 : 
            document.f.outcome.value = "YOU WIN"
            document.f.pv.value = sum;
            break;

            case 2: 
            case 3: 
            case 12: 
            document.f.pv.value = sum;
            document.f.outcome.value = "YOU LOST"
            break;
            
            default: 
            point = sum; 
            //display por colocar
            document.f.stage.value = "Throw Again.";
            document.f.pv.value = sum;
        }
    }

    else{
        switch(sum){
            case point: 
            alert("YOU WIIIN");

              
            document.f.outcome= "Back to First";
            document.f.pv.value = " ";
            firstTurn = true;
            break;

            case 7: 
            alert("YOU LOSE!");
            document.f.stage.value = "Back to First";
           document.f.pv.value = " ";
            firstTurn = true;
        }
         
    }
}

//Question : what is n parameter? sum
function drawface(n) {

    ctx = document.getElementById('canvas').getContext('2d');
    ctx.lineWidth = 5;
    ctx.clearRect(dX, dY, diceW, diceH);
    ctx.strokeRect(dX, dY, diceW, diceH);
    ctx.fillStyle = "#009966";

        switch(n) {
            case 1 : 
            draw1();
            break;
            case 2 :
            draw2(); 
            break;
            case 3: 
            draw2();
            draw1();
            break;
            case 4: 
            draw4(); 
            break;
            case 5:
            draw4();
            draw1();
            case 6:
            draw2mid();
            break;
        }
}

function draw1() {
    var dotX;
    var dotY;
    ctx.beginPath();
    dotX = dX + 0.5*diceW;
    dotY = dY + 0.5*diceH;
    ctx.arc(dotX, dotY, dotR, 0, Math.PI*2,true );
    ctx.closePath();
    ctx.fill();
}


function draw2() {
    var dotX;
    var dotY;
    ctx.beginPath();
    dotX = dX + 3*dotR;
    dotY = dY + 3*dotR;
    ctx.arc(dotX, dotY, dotR, 0, Math.PI*2,true);
    dotX = dX+diceW - 3* dotR;
    dotY = dY+diceH - 3* dotR;
    ctx.arc(dotX,dotY, dotR, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();

}


function draw4() {
    var dotX;
    var dotY;

    ctx.beginPath();
    dotX = dX + 3*dotR;
    dotY = dY + 3*dotR;
    ctx.arc(dotX, dotY, dotR, 0, Math.PI*2, true);
    
    dotX = dX+diceW-3*dotR;
    dotY = dY+diceH - 3 * dotR;
    ctx.arc(dotX,dotY, dotR, 0, Math.PI*2, true);

    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    dotX = dX + 3*dotR;
    dotY = dY + 3*dotR;
    ctx.arc(dotX, dotY, dotR, 0, Math.PI*2, true);
    
    dotX = dX+diceW- 3*dotR;
    dotY = dY+diceH - 3* dotR;
    ctx.arc(dotX,dotY, dotR, 0, Math.PI*2, true);

    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    dotX = dX + 3*dotR;
    dotY = dY + diceH-3* dotR;

    ctx.arc(dotX, dotY, dotR, 0, Math.PI*2, true);

    dotX = dX + diceW - 3*dotR;
    dotY = dY+ 3*dotR;

    ctx.arc(dotX, dotY, dotR, 0, Math.PI*2, true);

    ctx.closePath();
    ctx.fill();
}

// what tha fyuck ? 
function draw2mid() {
    var dotX ;
    var dotY;
    ctx.beginPath();

    dotX = dX + 3 *dotR;
    dotY = dY + 0.5 * diceH;
    
    ctx.arc(dotX, dotY, dotR, 0, Math.PI*2)
}









