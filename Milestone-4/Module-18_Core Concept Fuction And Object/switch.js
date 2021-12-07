// switch basic concept if else

var color = `black`;

if (color == `gold` ) {
    console.log(`color is gold`);
}
else if (color == `blue` ) {
    console.log(`color is blue`);
}
else if (color == `green` ) {
    console.log(`color is green`);
}
else if (color == `purple` ) {
    console.log(`color is purple`);
}
else if (color == `aqua` ) {
    console.log(`color is aqua`);
}
else if (color == `magenta` ) {
    console.log(`color is magenta`);
}else {
    console.log(`color is black`);   
}

switch (color) {
    case `gold`:
        console.log(`color is gold`);
        break;
    case `blue`:
        console.log(`color is blue`);
        break;
    case `green`:
        console.log(`color is green`);
        break;
    case `purple`:
        console.log(`color is purple`);
        break;
    case `white`:
        console.log(`color is white`);
        break;
    case `black`:
        console.log(`color is black`);
        break;
    default: 
        console.log(`color is goldenrod`); 
}