// ধারা শুরু হয়  0 and 1 শুরু করতে হবে ইন্ডেক্স নাম্বার ২ থেকে 
const fibo = [0 , 1];
for (let i = 2; i <= 6; i++) {
    // fibo[2] = fibo[1] + fibo[0];
    // fibo[3] = fibo[2] + fibo[1];
    fibo[i] = fibo[i -1] + fibo[i - 2]     
}
console.log(fibo);
// ফাংশন এর ভিতর থেকে কল করা হল রিকার্সন স্টপ করতে হবে
// যেকোন লুপ বার বার কাজ করে যাদের স্টপ করতে হবে

function fibo(i) {
    if (i == 0) {
        return 0;
    }
    else if ( i == 1) {
        return 1;
    }
    return fibo (i - 1) + fibo (i - 2);
}
console.log(fibo(6));