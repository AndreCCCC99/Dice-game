// MY RULES 
// Se Calhar Par ganhas ímpar perdes


//Sheet 
/* var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.rect(20, 20, 150, 100);
ctx.stroke(); */
// ctx.clearRect(dX, dY, diceW, diceH)
//    ctx.arc(dotX, dotY, dotR, 0, Math.PI * 2, true);
var number;
var dotR = 10;




function throwMyDice() {

    number = Math.floor(Math.random() * 6) + 1;
    console.log(number);
    drawFace(number);
}



function drawFace(number) {

    ctx = document.getElementById('mycanvas').getContext('2d');
    ctx.cle
    ctx.beginPath();
    ctx.clearRect(5, 5, 100, 100);
    ctx.rect(5, 5, 100, 100);
    ctx.stroke();
    ctx.closePath();


    switch (number) {


        case 1:
            draw1();
            break;


        case 2:
            draw2();
            break;

        case 3:
            draw3();
            break;

        case 4: 
            draw4();
            break;

        case 5: 
            draw5();
            break;
            
        case 6: 
            draw6();
            break;
    }



    function draw1() {
        ctx.beginPath();
        ctx.arc(50, 50, dotR, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.closePath();
    }

    function draw2() {
        ctx.beginPath();
        ctx.arc(25, 25, dotR, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.closePath();


        ctx.beginPath();
        ctx.arc(75, 75, dotR, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.closePath();
    }

    function draw3() {

        ctx.beginPath();
        ctx.arc(25, 25, dotR, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(50, 50, dotR, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.closePath();


        ctx.beginPath();
        ctx.arc(75, 75, dotR, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.closePath();

    }

    function draw4() {

        ctx.beginPath();
        ctx.arc(25, 25, dotR, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(25, 75, dotR, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.closePath();

       

        ctx.beginPath();
        ctx.arc(75, 25, dotR, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(75, 75, dotR, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.closePath();
    }

    function draw5() {

        ctx.beginPath();
        ctx.arc(25, 25, dotR, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(25, 75, dotR, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(50, 50, dotR, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(75, 25, dotR, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(75, 75, dotR, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.closePath();
    }

    function draw6(){
        ctx.beginPath();
        ctx.arc(25, 25, dotR, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(25, 50, dotR, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(25, 50, dotR, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.closePath();


        ctx.beginPath();
        ctx.arc(75, 25, dotR, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(75, 75, dotR, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.closePath();
    }


}