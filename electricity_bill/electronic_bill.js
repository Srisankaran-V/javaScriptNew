document.getElementById("new_subsidy").value = 250;
document.getElementById("subsidy_fixed_cost").value = 0.0;
document.getElementById("fixed_cost").value = 50;
const units = document.getElementById("units");
const T_c_c = document.getElementById("T_c_c");
const c_c = document.getElementById("c_c");
const net_amount = document.getElementById("net_amount");
const submit = document.getElementById("submit");
var total = 0;
T_c_c.value = total;
submit.addEventListener("click",bill_calculator);

function bill_calculator(){
    check(units.value)
    // console.log("Hi")
    // console.log(units.value)
    T_c_c.value = total;
    c_c.value = total;
    net_amount.value = total-250;
}

function check(u){
    let units_char = 0
    if(u > 0 && u <= 100){
        total = 0;
    }else if(u >= 101 && u <= 200){
        units_char = u*3.75;
        total = (100+(units_char)+50)-250;
    }else if(u >= 201 && u <= 400){
        units_char = u*4;
        total = (250+(units_char)+50)-250;
    }else if(u >= 401 && u <= 600){
        units_char = u*4.25;
        total = (300+(units_char)+50)-250;
    }else{
        units_char = u*5;
        total = (400+(units_char)+50)-250;
    }
}