$(document).ready(function () {

    $('#submitSurveyBtn').on('click', function (event) {
        event.preventDefault();

        $('#match-friend-modal').foundation('open');
        // const userScores = $.map($('input:checked'), function (value) {
        //     return value.value;
        // });

        let userScores = [];
        for (let i = 0; i < $('input:checked').length; i++) {
            userScores.push($('input:checked')[i].value);
        }

        const friend = {
            name: $('#nameInput').val(),
            photo: $('#photoUrl').val(),
            scores: userScores
        }

        $.post('/api/friend', friend, function (data) {
            //$('#match-friend-modal').clear();
            // console.log(data);
        });
    });
});