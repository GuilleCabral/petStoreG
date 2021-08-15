/*Product's pictures*/
var more = [
  {
    title: "Motaro",
    image:
      "https://images.unsplash.com/photo-1586788454110-2d7a4382bd01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    price: "$2,500-4,000",
    description: "Good company. We recommend it",
  },
  {
    title: "Vegeta",
    image:
      "https://images.unsplash.com/photo-1553264701-d138db4fd5d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    price: "$2,500-4,000",
    description: "Good company. We recommend it",
  },
  {
    title: "Krillin",
    image:
      "https://images.unsplash.com/photo-1520808663317-647b476a81b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
    price: "$2,500-4,000",
    description: "Good company. We recommend it",
  },
  {
    title: "Brolly",
    image:
      "https://images.unsplash.com/photo-1596386447478-d71f5f8fea87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    price: "$2,500-4,000",
    description: "Good company. We recommend it",
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
  
  document.getElementById('birds').innerHTML = postHTML