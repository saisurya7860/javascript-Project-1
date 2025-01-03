let score = JSON.parse(localStorage.getItem('score'))
            || 
    {
        wins : 0,
        losses : 0,
        ties : 0
    };

    // if(!score){
    //     score = {
    //         wins : 0,
    //         losses : 0,
    //         ties : 0 
    //     };
    // };

    /* score on score js paragraph*/
    updateScoreElement();

    // variable to store autoplaying

    let isAutoplaying = false;
    let intervalId ;

    function autoplay(){
        if(!isAutoplaying){
            intervalId = setInterval(() => { // arrow function 
                const playerMove = PickcomputerMove();
                playGame(playerMove); 
            },1000);
            isAutoplaying = true;
        }
        else{
            clearInterval(intervalId);
            isAutoplaying = false;
        }
        
    }

    // add event listener for rock move
    document.querySelector('.js-rock-button').
    addEventListener('click', () => {
        playGame('Rock');
    });

    document.querySelector('.js-paper-button').
    addEventListener('click', () => {
        playGame('Paper');
    });

    document.querySelector('.js-scissors-button').
    addEventListener('click', () => {
        playGame('Scissors');
    });

    document.body.addEventListener('keydown', (event) => {
        if(event.key === 'r'){
            playGame('Rock');
        }
        else if(event.key === 'p'){
            playGame('Paper');
        }
        else if(event.key === 's'){
            playGame('Scissors');
        }
    });

    // add event listener for reset and autoplay    
    document.querySelector('.js-reset-button').
    addEventListener('click' , () => {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score');
        updateScoreElement();
    });

    document.querySelector('.js-autoplay-button').
    addEventListener('click', () => {
        autoplay();
    });

    function playGame(playerMove){
        const computerMove = PickcomputerMove();
        let result ='';

        if(playerMove === 'Rock'){
            if(computerMove === 'Rock'){
            result ='Tie';
            }
            else if(computerMove === 'Paper'){
                result ='You Lose';
            }
            else if(computerMove === 'Scissors'){
                result = 'You Win';
            }
        }

        else if(playerMove === 'Paper'){
            if(computerMove === 'Rock'){
                result ='You Win'
            }
            else if(computerMove === 'Paper'){
                result ='Tie';
            }
            else if(computerMove === 'Scissors'){
                result = 'You Lose';
            }
        }
        
        else if(playerMove === 'Scissors'){
            if(computerMove === 'Rock'){
                result ='You Lose';
            }
            else if(computerMove === 'Paper'){
                result ='You Win';
            }
            else if(computerMove === 'Scissors'){
                result = 'Tie';
            }
        }

        if(result === 'You Win'){
            score.wins += 1;
        }
        else if(result === 'You Lose'){
            score.losses += 1;
        }
        else if(result === 'Tie'){
            score.ties += 1;
        }

        localStorage.setItem('score',JSON.stringify(score));

        updateScoreElement();

        document.querySelector('.result-js').innerHTML = `${result}.`;

        document.querySelector('.move-js').innerHTML = `You <img src="images/${playerMove}.png"  class = "move-img" alt=""> <img src="images/${computerMove}.png"  class = "move-img" alt=""> Computer`;

        // alert(`Computer picked ${computerMove} . You picked ${playerMove} . Result is ${result}
        // Wins : ${score.wins} ,Losses : ${score.losses} ,Ties : ${score.ties}`);
    }

    function updateScoreElement(){
        document.querySelector('.score-js').innerHTML = `Wins : ${score.wins} ,Losses : ${score.losses} ,Ties : ${score.ties}`;
    }


    function PickcomputerMove(){
        const randomNumber = Math.random();
        let computerMove = '';
        
        if(randomNumber<1/3 && randomNumber>0){
            computerMove = 'Rock';
        }
        else if(randomNumber<2/3 && randomNumber>1/3){
            computerMove = 'Paper';
        }
        else if(randomNumber>2/3 && randomNumber<1){
            computerMove = 'Scissors';
        }
        return computerMove;
    }