function CalculatePayment()
{
    var startingbalance = new Number(document.getElementById("loanamount").value);
    var annualinterest = new Number(document.getElementById("loanrate").value);
    var termofloan = new Number(document.getElementById("loanterm").value);
    
    var convertedrate = (annualinterest/1200);
    var payment;
    
    payment = (((convertedrate+(convertedrate/(Math.pow(1+convertedrate, termofloan)-1))) * startingbalance));
    
    document.getElementById("paymentdisplay").innerHTML = payment;
    
    var periodnumber = 0;
    var newbalance;
    var count = 0;
    var result="<table><tr><th>Period #</th><th>Beginning Loan Amount</th><th>Principal</th><th>Interest</th><th>Ending Loan Amount</th></tr>";
    
    for (count=0; count < termofloan; count++)
    {
        periodnumber = Math.floor(100+1)/100;
        interestpayment = payment-(startingbalance*convertedrate);
        principlepayment = (payment-interestpayment);
        newbalance = startingbalance -= payment; 
        result += "<tr><td>" + (count+1) + "</td><td>" + startingbalance + "</td><td>" + interestpayment + "</td><td>" + principlepayment + "</td><td>" + newbalance + "</td></tr>";
    }
    result += "</table>";
    document.getElementById("tabledisplay").innerHTML = result;
}