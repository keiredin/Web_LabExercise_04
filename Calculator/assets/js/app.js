
// calculator

let result;
let numbers = new Array();


function arrayAcceptor(){
    let length = prompt("how many numbers do you want to operate on? ");
    for (let i = 0; i < parseInt(length); i++) {
        numbers[i] = prompt("Enter your number: ");
        
     }

}

 function add(numbers){
    result = 0;
    arrayAcceptor()
    numbers.forEach(function(member) {
        result += Number(member); 
    });
    return result
 }

 function sub(num1,num2){
    result= num1 - num2;
    return result;
 }

 function mult(numbers){
    result = 1;
    arrayAcceptor()
    numbers.forEach(function(member) {
        result *= Number(member); 
    });
    return result
 }

function div(num1,num2){
   if (num2 == 0){
      console.log("undefined: the denominator can't be zero")
   }
   else{
      result= num1 / num2;
      return result;

   }
   
}

function max(numbers){
    arrayAcceptor();
    let max = numbers[0] ;
    numbers.forEach(function(member,index ) {
        if(max < numbers[index]){
            max = numbers[index];
        }
        
    });
    return max
 }

function min(numbers){
    arrayAcceptor();
    let min = numbers[0] ;
    numbers.forEach(function(member,index ) {
        if(min > numbers[index]){
            min = numbers[index];
        }
        
    });
    return min
 }

 function calcAverage(numbers){
    arrayAcceptor();
    let sum = 0 ;
    let totalNumber;
    numbers.forEach(function(member,index ) {
        sum = sum + Number(member);
        totalNumber = index;
        
    });
    result = sum /(totalNumber +1);
    return result;

 }

 function square(base){
     return base ** 2;
 }





(function() {
   let firstNumber;
   let secondNumber;
   let input = prompt("Enter your choice: 1 for addition , 2: for multiplication, 3: for substraction 4: for division, 5: for max , 6: for min,7: average.8: square");
    function processChoice(choice){
        if (choice == "1"){
      
            console.log("the addition of numbers you entered = "+ add(numbers));
      
         }
         else if(choice == "2"){
            
            console.log("the multiplication of numbers you entered = "+ mult(numbers));
      
         }
         else if(choice == "3"){
            firstNumber = parseInt(prompt("Enter the first number"));
            secondNumber = parseInt(prompt("Enter the second number"));
            console.log(firstNumber+" - "+secondNumber+" = "+ sub(firstNumber,secondNumber));
         }
         else if(choice == "4"){
          firstNumber = parseInt(prompt("Enter the first number"));
          secondNumber = parseInt(prompt("Enter the second number"));
          console.log(firstNumber+" / "+secondNumber+" = "+ div(firstNumber,secondNumber));
          }
          else if(choice == "5"){
            console.log(max(numbers)+" is the maximum");
              
           }
           else if(choice == "6"){
            console.log(min(numbers)+" is the minimum");
              
           }
           else if(choice == "7"){
            console.log("The average of numbers you entered = "+calcAverage(numbers));
              
           }
           else if(choice == "8"){
            let base = parseInt(prompt("Enter the base"));
            console.log("The square of "+base+" = "+ square(base));
            }
         else{
             console.log("Envalid input! ");
         }
    }

    processChoice(input)
   

})();