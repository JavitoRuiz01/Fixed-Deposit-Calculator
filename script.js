function calculateMaturityAmount(){
    //Get Input values from the form elements
    const principle = parseFloat(document.getElementById('principle').value)
    const interest = parseFloat(document.getElementById('interestRate').value)
    const tenure = parseFloat(document.getElementById('tenure').value)

    //Perform calculations
    const maturityAmount= principle+(principle*interest*tenure)/100

    //display result
    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`
}

//Attatch the event listener to the cslculate button
document.getElementById('calculateBtn').addEventListener('click', calculateMaturityAmount)