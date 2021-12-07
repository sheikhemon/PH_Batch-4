// ===================================== //
    /* The backs are being re-welded */
// ===================================== //

// 1rst variable example declare var 
var favoriteBooks = `The Sandman`

// 2nd array example declare array
var bookList = [`The Sandman`, `Scott Pilgrim's Precious Little box set`, `Sin City`, `The Walking Dead`];

/* positioning index is the most 
important in an array start in 0 */
var bookIndex = bookList.indexOf(`Sin City`);
bookList[2] = `The Last Man`;
bookList.push = `The X man gold love`
bookList.pop();

// 3rd condition example condition 
/* true false with if else */ 
if (bookList[0] == `The Sandman`) {
    console.log(`yeah this book is the right position`);
}else{
    console.log(`this is not a right position`);
}
/* While loop doing or being repeated */
// Total 4 work
var i = 0; //loop variable 
while (i < 15 ) {
    console.log(i);
    console.log(`While Loop is worked`);
    i++
}
// for loop
/* inside the for loop 3 part*/
// 1.loop initiation 2.loop condition loop 3.increment or change
for (var i = 0; i < array.length; i++) {
    var element = array[i];
    console.log(element);
}