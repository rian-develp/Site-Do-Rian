// https://api-ninjas.com/api/quotes
const initialUrl = "https://api.chucknorris.io/jokes/random";
const options =
{
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    method: "GET",
};
function getQuote() {
    fetch(initialUrl, options)
    .then((resposta) => resposta.json())
    .then(data => {
        const publicacao = document.getElementById('publicacao');
        publicacao.innerHTML = data.value;
    }).catch(e => console.log(e));
}