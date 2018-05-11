const asyncAdd = (a, b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a==="number" && typeof b==="number"){
                resolve(a + b)
            }else{
                reject("Arguments must be numbers!")
            }
        }, 2000);
    });
}
/* const somePromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //resolve("Hey, it worked!")
        reject("Unable to fulfill promis")
    }, 2500)
});

somePromise.then((message)=>{
    console.log("Success:", message)
},(errorMessage)=>{
    console.log("Error: ", errorMessage)
}) */

asyncAdd(5,5).then((res)=>{
    console.log("Result:", res)
    return asyncAdd(res,"50")
},).then((res)=>{
    console.log("Should be 60", res)
},).catch((errorMessage)=>{
    console.log(errorMessage)
})


