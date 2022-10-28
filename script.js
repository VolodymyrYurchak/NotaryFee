const checkbox = document.getElementById('checkboxBS')
const input = document.getElementById('buy-sell')
const log = document.getElementById('notaryFeeBS')
const log1 = document.getElementById('pensionFeeBS')
const log2 = document.getElementById('militaryFeeBS')
const log3 = document.getElementById('receiveFeeBS')
const log4 = document.getElementById('sumBS')
const log5 = document.getElementById('notaryServicesBS')

input.addEventListener('input', updateValue)

function updateValue(e) {
	const value = Number(e.target.value) > 0 ? Number(e.target.value) : ''
	log.textContent = (value * 0.01).toFixed(2)
	log1.textContent = (value * 0.01).toFixed(2)
	log2.textContent = (value * 0.015).toFixed(2)
	log3.textContent = (value * 0.05).toFixed(2)
	if (checkbox.checked) {
		log4.textContent =
			Number(log.textContent) + 
      Number(log1.textContent) + 
      Number(log2.textContent) + 
      Number(log3.textContent)
	} 
  else {
		log4.textContent = 
    Number(log.textContent) + 
    Number(log1.textContent)
	}
	log5.textContent = value >= 0 ? 5000 : ''
}

const checkbox1 = document.getElementById('checkboxGift')
const input1 = document.getElementById('deedOfGift')
const log6 = document.getElementById('notaryFeeGift')
const log7 = document.getElementById('pensionFeeGift')
const log8 = document.getElementById('militaryFeeGift')
const log9 = document.getElementById('receiveFeeGift')
const log10 = document.getElementById('sumGift')
const log11 = document.getElementById('notaryServicesGift')

input1.addEventListener('input', updateValue1)

function updateValue1(e) {
	const value = Number(e.target.value) > 0 ? Number(e.target.value) : ''
	log6.textContent = (value * 0.01).toFixed(2)
	log7.textContent = (value * 0.01).toFixed(2)
	log8.textContent = (value * 0.015).toFixed(2)
	log9.textContent = (value * 0.05).toFixed(2)
	if (checkbox1.checked) {
		log10.textContent =
			Number(log6.textContent) +
			Number(log7.textContent) +
			Number(log8.textContent) +
			Number(log9.textContent)
	} else {
		log10.textContent = 
    Number(log6.textContent) + 
    Number(log7.textContent)
	}
	log11.textContent = value > 0 ? 5000 : ''
}

const input2 = document.getElementById('previousContract')
const log12 = document.getElementById('notaryFeeContract')
const log13 = document.getElementById('notaryServicesContract')

input2.addEventListener('input', updateValue2)

function updateValue2(e) {
	const value = Number(e.target.value) > 0 ? Number(e.target.value) : ''
	log12.textContent = (value * 0.01).toFixed(2)
	log13.textContent = value > 0 ? 5000 : ''
}

const input3 = document.getElementById('mortage')
const log14 = document.getElementById('notaryFeeMortage')
const log15 = document.getElementById('notaryServicesMortage')

input3.addEventListener('input', updateValue3)

function updateValue3(e) {
	const value = Number(e.target.value) > 0 ? Number(e.target.value) : ''
	log14.textContent = (value * 0.01).toFixed(2)
	log15.textContent = value > 0 ? 5000 : ''
}

checkbox.addEventListener('change', function (event) {
	console.log('checkbox')
	if (checkbox.checked) {
    log4.textContent = Number(log.textContent) + Number(log1.textContent) + Number(log2.textContent) + Number(log3.textContent)
		log2.style.display = 'block'
		log3.style.display = 'block'
		milTitleBS.style.display = 'block'
		feeTitleBS.style.display = 'block'
	} else {
    log4.textContent = Number(log.textContent) + Number(log1.textContent)
		log2.style.display = 'none'
		log3.style.display = 'none'
		milTitleBS.style.display = 'none'
		feeTitleBS.style.display = 'none'
	}
})

checkbox1.addEventListener('change', function (event) {
	console.log('checkbox1')
	if (checkbox1.checked) {
    log10.textContent =
    Number(log6.textContent) +
    Number(log7.textContent) +
    Number(log8.textContent) +
    Number(log9.textContent)
		log8.style.display = 'block'
		log9.style.display = 'block'
		milTitleGift.style.display = 'block'
		feeTitleGift.style.display = 'block'
	} else {
    log10.textContent = 
    Number(log6.textContent) + 
    Number(log7.textContent)
		log8.style.display = 'none'
		log9.style.display = 'none'
		milTitleGift.style.display = 'none'
		feeTitleGift.style.display = 'none'
	}
})

function openContract(evt, contractName) {
	// Declare all variables
	let i, tabcontent, tablinks

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName('tabcontent')
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = 'none'
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName('tablinks')
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(' active', '')
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(contractName).style.display = 'block'
	evt.currentTarget.className += ' active'
}