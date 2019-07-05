$(document).ready(function() {

    var goalNum = getRandomNum();
    var randomsSmall = 0;
    var sum = 0;

    function getRandomNumSmall(){
        return Math.floor(Math.random() * 10);
    }
    function getRandomNum(){
        return Math.floor(Math.random() * 100);
    }

    document.getElementById("random-number").innerHTML = goalNum;
    
    $(".crystal-image").on("click", function(){
        alert("you clicked")
        randomsSmall = getRandomNumSmall();
        return randomsSmall;
    })
    
    document.getElementById("score").innerHTML = sum;
    
    return sum = sum + randomsSmall;
});