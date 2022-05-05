const rangeInput = document.querySelector('.range-input')
const numInfo = document.querySelector('.num-info')


rangeInput.addEventListener('input', ()=>{

  let value = rangeInput.value
  numInfo.innerText = value

})