var bread = 50;
var toastPacket = 40;
var batterBan = 30;
var tea = 10;
var budget = 50;
var badPacket = false;

// if (bread < budget) {
//     console.log('I want to need bread');
// }
// else if (toastPacket < budget) {
//     console.log(`I want need toastPacket`);
// }
// else if (batterBan < budget) {
//     console.log(`I want to need batterBan`);
// }
// else if (tea < budget) {
//     console.log(`i want to need tea`);
// }
// else{
//     console.log("Sorry i've out of budget");
// }

if (bread < budget) {
    if (badPacket == true) {
        console.log(`I want to eat this bread`);
    }
}
else {
    console.log("I did not eat this bread");
}