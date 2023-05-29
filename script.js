 let inputElements = document.getElementsByClassName("code") ;

        for(let i = 0 ; i < inputElements.length ;i++){
            inputElements[i].addEventListener("keyup", (event) => {
                let currentElement = event.target ;
                if(event.key === "Backspace") {
                    // extract the previous element and then focus on it 
                    let prevElement =  currentElement.previousElementSibling; 
                    if(prevElement){
                        prevElement.focus();
                    }
                    return ;
                }

                let code = event.key.charCodeAt(0) ;
                if(48 <= code && code <= 57){
                        let nextElement = currentElement.nextElementSibling
                        if(nextElement) {
                            nextElement.focus(); 
                        }
                }
                else {
                    console.log(event.target.value)
                    event.target.value = "" ;
                }
            })
        }