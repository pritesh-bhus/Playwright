function add(a,b){
    return a+b;
}

let result;
for (let i =0; i<100; i++){
    result = add(i,i+1);
}
console.log("after 100 calls: " , result);


// here I learned that optimization happens here as its a hotcode.