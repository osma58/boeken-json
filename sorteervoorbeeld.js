lijst = ["Osman", "Kevin", "Gijs"];
//lijst

//sorteren 
lijst = lijst.sort((a,b) => a.length - b.length>0 ? 1 : -1);
//uitvoeren
let uitvoer = "";
lijst.array.forEach((item) => {
    uitvoer += item + '<br>';
});
document.getElementById('uitvoer').innerHTML = uitvoer;
