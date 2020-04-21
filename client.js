console.log('Jquery is ready')

let array = ["item zero","item one", "item two", "item three", "item four"];
let item;

let displayInput = 
$(document).ready(onReady);

function onReady() {
    console.log('in onReady');
    $('#generateButton').on('click', generateFunction);
}//end onReady


function generateFunction() {
    console.log(array[0]);
    let number = (Math.floor(Math.random() * array.length));
    $('#randomitem').empty();
    $('#randomItem').html(`
    <div>${(array[number])}</div>
`
    )
}






