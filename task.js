// Task 1
let string = "Hi my name is Slim Shady.";
let vowels = 0;
let words = 0;

for(let i=0;i<string.length;i++){
    if(string[i]=="a" || string[i]=="e" || string[i]=="o" || string[i]=="u" || string[i]=="i"  ){
        vowels++;
    }
    if(string[i]==" " || string[i] == "."){
        words++
    }
}

console.log(words)
console.log(vowels)

// Task 2

let a = [1,2,3,4]
let b = [3,4,5,6]
let sum = 0
for( let i=0;i<a.length;i++){
    let found = false;
    for( let j=0;j<b.length;j++){
        if(a[i] == b[j])
            found = true;
            
    }
    if(!found)
    sum+=a[i]
}

for( let i=0;i<b.length;i++){
    let found = false;
    for( let j=0;j<a.length;j++){
        if(a[j] == b[i])
            found = true;
            
    }
    if(!found)
    sum+=b[i]
}

console.log(sum)