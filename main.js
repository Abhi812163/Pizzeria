var pizza_array=["Chicken tandoori pizza","Extra Cheese pizza","Double Cheese Margareta","Famhouse pizza"];
function getMenu(){
    var list_pizza_names;
    list_pizza_names="<ol class='menulist'>";
    for(var i=0;i<pizza_array.length;i++){
        list_pizza_names=list_pizza_names+"<li>"+pizza_array[i]+"</li>";
    }
    list_pizza_names=list_pizza_names+"</ol>";
    document.getElementById("display_menu").innerHTML=list_pizza_names;
}

function add_item(){
    var list_pizza_names;
    var item=document.getElementById("add_item").value;
    pizza_array.push(item);
    list_pizza_names="<section class='cards'>";
    for(var i=0;i<pizza_array.length;i++){
        list_pizza_names=list_pizza_names+"<div class='card'>"+"<img src='pizzaImg.png'>"+pizza_array[i]+"</div>";
    }
    list_pizza_names=list_pizza_names+"</section>";
    document.getElementById("display_added_menu").innerHTML=list_pizza_names;
}