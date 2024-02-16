let useransver1 = +prompt("brinchi qiymatni kiriting kiriting")

while (isNaN(useransver1 ) || useransver1  == "0") {
    if (useransver1  == "0") {
        useransver1  = +prompt("0 son turiga kirmaydi")
    }else{
        useransver1  = +prompt("iltimis son kiriting")
    }
}

let useransver2= +prompt("darajaga oshitmoqchi bolgan soningizni kiriting")

let k = 1

for (let i = 1; i < useransver2; i++) {

    // let k = 1

 k = k * useransver1
  console.log(k);
}

// console.log(k);
