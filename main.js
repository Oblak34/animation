var leftOffset = $("#heading").offset().left;
var topOffset = $("#heading").offset().top;
var count = 0;
var numberClick = 0;

var clickHeading = function(){
    clearInterval(intervalId)
    var currentId = setInterval(headingFlow, 15);
    numberClick++;
    $("#heading").text("Привет мир! +" + numberClick);
    
    if(numberClick == 10){
        count = 810;
        $("#heading").text("Вы победили!!!");
    }
};

var headingFlow = function(){
    if(count < 200){
        $("#heading").offset({left: leftOffset})
        leftOffset++;
        count++;
    }else if(count >= 200 && count < 400){
        $("#heading").offset({top: topOffset});
        topOffset++;
        count++;
    }else if(count >= 400 && count < 600){
        $("#heading").offset({left: leftOffset})
        leftOffset--;
        count++;
    }else if(count >= 600 && count < 800){
        $("#heading").offset({top: topOffset});
        topOffset--;
        count++;
    }else if(count == 800){
        count = 0;
    }
}

var intervalId = setInterval(headingFlow, 30);
$("#heading").click(clickHeading);






