//your JS code here. If required.
let inputs = document.getElementsByClassName('code');

for(let i = 0; i< inputs.length; i++){
  inputs[i].addEventListener("keyup", (event) => {
    let cellInput = event.key.charCodeAt(0);
    let currElement = event.target;
    if(event.key === "Backspace"){
      
     let previousElement =  currElement.previouElementSibling
     if(previousElement)
     previousElement.focus();
    }
    }
    if(48<=cellInput && cellInput<=57) {
      //"0" ascii 48
       let nextElement = currElement.nextElementSibling;
        if(nextElement)
       nextElement.focus();
      }
    else{
      event.target.value = "";
    }
  })
}



/*
inputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
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

function getOTPValue() {
  let otp = '';
  inputs.forEach(input => {
      otp += input.value;
  });
  return otp;
}*/