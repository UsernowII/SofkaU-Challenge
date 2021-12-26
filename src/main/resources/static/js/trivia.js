window.addEventListener('DOMContentLoaded', event => {

  // ON ready

});


let currentQuestion;
let posibleQuestions = [];
let data;
let rounds = 1;
let countRound;
let score = 0;


async function triviaData(){



    const request = await fetch('api/trivia/find/all', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });

    data = await request.json();
    selectQuestionRandom();

}



function selectQuestion(n){
    currentQuestion = data[n]
    document.getElementById("category").innerHTML = currentQuestion.category;
    document.getElementById("score").innerHTML = score;
    document.getElementById("question").innerHTML = currentQuestion.question;

    posibleQuestions = [
        currentQuestion.answer,
        currentQuestion.wrongAnswer1,
        currentQuestion.wrongAnswer2,
        currentQuestion.wrongAnswer3
    ];

    posibleQuestions.sort( ()=> Math.random() - 0.5 );
    document.getElementById("answer1").innerHTML = posibleQuestions[0];
    document.getElementById("answer2").innerHTML = posibleQuestions[1];
    document.getElementById("answer3").innerHTML = posibleQuestions[2];
    document.getElementById("answer4").innerHTML = posibleQuestions[3];

}

function selectQuestionRandom(){
    //selectQuestion(Math.floor((Math.random()* data.length)/n) );
    selectQuestion(Math.floor((Math.random()* data.length) ));
}

function countRounds(){

    switch (rounds) {
        case 1: rounds = 1;
                selectQuestion(Math.floor((Math.random()* (1-5)) ));
                rounds++;
            break;
        case 2: rounds = 2;
                selectQuestion(Math.floor((Math.random()* (6-10)) ));
                rounds++;
            break;
        case 3: rounds = 3;
                selectQuestion(Math.floor((Math.random()* (11-15)) ));
                rounds++;
            break;
        case 4 : rounds = 4;
                selectQuestion(Math.floor((Math.random()* (16-20)) ));
                rounds++;
            break
        case 5 : rounds = 5;
                selectQuestion(Math.floor((Math.random()* (21-25)) ));
                rounds++;
            break

    }
    console.log(rounds)
    return rounds;
}

function btnAction(index){
    console.log(currentQuestion.answer);
    if(posibleQuestions[index] === currentQuestion.answer){
        selectQuestionRandom();
    }else{
        alert("respuesta equivocada")
    }
}



