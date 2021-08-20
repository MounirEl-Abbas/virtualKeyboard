// All buttons, including functional buttons below
const allButtons = document.getElementsByTagName('button')
const textArea = document.querySelector('textarea')
// individual Functional Buttons
const backspaceBtn = document.getElementById('backspace')
const enterBtn = document.getElementById('enter')
const spaceBarBtn = document.getElementById('space-bar')
const capsBtn = document.getElementById('caps')


/************ Adding Event Listerners to Keyboard buttons **************/
window.addEventListener("DOMContentLoaded", addBtnListeners)
function addBtnListeners(){                  
  for (let button of allButtons){        //Iterate over all keyboard buttons
    if (button.id !== 'backspace' &&        //Ignore backspace button
        button.id !== 'enter'     &&        //Ignore enter button
        button.id !== 'caps'      &&        //Ignore caps lock button
        button.id !== 'space-bar') {        //Ignore spacebar button
      //Add Event listener to remaining buttons
      button.addEventListener('click', displayKeyClicked)
    }
  }
}

// When a button is clicked, add the textContent to textarea
function displayKeyClicked(e){
  let btnClicked = e.target.textContent
  textArea.innerHTML += btnClicked
}
/**********************************************************************/

/****************Functional Buttons' functions*******************/
backspaceBtn.addEventListener('click', backspace)
spaceBarBtn.addEventListener('click', addSpace)
enterBtn.addEventListener('click', enterNewLine)
capsBtn.addEventListener('click', capsLock)

// Backspace button logic
function backspace(){
}
// Space button logic
function addSpace(){
}
// Enter button logic
function enterNewLine(){
}
// Caps lock button logic
function capsLock(){
}



/**********************************************************************/
