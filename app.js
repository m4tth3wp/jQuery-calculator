// flow of app
/**
 * have a first number
 * choose an operator
 * then a second number
 * wait for operation to finish
 * display the results
 */



// dont want to run app until jquery loads
$( document ).ready(function() {
    
// Variables in global runtime

//initial state
let firstNumber = 0
let secondNumber = 0
let result = 0   
let operator = ''
let isOperatorChosen = true
let isCalculated = false



// 1 Start calculator initialization
// 2 when someone hits clear, reset calculator
function initializeCalculator() {
    //setup initial state of data so user can go through flow
}


// Event handler functions
$('.number').on('click', function(e) {
    // check if we've already ran a calculation

    // check if operation is chosen
    if (isOperatorChosen) {
            // if so, should be writing the second number
        console.log($(this).val())
    } else {
            //otherwise we should be rendering the first number
        console.log($(this).val())
    }

})

$('.equal').on('click', function(e) {
    console.log(this)
})

$('.operator').on('click', function(e) {
    console.log(this)
})

$('.clear').on('click', function(e) {
    console.log(this)
})

// run th app

    initializeCalculator()

});