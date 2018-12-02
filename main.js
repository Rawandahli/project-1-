$(document).ready(function () {
    console.log('jQ connected');
    var playerOne = 'x';
    var playerTwo = 'o';

    var turnPlayer = true ; 

    var square = $('.square');
    game(); // calling the function


    function game(){

        $('.square').on('click', function(){
            if (turnPlayer && $(this).html() == ''){
                $(this).html(playerOne);
                turnPlayer = false;
                win();

            } else if ( !turnPlayer && $(this).html() == '' ){
                $(this).html(playerTwo);
                turnPlayer = true;
                win();
            }
        });
        
        
    }

    function win(){

        if ( $(square[0]).html() == $(square[1]).html() && $(square[1]).html() == $(square[2]).html() && $(square[0]).html() !== ''
                ||  $(square[3]).html() == $(square[4]).html() && $(square[4]).html() == $(square[5]).html() && $(square[3]).html() !== ''
                ||  $(square[6]).html() == $(square[7]).html() && $(square[7]).html() == $(square[8]).html() && $(square[6]).html() !== ''){

                     winner($(square[0]).html());

            } else if ( $(square[0]).html() == $(square[3]).html() && $(square[3]).html() == $(square[6]).html() && $(square[0]).html() !== ''
                        ||  $(square[1]).html() == $(square[4]).html() && $(square[4]).html() == $(square[7]).html() && $(square[1]).html() !== ''
                        ||  $(square[2]).html() == $(square[5]).html() && $(square[5]).html() == $(square[8]).html() && $(square[2]).html() !== ''){

                                 winner($(square[0]).html());

            } else if ( $(square[0]).html() == $(square[4]).html() && $(square[4]).html() == $(square[8]).html() && $(square[0]).html() !== ''
                        ||  $(square[2]).html() == $(square[4]).html() && $(square[4]).html() == $(square[6]).html() && $(square[2]).html() !== ''){

                                winner($(square[0]).html());
                                
            } else if ( $(square[0]).html() && $(square[1]).html() && $(square[2]).html() && $(square[3]).html() && $(square[4]).html() && $(square[5]).html() && $(square[6]).html() && $(square[7]).html() && $(square[8]).html()){
                alert('play again');
            }
    }

    function winner(player){
        if ( player == 'x'){
            alert('player one is the winnwer!!')
        } else {
            alert('player two is the winnwer!!')
        }
    }
            
//import.java.util.scanner;

});