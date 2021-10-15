
//var displayArr = JSON.parse(localStorage.getItem("carArray")) || [];
//console.log(displayArr);

var negativeModalEl = document.getElementById("modalNegCheck");
var inputModalEl = document.getElementById("modalInputCheck");
var priceModalEl = document.getElementById("modalInputCheck");
var personalInfo = {};

var loadPersonalInfo = function(){
    personalInfo = JSON.parse(localStorage.getItem("personalInfo"));

    if (!personalInfo){
        personalInfo = {
            stockNumber : "123",
            yourName : null,
            yourEmail : null
        };
    }
    displayPersonalInfo(personalInfo);
}

var savePersonalInfo = function(){
    localStorage.setItem("personalInfo", JSON.stringify(personalInfo)); 
}

var displayPersonalInfo = function(personalInfo){
    
    $("#stockNumber").val(personalInfo.stockNumber);
    $("#yourName").val(personalInfo.yourName);
    $("#yourPhoneEmail").val(personalInfo.yourEmail);
}


    
            
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
      
       // function dropdownHistory(event){
         //   event.preventDefault();
       // let selectArr = [];
      // selectArr.push(car);
       // console.log(selectArr[]);
        //localStorage.setItem("carArr",JSON.stringify(car));
        //localStorage.setItem("cityArray",JSON.stringify(entryArr));
        
        //var displayLine = JSON.parse(localStorage.getItem("carArr")) || [];
        
       //document.getElementById("searchHistory").innerHTML = displayLine.textContent;
        //console.log(displayline);
        //let newLine = document.createElement('button');
        
         
        
        //newLine.textContent = displayLine;
        //console.log(newLine.textContent);
        //list.appendChild(newLine);
        //console.log(newLine.textContent);
        //newLine.addEventListener("click", (ev) => historyWeather(ev.target.textContent));
        

      };
      
    
    //test
    // this is to display the stock# on click 
    /////this is division line for payment calculator
    var displayPayment =function(price, string){
        var totalPrice = (price+600)*1.13;
        $("#paymentValue").html("$"+totalPrice.toFixed(2));
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
        //connect the function for local storage
    
    });
    $("#interest").on("click","#submitBtn", function(event){
        event.preventDefault();
        var stockNumber = $("#stockNumber").val();
        var yourName = $("#yourName").val();
        var yourPhoneEmail = $("#yourPhoneEmail").val();
        if (stockNumber.isNaN){inputModalEl.style.display = "block"; return;
        } else {
            personalInfo.yourName = yourName;
            personalInfo.stockNumber = stockNumber;
            personalInfo.yourEmail = yourPhoneEmail;
            savePersonalInfo();
            //tip 1: bring a modal here and say we have recieved your request, some one will get back to you in 60 minutes, we have your information and it could be seen next time you use it
        }
    });
    $("#payment").on("click","#submitBtn", function(event){
        event.preventDefault();
        var vPrice = $("#v-price").val();
        var vDown = $("#v-down").val();
        var vInterest = $("#v-interest").val();
        var vInterval = $("#v-interval").val();
        var vLength = $("#v-length").val();
        calculatePayment(vPrice, vDown, vInterest, vInterval, vLength);   
        //tip 2: fix the function display div for payment calculation for size and margins etc. this is last part to be fixed 
    });
    
    $(".close").click( 
        function(event){
            negativeModalEl.style.display = "none";
            priceModalEl.style.display = "none";
            inputModalEl.style.display = "none";
        }
    );
    function carNewsLine(){
        //dc1ef32d8de8fa36fec90c9ca831cc98
            var carNews ="https://gnews.io/api/v4/search?token=2c96754f90b2d1e8c9d15be43513a089&q=cars";
             console.log(carNews);
              fetch(carNews).then(response => response.json()) 
                .then(data => {
                console.log(data);
                
                document.getElementById("headLine1").innerHTML = data.articles[0].title;
                document.getElementById("headLine2").innerHTML = data.articles[1].title;
                document.getElementById("headLine3").innerHTML = data.articles[2].title;
                document.getElementById("headLine4").innerHTML = data.articles[3].title;
                document.getElementById("headLine5").innerHTML = data.articles[4].title;
                document.getElementById("headLine6").innerHTML = data.articles[5].title;
                document.getElementById("headLine7").innerHTML = data.articles[6].title;
                document.getElementById("headLine8").innerHTML = data.articles[7].title;
                document.getElementById("headLine9").innerHTML = data.articles[8].title;
        
                 //document.getElementById("temperature").innerHTML = "Temperature: " + data.main.temp;
                // document.getElementById("humidity").innerHTML = "Humidity: " + data.main.humidity;
                // document.getElementById("windSpeed").innerHTML = "Wind Speed: " + data.wind.speed;
                
               }); 
            };
        
    carNewsLine();
    loadPersonalInfo();
    
    
    