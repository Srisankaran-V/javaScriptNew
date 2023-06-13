const add = document.getElementById("add");
const remove = document.getElementById("remove");
const addBefore = document.getElementById("addBefore");
const update = document.getElementById("update");

let prodId = document.getElementById("prodId");
let prodName = document.getElementById("prodName");
let prodPrice = document.getElementById("prodPrice");
let prodDes = document.getElementById("prodDes");

let addBef = document.getElementById("addBef");

let imgUpload = document.getElementById("imgUpload");
let imgURL = document.getElementById("previewImage");

var products = [];

prodName.addEventListener("input", function (event) {
  var inputVal = event.target.value;
  var filterVal = inputVal.replace(/[^a-zA-Z ]/g, "");
  event.target.value = filterVal;
});

imgUpload.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    var reader = new FileReader();
    reader.onload = function () {
      imgURL.src = reader.result;
      imgURL.style.display = "block";
    };
    reader.readAsDataURL(file);
  }
});

add.addEventListener("click", (e) => {
  if (
    prodId.value &&
    prodName.value &&
    prodPrice.value &&
    prodDes.value &&
    imgUpload.value
  ) {
    var prod = {
      id: prodId.value,
      name: prodName.value,
      price: prodPrice.value,
      description: prodDes.value,
      image: imgURL.src,
    };


    products.push(prod);
    console.log(products)
    displayProducts();
    resetValue();
  }
});

remove.addEventListener("click", () => {
  if (prodId.value) {
    products.forEach(function (prod) {
      if (prodId.value === prod.id) {
        console.log(products.indexOf(prod));
        products.splice(products.indexOf(prod), 1);
        console.log(products);
        displayProducts();
        resetValue();
      }
    });
  }
});

addBefore.addEventListener("click", () => {
  if (
    prodId.value &&
    prodName.value &&
    prodPrice.value &&
    prodDes.value &&
    imgUpload.value &&
    addBef.value
  ) {
    var prod = {
      id: prodId.value,
      name: prodName.value,
      price: prodPrice.value,
      description: prodDes.value,
      image: imgURL.src,
    };
    products.forEach(function (pro) {
      if (addBef.value === pro.id) {
        addBef.value = "";
        console.log(products.indexOf(pro));
        products.splice(products.indexOf(pro), 0, prod);
      }
    });
    displayProducts();
    resetValue();
  }
});

update.addEventListener("click", () => {
  if (prodId.value) {
    products.forEach(function (prod) {
      if (prodId.value === prod.id) {
        console.log("entered");
        if (prodName.value) {
          prod.name = prodName.value;
        }
        if (prodPrice.value) {
          prod.price = prodPrice.value;
        }
        if (prodDes.value) {
          prod.description = prodDes.value;
        }
        if (imgUpload.value) {
          prod.image = imgURL.src;
        }
      }
    });
    displayProducts();
    resetValue();
  }
});

function displayProducts() {
  var productList = document.getElementById("displayProd");
  productList.innerHTML = "";

  products.forEach(function (prod) {
    let prodContainer = document.createElement("div");
    prodContainer.classList.add("prod-container");

    var image = document.createElement("img");
    image.src = prod.image;
    image.style.width = "200px";
    image.style.height = "200px";
    image.style.backgroundColor = "aliceblue";
    
    var id = document.createElement("span");
    id.textContent = "Id : " + prod.id;
    id.classList.add("span1");

    var name = document.createElement("span");
    name.textContent = "Name : " + prod.name;
    name.classList.add("span1");

    var price = document.createElement("span");
    price.textContent = "₹ " + prod.price;
    price.classList.add("span1");

    prodContainer.appendChild(image);
    prodContainer.appendChild(id);
    prodContainer.appendChild(name);
    prodContainer.appendChild(price);
    productList.appendChild(prodContainer);
  });
}

function resetValue() {
  prodId.value = "";
  prodName.value = "";
  prodPrice.value = "";
  prodDes.value = "";
  imgUpload.value = "";
  imgURL.src = "#";
  imgURL.style.display = "none";
}
