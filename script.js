const billInput = document.getElementById('billtotal')
const peopleInput = document.getElementById('numpeople')
const totalOutput = document.getElementById('totalOutput')
const button0 = document.getElementById('5')
const button1 = document.getElementById('10')
const button2 = document.getElementById('15')
const button3 = document.getElementById('20')
const button4 = document.getElementById('25')
const customButton = document.getElementById('custom')


function buttonToggle (buttonId) {
    // set current button as 'active', reset all other buttons to 'inactive'
    let bttns = document.querySelectorAll('input[type="button"]')
    
    for (let i = 0; i < bttns.length; i++) {
        bttns[i].className = ('inactive')
    }
    
    buttonId.classList.add('active')
    buttonId.classList.remove('inactive')

}

function billSplit () {

// pull the tip percentage value from button id or custom value field
    let currentButton = document.querySelector('.active')

    console.log(currentButton)
    // console.log(currentButton.id)

    if (currentButton == customButton) {
        percent = customButton.valueAsNumber / 100
    } else {
        percent = currentButton.id / 100
    }

// calculate total with tip, split tip amounts and total bill
    let totalPlusTip = billInput.valueAsNumber * (1 + percent)
    let tipSplit = (billInput.valueAsNumber * percent) / peopleInput.valueAsNumber
    let totalSplit = totalPlusTip / peopleInput.valueAsNumber

// round results to nearest hundrdth 
    let tipRounded = () => {
        return Math.round(tipSplit * 100) / 100
    }

    let totalRounded = () => {
        return Math.round(totalSplit * 100) / 100
    }

// set text content for output fields as rounded values
    
    if (isNaN(tipRounded()) || isNaN(totalRounded())) {
        tipOutput.textContent = '$0'
        totalOutput.textContent = '$0'
    } else {
        tipOutput.textContent = `$${tipRounded()}`
    totalOutput.textContent = `$${totalRounded()}`
    }
}

function reset () {
// reset all form elements to default values
    let bttns = document.querySelectorAll('input[type="button"]')
    
    for (let i = 0; i < bttns.length; i++) {
        bttns[i].className = ('inactive')
    }

    billInput.value = 0
    peopleInput.value = 0
    totalOutput.value = 0
    customButton.value = 0
    tipOutput.textContent = '$0'
    totalOutput.textContent = '$0'
}