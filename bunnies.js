/*Product's pictures*/
var more = [
  {
    title: "Bulma",
    image:
      "https://images.unsplash.com/photo-1452857297128-d9c29adba80b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    price: "$5,500-8,000",
    description: "Soft fur. You will enjoy it",
  },
  {
    title: "Trunks",
    image:
      "https://images.unsplash.com/photo-1591561582301-7ce6588cc286?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    price: "$5,500-8,000",
    description: "Soft fur. You will enjoy it",
  },
  {
    title: "Petrona",
    image:
      "https://images.unsplash.com/photo-1594522798541-ce8c2b44320f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    price: "$5,500-8,000",
    description: "Soft fur. You will enjoy it",
  },
  {
    title: "Pete",
    image:
      "https://images.unsplash.com/photo-1594616096150-dc43f80c493e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80",
    price: "$5,500-8,000",
    description: "Soft fur. You will enjoy it",
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
  
  document.getElementById('bunnies').innerHTML = postHTML