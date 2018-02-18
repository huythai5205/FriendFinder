let alreadyAttached = false;
$(document).foundation().ready(function () {
    if (!alreadyAttached) {
        alreadyAttached = true;
        const validateForm = function () {
            if ($('#nameInput').val() === '' || $('#photoUrl').val() === '' || $('input:checked').length != 10) {
                return false;
            }

            return true;
        }

        $('#submitSurveyBtn').on('click', function (event) {

            if (validateForm()) {
                const friend = {
                    name: $('#nameInput').val().trim(),
                    photo: $('#photoUrl').val().trim(),
                    scores: $.map($('input:checked'), function (value) {
                        return value.value;
                    })
                }

                fetch('/api/friend', {
                        method: 'POST',
                        body: JSON.stringify(friend),
                        headers: new Headers({
                            'Content-Type': 'application/json'
                        })
                    }).then(res => res.json())
                    .catch(error => console.error('Error:', error))
                    .then(response => {
                        $('#match-data').empty();
                        $('#match-data').append(`
                        <h5><strong>Your friend match:</strong> ${response.name}</h5>
                        <img class="match-img" src="${response.photo}">
                        `);
                        $('#match-friend-modal').foundation('open');
                    });
            } else {
                $('#match-data').empty();
                $('#match-data').append(`
                <h4>Please fill out all inputs to get your match.
                `);
                $('#match-friend-modal').foundation('open');
            }

        });;

    }
});