$(document).ready(function() {

    var goalNum = getRandomNum();
    var sum = 0;
    var win = 0;
    var loss = 0;

    function getRandomNumSmall(){
        return Math.floor(Math.random() * 10);
    }
    function getRandomNum(){
        return Math.floor(Math.random() * 100);
    }
    
    $('#random-number').html('<h2>' + goalNum + '</h2>')
    $('#win').html('<h2>'+ "Wins: " + win + '</h2>')
    $('#loss').html('<h2>'+ "Losses: " + loss + '</h2>')
    
        $(".crystal-image").on("click", function(){
            var randomsSmall = getRandomNumSmall();
            sum = sum + randomsSmall;
            $('#score').html('<h2>' + sum + '</h2>')
            if(sum === goalNum){
                win++;
                alert('You Win!')
                $('#loss').html('<h2>'+ "Wins: " + win + '</h2>')
            }
            else if (sum > goalNum) {
                loss++;
                alert('You loose')
                $('#loss').html('<h2>'+ "Losses: " + loss + '</h2>')
            }
        })
    
});