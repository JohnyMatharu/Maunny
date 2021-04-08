var imgArr = {
chrysler300:{ picture : "./assets/images/car-pictures/Chrysler-300.jpeg",
stockNo: "stNoc3"},
chevroletequinox:{ picture : "./assets/images/car-pictures/chevrolet.equinox.png",
stockNo: "stNoce"},
chryslervoyager: { picture : "./assets/images/car-pictures/chrysler-voyager.png",
stockNo: "stNocv"},
dodgeram: { picture : "./assets/images/car-pictures/dodge-ram.png",
stockNo: "stNodr"},
fordexplorer: { picture : "./assets/images/car-pictures/ford-explorer.jpeg",
stockNo: "stNofe"},
fordsilverado: { picture : "./assets/images/car-pictures/ford-silverado.png",
stockNo: "stNofs"},
gmsierra: { picture : "./assets/images/car-pictures/gm-sierra.png",
stockNo: "stNogs"},
hondaaccord: { picture : "./assets/images/car-pictures/honda-accord.png",
stockNo: "stNoha"},
hondacivic: { picture : "./assets/images/car-pictures/honda-civic.png",
stockNo: "stNohc"},
hondacrv: { picture : "./assets/images/car-pictures/honda-crv.jpeg",
stockNo: "stNohcr"},
kiastringer: { picture : "./assets/images/car-pictures/kia-stringer.png",
stockNo: "stNoks"},
lexusgx: { picture : "./assets/images/car-pictures/lexus-gx.jpeg",
stockNo: "stNolg"},
lexusis300: { picture : "./assets/images/car-pictures/lexus-is300.png",
stockNo: "stNoli"},
lexusrx: { picture : "./assets/images/car-pictures/lexus-rx.png",
stockNo: "stNolr"},
// { picture : "./assets/images/car-pictures/mazda-3
// ",
//stockNo: "stNo"}
mazda6: { picture : "./assets/images/car-pictures/mazda-6.jpeg",
stockNo: "stNom6"},
mazdacx5: { picture : "./assets/images/car-pictures/mazda-cx5.webp",
stockNo: "stNomc"},
mitsubishieclipse: { picture : "./assets/images/car-pictures/mitsubishi-eclipse.jpeg",
stockNo: "stNome"},
mitsubishimirage: { picture : "./assets/images/car-pictures/mitsubishi-mirage.png",
stockNo: "stNomm"},
mitsubishioutlander: { picture : "./assets/images/car-pictures/mitsubishi-outlander.jpeg",
stockNo: "stNomo"},
nissanaltima: { picture : "./assets/images/car-pictures/nissan-altima.jpeg",
stockNo: "stNona"},
nissankicks: { picture : "./assets/images/car-pictures/nissan-kicks.jpeg",
stockNo: "stNonk"},
nissanrogue: { picture : "./assets/images/car-pictures/nissan-rogue.png",
stockNo: "stNonr"},
nissantitans: { picture : "./assets/images/car-pictures/nissan-titans.png",
stockNo: "stNont"},
nissanversa: { picture : "./assets/images/car-pictures/nissan-versa.png",
stockNo: "stNonv"},
toyotacamry: { picture : "./assets/images/car-pictures/toyota-camry.png",
stockNo: "stNotca"},
toyotacorolla: { picture : "./assets/images/car-pictures/toyota-corolla.jpeg",
stockNo: "stNotc"},
toyotafortuner: { picture : "./assets/images/car-pictures/toyota-corolla.jpeg",
stockNo: "stNotf"}

};



document.getElementById("submitBtn").addEventListener("click", displayPicture);
document.getElementById("submitBtn").addEventListener("click", stockNumber);
 
// this is to display the picture on click 
function displayPicture(event) {
    event.preventDefault();
//document.getElementById("carDisplay").src = imgArr.dodgeram.picture;
$("#carDisplay").attr("src", imgArr.toyotafortuner.picture);

};
 
 
// this is to display the stock# on click 
function stockNumber(event)
{
    event.preventDefault();
 document.getElementById("stockDisplay").innerHTML = "Stock Number:" + " " + imgArr.dodgeram.stockNo;
  
 };

//test
// this is to display the stock# on click 
/////this is division line for payment calculator
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
            if(tempPrice>0){
                if (interval ==1){
                    intervalString = " per month";
                } else if (interval ==2){
                    intervalString = " bi-monthly";
                } else if (interval ==4){
                    intervalString = " per week";};
                    //divide by 48
                tempInterest = interest/(length*interval);
                numOfPayments = interval*length;
            } else{$("#modalNegCheck").modal("show"); return; }
           
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


