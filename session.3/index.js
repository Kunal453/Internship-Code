// using function

// Multiplication.
function Multiply(s,d){
    return s*d
}
var z= Multiply(4,5);
console.log(typeof z, z)

// addition
function addition(a,b){
    return a+b
}
let h= addition(59,48)
console.log(typeof h, h)

// subtraction
function subtraction(k,n){
    return k-n
}
let o= subtraction(10,8)
console.log(typeof o, o)

// Division
function Division(s,m){
    return s/m
}
let e=Division(6,3)
console.log(typeof e,e)





// using arrow functions
// subtraction
    
let sub = (x, y) =>{
    return x - y;
} 
console.log(sub(100, 20)); 

// Division
let div = (g,h) =>{
    return g/h
}
console.log(div(4,2))

// Addition
let add = (d,f) =>{
    return d+f
}
console.log(add(90,80))

// Multiplication
let mul = (p,q) =>{
    return p*q
}
console.log(mul(90,80))