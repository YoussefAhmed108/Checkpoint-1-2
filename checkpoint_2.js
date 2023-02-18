let a = [1,4,-5,3,-2,10,-6,20]
let min = a[0]+a[1]
for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        var temp = Math.abs(a[i] + a[j])
        if(min > temp)
        min = temp
    }
}

console.log(min);

