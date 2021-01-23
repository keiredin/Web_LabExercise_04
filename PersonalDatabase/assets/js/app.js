// Declaring Object

let person = {
    firstName: "",
    lastName: "",
    birthYear: "",
    job: "",
    age: 0,
    isEligibleToVote: false,
    familyMembers: [],
    weight: "",
    height: "",

    ageCalc: function() { 
        return this.age = new Date().getFullYear() - this.birthYear; 
    },

    checkVote: function() {
        let tempAge = this.ageCalc();
        if (tempAge >= 18) { this.isEligibleToVote = true; } else { this.isEligibleToVote = false; }
    },

    calcBmi: function() {

        let bmi = this.weight / (this.height * this.height);


        bmi = Number(bmi.toFixed(2));

        console.log("Your Bmi is : " + bmi);
        if (bmi < 18.5)
            console.log("Your are : Underweight");
        else if (bmi >= 18.5 && bmi <= 24.9)
            console.log("Your are : Normal");
        else if (bmi >= 25.0 && bmi <= 29.9)
            console.log("Your are : Overweight");
        else if (bmi >= 30.0)
            console.log("Your are : Obese");


    }

};


// Receive the values from input and assign to object properties
person.firstName = prompt("Enter Your First Name");
person.lastName = prompt("Enter Your Last Name");
person.job = prompt("What is Your Profession ?");
person.birthYear = prompt("Enter Your Birth Date");
person.weight = prompt("Your Weight in Kg  ? ");
person.height = prompt("Your Height in M  ? ");
let numberOfFamily = prompt("Number of Family  ? ");

//Receiving the family number 
for (let i = 0; i < parseInt(numberOfFamily); i++) {
    person.familyMembers[i] = prompt("Your Family  Members " + (i + 1));
}

// call age and check vote fun
person.ageCalc();
person.checkVote();


// Adding Self Invoking Function Expression 
(function() {


    console.log("**************************************************************")
    console.log("Here is your Profile ")
    console.log("Full Name: " + person.firstName + " " + person.lastName);
    console.log("Profession : " + person.job);
    console.log("Age : " + person.age + " " + "years old");
    console.log("Is Eligible to Vote : " + person.isEligibleToVote);

    console.log("Family Members ");

    //Displaying the family member with foreach
    person.familyMembers.forEach(function(member, index) {
        console.log("Family Member  " + (index + 1) + " : " + member);
    });

    // call bmi calculator 
    person.calcBmi();

    console.log("**************************************************************")

})();