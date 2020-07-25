
document.getElementById('output').style.visibility = 'hidden';

const lbsInput = document.getElementById("lbsInput");
const gramsOutput = document.getElementById('gramsOutput');
const kgOutput = document.getElementById('kgOutput');
const ozOutput = document.getElementById('ozOutput');

function roundNumber(num) {
  return Math.round(num * 100) / 100;
}

lbsInput.addEventListener('input', lbsToGKO);

function lbsToGKO(e){
  document.getElementById('output').style.visibility = 'visible';
  let lbs = e.target.value;
  gramsOutput.innerHTML = roundNumber(lbs/0.0022046);
  kgOutput.innerHTML = roundNumber(lbs/2.2046);
  ozOutput.innerHTML = roundNumber(lbs*16);
}

