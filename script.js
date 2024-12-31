const array1 = [1,2,3,4,5,6];
const box = document.querySelector(".box");
const button = document.querySelector("#submit");
 const array = array1.concat(array1);
console.log(array);
let click_count =0;
let total_click = 0;
let box1;
let box2;

for(let i= array.length-1; i>=0 ; i-- ){
    let j = Math.floor(Math.random() * (i +1))
    

    let temp = array[i]; 
    array[i] = array[j];
    array[j] = temp;
    let btn = document.createElement("button");
      
      btn.classList.add("boxprop")
    btn.name = array[i];
    btn.innerText = array[i]
    btn.id =i;

    box.appendChild(btn);
    


}

// console.log(box)

const body = document.querySelector("body");
body.addEventListener("click", (click)=>{
    click_count++;
    if(click.target === body || click.target ===box){
        click--;
        click_count--;
        return false;
    }
    
    

if(click_count<3){
if(click_count===1){
    
     box1 = click.target;
    
    box1.classList.add("flip")

}
if(click_count===2){
 box2 = click.target;
 box2.classList.add("flip")

    if(box1.name === box2.name && box1.id != box2.id ){
        box1.classList.add("boxprop1");
        box2.classList.add("boxprop1");
setTimeout(function(){
    box1.classList.add("bg");
    box2.classList.add("bg");
},1000)
    }

if(box1.name === box2.name && box1.id === box2.id ){
    setTimeout(() => {box1.classList.remove("flip");
        
    }, 1000);
    

}

    if(box1.name != box2.name){

        setTimeout(function(){
            box1.classList.remove("flip");
    box2.classList.remove("flip");
        },1000)
    
    }
click_count=0;


}

}

total_click++;


let length = document.querySelectorAll(".bg").length;

if(length===10){
    
    button.style.display = "block";

    console.log("completed")
    
}

})

button.addEventListener("click", (evn) =>{
    const h2= document.querySelector("h2");
    h2.innerText = `Wow! you completed game with ${total_click} clicks`
})