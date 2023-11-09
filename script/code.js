/* 
first create a variable using your button
then create a variable using your output
create your function and INSIDE your function, create variables for your 2 numbers by using your input.value (the .value will select the text or number you put inside the input box)
then create a variable for your result by typing out you equation
then let your output.textContent = result (.textContent not innerhtml, it will add html to your element) 
then add your .eventlistener to your button variable (outside of your function)
*/

const btnAdd = 
document.querySelector('[data-submit]') 
// square brackets because we are using an attribute of the button and not the id or class
const lblOutput = document.querySelector('#output')

function addition(){
    let numb1 = document.getElementById('Number1').value
    let numb2 = document.getElementById('Number2').value
    let sum = +numb1 + +numb2
    // let sum = eval(`${numb1}+ ${numb2}`)
    lblOutput.textContent = sum
}

btnAdd.addEventListener('click', addition)




// const btnAdd = document.querySelector('[data-addition]')
// const lblOutput = document.querySelector('#output')
// function addition() {
//     let numb1 = document.getElementById('numb1').value
//     let numb2 = document.getElementById('numb2').value
//     let sum =eval(`${numb1}+ ${numb2}`)
//     lblOutput.textContent = sum
// }
// btnAdd.addEventListener('click', addition)