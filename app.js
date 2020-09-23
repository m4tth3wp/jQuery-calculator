// flow of app
/**
 * initialize the calcultaotr
 * have a first number
 * choose an operator
 * then a second number
 * wait for operation to finish
 * display the results
 * clear old result to redo
 */



// dont want to run app until jquery loads
$( document ).ready(function() {
    
// Variables in global runtime

//initial state
let firstNumber = ''
let secondNumber = ''
let result = 0   
let operator = ''
let isOperatorChosen = false
let isCalculated = false



// 1 Start calculator initialization
// 2 when someone hits clear, reset calculator
function initializeCalculator() {
    firstNumber = ''
    secondNumber = ''
    result = 0   
    operator = ''
    isOperatorChosen = false
    isCalculated = false

//update the ui
$('#first-number, #second-number, #operator, #result').empty()
    //setup initial state of data so user can go through flow
}


// Event handler functions
$('.number').on('click', function(e) {
    // check if we've already ran a calculation

    // check if operation is chosen
    if (isOperatorChosen) {
            // if so, should be writing the second number
       
       secondNumber += $(this).val()
       $('#second-number').text(secondNumber)
    } else {
            //otherwise we should be rendering the first number
       firstNumber += $(this).val()
       $('#first-number').text(firstNumber)
    }

})

$('.equal').on('click', function(e) {


    /**
     * flow:
     * 1. has the calculation on current number finished?
     * a. if yes, do nothing
     * b. if no, then going to set isCalculated to true
     * 2. convert the numbers from strings to numbers to calculate
     * 3. check what operator the user has chosen 
     * 4. perform the operation on the two numbers adn save to result
     * 5. render the result
     */
    //1a
    if(isCalculated) {
        return false
    }
    //1-b
    isCalculated = true

    //2
    firstNumber = parseInt(firstNumber)
    secondNumber = parseInt(secondNumber)


    //3
    switch(operator) {
        case 'plus':
            result = firstNumber + secondNumber          
            break
        case 'minus':
            result = firstNumber - secondNumber
            break
        case 'times':
            result = firstNumber * secondNumber
            break
        case 'divide':
            result = firstNumber / secondNumber
            break
        case 'power':
            result = firstNumber ** secondNumber
            break
        default:
            operator
            break
    }
    //5
    $('#result').text(result)
})

$('.operator').on('click', function(e) {
    // check if weve already ran a calculation or first number has been chosen
    // we dont want to do anything
    if(!firstNumber || isCalculated) {
        return false
    }
    console.log($(this).val())

    //set isOperatorChosen to true so we can start choosing the second number
    isOperatorChosen = true
    //save value of operator user has clicked on
    operator = $(this).val()
    //render that to the operator result
    $('#operator').text(operator)
})

$('.clear').on('click', function(e) {
    // call initialized calculator, whole point of function  is to setup the initial state
    initializeCalculator()
})

// run th app

    initializeCalculator()

});