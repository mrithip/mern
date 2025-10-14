console.log("first")
Promise.resolve().then(console.log("From promise"))
setTimeout(()=>{
    console.log("Inside Timeout");
},2000)
console.log("last")