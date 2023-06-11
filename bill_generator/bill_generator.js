const cities = document.getElementById("cities")
const input_container = document.getElementById("input_container")
let city = {
    "chennai":15,
    "coimbatore":12,
    "madurai":12,
    "salem":8,
    "tiruchy":6,
    "thoothukudi":2
}
let c = ""
function generate_input(){
    c = cities.value
    console.log(c)
    console.log(city[c])
    let inp = ""
    for(let i = 1;i <= city[c];i++){
        inp += `<input id = 'number${i}' placeholder = 'enter item ${i}'><br>`
    }
    input_container.innerHTML = inp;
}
