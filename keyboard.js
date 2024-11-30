let input=document.getElementById('input')

let button=document.querySelectorAll('button')

function work(key){

    if(key==='Backspace'){input.value= input.value.slice(0,-1)}

    else if(key==='Tab'){input.value+='          '}

    else if(key==='Enter'){input.value+='\n'}

    else if(key==='shift'){input.value+=span}

    else if(key==='CapsLock'){input.value+=key.toUpperCase()}

    else{input.value+=key}
}
window.addEventListener('keydown',function(event)
{
    if(event.key!=='Shift' && event.key!=='CapsLock')
    work(event.key) 
}

)
button.forEach(button => {
    button.addEventListener('click',function(){
        work(button.value ||button.textContent)
    })

    window.addEventListener('keydown', function(){
        button.style.boxShadow = '0px 0px 10px 5px rgb(255, 255, 255)';
        })
        window.addEventListener('keyup', function(){
            button.style.boxShadow = ''
        })

});

