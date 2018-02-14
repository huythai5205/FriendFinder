$(document).ready(function () {

    $('#submitSurveyBtn').on('click', function (event) {
        event.preventDefault();
        // var modal = new Foundation.Reveal($(document.getElementById('exampleModal1')));

        $('#match-friend-modal').trigger('click');

        const friend = {
            name: $('#nameInput').val(),
            photo: $('#photoUrl').val(),
            scores: $.map($('input:checked'), function (value) {
                return [value.value];
            })
        }

        $.post('/api/friend', friend, function (data) {
            //$('#match-friend-modal').clear();
            // console.log(data);
        });
    });
});