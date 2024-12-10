var userNameInput = document.getElementById("username");
var invoiceUsername = document.getElementById("invUsername");
var meterPrev = document.getElementById("meterPrev");
var meterPresent = document.getElementById("meterPresent");
var trashBillCheckbox = document.getElementById("trashBill"); 
var pricePerUnit = document.getElementById("pricePerUnit");
var uid = document.getElementById("uid");

function calculateInvoice() {
    var username = userNameInput.value;
    var oldMeter = parseFloat(meterPrev.value);
    var newMeter = parseFloat(meterPresent.value);
    var isCheck = trashBillCheckbox.checked;
    var value = newMeter - oldMeter;
    var total;


    invoiceUsername.textContent = username;
    document.getElementById("invUID").textContent = uid.value;
    document.getElementById("invMeterPrev").textContent = oldMeter;
    document.getElementById("invMeterPresent").textContent = newMeter;

    var trashBill = 0;
    if (isCheck) {
        trashBill = parseFloat(pricePerUnit.value);
        document.getElementById("invTrashBill").textContent = trashBill;
    } else {
        document.getElementById("invTrashBill").textContent = "0";
    }

    var unitPrice = pricing(value);
    document.getElementById("invPricePerUnit").textContent = unitPrice;

    total = unitPrice * value + trashBill;
    document.getElementById("invTotal").textContent = total.toFixed(2);
}

function pricing(kwh) {

    if(kwh>200){
        return 2500;
    }
    else if (kwh >= 200) {
        return 2000;
    } else if (kwh >= 150) {
        return 1500;
    } else if (kwh >= 100) {
        return 1000;
    } else{
        return 500;
    }
}
