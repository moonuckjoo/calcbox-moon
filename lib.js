function avg(numbers){
    let s=0;
    for(let i =0; i<numbers.length;i++){
        s+= numbers[i];
    }
    return s/numbers.length;
}
function prime(num){
    if(num<=1) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
    }
  return true;
}

function fact(num){
    if(num>15) return -1;
    
    let f=1;
    for(let i=1; i<=num; i++){
        f *=i
    }
    return f;
}
module.exports = {
    avg,
    prime,
    fact
}    