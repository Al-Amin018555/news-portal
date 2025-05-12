const loadCategories = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();

    const categoryContainer = document.getElementById('category-container');
    data.data.news_category.forEach(item => {
        
        const div = document.createElement('div');
        div.innerHTML = `
        <button class="btn" onclick="loadNews('${item.category_id}')">${item.category_name}</button>
        `;
        categoryContainer.appendChild(div)
    })

}

const loadNews = async (catId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${catId}`);
    const data = await res.json();
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = "";
    data.data.forEach(item => {
        const card = document.createElement('div');
        card.innerHTML = `
        <div class="card w-[80%] mx-auto space-y-5 lg:card-side bg-base-100">
        <figure class ="w-[40%] h-[300px]">
          <img
            src="${item.image_url}" class="object-cover w-full" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">${item.title}</h2>
          <p>${item.details.slice(0,200)}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
        `;
        newsContainer.appendChild(card);
    })
}
loadNews('01')

loadCategories()