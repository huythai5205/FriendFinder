let alreadyAttached = false;
$(document).ready(function () {
    if (!alreadyAttached) {
        alreadyAttached = true;
        $('#submitSurveyBtn').on('click', function (event) {
            event.preventDefault();
            console.log("Field id " + event.target.id + " is invalid");

            var modal = new Foundation.Reveal($(document.getElementById("match-friend-modal")));

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
                    console.log(response);
                    $('#match-friend-modal').foundation('open');
                });
        });
    }
});