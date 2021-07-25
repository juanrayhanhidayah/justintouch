let superheroes = [
    {
        name: "Iron Man",
        Age: 34,
        planet: "Earth",
        height: "5.10"
    },
    {
        name: "Captain America",
        Age: 101,
        planet: "Earth",
        height: "6",
    },
    {
        name: "Spider-man",
        Age: 23,
        planet: "Earth",
        height: "5.1",
    },
];

function display(superarray) {
    let tabledata = "";

    superarray.forEach(function (superhero, index) {
        let currentrow = `<tr>
        <td>${index + 1} </td>
        <td>${superhero.name}</td>
        <td>${superhero.Age}</td>
        <td>${superhero.planet}</td>
        <td>${superhero.height}</td>
        <td><button onclick='deleteSuperhero(${index})'>Delete</button></td>
        </tr>`;
        tabledata += currentrow;
    });

    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
    //document.getElementById("tdata").innerHTML = tabledata;
}

display(superheroes);

function addSuperhero(event) {
    event.preventDefault();


    let superhero = {};
    let name = document.getElementById("Name").value;
    let age = document.getElementById("Age").value;
    let planet = document.getElementById("Planet").value;
    let height = document.getElementById("Height").value;
    superhero.name = name;
    superhero.Age = Number(age);
    superhero.planet = planet;
    superhero.height = height;

    superheroes.push(superhero);

    display(superheroes);

    document.getElementById("Name").value = "";
    document.getElementById("Age").value = "";
    document.getElementById("Planet").value = "";
    document.getElementById("Height").value = "";
}

function searchByName() {
    let searchValue = document.getElemen
    tById("searchName").value;

    let newdata = superheroes.filter(function (superhero) {
        return superhero.name.toUpperCase().toLowerCase().indexOf(searchValue.toUpperCase().toLowerCase()) != -1;
    });
    display(newdata);
}

function deleteSuperhero(index) {
    superheroes.splice(index, 1);

    display(superheroes);
}