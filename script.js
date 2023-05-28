//your JS code here. If required.
//your JS code here. If required.
let inputs = document.getElementsByClassName("code");

inputs.forEach((input, index)=>{
  input.addEventListener('input', (ele)=>{
    const value = ele.target.value;
    if (value !== '') {
      if (index < inputs.length - 1) {
          inputs[index + 1].focus();
      }
  } else {
      if (index > 0) {
          inputs[index - 1].focus();
      }
  }
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'Backspace' && index > 0 && input.value === '') {
      inputs[index - 1].focus();
  }
});
});