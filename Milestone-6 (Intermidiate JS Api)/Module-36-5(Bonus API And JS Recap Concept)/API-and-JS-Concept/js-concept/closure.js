/* const bank = owner => {
    balance = 0;
    return amount => {
        // balance = balance + amount
        balance += amount;
        return balance;
    }
} */
// When multiple work
const bank = owner => {
    balance = 0;
    return {
        deposit: amount => {
            // balance = balance + amount
            balance += amount;
            return balance;
        },
        withdraw: amount => {
            // balance = balance - amount
            balance -= amount;
            return balance;
        }
    }
}

const ownBank = bank('Sheikh');
console.log(ownBank.deposit(300));
console.log(ownBank.deposit(100));
console.log(ownBank.deposit(400));
console.log(ownBank.balance); //- inclosure 
console.log(ownBank.withdraw(500));