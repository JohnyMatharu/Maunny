
var negativeModalEl = document.getElementById("modalNegCheck");
var inputModalEl = document.getElementById("modalInputCheck");
var priceModalEl = document.getElementById("modalInputCheck");

var imgArr = {

    // new list in alphabetical order

    acuramdx:{ picture : "./assets/images/car-pictures/acura-mdx.jpeg",
    stockNo: "stNoam"},
    acurardx:{ picture : "./assets/images/car-pictures/acura-rdx.jpeg",
    stockNo: "stNoar"},
    acuratlx:{ picture : "./assets/images/car-pictures/acura-tlx.jpeg",
    stockNo: "stNoat"},
    bmw3series:{ picture : "./assets/images/car-pictures/bmw-3series.jpeg.jpeg",
    stockNo: "stNob3"},
    bmw5series:{ picture : "./assets/images/car-pictures/bmw-5series.jpeg",
    stockNo: "stNob5"},
    bmwx5:{ picture : "./assets/images/car-pictures/bmw-x5.jpeg",
    stockNo: "stNobx"},
    chevroletcamaro:{ picture : "./assets/images/car-pictures/chevrolet-camaro.jpeg",
    stockNo: "stNocc"}, 
    chevroletcorvette:{ picture : "./assets/images/car-pictures/chevrolet-corvette.jpeg",
    stockNo: "stNocc"},
    chevroletsuburban:{ picture : "./assets/images/car-pictures/chevrolet-suburban.jpeg",
    stockNo: "stNocs"},
    fordmustang:{ picture : "./assets/images/car-pictures/ford-mustang.jpeg",
    stockNo: "stNofm"},
    fordf150:{ picture : "./assets/images/car-pictures/ford-f150.jpeg",
    stockNo: "stNoff1"},

    
    gmcsierra:{ picture : "./assets/images/car-pictures/gmc-sierra.jpeg",
    stockNo: "stNogs"},
    gmcterrain:{ picture : "./assets/images/car-pictures/gmc-terrain.jpeg",
    stockNo: "stNogt"},
    gmcacadia:{ picture : "./assets/images/car-pictures/gmc-acadia.jpeg",
    stockNo: "stNoga"},



    hyundaisantafe:{ picture : "./assets/images/car-pictures/hyundai-santafe.jpeg",
    stockNo: "stNohs"},
    jeepwrangler:{ picture : "./assets/images/car-pictures/jeep-wrangler.jpeg",
    stockNo: "stNojw"},
    lincolnmark:{ picture : "./assets/images/car-pictures/lincoln-mark.jpeg",
    stockNo: "stNolm"},
    mazda3:{ picture : "./assets/images/car-pictures/mazda-3.jpeg",
    stockNo: "stNom3"},
    mercedescclass:{ picture : "./assets/images/car-pictures/mercedes-cclass.jpeg",
    stockNo: "stNomc"},
    mercedeseclass:{ picture : "./assets/images/car-pictures/mercedes-eclass.png",
    stockNo: "stNome"},
    mercedesglc:{ picture : "./assets/images/car-pictures/mercedes-glc.jpeg",
    stockNo: "stNomglc"},
    mercedesgle:{ picture : "./assets/images/car-pictures/mercedes-gle.jpeg",
    stockNo: "stNomg"},
    porschecarrera911:{ picture : "./assets/images/car-pictures/porsche-carrera911.jpeg",
    stockNo: "stNopc9"},
    porschecayenne:{ picture : "./assets/images/car-pictures/porsche-cayenne.jpeg",
    stockNo: "stNopc"},
    porschepanamera:{ picture : "./assets/images/car-pictures/porsche-panamera.jpeg",
    stockNo: "stNopp"},
    subarulegacy:{ picture : "./assets/images/car-pictures/subaru-legacy.jpeg",
    stockNo: "stNosl"},
    subaruwrx:{ picture : "./assets/images/car-pictures/subaru-wrx.jpeg",
    stockNo: "stNosw"},
    volkswagenatlas:{ picture : "./assets/images/car-pictures/volkswagen-atlas.jpeg",
    stockNo: "stNova"},
    volkswagengolf:{ picture : "./assets/images/car-pictures/volkswagen-golf.jpeg",
    stockNo: "stNovg"},
    volkswagentiguan:{ picture : "./assets/images/car-pictures/volkswagen-tiguan.jpeg",
    stockNo: "stNovt"},
    volkswagenjetta:{ picture : "./assets/images/car-pictures/volkswagen-jetta.jpeg",
    stockNo: "stNovj"},



    dodgechallenger: { picture : "./assets/images/car-pictures/dodge-challenger.jpeg",
    stockNo: "stNodc"},
    dodgecharger: { picture : "./assets/images/car-pictures/dodge-charger.jpeg",
    stockNo: "stNodchar"},


// Anything below this is old and alphabetical order

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
    mazda6: { picture : "./assets/images/car-pictures/mazda-6.jpeg",
    stockNo: "stNom6"},
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
    toyotafortuner: { picture : "./assets/images/car-pictures/toyota-fortuner.jpeg",
    stockNo: "stNotf"}
    
    };
        
    $(document).ready(function(){
        $('select').formSelect();
      });
    
    function displayPicture(car) 
    {
        // event.preventDefault();
         document.getElementById("carDisplay").src = "./assets/images/car-pictures/"+car+".jpeg";
    };
      
      
     // this is to display the stock# on click 
     function stockNumber()
     {

      document.getElementById("stockDisplay").innerHTML = "Stock Number:" + " " + imgArr.volkswagenjetta.stockNo;
       
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
                } else{negativeModalEl.style.display = "block"; return; }
               
            } else {priceModalEl.style.display = "block"; return;}
        } else {inputModalEl.style.display = "block"; return;}
        
        tempPrice = (tempInterest*Math.pow(1+tempInterest, numOfPayments)/((Math.pow(1+tempInterest, numOfPayments))-1))*tempPrice;
        displayPayment(tempPrice.toFixed(2), intervalString);
    }
    $("#search").on("click",".btn", function(event){
        event.preventDefault();
        var carYear = $("#year").val();
        var carMake = $("#make").val();
        var carMileage = $("#mileage").val();
        displayPicture(carMake);
    
    });
    $("#interest").on("click",".btn", function(event){
        event.preventDefault();
        var stockNumber = $("#stockNumber").val();
        var yourName = $("#yourName").val();
        var yourPhoneEmail = $("#yourPhoneEmail").val();
        if (stockNumber.isNaN){inputModalEl.style.display = "block"; return;}
    });
    $("#payment").on("click",".btn", function(event){
        event.preventDefault();
        var vPrice = $("#v-price").val();
        var vDown = $("#v-down").val();
        var vInterest = $("#v-interest").val();
        var vInterval = $("#v-interval").val();
        var vLength = $("#v-length").val();
        calculatePayment(vPrice, vDown, vInterest, vInterval, vLength);   
    });
    
    $(".close").click( 
        function(event){
            negativeModalEl.style.display = "none";
            priceModalEl.style.display = "none";
            inputModalEl.style.display = "none";
        }
    );
    
    
    