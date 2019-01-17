///////////////////////////////////////
// Lecture: Scoping


// First scoping example

// var a = 'Hello!';
// first();
//
// function first() {
//     var b = 'Hi!';
//     second();
//
//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }

// Hello!Hi!Hey!



// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third();
    }
}

function third() {
    var d = 'John';
    //console.log(a + b + c + d);
    console.log(a+d);
}
// Hello!John



///////////////////////////////////////
// Lecture: The this keyword
