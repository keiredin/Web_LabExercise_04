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

