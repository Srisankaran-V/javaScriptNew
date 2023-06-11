const button = document.getElementById("button");
const arr = document.querySelectorAll(".block");
// let arr = [five,four,three,two,one];

// button.addEventListener("click",swap);


let colors = ["skin_color.png","yellow.png","skyblue.png","red.jpg","blue.png"]
setUpColor()
function swap(){
    var temp = colors.shift()
    colors.push(temp)
    setUpColor()
}

function setUpColor () {
    for(let i = 0;i < arr.length;i++){
        arr[i].style.backgroundImage = `url(${colors[i]})`;
        arr[i].addEventListener("click",swap);
    }
}