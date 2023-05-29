//your JS code here. If required.

let inputs = document.getElementsByClassName("code");

for(let i = 0; i< inputs.length; i++){
	
  inputs[i].addEventListener("keyup", (event) => {
   
    let currElement = event.target;
	  
    if(event.key === "Backspace"){ 
     let previousElement =  currElement.previouElementSibling;
     if(previousElement) {previousElement.focus();}
    }
	  return;
    }

	 let cellInput = event.key.charCodeAt(0);						 
    if(48<=cellInput && cellInput<=57) {
      //"0" ascii 48
       let nextElement = currElement.nextElementSibling;
        if(nextElement) {nextElement.focus();}
      }
    else{
      event.target.value = "";
    }
  })
}


