
var negativeModalEl = document.getElementById("modalNegCheck");
var inputModalEl = document.getElementById("modalInputCheck");
var priceModalEl = document.getElementById("modalInputCheck");


    
            
    $(document).ready(function(){
        $('select').formSelect();
      });
    
    function displayPicture(car) 
    {
        // event.preventDefault();
         document.getElementById("carDisplay").src = "./assets/images/car-pictures/"+car+".jpeg";
         
         switch (car) {
           
            case 'acura-mdx':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNoam";

            break;
            
            case 'acura-rdx':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNoar";

            break;

            case 'acura-tlx':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNoat";

            break;

            case 'acura-tlx':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNoat";

            break;
        
            case 'bmw-3series':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNob3";

            break;

            case 'bmw-5series':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNob5";

            break;

            case 'bmw-x5':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNobx";

            break;
            
            case 'chevrolet-camaro:':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNocc";

            break;
           
            case 'chevrolet-corvette:':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNocco";

            break;
         
            case 'chevrolet-suburban:':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNocs";

            break;

            case 'ford-mustang':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNofm";

            break;
           
            case 'ford-f150':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNoff1";

            break;

            case 'gmc-sierra':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNogs";

            break;
        
            case 'gmc-terrain':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNogt";

            break;
           
            case 'gmc-acadia':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNoga";

            break;
        
            case 'hyundai-santafe':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNohs";

            break;
        
            case 'jeep-wrangler':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNojw";

            break;
           

            case 'lincoln-mark':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNolm";

            break;
           

            case 'mazda-3':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNom3";

            break;

            case 'mercedes-cclass:':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNomc";

            break;
           
            case 'mercedes-eclass':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNome";

            break;
        

            case 'mercedes-glc':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNomglc";

            break;
          
            case 'mercedes-gle':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNomg";

            break;
       
            case 'porsche-carrera911':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNopc9";

            break;
       
            case 'porsche-cayenne':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNopc";

            break;
         
            case 'porsche-panamera':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNopp";

            break;
            
            case 'subaru-legacy':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNosl";

            break;
       
            case 'subaru-wrx':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNosw";

            break;
            
            case 'volkswagen-atlas':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNova";

            break;
           
            case 'volkswagen-golf':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNovg";

            break;
          
            case 'volkswagen-tiguan':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNovt";

            break;
         
            case 'volkswagen-jetta':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNovj";

            break;
           
            case 'dodge-challenger':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNodc";

            break;
        

            case 'dodge-charger':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNodchar";

            break;
       
            case 'chrysler-300':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNoc3";

            break;
        
        // Anything below this is old and alphabetical order
        
           
            case 'chevrolet-equinox':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNoce";

            break;

            case 'chrysler-voyager':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNocv";

            break;
      

            case 'dodge-ram':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNodr";

            break;
          
            case 'ford-explorer':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNofe";

            break;
     
            
            case 'chevrolet-silverado':
            
            document.getElementById("stockDisplay").innerHTML = "Stock Number: stNocs";

        break;
     
            case 'honda-accord':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNoha";

            break;
            
                
            
            case 'honda-civic':
            
            document.getElementById("stockDisplay").innerHTML = "Stock Number: stNohc";

        break;
         
            case 'honda-crv':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNohcr";

            break;
           
            case 'kia-stringer':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNoks";

            break;
         
            case 'lexus-gx':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNolg";

            break;
           
            case 'lexus-is300':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNoli";

            break;
            
            case 'lexus-rx':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNolr";

            break;
          
            case 'mazda-6':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNom6";

            break;
         
            case 'mitsubishi-eclipse':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNome";

            break;
       
            case 'mitsubishi-mirage':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNomm";

            break;
      
            case 'mitsubishi-outlander':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNomo";

            break;
           
            case 'nissan-altima':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNona";

            break;
        
            case 'nissan-kicks':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNonk";

            break;
          

            case 'nissan-rogue':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNonr";

            break;
          
            case 'nissan-titan':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNont";

            break;
          
            case 'nissan-versa':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNonv";

            break;
            
            case 'toyota-camry':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNotca";

            break;
           
            case 'toyota-corolla':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNotc";

            break;
         
            case 'toyota-fortuner':
            
                document.getElementById("stockDisplay").innerHTML = "Stock Number: stNotf";

            break;
            

        };
      
      
     // this is to display the stock# on click 
     //function stockNumber()
     //{

      //document.getElementById("stockDisplay").innerHTML = "Stock Number:" + " " + imgArr.volkswagenjetta.stockNo;
       
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
    
    
    