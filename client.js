console.log('Jquery is ready')


let displayInput = 
$(document).ready(onReady);

function onReady() {
    console.log('in onReady');
    getMath();
    $('#generateButton').on('click', generateFunction);
}//end onReady

