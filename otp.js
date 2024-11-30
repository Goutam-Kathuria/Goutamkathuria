let input=document.getElementById('ip')
let otp=''
let t=document.getElementById('touch')

let p=document.getElementById('Password')

function generator(){
let digit='0123456789'

for(let i=0;i<4;i++){
    otp+=(Math.floor(Math.random()*digit.length)) 
}

alert('Ur Otp is'+ otp)
t.disabled=true
t.style.background='gray'
setTimeout(()=>{
    t.disabled=false
t.style.background='rgb(15, 161, 15)'
otp=''
},10000)

}

function verify(){
if (input.value==otp && input.value!=''){
txt=document.createElement('p')
txt.textContent=`'Your Otp Is ${otp} verified'`
txt.style.color="lime"
input.value=''
otp=''
}

else if(input.value!=''){
     txt=document.createElement('p')
txt.textContent='Your Otp Is Incorrect'
txt.style.color="red"
input.value=''
otp=''
}
document.body.appendChild(txt); 

txt.id='p'
}

let condition=(()=>
{
    let pass=''
let len=document.getElementById('Length').value

let up='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let low='abcdefghijklmnopqrstuvwxyz'
let num='0123456789'
let spl='`~!@#$%^&*()_+-={}[]:;<>,.?/|\\\'"'

for(let i=1;i<=len;i++)
{  
    if(document.getElementById('Upper').checked==true)
    {
        pass+=up[Math.floor(Math.random()*up.length)];
        i++;
    }

    if(document.getElementById('Lower').checked==true)
    {
        pass+=low[Math.floor(Math.random()*low.length)];
    i++
    }

    if(document.getElementById('Numbers').checked==true)
        {
            pass+=num[Math.floor(Math.random()*num.length)];
i++
        }

        if(document.getElementById('Special').checked==true)
            {
                if(i<=len)
                pass+=spl[Math.floor(Math.random()*spl.length)];
            }
}
input.value=pass;
})