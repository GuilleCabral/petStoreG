/*Play sound when hover intro image*/
  function playclip() {
    var audio = document.getElementsByTagName("audio")[0];
    audio.play();
  }

/*Product's pictures*/
  var more = [
    {
      title: 'Frank',
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1454&q=80',
      price: '$800-1,500',
      description: 'Surly animal. We do not recommend it'
    },
    {
      title: 'Laurie',
      image: 'https://images.unsplash.com/photo-1501820488136-72669149e0d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      price: '$800-1,500',
      description: 'Surly animal. We do not recommend it'
    },
    {
      title: 'Bernie',
      image: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      price: '$800-1,500',
      description: 'Surly animal. We do not recommend it'
    },
    {
      title: 'Toto',
      image: 'https://images.unsplash.com/photo-1516750105099-4b8a83e217ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      price: '$800-1,500',
      description: 'Surly animal. We do not recommend it'
    },
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
    },
    {
      title: 'Motaro',
      image: 'https://images.unsplash.com/photo-1586788454110-2d7a4382bd01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
      price: '$2,500-4,000',
      description: 'Good company. We recommend it'
    },
    {
      title: 'Vegeta',
      image: 'https://images.unsplash.com/photo-1553264701-d138db4fd5d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      price: '$2,500-4,000',
      description: 'Good company. We recommend it'
    },
    {
      title: 'Krillin',
      image: 'https://images.unsplash.com/photo-1520808663317-647b476a81b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
      price: '$2,500-4,000',
      description: 'Good company. We recommend it'
    },
    {
      title: 'Brolly',
      image: 'https://images.unsplash.com/photo-1596386447478-d71f5f8fea87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
      price: '$2,500-4,000',
      description: 'Good company. We recommend it'
    },
    {
      title: 'Bulma',
      image: 'https://images.unsplash.com/photo-1452857297128-d9c29adba80b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
      price: '$5,500-8,000',
      description: 'Soft fur. You will enjoy it'
    },
    {
      title: 'Trunks',
      image: 'https://images.unsplash.com/photo-1591561582301-7ce6588cc286?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
      price: '$5,500-8,000',
      description: 'Soft fur. You will enjoy it'
    },
    {
      title: 'Petrona',
      image: 'https://images.unsplash.com/photo-1594522798541-ce8c2b44320f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      price: '$5,500-8,000',
      description: 'Soft fur. You will enjoy it'
    },
    {
      title: 'Pete',
      image: 'https://images.unsplash.com/photo-1594616096150-dc43f80c493e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80',
      price: '$5,500-8,000',
      description: 'Soft fur. You will enjoy it'
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

  document.getElementById('market').innerHTML = postHTML