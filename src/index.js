console.log('project is up')

// 👉 TASK 1- Select the following elements from the DOM:


window.onload = function () {
  // probably not a good idea
}
window.addEventListener('load', function (event) {
  // ALL OF YOUR PROGRAM HERE
  // if you can't use the defer attribute, for example
  // or if you want to make sure some code runs AFTER
  // the "load" event fires on the tab
  // (which would mean the DOM is constructed)
})


// BUTTONS
const launchButton = document.querySelector('#launchButton')
const confirmButton = document.querySelector('#confirmButton')
const cancelButton = document.querySelector('#cancelButton')

// MESSAGES
const successMessage = document.querySelector('.success')
const failureMessage = document.querySelector('.failure')

// MODAL
const modal = document.querySelector('.module')

debugger

// 👉 TASK 2- Demo handling click events on button#launchButton, using:
//      - HTML
//      - The DOM's element.onclick
launchButton.onclick = function () {
  // console.log('old way')
}
//      - element.addEventListener()
function eventListener (event) {
  // handle the click event
  console.log(`
    event type:   ${event.type}
    event target: ${event.target.nodeName}
    timestamp:    ${Math.floor(event.timeStamp / 1000)}
  `)
}
launchButton.addEventListener('click', eventListener)

// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.
function launchModal (event) {
  modal.classList.toggle('off');
}
launchButton.addEventListener('click', launchModal);


// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.


// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.


// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.


// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.


// 👉 TASK 8- Select a link and prevent its default behavior


// 👉 TASK 9- Using the mouseover event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.


// 👉 TASK 10- [STRETCH] Create helper functions
function openModal() {

}

function closeModal() {

}

function killReports() {

}
