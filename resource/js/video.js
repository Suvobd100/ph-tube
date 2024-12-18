const loadCategories = async()=>{

    try{
        const response = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        displayCategories(data.categories);
        }
        catch (err) {
            console.error('Error fetching data:', err);
        } finally {
            // spinner.classList.add('hidden'); // Hide spinner after fetching
        }
}

// create display category
const displayCategories = (items) => {
    const categoryContainer=document.getElementById('categories');

    console.log(items);

    if (!Array.isArray(items
    )) {
        console.error('Expected an array of items');
        return;
    }
    items.forEach(({category_id,category}) => {
        console.log(`id: ${category_id}, category: ${category}`);
        const button = document.createElement('button');
        button.classList= 'btn';
        button.innerText=category;
        // add button to DOM
        categoryContainer.append(button);
        
    });
};

loadCategories();
// displayCategories();