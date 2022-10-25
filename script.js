function openContract(evt, contractName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(contractName).style.display = "block";
  evt.currentTarget.className += " active";
}
const input = document.getElementById('buy-sell');
const log = document.getElementById('notaryFeeBS');
const log1 = document.getElementById('pensionFeeBS');
const log2 = document.getElementById('militaryFeeBS');
const log3 = document.getElementById('receiveFeeBS');
const log4 = document.getElementById('sumBS');
const log5 = document.getElementById('notaryServicesBS');
input.addEventListener('input', updateValue);

function updateValue(e) {
  const value = Number(e.target.value) >0? Number(e.target.value): "";
  log.textContent = (value*0.01).toFixed(2);
  log1.textContent = (value*0.01).toFixed(2);
  log2.textContent = (value*0.015).toFixed(2);
  log3.textContent = (value*0.05).toFixed(2);
  log4.textContent = Number(log.textContent)+Number(log1.textContent)+Number(log2.textContent)+Number(log3.textContent);
  log5.textContent = (value >0 ?5000:"");
}

// const input1 = document.getElementById('deedOfGift');
// const log6 = document.getElementById('notaryFeeGift');
// const log7 = document.getElementById('pensionFeeGift');
// const log8 = document.getElementById('militaryFeeGift');
// const log9 = document.getElementById('receiveFeeGift');
// const log10 = document.getElementById('sumGift');
// const log11 = document.getElementById('notaryServicesGift');
// input.addEventListener('input1', updateValue);

// function updateValue(e) {
// const value = Number(e.target.value) >0? Number(e.target.value): "";
// log6.textContent = (value*0.01).toFixed(2);
// log7.textContent = (value*0.01).toFixed(2);
// log8.textContent = (value*0.015).toFixed(2);
// log9.textContent = (value*0.05).toFixed(2);
// log10.textContent = Number(log6.textContent)+Number(log7.textContent)+Number(log8.textContent)+Number(log9.textContent);
// log11.textContent = (value >0 ?5000:"");
// }

// const input2 = document.getElementById('buy-sell');
// const log12 = document.getElementById('notaryFee');
// const log13 = document.getElementById('notaryServices');
// input.addEventListener('input2', updateValue);

// function updateValue(e) {
// const value = Number(e.target.value) >0? Number(e.target.value): "";
// log12.textContent = (value*0.01).toFixed(2);
// log13.textContent = (value >0 ?5000:"");
// }

// const input3 = document.getElementById('buy-sell');
// const log14 = document.getElementById('notaryFee');
// const log15 = document.getElementById('notaryServices');

// input.addEventListener('input3', updateValue);

// function updateValue(e) {
// const value = Number(e.target.value) >0? Number(e.target.value): "";
// log14.textContent = (value*0.01).toFixed(2);
// log15.textContent = (value >0 ?5000:"");
// }

