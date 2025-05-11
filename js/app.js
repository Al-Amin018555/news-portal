const loadCategories = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
   
    const categoryContainer = document.getElementById('category-container');
    data.data.news_category.forEach(item => {
        console.log(item);
    })
    

}

loadCategories()