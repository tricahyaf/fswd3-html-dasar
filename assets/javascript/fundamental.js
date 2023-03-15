// 1. code structure

console.log("Hello World"); alert("Hello World");

// 2. javascript variable

var nama = "Tri";
let umur = 21;
const alamat = "Cirebon";

// 3. data types

let angka = 123; // number
let teks = "Hello"; // string
let bool = true // boolean
let arr = [1, 2, 3, 4, 5] // array
let obj = { nama: "Tri", umur: 21 }; // object

// 4. javascript operator

// aritmethic operator
let x = 20;
let y = 5;
let z = x + y; // penjumlahan
let a = x - y; // pengurangan
let b = x * y; // perkalian
let c = x / y; // pembagian
let d = x % y; // sisa bagi
let e = x ** y; // pemangkatan

// comparison operator
let m = 12;
let n = 3;
console.log(m > n); // lebih besar
console.log(m < n); // lebih kecil
console.log(m >= n); // lebih besar sama dengan
console.log(m <= n); // lebih kecil sama dengan
console.log(m == n); // sama dengan
console.log(m != n); // tidak sama dengan


// logical operator
let f = true;
let g = false;
console.log(f && g); // logika AND
console.log(f || g); // logika OR
console.log(!f) // negasi/kebalikan

// bitwise operator
let h = 010101;
let i = 001001;
console.log(h & i); // AND
console.log(h | i); // OR
console.log(h ^ i); // XOR
console.log(~i); // negasi/kebalikan


// ternary operator
let j = 2;
let k = 2;
console.log(j == k ? "yes" : "no");

// 5. javacript loop

// loop: for
for (let o = 1; o < 4; o++) {
    console.log(`Iterasi ke ${o}`);
}

// loop: do...while
let l = 0;

do {
    console.log(`Iterasi ke ${l}`);
    l+=1
} while (i < 5);

// loop: while
let p = 0;

while (p<5) {
    console.log(`Iterasi ke ${p}`);
    p++;
}

// loop control: break
for (let q = 1; q < 5; q++) {
    if(q==4){
        break;
    }
    console.log(`Iterasi ke ${q}`);
}

// loop control: continue
for (let r = 1; r < 5; r++) {
    if(r==4){
        continue;
    }
    console.log(`Iterasi ke ${r}`);
}

// 6. javascript function

// basic function
function sapaan(){
    console.log("Hallo Teman!");
}

sapaan();

// function expression
let sapa = function(){
    console.log("Hallo Teman!");
}
sapa();

// arrow function
var sapa1 = () => {
    console.log("Hallo Teman!");
}

var sapa2 = () => console.log("Hallo Teman!");

sapa1();
sapa2();