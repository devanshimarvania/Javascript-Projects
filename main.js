alert("Smart Life Assistant............... \n 1. Fitness Suggestion System \n 2. Monthly Budget Planner \n 3. Mobile Data usage Alert System \n 4. Change Password Logic");

let choice = parseInt(prompt("Enter your Choice :"));

if (choice == 1) {
    let age = parseInt(prompt("Enter your Age :"));
    let weight = parseFloat(prompt("Enter your Weight :"));

    let minWeight = 0, maxWeight = 0;

    if (age >= 18 && age <= 24) { minWeight = 63; maxWeight = 77; }
    else if (age >= 25 && age <= 34) { minWeight = 63; maxWeight = 78; }
    else if (age >= 35 && age <= 44) { minWeight = 64; maxWeight = 79; }
    else if (age >= 45 && age <= 54) { minWeight = 65; maxWeight = 80; }
    else if (age >= 55 && age <= 64) { minWeight = 65; maxWeight = 81; }
    else if (age >= 65) { minWeight = 64; maxWeight = 79; }
    else {
        alert("Age group not supported.");
        minWeight = maxWeight = null;
    }
    if (minWeight !== null) {
        if (weight < minWeight) {
            alert(`Your Age : ${age} \nYour Weight : ${weight} \nYou are Underweight! You need to gain at least ${minWeight - weight} kg.`);
        }
        else if (weight > maxWeight) {
            alert(`Your Age : ${age} \nYour Weight : ${weight} \nYou are Overweight! You need to lose at least ${weight - maxWeight} kg.`);
        }
        else {
            alert(`Your Age : ${age} \nYour Weight : ${weight} \nYou are Fit!`);
        }
    }
}
else if (choice == 2) {
    let monthlyIncome = parseFloat(prompt("Enter your Monthly Income :"));
    if (monthlyIncome < 10000) {
        alert("Spend cautiously and Save more !!!");
    }
    else if (monthlyIncome >= 10000 && monthlyIncome < 30000) {
        alert("Balance Budget !!!");
    }
    else {
        alert("You can consider Invensting !!!");
    }
}
else if (choice == 3) {
    let useData = parseFloat(prompt("Enter your Total data used in a Month (in GB) :"));
    if (useData < 5) {
        alert("Low Usage !!!");
    }
    else if (useData >= 5 && useData < 15) {
        alert("Normal Usage !!!");
    }
    else {
        alert("Heavy Usage, consider a bigger plan !!!");
    }
}
else if (choice == 4) {
    let setPassword = "Devanshi@2101";
    let oldPassword = prompt("Enter Old Password..");
    let newPassword = prompt("Enter New Password..");
    let confirmPassword = prompt("Enter Confirm Password..");

    if (setPassword === oldPassword) {
        if (setPassword != newPassword) {
            if (newPassword === confirmPassword) {
                setPassword = newPassword;
                alert("Your Password is change Successfully");
            }
            else {
                alert("Confirm Password should be same as New Password");
            }
        }
        else {
            alert("Old Password is as same as New Password");
        }
    }
    else {
        alert("Old Password is Wrong");
    }
}
else {
    alert("Invalid choice");
}