window.addEventListener('DOMContentLoaded', event => {

  // ON ready

});


async function registerAnswer(){

    const request = await fetch('api/score/all', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });

    const players = await request.json();

    let listHtml = "";




}