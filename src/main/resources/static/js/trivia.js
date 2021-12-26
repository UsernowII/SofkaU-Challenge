window.addEventListener('DOMContentLoaded', event => {

  // ON ready

});


let currentQuestion;
let posibleQuestions = [];
let data;
let rounds =1;
let countRound = 1;
let reward = 0;
let score = 0 ;

let user = {};


async function triviaData(){

    await findUser(1);

    const request = await fetch('api/trivia/find/all', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });

    data = await request.json();
    console.log(user);
    selectQuestionRandom();


}



function selectQuestion(n){
    currentQuestion = data[n]
    document.getElementById("category").innerHTML = currentQuestion.category;
    document.getElementById("score").innerHTML = reward;
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
    if(countRound === 1){
        switch (rounds) {
            case 1: rounds = 1;
                selectQuestion(Math.floor(Math.random() *5));
                console.log(currentQuestion.answer);
                rounds++;
                reward += 10;
                break;
            case 2: rounds = 2;
                selectQuestion(Math.floor((Math.random()* (10-5) +5)));
                console.log(currentQuestion.answer);
                rounds++;
                reward += 10;
                break;
            case 3: rounds = 3;
                selectQuestion(Math.floor((Math.random()* (15-10) +10)));
                console.log(currentQuestion.answer);
                rounds++;
                reward += 10;
                break;
            case 4 : rounds = 4;
                selectQuestion(Math.floor((Math.random()* (20-15) +15)));
                console.log(currentQuestion.answer);
                rounds++;
                reward += 10;
                break
            case 5 : rounds = 5;
                selectQuestion(Math.floor((Math.random()* (25-20) +20)));
                console.log(currentQuestion.answer);
                reward += 10;
                console.log(reward);
                rounds++;
                break
            case 6: rounds = 6;
                document.getElementById("score").innerHTML = reward;
                alert("Felicitaciones! ..Juego completado","success")
                rounds++
                reward = 50;
                break;
            default:
                location.reload();

        }

    }

    console.log(countRound);
    console.log(reward)
    return reward;

}


function btnAction(index){
    if(posibleQuestions[index] === currentQuestion.answer){
        selectQuestionRandom();
    }else{
        alert("Lo siento! ..repuesta incorrecta","danger")
        setTimeout( () =>{
            location.reload()
        } , 1000);

    }
}

function alert(message, type) {
    var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    var wrapper = document.createElement('div')

    wrapper.innerHTML = '<div class="alert alert-' + type + ' form-control '+' role="alert">'
        + message + '</div>'
    /*wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">'
        + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
        '</div>'*/
    alertPlaceholder.append(wrapper)

}

async function exitModal() {
    console.log(countRound);
    console.log(reward)
    //uploadScoreUser().then(r => location.reload() );
    await uploadScoreUser();

}

async function findUser(n){

    const request = await fetch('api/score/find/'+n, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });

    user = await request.json();

}

async function uploadScoreUser(){

    user.totalScore = user.totalScore + (reward -10);

    const request = await fetch('api/score/add', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    });




}
