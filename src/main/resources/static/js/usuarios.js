window.addEventListener('DOMContentLoaded', event => {

    loadStats();

});


async function loadStats(){

    const request = await fetch('api/score/all', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });

    const players = await request.json();

    let listHtml = "";

    for (let p of players) {

        let playerHtml = '<tr class="table-warning"><th scope="row">'+ p.id
            +'</th> <td>' + p.user + '</td> <td>' + p.totalScore + '</td> <td>Trivia</td></tr>';

        listHtml+= playerHtml;
    }

    document.querySelector('#usuarios tbody').outerHTML = listHtml;
}