function megaFriends(friends) {
    if (Array.isArray(friends) == false) {
        return `please provide in an array string`;
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['simon', 'emon', 'kalam', 'jalam', 'lol',]
const myBigBuddy = megaFriends(4545);
// console.log(myBigBuddy);

// includes
if (friends.indexOf('kalam') != -1 ) {
    // console.log(`kalam exits`);
}
if (friends.includes('kalam')) {
    console.log('kalam exists');
}
// concatenation short form concat
const first = [1, 2, 3, 4, 5];
const second = [6, 7, 8, 9, 10];
const combined = first.concat(second);
console.log(combined);
