

const arrayDiff = (arr1, arr2) => {
    let result=[]
    arr1.map(item =>{
        if(arr2.indexOf(item)=== -1){
            result.push(item)
        }

    })
    // arr2.map(item =>{
    //     if(arr1.indexOf(item)=== -1){
    //         result.push(item)
    //     }

    // })

    return result;

};
console.log(arrayDiff([1,2,3],[1,2]));
// console.log(arrayDiff([1,2,3],[4,5,6]));
