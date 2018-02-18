let alreadyAttached = false;
$(document).ready(function () {
    if (!alreadyAttached) {
        alreadyAttached = true;

        const validForm = function () {

        }

        const modal = new Foundation.Reveal($('#match-friend-modal'));


        $('#submitSurveyBtn').on('click', function (event) {

            const friend = {
                name: $('#nameInput').val(),
                photo: $('#photoUrl').val(),
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
                    <h1>Your friend match: ${response.name}</h1>
                    <img src="${response.url}">
                    `);
                    modal.open();
                });
        });;

    }
});