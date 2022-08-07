let n=window.prompt("Enter Number");
let x=window.prompt("Enter Number");
let y=window.prompt("Enter Number");
let t=true
const isDevidable= (n,x,y)=>{
    if(Number(n)% Number(x)==0 && Number(n)%Number(y)==0){
        // console.log("true")
        return true
    }
    else{

        return false
    }
}
console.log(isDevidable(n,x,y))