const numbers = [6, 2, 3, 1, 4, 5, 9, 8, 7];
const sortNumber = numbers.sort()
console.log(sortNumber);

const friends = ['jasim', 'rajjak', 'dipjol', 'anear', 'lili'];
const shortedFriends = friends.sort();
console.log(shortedFriends);
const reverseFriend = friends.reverse();
console.log(reverseFriend);

const sortReverseFriends = friends.sort(function (a, b ){
    return a - b;
}).reverse();
console.log(sortReverseFriends);

const numbers = [12, 14, 7, 56, 85, 35, 65, 25, 75];
const sortReverseNumber = numbers. sort(function (a, b) {
    return a - b;
})
console.log(sortReverseNumber);