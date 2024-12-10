function calculateInvoice() {
    // Collect user information using popups
    var username = prompt("Enter your username:");
    var uid = prompt("Enter your User ID:");
    
    // Retrieve previous and present meter readings
    var oldMeter = parseFloat(prompt("Enter previous meter reading:"));
    var newMeter = parseFloat(prompt("Enter current meter reading:"));
    if (isNaN(oldMeter) || isNaN(newMeter) || newMeter < oldMeter) {
        alert("Invalid meter readings provided.");
        return;
    }
    
    // Ask if the trash bill is to be included
    var isTrashBill = confirm("Do you want to include a trash bill?");
    var trashBill = 0;
    if (isTrashBill) {
        trashBill = parseFloat(prompt("Enter the trash bill amount:"));
        if (isNaN(trashBill)) {
            alert("Invalid trash bill amount.");
            return;
        }
    }

    // Calculate units used and cost per unit
    var value = newMeter - oldMeter;
    var unitPrice = pricing(value);
    var total = unitPrice * value + trashBill;

    // Show the calculated invoice details in an alert
    alert(`
        Invoice:
        Username: ${username}
        User ID: ${uid}
        Previous Meter Reading: ${oldMeter}
        Current Meter Reading: ${newMeter}
        Units Consumed: ${value}
        Price per Unit: ${unitPrice}
        Trash Bill: ${trashBill}
        Total: ${total.toFixed(2)}
    `);
}

// Pricing logic remains the same
function pricing(kwh) {
    if (kwh > 200) {
        return 2500;
    } else if (kwh >= 200) {
        return 2000;
    } else if (kwh >= 150) {
        return 1500;
    } else if (kwh >= 100) {
        return 1000;
    } else {
        return 500;
    }
}

// Trigger the invoice calculation
calculateInvoice();
