const characters = [
    {
    name: "Spike",
    show: "Cowboy Bebop",
    },
{
     name: "L",
     show: "Death Note"
},
{
    name: "Goku",
    show: "Dragonball Z"

},
{
    name: "Gon",
    show: "Hunter X Hunter"
}

]


for (let person of characters) {
    console.log(`${person.name} is in ${person.show}`);
    

}