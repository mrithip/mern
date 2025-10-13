async function fetchapi() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        data.map((user)=>{
            console.log(user.name)
        })
    }catch(err){
        console.log(err)
    }
}
fetchapi()