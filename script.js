
function loadRandomCategory() {
    
    var categories = ['L', 'D', 'A', 'P', 'S'];

    
    var randomIndex = Math.floor(Math.random() * categories.length);
    
    
    var randomCategoryShortName = categories[randomIndex];
    
    
    $dc.loadMenuItems(randomCategoryShortName);
}


document.getElementById('specials-link').addEventListener('click', function(event) {
    
    event.preventDefault();
    
    
    loadRandomCategory();
});
