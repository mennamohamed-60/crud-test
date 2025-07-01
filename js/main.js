
var  pname = document.getElementById("pname");
var  price = document.getElementById("price");
var  category = document.getElementById("category");
var  description = document.getElementById("description");

var allProducts = [];
function addProduct(){

    
    var product = {
        nameValue :pname.value,
        priceValue : Number(price.value) ,
        categoryValue :category.value ,
        descriptionValue : description.value ,
    }

    allProducts.push(product);
    console.log(allProducts );


    

    displayAllProducts ()


    clearAll();



   




}

function clearAll (){
    pname.value = "";
    price.value = "";
    category.value = "";
    description.value = "";
}



function displayAllProducts (){


    var cards ="";

    for ( i= 0 ; i < allProducts.length ; i++){
        cards = cards +  `
        <div class="card m-3 col-3" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">product ${i+1}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>name:</b> ${allProducts[i].nameValue}</li>
            <li class="list-group-item"><b>price:</b> ${allProducts[i].priceValue }</li>
            <li class="list-group-item"><b>category:</b> ${allProducts[i].categoryValue }</li>
            <li class="list-group-item"><b>description:</b> ${allProducts[i].descriptionValue}</li>
          </ul>
          <div class="card-body">
            <button onclick="updatProduct(${i})" type="button" class="btn btn-outline-success">
              update
            </button>
            <button onclick="deleteProduct(${i} );" type="button" class="btn btn-outline-warning">
              delete
            </button>
          </div>
        </div>
        
   ` ;


    }
   

    document.getElementById("displaing").innerHTML= cards ;
    
    


}


function deleteProduct(index){


    
    
    allProducts.splice(index ,1);
    displayAllProducts();

    console.log(allProducts);


}


function updatProduct(index){
    pname.value = allProducts[index].nameValue ;
    price.value = allProducts[index].priceValue ;
    category.value =allProducts[index].categoryValue ;
    description.value =allProducts[index].descriptionValue;
    document.getElementById("AddButton").innerHTML= `
    <button
        type="button"
        class="btn btn-outline-success"
        id = "updateButton"
        onclick="add_Updated_Product(${index}); "
      >
        update
      </button>`





}



function add_Updated_Product(index) {
    document.getElementById("AddButton").innerHTML=`
        <button
            onclick="addProduct(); "
            type="button"
            class="btn btn-outline-primary"
          >
            add
          </button>
    
    
    `

    allProducts[index].nameValue= pname.value;
    allProducts[index].priceValue= Number(price.value);
    allProducts[index].categoryValue = category.value;
    allProducts[index].descriptionValue= description.value;


    
    displayAllProducts();
    clearAll();

    


}
    






 



