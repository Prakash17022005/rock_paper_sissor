var box1=document.getElementById("div1");
var box2=document.getElementById("div2");

const element=[1,2,3];


function randomc()
{
const randind=Math.floor(Math.random()*element.length);
var randelement=element[randind];
console.log(randelement);


if(randelement==1)
    {
        box1.textContent="🪨"
        setTimeout(function()
        {
           box1.textContent="✊" ;
        },2000);
    }
if(randelement==2)
    {
        box1.textContent="📰"
        setTimeout(function()
        {
           box1.textContent="✊" ;
        },2000);
    }
if(randelement==3)
    {
        box1.textContent="✂️";
        setTimeout(function()
        {
           box1.textContent="✊" ;
        },2000);
    }
}

var cho1=document.getElementById("b1");
var cho2=document.getElementById("b2");
var cho3=document.getElementById("b3");

function youclick1()
{
    box2.textContent="🪨";
    setTimeout(function()
        {
           box2.textContent="✊" ;
        },2000);

}
function youclick2()
{
    box2.textContent="📰";
    setTimeout(function()
        {
           box2.textContent="✊" ;
        },2000);
}
function youclick3()
{
    box2.textContent="✂️";
    setTimeout(function()
        {
           box2.textContent="✊" ;
        },2000);
}

var score1=document.getElementById("scodiv1");
var score2=document.getElementById("scodiv2");
var winning=document.getElementById("win")
var scov1=0;
var scov2=0;

function scorec()
{
    if(box1.textContent=="🪨" && box2.textContent=="✂️")
    {
        scov1=scov1+1;
        score1.textContent=scov1;
    }
    if(box1.textContent=="📰" && box2.textContent=="🪨")
    {
        scov1=scov1+1;
        score1.textContent=scov1;
    }
    if(box1.textContent=="✂️" && box2.textContent=="📰")
    {
        scov1=scov1+1;
        score1.textContent=scov1;
    }

        if(box2.textContent=="🪨" && box1.textContent=="✂️")
        {
            scov2=scov2+1;
            score2.textContent=scov2;
        }
        if(box2.textContent=="📰" && box1.textContent=="🪨")
        {
            scov2=scov2+1;
            score2.textContent=scov2;
        }
        if(box2.textContent=="✂️" && box1.textContent=="📰")
        {
            scov2=scov2+1;
            score2.textContent=scov2;
        }

        if(scov1==10)
        {
            winning.textContent="I wins";
        
        }
        if(scov2==10)
            {
                winning.textContent="you wins 🏆";
            }
    

}