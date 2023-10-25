let arr1 = [3, 1, 7, 9];

let arr2 =  [2, 4, 1, 9, 3];




let result = 0 ;

for(let i = 0 ; i < arr1.length  ; i++){

        if(arr1[i] != arr2[0] & arr1[i] != arr2[1] & arr1[i] != arr2[2] & arr1[i] != arr2[3] & arr1[i] != arr2[4]){
             result += arr1[i]
            console.log("loop one ",result)
    }
}


for(let j = 0 ; j < arr2.length  ; j++){

    if(arr2[j] != arr1[0] & arr2[j] != arr1[1] & arr2[j] != arr1[2] & arr2[j] != arr1[3]  ){
         result +=  arr2[j] ;
         console.log("loop two", result)
    }
}



console.log(result)
