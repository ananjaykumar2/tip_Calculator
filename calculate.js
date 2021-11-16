
function calculate(){
    let amount = document.getElementById("bill").value;
    let service = document.getElementById("service").value;
    let people = document.getElementById("people").value;

    if(amount==="" || service===0){
        alert("Enter value");
        return;
    }
    if (isNaN(amount)) {
        alert("Amount Aceept Only Numeric Data");
       }
    if(people===""|| people<=0){
    people = 1;
    document.getElementById("each").style.display = "none";
    }
    else{
        document.getElementById("each").style.display = "block";
    }

    let total = (amount*service)/people;
    total = Math.round(total*100)/100;
    total = total.toFixed(2);// fixed two digits after decimal
    console.log(total);
    document.getElementById("totaltip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    
}

