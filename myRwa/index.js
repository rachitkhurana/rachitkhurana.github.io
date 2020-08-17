console.log('Online & Ready Sirr!');


$('.alert').hide();

function errorAlert(input) {
    $('#errorAlertSpan').html(input);
    $('#errorAlert').show();
    setTimeout(() => {
        $('#errorAlert').hide();
    }, 3000);
}


function successAlert(input) {
    $('#successAlertSpan').html(input);
    $('#successAlert').show();
    setTimeout(() => {
        $('#successAlert').hide();
    }, 3000);
}
