var displayPayment =function(price, string){
    var totalPrice = (price+600)*1.13;
    $("#paymentValue").html("Your payment is: $"+totalPrice.toFixed(2)+string);
    $("#feeTaxes").html(" incl. taxes and $600 administration, licensing, and fuel cost");
    //taxes + 600 admin, fuel, licensing fee
}

var calculatePayment = function(price, down, interest, interval, length){
    var tempPrice = price-down;
    var numOfPayments;
    var tempInterest;
    var intervalString;
    //jQuery.noConflict();
    if (!isNaN(price)&&!isNaN(down)&&!isNaN(interest)){
        if(price>=8000){
            if (interval ==1){
                intervalString = " per month";
            } else if (interval ==2){
                intervalString = " bi-monthly";
            } else if (interval ==4){
                intervalString = " per week";};
                //divide by 48
            console.log(intervalString);
            tempInterest = interest/(length*interval);
            numOfPayments = interval*length;
        } else {$("#modalPriceCheck").modal("show"); return;}
    } else {$("#modalInputCheck").modal("show"); return;}
    
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

$(".modalCloseBtn").click( 
    function(event){
        $(".modal").modal("hide");
    }
);
