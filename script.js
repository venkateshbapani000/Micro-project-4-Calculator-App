let buttons=document.getElementsByTagName('button');
let result=document.getElementById('screen1');

for(i=0;i<buttons.length;i++){
    buttons[i].onclick = function(){
        let input = this.innerText;
        updateDisplay(input)
        
    }
}
function updateDisplay(input){
    let currentDisplay = result.innerText
      if(currentDisplay=="0"){
        if(input!="RESET"&&input!="DEL" && input!="="){
            result.innerText=""
            result.innerText=input
        }
      }
 
    else{
       
        if(input=="DEL"){
            result.innerText = currentDisplay.substring(0,currentDisplay.length-1)
             if(result.innerText==""){
               result.innerText="0"
             }
        }
        if(input=="RESET"){
            result.innerText="0"
        }
        if(input!="RESET"&&input!="DEL"&&input!="="){
            result.innerText+=input
            x = x+6
            x+=7
        }

        if(input=="="){          
            let display = result.innerText
            result.innerText= eval(display)
        }
    }

}

   