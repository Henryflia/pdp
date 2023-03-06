

// ----------------------------------------


const file = 'json/data.json';

async function getProductsData() {
    const response = await fetch(file);
    const data = await response.json();
    // console.table(data.prophets); 
    displayProducts(data.products)
  }
  
  const displayProducts = (products) => {
    const grids = document.querySelector('div.products'); // select the output container element
  
    products.forEach((product) => {
      let grid = document.createElement('section');
    //   let h2 = document.createElement('h2');
      let image = document.createElement('img');
      let description = document.createElement('p')
  
    //   h2.textContent = `${product.name}`;
      description.textContent = `${product.description}`
      
      image.setAttribute('src', product.image);
      image.setAttribute('alt', `Image of ${product.name}`);
      image.setAttribute('loading', 'lazy');
      image.setAttribute('width', '600');
      image.setAttribute('height', '600');

      grid.appendChild(image);
    //   grid.appendChild(h2);
      grid.appendChild(description)   
      grids.appendChild(grid);
    }
    )
} 
getProductsData();

// const gridbutton = document.querySelector("#grid");
// const listbutton = document.querySelector("#list");
// const display = document.querySelector("article");

// // The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

// gridbutton.addEventListener("click", () => {
// 	// example using arrow function
// 	display.classList.add("grid");
// 	display.classList.remove("list");
// });

// listbutton.addEventListener("click", showList); // example using defined function

// function showList() {
// 	display.classList.add("list");
// 	display.classList.remove("grid");
// }