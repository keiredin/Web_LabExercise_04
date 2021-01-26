let balance = 3000
let receiverBalance;
let recieverAccountNumber;



function myBalance(){
    console.log("your account balance is "+balance+"birr")

}


function deposit(amount){
    balance += Number(amount);
    console.log("your account has been deposited with "+amount+"birr and your current balance = "+balance)
    

}

function transfer(amount, yourAccountNumber){
    if (Number(balance) < Number(amount)){
        console.log("sorry! your account balance is insufficient");
    }
    else{
        balance -= Number(amount);
        console.log("you have succesfully transfered "+amount+"birr to "+recieverAccountNumber+" and your balance now = "+balance);
        recieverBalance = Number(receiverBalance) + Number(amount);
    }



}

function withdraw(amount){
    let max = 1000;
    let min = 50;
    if (balance < amount){
        console.log("your account balance is insufficient to withdraw from it");
    }else if(amount > max){
        console.log("sorry! The maximum amount you can withdraw at once is "+max+"birr");
    }else if(amount < min){
        console.log("Sorry! The minimum amount you can withdraw is "+min+"birr and above.")
    }
    else {
        console.log("you have succesfully withdrawed "+amount+"birr from your account")
        balance -= Number(amount);

    }

}

(function(){
    
    let choice = prompt("Enter your choice: 1  Withdraw , 2: Deposit, 3: Balance , 4: Transfer");
    if (choice == "1"){
        amount = prompt("Enter the amount you want to withdraw");
      
        withdraw(amount);
  
     }
     else if(choice == "2"){
        amount = prompt("Enter the amount you want to deposit");
         deposit(amount);

     }
     else if(choice == "3"){
         myBalance();
     }
     else if(choice == "4"){
        amount = prompt("Enter the amount you want to transfer");
        recieverAccountNumber = prompt("Enter the receivers account number")
         transfer(amount,recieverAccountNumber);
     }
     else{
         console.log("Envalid input!")
     }

})();

