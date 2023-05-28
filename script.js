//your JS code here. If required.
let inputs = document.querySelectorAll('.code');

inputs.forEach((input, index)=>{
  input.addEventListener('input', (e)=>{
    const value = e.target.value;
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