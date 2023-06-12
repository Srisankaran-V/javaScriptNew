const pizza = document.getElementById("pizza")
const toppings = document.getElementById("toppings")
const deepPan = document.getElementById("deeppan")
const homeDelivery = document.getElementById("homedelivery")
const bill = document.getElementById("bill")
const final_output = document.getElementById("final_output")
let pizzaCost = 0
let toppingsCost = 0
let totalCost = 0



pizza.addEventListener("change", (e) => {
    pizzaCost = parseInt(e.target.value);
    console.log(pizzaCost)
})

toppings.addEventListener("change", (e) => {
    toppingsCost = parseInt(e.target.value)
    console.log(toppingsCost)
})

function calculateBill() {
    totalCost += pizzaCost
    totalCost += toppingsCost
    if (deepPan.checked) totalCost += 20
    if (homeDelivery.checked) totalCost += 25
    return totalCost
}

bill.addEventListener("click", () => {
    console.log(calculateBill())
    final_output.innerHTML="The total cose is :"+totalCost;
    totalCost = 0
})

