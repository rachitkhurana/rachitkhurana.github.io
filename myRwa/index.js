console.log('Online & Ready Sirr!');


$('.alert').hide();

var optionCountMakePost = 2

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



function addMoreChoiceMakePost() {
    if(optionCountMakePost >= 4) {
        errorAlert('Max Option Count 4');
        return;
    }
    optionCountMakePost++;
    $('#choiceGroupMakePost').append(
        '<input type="text" name="option'+optionCountMakePost+'" id="option'+optionCountMakePost+'" class="form-control mb-1" placeholder="Add a Choice" required />'
    );
}
