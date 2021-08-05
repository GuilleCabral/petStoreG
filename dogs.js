/*Play sound when hover intro image*/
function playclip() {
    var audio = document.getElementsByTagName("audio")[0];
    audio.play();
  }

/*Product's pictures*/
  var more = [
    {
        title: 'Patrick',
        image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80',
        price: '$7,500-10,000',
        description: 'Lovely being. We highly recommend it'
      },
      {
        title: 'Flo',
        image: 'https://images.unsplash.com/photo-1527526029430-319f10814151?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        price: '$7,500-10,000',
        description: 'Lovely being. We highly recommend it'
      },
      {
        title: 'Kik',
        image: 'https://images.unsplash.com/photo-1592924728350-f7d4fd5d1655?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        price: '$7,500-10,000',
        description: 'Lovely being. We highly recommend it'
      },
      {
        title: 'Kitana',
        image: 'https://images.unsplash.com/photo-1603890937413-4ecc45384ca1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        price: '$7,500-10,000',
        description: 'Lovely being. We highly recommend it'
      }
    ]

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

  document.getElementById('dogs').innerHTML = postHTML