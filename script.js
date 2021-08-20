// All buttons, including functional buttons below
const allButtons = document.getElementsByTagName('button')
const textArea = document.querySelector('textarea')
// individual Functional Buttons
const backspaceBtn = document.getElementById('backspace')
const enterBtn = document.getElementById('enter')
const spaceBarBtn = document.getElementById('space-bar')
const capsBtn = document.getElementById('caps')
const capsLockSignal = document.querySelector('#caps > div')

let recordedText = []

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
  recordedText.push(btnClicked)
  textArea.innerHTML += btnClicked
}
/**********************************************************************/

/****************Functional Buttons' functions*******************/
spaceBarBtn.addEventListener('click', addSpace)
enterBtn.addEventListener('click', enterNewLine)
backspaceBtn.addEventListener('click', backspace)
capsBtn.addEventListener('click', capsLock)

// Space button logic
function addSpace(){
  recordedText.push(' ')
  textArea.innerHTML += ' '}

// Enter button logic
function enterNewLine(){
  recordedText.push('\n')
  textArea.innerHTML += '\n'
}

// Backspace button logic
function backspace(){
  recordedText.pop()                //Remove last inserted item in array
  textArea.innerHTML = ''           //Clear text area
  for (let i = 0; i < recordedText.length; i++){
    textArea.innerHTML += recordedText[i]   //Repopulate textarea with array
  }
}

// Caps lock button logic
function capsLock(){
  if(capsLockSignal.classList.contains('caps-locked')){ //If caps lock ON, turn OFF
    capsLockSignal.classList.toggle('caps-locked')
    for (let button of allButtons) {
      if(button.id !== 'caps'){    //Ignore caps - messes with child div
        button.innerHTML = button.innerHTML.toLowerCase()
      }
    }

  }else{                                                //if caps lock OFF, turn ON
    capsLockSignal.classList.toggle('caps-locked')
    for (let button of allButtons) {
      if(button.id !== 'caps'){   //Ignore caps - messes with child div
        button.innerHTML = button.innerHTML.toUpperCase()
      }
    }
  }
}

/**********************************************************************/
