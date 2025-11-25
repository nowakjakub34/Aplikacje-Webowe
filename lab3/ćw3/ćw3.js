let products = []
async function fetchProducts() {
    try{
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        products = data.products.slice(0,30);
        renderTable(products)
    } catch (error){
        console.error("Fetching data Error")
    }
}

function renderTable(items){
    const tbody = document.querySelector("#productsTable tbody");
    tbody.innerHTML ="";

    items.forEach(element => {
        const row = document.createElement("tr");
        const imgCell = document.createElement("td");
        const img = document.createElement("img");

        img.src =  element.thumbnail;
        imgCell.appendChild(img);
        row.appendChild(imgCell);

        const titleCell = document.createElement("td");
        titleCell.textContent = element.title;
        row.appendChild(titleCell);

        const descriptionCell = document.createElement("td");
        descriptionCell.textContent = element.description;
        row.appendChild(descriptionCell)

        tbody.appendChild(row)
    });
}

fetchProducts()

const searchInput = document.getElementById("searchInput");
const selectInput = document.getElementById("selectInput");

function updateTable() {
    const lowerCase = searchInput.value.toLowerCase();
    const filtered = products.filter(p => p.title.toLowerCase().includes(lowerCase));

    const sortValue = selectInput.value;
    let sorted = [...filtered];

    if(sortValue == "asc"){
        sorted.sort((a,b)=>a.title.localeCompare(b.title));
    } else if (sortValue == "desc"){
        sorted.sort((a,b)=> b.title.localeCompare(a.title))
    }
    renderTable(sorted)
}

searchInput.addEventListener("input",updateTable);
selectInput.addEventListener("change",updateTable);