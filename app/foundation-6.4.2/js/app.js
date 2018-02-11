$(document).ready(function () {

    $('#submitSurveyBtn').on('click', function (event) {
        event.preventDefault();
        const friend = {
            name: $('#nameInput').val(),
            photo: $('#photoUrl').val(),
            scores: $.map($('input:checked'), function (value) {
                return [value.value];
            })
        }

        $.post('/api/friend', friend, function (data) {
            console.log(data);
        });
    });
});