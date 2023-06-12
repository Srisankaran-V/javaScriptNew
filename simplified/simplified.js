const input = document.getElementById("input")
const result1 = document.getElementById("result1")
const result2 = document.getElementById("result2")
const result3 = document.getElementById("result3")
const answer = document.getElementById("answer")

result1.addEventListener("click",()=>{
    answer.value = "un"+input.value
})
result2.addEventListener("click",()=>{
    answer.value = "plus"+input.value
})
result3.addEventListener("click",()=>{
    answer.value = "double"+input.value
    
})