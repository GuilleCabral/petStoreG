/*Product's pictures*/
var more = [
  {
    title: "Frank",
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1454&q=80",
    price: "$800-1,500",
    description: "Surly animal. We do not recommend it",
  },
  {
    title: "Laurie",
    image:
      "https://images.unsplash.com/photo-1501820488136-72669149e0d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    price: "$800-1,500",
    description: "Surly animal. We do not recommend it",
  },
  {
    title: "Bernie",
    image:
      "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    price: "$800-1,500",
    description: "Surly animal. We do not recommend it",
  },
  {
    title: "Toto",
    image:
      "https://images.unsplash.com/photo-1516750105099-4b8a83e217ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    price: "$800-1,500",
    description: "Surly animal. We do not recommend it",
  },
];
/*For loop to show product's pictures*/
var postHTML = " ";
for (var i=0; i < more.length ; i++){
    var heading = '<div class="product ' + '" ><span><h5 id="name">' + more[i].title + '</h5>'
    var image = '<img src="' + more[i].image + '"/'
    var price = '<p id="price"> ' + more[i].price + '</p></span>'
    var description = '<div class=""><p id="description">'+ more[i].description + '</p><button type="button" class="btn btn-warning"> Add to cart</button></div></div>'
    var concatThis = heading + image + price + description;
    postHTML = postHTML + concatThis
}

document.getElementById('cats').innerHTML = postHTML