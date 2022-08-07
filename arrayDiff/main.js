let result=[]

const arrayDiff = (arr1, arr2) => {
    arr1.map(item =>{
        if(arr2.indexOf(item)=== -1){
            result.push(item)
        }

    })

    return result;

};
console.log(arrayDiff([1,2,3],[1,2]))
