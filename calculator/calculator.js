const input_box = document.getElementById("input_box")
var expression = ""
function input_fun1(number){
     
     
    expression += number
    input_box.innerHTML = expression
}
function input_fun(number) {

    if(expression == "" ){
    //  expression = expression.slice(1,0)
        expression += number
        input_box.innerHTML = expression
    }
    else{
     expression += number
     input_box.innerHTML = expression
    }
}

function input_fun2(number) 
{
 
    if(number == "+" || number == "*" || number== "/" || number== "-" || number == ".")
    {
         if(expression[expression.length-1]== "+" || expression[expression.length-1]== "*" || expression[expression.length-1]== "/" ||expression[expression.length-1]== "-" || expression[expression.length-1]== "." )
        {
           
            //    expression = expression.slice(0,1)
                expression += number
            
                input_box.textContent = expression
              }
              else
              {
                expression += number
                input_box.textContent = expression
              }
            }    
}


function all_clear() {
    expression = ""
    input_box.textContent = expression
   
}

function back_space() {
    expression = expression.slice(0,-1)
    input_box.textContent = expression
   
}

function evaluate_ex() {
    try{
      input_box.textContent = eval(input_box.textContent)
      expression = input_box.textContent
      
    }
    catch{
        input_box.textContent ="Math Error" 
       
    } 
}

function squr(){
    input_box.textContent = input_box.textContent * input_box.textContent
    expression = input_box.textContent
   
}

function cube(){
    input_box.textContent = input_box.textContent * input_box.textContent * input_box.textContent 
    expression = input_box.textContent
   
}
 