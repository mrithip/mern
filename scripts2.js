const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const success=true;
        if(success){
            resolve("Resolved successfully")
        }else{
            reject("rejected")
        }
    },10000)
})
console.log(promise)
console.log("hi")
promise.then((result)=>console.log(result))
.catch(err=>console.log(err))
.finally(()=>(console.log("promise completed")))

console.log("after promise")