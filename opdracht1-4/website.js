
document.querySelector('#box1').style.backgroundColor = "#a4bf54";
document.querySelector('#box2').style.backgroundColor = "#FFA500";
document.querySelector('#box3').style.backgroundColor = "#a106a1";
document.querySelector('#box4').style.backgroundColor = "#a7c9ca";
document.querySelector('#box5').style.backgroundColor = "#022271";
document.querySelector('#box6').style.backgroundColor = "#50380b";

window.addEventListener("load", function () {
    console.log("De pagina is geladen!");


document.querySelector('#box1').addEventListener('click', function() {
    document.querySelector('#box2').style.backgroundColor = "#c17373";
});
document.querySelector('#box2').innerHTML = "<h1>bei tekst</h1>";

document.querySelector('#box2').addEventListener('click', function() {
    document.querySelector('#box1').style.backgroundColor = "#2fbf8b";
});
document.querySelector('#box1').innerHTML = "<h1>alo tekst</h1>";


document.querySelector('#box4').addEventListener('click', function() {
    document.querySelector('#box4').style.backgroundColor = "#8a0000";
});
document.querySelector('#box4').innerHTML = "<h1>s</h1>";

    let kleur= {
        "naam": "Green",
        "primairekleur": true,
        "primaireverfkleur": false,
        "primairelichtkleur": true
    }

document.querySelector('#box3').addEventListener('click', function() {
    document.querySelector('#box3').innerHTML =
        "Color: " + (kleur.naam)
        + "<br> PrimaryColor: " + (kleur.primairekleur)
        + "<br> PrimaryPaintColor: " + (kleur.primaireverfkleur)
        + "<br> PrimaryLightColor: " + (kleur.primairelichtkleur);
    box3.style.color = "#c9ff00";
});
});
document.querySelector('#box5').addEventListener('click', async function () {
    let response = await fetch("https://api.thecatapi.com/v1/images/search");
    let data = await response.json();
    document.querySelector('#box6 img').src = data[0].url;
});