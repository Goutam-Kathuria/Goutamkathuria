let q=document.getElementById('que')
let o1=document.getElementById('opn1')
let o2=document.getElementById('opn2')
let o3=document.getElementById('opn3')
let o4=document.getElementById('opn4')
let aud=document.getElementById('audio')
let tic1=document.getElementsByClassName('tic')[0]
let questio=document.getElementById('question')
let tala=document.getElementsByClassName('tala')[0]
let wrong=document.getElementById('wrong')
let lock2=document.getElementById('lock')

let question=[
{
question1:"Yesterday is history, tomorrow is a mistery, but today is a gift. Thats why its called??? ",
option:['\'The Present\'.', 'John Wick','I Dont Know','Pizza'],
correct:0
},
{

question1:'What belongs to you but others use it more than you do?',
option:['Money','Name','Out of ideas','Ignore this one'],
correct:1
},
{
question1:'Why did the tomato turn red?',
option:['She is ill','She saw his crush','She saw the salad belongs','Bcs It is'],
correct:3
},
{
question1:'What is always in front of you but can\'t be seen?',
option:['Eyes','Ex','Future','Just tell me ur blind'],
correct:2
},
{
question1:'What has a neck but no head?',
option:['Juggernut','bottle','My Neibour','Batman'],
correct:1
},

{
    question1:'What can you catch but not throw?',
    option:['Cash','Money','Dollars','Cold'],
    correct:3
},

{
question1:'What has a face and two hands but no arms or legs?',
option:['Glock','Ghost Freak','Nick Vujic','Clock'],
    correct:3
},
{
question1:'Newton ke sar par jo apple gira tha wo us samay kitne rupee kilo bik raha tha',
option:['₹100 kilo','₹1000 kilo','Haram','Santra Gira tha'],
    correct:3
},
{
question1:'Is Muhavare Ko pura kre\n "Bandar Kya Jane _____Ka Swad"',
option:['Pizza Hut','Burger King','Bandariya','Malta Masti'],
    correct:3
},
{
question1:'Salman Khan Ki Movie "______Jinda Hai" Mai Kon Jinda Hai',
option:['Kala Hiran','Footpath Wale','Aishwarya Rai','Vicky Kaushal'],
    correct:3
},
{
    question1:'Johny Sins Kon Hai',
    option:['Plumber','Doctor','Enginer','+22 Other Options'],
        correct:3
}

]
let currentindex=0
let currentopt=null
let previousitem = null;
let countdown
let useque=[]


function loadquestion(){

if(useque.length==question.length){
    alert('7 Crore')
    aud.play()
    window.location.href='quiz.html'
    return;
}

let randomindex
questio.play()
setTimeout(()=> {
do{
randomindex=Math.floor(Math.random()*question.length)
}while (useque.includes(randomindex))
useque.push(randomindex)
current=question[randomindex]

q.textContent=current.question1
o1.textContent=current.option[0]
o2.textContent=current.option[1]
o3.textContent=current.option[2]
o4.textContent=current.option[3]

o1.style.backgroundColor = '';
o2.style.backgroundColor = '';
o3.style.backgroundColor = '';
o4.style.backgroundColor = '';

currentopt=null
clearInterval(countdown)


tic1.play()
timer(30)
},3000)





const olitem=document.querySelectorAll('ol li')

if(previousitem){
    const previousDot = previousitem.querySelector('.green-dot');


if(previousDot){
    previousDot.style.visibility = 'hidden';
}
}

let currentitem=olitem[olitem.length-currentindex-1]
const currentDot=currentitem.querySelector('.green-dot')



if (currentDot) {
    currentDot.style.visibility = 'visible';
}
previousitem=currentitem
}

function selectoption(opni){
currentopt=opni

o1.style.backgroundColor=''
o2.style.background=''
o3.style.background=''
o4.style.background=''

if(currentopt==0) o1.style.background='yellow'
if(currentopt==1) o2.style.background='yellow'
if(currentopt==2) o3.style.background='yellow'
if(currentopt==3) o4.style.background='yellow'
}

function lock(){

    
if(currentopt!=null){
    lock2.disabled = true
   
 tala.play()
        
 tic1.pause()

clearInterval(countdown)

setTimeout(()=>check(),5000)

    }
}

function check(){
if(currentopt==current.correct){
    alert("Sahi Uttar!")
    if(currentopt==0)o1.style.background='lime'
    if(currentopt==1)o2.style.background='lime'
    if(currentopt==2)o3.style.background='lime'
       if(currentopt==3)o4.style.background='lime'

clearInterval(countdown)
    setTimeout(()=>
    {
        tic1.pause()
        tic1.currentTime=0
     
        next() 


    },2000)
   
 
}

else{
    wrong.play()
    alert('Mahashya Yehe Galat Uttar hai')
       if(currentopt==0)o1.style.background='red'
    if(currentopt==1)o2.style.background='red'
if(currentopt==2)o3.style.background='red'
if(currentopt==3)o4.style.background='red'

if(current.correct==0)o1.style.background='lime'
if(current.correct==1)o2.style.background='lime'
if(current.correct==2)o3.style.background='lime'
if(current.correct==3)o4.style.background='lime'



setTimeout(()=>window.location.href='quiz.html', 5000)
}

}
function exit(){
    let confirm1=confirm('Are u sure')

    if (confirm1)
        window.location.href='quiz.html'
}

function next(){
    currentindex++
    lock2.disabled=false;
    currentopt=null
loadquestion()

}

function timer(second){

    timeleft=second
    let time=document.getElementById('timer')
    countdown=setInterval(function(){

    time.textContent=timeleft
    timeleft--

    if(timeleft<0 ){
        clearInterval(countdown)
        alert('Samay Samapt')
        window.location.href='quiz.html'
    }
},1000
)

}

loadquestion()



