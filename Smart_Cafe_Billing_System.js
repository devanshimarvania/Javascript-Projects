let choice, subChoice, count = 0, price = 0, priceTag;
var highestPrice = 0, lowestPrice = 120;
do {
    console.log(`==== Welcome to the Cafe ====
    1.Place a Order
    2.View Bill
    3.Apply discount
    4.Change cafe password
    5.View Cafe Report
    0.Exit`);
    choice = parseInt(prompt("Enter Your Choice :"));
    if (choice == 1) {
        do {
            console.log(`==== Welcome to the Cafe Menu ====
            1.Coffee (₹50)
            2.Tea (₹30)
            3.Sandwich (₹80)
            4.Pastry (₹100)
            0.Exit`);
            subChoice = parseInt(prompt("Enter Your Choice :"));
            if (subChoice == 1) {
                console.log("Yay! ☕ Your coffee is on the way... successfully ordered!");
                price += 50;
                count++;
                priceTag = 50;
            }
            else if (subChoice == 2) {
                console.log("Woohoo! 🎉 Your hot cup of tea is brewing already!");
                price += 30;
                count++;
                priceTag = 30;
            }
            else if (subChoice == 3) {
                console.log("👨‍🍳 Great choice! Your sandwich is being crafted with love.");
                price += 80;
                count++;
                priceTag = 80;
            }
            else if (subChoice == 4) {
                console.log("🍰 A delightful pastry experience awaits you. Order confirmed!");
                price += 100;
                count++;
                priceTag = 100;
            }
            else if (subChoice == 0) {
                console.log("Exit......");
            }
            else {
                console.log("Invalid Choice");
            }
            if (priceTag > highestPrice) {
                highestPrice = priceTag;
            }
            if (priceTag < lowestPrice) {
                lowestPrice = priceTag;
            }
        } while (subChoice != 0)
    }
    else if (choice == 2) {
        let gst = price * 0.05;
        let total = price + gst;
        console.log(`\n===== 🧾 Your Bill =====
        ☕ Subtotal: ₹${price.toFixed(2)}
        💰 GST (5%): ₹${gst.toFixed(2)}
        ✅ Grand Total: ₹${total.toFixed(2)}`);

        document.write(`<h2>===== 🧾 Your Bill =====</h2>
        ☕ Subtotal: ₹${price.toFixed(2)} <br>
        💰 GST (5%): ₹${gst.toFixed(2)} <br>
        ✅ Grand Total: ₹${total.toFixed(2)} <br><hr>`);
    }
    else if (choice == 3) {
        let discount = 0;
        if (price > 1000) {
            discount = price * 0.2;
            console.log("Discount Alert! 🚀 You got 20% off on your café order.");
            document.write("<br>Discount Alert! 🚀 You got 20% off on your café order.");
        }
        else if (price > 500) {
            discount = price * 0.1;
            console.log("Discount Alert! 🚀 You got 10% off on your café order.");
            document.write("<br>Discount Alert! 🚀 You got 10% off on your café order.");
        }
        else {
            console.log("No discount applied. Better luck next time!");
            document.write("<br>No discount applied. Better luck next time!");
        }
        let finalBill = price - discount;
        console.log(`\n===== 💸 Discount Summary =====
        🧾 Original: ₹${price.toFixed(2)}
        🏷️ Discount: ₹${discount.toFixed(2)}
        ✅ Final Bill: ₹${finalBill.toFixed(2)}`);

        document.write(`<h2>===== 💸 Discount Summary =====</h2>
        🧾 Original: ₹${price.toFixed(2)}<br>
        🏷️ Discount: ₹${discount.toFixed(2)}<br>
        ✅ Final Bill: ₹${finalBill.toFixed(2)}<br><hr>`);
    }
    else if (choice == 4) {
        var setPassword = "1234";
        var oldPassword = prompt("Enter Old Password..");
        let newPassword = prompt("Enter New Password..");
        let confirmPassword = prompt("Enter Confirm Password..");

        if (setPassword === oldPassword) {
            if (setPassword != newPassword) {
                if (newPassword === confirmPassword) {
                    setPassword = newPassword;
                    console.log("🔐 You have successfully changed your password.");
                }
                else {
                    console.log("⚠️ Confirm password does not match new password.");
                }
            }
            else {
                console.log("⚠️ New password cannot be the same as the old one.");
            }
        }
        else {
            console.log("⚠️ Authentication failed: Old password is invalid.");
        }
    }
    else if (choice == 5) {
        if (count === 0) {
            console.log("\n===== Café Report =====");
            console.log("⚠️ No items sold yet. Please place an order first!");
            document.write("<h2>===== Café Report =====</h2>");
            document.write("⚠️ No items sold yet. Please place an order first!<br><hr>");
        } else {
            let avg = price / count;
            console.log(`\n===== Café Report =====
            🛒 Total Items Sold: ${count}
            💰 Highest Price Item: ₹${highestPrice}
            🏷️ Lowest Price Item: ₹${lowestPrice}
            📊 Average Item Price: ₹${avg.toFixed(2)}`);

            document.write(`<h2>===== Café Report =====</h2>
            🛒 Total Items Sold: ${count}<br>
            💰 Highest Price Item: ₹${highestPrice}<br>
            🏷️ Lowest Price Item: ₹${lowestPrice}<br>
            📊 Average Item Price: ₹${avg.toFixed(2)}<br><hr>`);
        }
    }
    else if (choice == 0) {
        console.log("Exit......");
    }
    else {
        console.log("Invalid Choice");
    }
} while (choice != 0);