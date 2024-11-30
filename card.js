let card_no=document.getElementById('card-no')
let cv=document.getElementById('CV')
let exp=document.getElementById('Exp')
let exp1=document.getElementById('Exp2')

function check(){

let expmonth=parseInt(exp.value)
let expyear=parseInt(exp1.value)

    if(card_no.value.replace(/\s+/g, '').length!=16  || isNaN(card_no.value.replace(/\s+/g, ''))){
        card_no.style.border='red 1px solid'
        card_no.setAttribute('placeholder','Please Fill Card Details To Continue')
           
               return false
               
    }
    else if(cv.value.length!=3 || isNaN(cv.value)){
card_no.style.border='green 1px solid'
cv.style.border='red 1px solid'
cv.setAttribute('placeholder','Please Fill Your CVV To Continue')
return false
    }

else if(!([1,2,3,4,5,6,7,8,9,10,11,12]).includes(expmonth) || expyear<2024 || expyear>2030){
  cv.style.border='green 1px solid'
  exp.style.border='red 1px solid'
  exp1.style.border='red 1px solid'
  return false
 }

 else{
     exp.style.border='green 1px solid'
  exp1.style.border='green 1px solid'
    alert('Card Validate')
    return true
 }
}
card_no.addEventListener('input',()=>{
let value=card_no.value.replace(/\s+/g, '')
card_no.value=value.replace(/(\d{4})(?=\d)/g, '$1 ')
})

// button.addEventListener('click',function()){
    
// }