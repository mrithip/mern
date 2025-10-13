fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{return response.json()})
// .then((data)=>data.map((user)=>{console.log(user.name)}))
.then((data)=>{console.log(...data)})
.catch((err)=>console.log(err))

console.log("hi")