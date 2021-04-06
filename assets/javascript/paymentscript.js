var displayPayment =function(price, string){
    $("#paymentValue").html("Your payment is: $"+price+string);
    //var priceDivEl = $("<div>").addClass("priceDiv d-flex justify-content-center");
   // $(priceDivEl).append(priceTextEl);
   // $("#my-form").append(priceDivEl);
}

var calculatePayment = function(price, down, interest, interval, length){
    var tempPrice = price-down;
    var numOfPayments;
    var tempInterest;
    var intervalString;
    var frequency
    if (!isNaN(price)&&!isNaN(down)&&!isNaN(interest)){
        console.log(interval);
         if (interval ==1){
            intervalString = " per month";
        } else if (interval ==2){
            intervalString = " bi-monthly";
        } else if (interval ==4){
            intervalString = " per week";};
            //divide by 48
        console.log(intervalString);
        tempInterest = interest/(length*interval);
        //    intervalString = " per week";
        
        //    tempInterest = interest/24;
        //    intervalString = " per 2 weeks";
        //} else if (interval ==4){
            //divide by 12
        //    tempInterest = interest/12;
        //    intervalString = " per month";};
            
        //if (length ==36){
        //    numOfPayments = length*4;
        //} else if (length ==48){
        //    numOfPayments = length*2;
        //} else if (length ==60){
        //    numOfPayments = length;};
        numOfPayments = interval*length;
    } else {alert("Inputs MUST be numerical"); return;}
    console.log(tempInterest);
    
    tempPrice = (tempInterest*Math.pow(1+tempInterest, numOfPayments)/((Math.pow(1+tempInterest, numOfPayments))-1))*tempPrice;
    displayPayment(tempPrice.toFixed(2), intervalString);
}
$("#my-form").on("click",".btn", function(event){
    event.preventDefault();
    var vPrice = $("#v-price").val();
    var vDown = $("#v-down").val();
    var vInterest = $("#v-interest").val();
    var vInterval = $("#v-interval").val();
    var vLength = $("#v-length").val();
    calculatePayment(vPrice, vDown, vInterest, vInterval, vLength);
});

