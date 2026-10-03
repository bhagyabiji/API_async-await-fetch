
//fetch will return a promise class, so use then(), if we use console.log of that data it will give many other things like headers, body,type etc... -> so to require the array of items we use json() method, it will also give promise so usimg then() method will get the data in array

fetch('https://fakestoreapi.com/products').then((response)=> {
    response.json().then((products) => {
        console.log(products);
        products.forEach((pro)=> {
            result.innerHTML += `
            <div class="col mb-5">
                    <div class="card h-100">
                        <!-- Product image-->
                        <img class="card-img-top" src=${pro.image} alt="..." style="width: 100%; height:300px" />
                        <!-- Product details-->
                        <div class="card-body p-4">
                            <div class="text-center">
                                <!-- Product name-->
                                <h5 class="fw-bolder">${pro.title}</h5>
                                <!-- Product price-->
                                $${pro.price}
                            </div>
                        </div>
                        <!-- Product actions-->
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                        </div>
                    </div>
                </div>` 
        })
        
    })
})
