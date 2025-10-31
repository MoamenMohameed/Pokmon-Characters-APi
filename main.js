async function pokemon(){
    try {
        const input = document.getElementById("text").value.toLowerCase().trim();
        const img = document.getElementById("img");
        const  noimg = document.getElementById("noimg")

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
        if(!response.ok) {
            throw new Error("could not fetch resource")
        }
        const data = await response.json()
        console.log(data.name);

        if (data.sprites && data.sprites.front_default) {
            img.src = data.sprites.front_default;
            img.style.display = "block";

        } else {
            img.style.display = "none"; 
        }
    }
    catch (error){
        console.error(error);
        noimg.style.display = "block";
    };
};


const list = document.getElementById("popup");

function openPopup(){
    list.style.display = "block"
    
}

function closePopup(){
    list.style.display = "none"
}