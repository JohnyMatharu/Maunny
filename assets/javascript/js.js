var imgArr = {
st1ce : "src = './assets/images/car-pictures/chevrolet.equinox.png'",
st2c3 : "src = './assets/images/car-pictures/Chrysler-300.jpeg.png'"
};



document.getElementById("submitBtn").addEventListener("click", displayPicture);
document.getElementById("submitBtn").addEventListener("click", stockNumber);
 
// this is to display the picture on click 
function displayPicture(event) 
 {
 document.getElementById("imageDisplay").display.imgArr.st1ce;
 console.log(imgArr.st1ce);
};
 
 
// this is to display the stock# on click 
// function stockNumber(event)
// {
    // document.getElementById("stockDisplay").display.imgArr[0];
    // console.log(imgArr.imgArr[0]);
// };

//test
// this is to display the stock# on click 

function stockNumber(event)
{
    document.getElementById("stockDisplay").innerHTML = "Hello";
    // console.log(imgArr.imgArr[0]);
};
