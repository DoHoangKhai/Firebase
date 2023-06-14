
const ProductBox = document.getElementById("product-box")

const list = [
    {
        id: 1,
        name: "Chicken",
        price: 500000,
        image: "https://cdn.britannica.com/07/183407-050-C35648B5/Chicken.jpg",
        category: "FarmAnimal"
    },

    {
        id: 2,
        name: "Cow",
        price: 600000,
        image: "https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,w_300,dpr_3/https://assets.app.engoo.com/images/4KcaQDFAD3ogFttIZsIhwS.jpeg",
        category: "FarmAnimal"
    },

    {
        id: 3,
        name: "Pig",
        price: 700000,
        image: "https://i.natgeofe.com/k/0ed36c42-672a-425b-9e62-7cc946b98051/pig-fence_square.jpg",
        category: "FarmAnimal"
    },

    {
        id: 4,
        name: "Sheep",
        price: 800000,
        image: "https://images.squarespace-cdn.com/content/v1/5f87b82c3640400719116914/57b6c537-5a4c-4469-b268-50031d9fe9b2/Fly+strike.png?format=1000w",
        category: "FarmAnimal"
    },

    {
        id: 5,
        name: "Duck",
        price: 900000,
        image: "https://hips.hearstapps.com/hmg-prod/images/how-to-keep-ducks-call-ducks-1615457181.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=1200:*",
        category: "FarmAnimal"
    },
    {
        id: 6,
        name: "Toonies",
        price: 8000,
        image: "https://asmart.com.vn/wp-content/uploads/2021/08/Bim-bim-Toonies-vi-phomai-38g.jpg",
        category: "Snack"
    },

    {
        id: 7,
        name: "Lays",
        price: 12000,
        image: "https://product.hstatic.net/1000400508/product/1020_686bb7b202a04328a0ad1ae067038c94_8bf3bb2b54384996b7a37a6507950399_c5fa7cc709f34042afb069105fdcda88.jpeg",
        category: "Snack"
    },

    {
        id: 8,
        name: "Oishi",
        price: 9000,
        image: "https://cdn.tgdd.vn/Products/Images/3364/79730/bhx/snack-hanh-oishi-orion-rings-goi-39g-202203281446234326.jpg",
        category: "Snack"
    },

    {
        id: 9,
        name: "Swing",
        price: 18000,
        image: "https://cdn.tgdd.vn/Products/Images/3364/278732/bhx/snack-vi-bit-tet-kieu-new-york-swing-goi-152g-202205071435162179.jpg",
        category: "Snack"
    },

    {
        id: 10,
        name: "Orion",
        price: 10000,
        image: "https://orion.vn/media/jgajr11z/cornchip_blue-1.png",
        category: "Snack"
    },
    {
        id: 11,
        name: "Yogurt",
        price: 24000,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Turkish_strained_yogurt.jpg/640px-Turkish_strained_yogurt.jpg",
        category: "Dairy"
    },

    {
        id: 12,
        name: "Butter",
        price: 50000,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG/1200px-%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG",
        category: "Dairy"
    },

    {
        id: 13,
        name: "Cheese",
        price: 98000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlLR465_TkhyVQ4EaLMxLH7fa_a1fNdZUCaw&usqp=CAU",
        category: "Dairy"
    },
    
    {
        id: 14,
        name: "Whipped Cream",
        price: 47000,
        image: "https://www.lorca.vn/wp-content/uploads/2023/03/Whipped-Cream-blog-2.jpg",
        category: "Dairy"
    },

    {
        id: 15,
        name: "Ice cream",
        price: 20000,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Strawberry_ice_cream_cone_%285076899310%29.jpg/640px-Strawberry_ice_cream_cone_%285076899310%29.jpg",
        category: "Dairy"
    },
]

// list.forEach(item => {
    
//     let card = ``

//     card = `<div class="product-card">
//         <img src="${item.image}">
//         <h5>${item.name}</h5>
//         <p> <span>Price: </span>${item.price}đ</p>
//         <a href="#" class="button">Thêm vào giỏ hàng</a>
//     </div>`;

//     ProductBox.innerHTML += card;
// })

function allin(){
    ProductBox.innerHTML = ''

    list.forEach(item => {
        let card = ``
    
        card = `<div class="product-card">
            <img src="${item.image}">
            <h5>${item.name}</h5>
            <p> <span>Price: </span>${item.price}đ</p>
            <a href="#" class="button">Thêm vào giỏ hàng</a>
        </div>`;
    
        ProductBox.innerHTML += card;
    })
}

function animal(){
    ProductBox.innerHTML = ''

    list.forEach(item => {
        let card = ``
    
        if(item.category == "FarmAnimal"){

            card = `<div class="product-card">
                <img src="${item.image}">
                <h5>${item.name}</h5>
                <p> <span>Price: </span>${item.price}đ</p>
                <a href="#" class="button">Thêm vào giỏ hàng</a>
            </div>`;

            ProductBox.innerHTML += card;
        }
    })
}

function snack(){
    ProductBox.innerHTML = ''

    list.forEach(item => {
        let card = ``
    
        if(item.category == "Snack"){

            card = `<div class="product-card">
                <img src="${item.image}">
                <h5>${item.name}</h5>
                <p> <span>Price: </span>${item.price}đ</p>
                <a href="#" class="button">Thêm vào giỏ hàng</a>
            </div>`;

            ProductBox.innerHTML += card;
        }
    })
}

function dairy(){
    ProductBox.innerHTML = ''

    list.forEach(item => {
        let card = ``
    
        if(item.category == "Dairy"){

            card = `<div class="product-card">
                <img src="${item.image}">
                <h5>${item.name}</h5>
                <p> <span>Price: </span>${item.price}đ</p>
                <a href="#" class="button">Thêm vào giỏ hàng</a>
            </div>`;

            ProductBox.innerHTML += card;
        }
    })
}