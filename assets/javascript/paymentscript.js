var displayPayment =function(price, string){
    $("#paymentValue").html(" $"+price+" "+string);
    //var priceDivEl = $("<div>").addClass("priceDiv d-flex justify-content-center");
   // $(priceDivEl).append(priceTextEl);
   // $("#my-form").append(priceDivEl);
}

var calculatePayment = function(price, down, interest, interval, length){
    var tempPrice = price-down;
    var numOfPayments;
    var tempInterest;
    var intervalString;
    if (!isNaN(price)&&!isNaN(down)&&!isNaN(interest)){
        if (interval ==1){
            //divide by 48
            tempInterest = interest/48;
            intervalString = "per week";
        } else if (interval ==2){
            tempInterest = interest/24;
            intervalString = "per 2 weeks";
        } else if (interval ==3){
            //divide by 12
            tempInterest = interest/12;
            intervalString = "per month";};
            
        if (length ==1){
            numOfPayments = 36;
        } else if (length ==2){
            numOfPayments = 48;
        } else if (length ==3){
            numOfPayments = 60;};
    }
    else {alert("Inputs MUST be numerical"); return;}
        
    tempPrice =(tempPrice*((tempInterest*(1+tempInterest)*numOfPayments))/(((1+tempInterest)*numOfPayments)-1)).toFixed(2);
    console.log(tempPrice);
    displayPayment(tempPrice, intervalString);
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

