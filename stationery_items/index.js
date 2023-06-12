let remaining_stock = 0;
const stationery_items = {
    1:{name : "Four-line notebook",stock : 2},
    2:{name : "Two-line notebook",stock : 10},
    3:{name : "HB pencil",stock : 8},
    4:{name : "Eraser",stock : 3},
    5:{name : "Drawing Notebook",stock : 2}
};
const items = document.getElementById("items");
const stocks = document.getElementById("stocks");
const sp = document.getElementById("sp");
const submit = document.getElementById("submit");
let values = 0;
items.addEventListener("change",(e)=>{
    sp.value = stationery_items[e.target.value].stock;
    values = items.value;
    console.log(sp.value);
})

submit.addEventListener("click",function check(){
    const error = document.getElementById("error");
    if(stocks.value > sp.value){
        error.innerHTML="out of stock";
    }else{
        stationery_items[values].stock -=  stocks.value;
        remaining_stock =  stationery_items[values].stock
        error.innerHTML = ("remaining_stock : "+remaining_stock);
        
    }
})