let n=window.prompt("Enter Number");
let x=window.prompt("Enter Number");
let y=window.prompt("Enter Number");

const isDevidable= (n,x,y)=>{
    if(Number(n)% Number(x)==0 && Number(n)%Number(y)==0){
        console.log("true") ;
    }
    else{

        console.log("false")
    }
}
isDevidable(n,x,y);