document.querySelector('#Searchform').addEventListener('submit', async function () {
    event.preventDefault();

    const name = document.querySelector('.Searchbarvalues').value.toLowerCase();


    let variable = await fetch("database.php", {
        method: "POST",
            headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "name=" + encodeURIComponent(name)
    })

    let data2 = await variable.json();
    console.log(data2);

    let types = [];
    if (data2.types) {
        let fixedtypes = data2.types.replace(/,/g, ", ");
        types = fixedtypes.split(", ");
    }

    const typeColors = {
        electric: "#FFD700",
        fire: "#FF4500",
        water: "#1E90FF",
        grass: "#32CD32",
        poison: "#A040A0",
        flying: "#87CEEB",
        normal: "#A8A878",
        ground: "#E0C068",
        rock: "#B8A038",
        psychic: "#F85888",
        ice: "#98D8D8",
        bug: "#A8B820",
        dragon: "#7038F8",
        dark: "#705848",
        steel: "#B8B8D0",
        fairy: "#EE99AC",
        ghost: "#705898",
        fighting: "#C03028"
    };

    let typelabels = types.map(t => {
        let key = t.toLowerCase();
        let color = typeColors[key] || "white";
        return `<span style="color: ${color}; font-weight: bold;">${t}</span>`;
    }).join(" ");


    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    let data = await response.json();

    let imgUrl = data['sprites']['front_default'];


    document.querySelector('.Mainwindow').innerHTML =
        `---${data2.id}---<br>` +
        `<img src="${imgUrl}" alt="${name}" class="Pokemonimage"><br>` +
        `${data2.pokemon_name}<br>` +
        `${data2.species}<br>` +
        `${typelabels}<br>` +
        `Height: ${data2.height}<br>` +
        `Weight: ${data2.weight}<br>` +
        `Generation ${data2.generation}`;
});