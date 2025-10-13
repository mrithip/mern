function double(num){
    return num*2
}
let arr=[1,2,3,4,5,6]
let darr = arr.map(double)
console.log(darr)
let tarr = arr.map((n)=>n*3)
console.log(tarr)

function oddeven(num){
    return num%2==0
}
let oearr = arr.map(oddeven)
console.log(oearr)

let earr =arr.filter(oddeven)
console.log(earr)

let barr = [13,15,20,35,27]

let mul5arr=barr.filter((n)=>n%5==0)
console.log(mul5arr)


let sum=arr.reduce((product,current)=>{
    return product*current;
},1)

console.log(sum)

console.log("---------------------------")

let array=[2,3,4,5,6,7]
let tarray = array.map((n)=>n*3)
console.log(tarray)
let earray = tarray.filter((n)=>n%2==0)
console.log(earray)
let sumarray = earray.reduce((a,b)=>{
    return a*b
},1)
console.log(sumarray)

let b = [1,2,3,4,5]
const [one,two] = b;
console.log(one,two)
const [three,...rem]=b
console.log(three,rem)
const obj1=[1,2,3]
const obj2=[3,4,5]
const spread={...obj1,...obj2}
console.log(spread)

