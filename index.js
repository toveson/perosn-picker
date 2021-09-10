// array to store names to be picked from
let names = [];
// click event for enter names button
$('#nameBtn').click(function () {
    // getting the entered name
    let enteredName = $('#nameInput').val();
    // saving entered name to names array
    names.push(enteredName);
    // clearing input field
    $('#nameInput').val('');
    // Creates dropdown for the last name entered
    $('#names').append(
        '<button class="btn btn-secondary dropdown-toggle nameChoices" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="' + names[names.length - 1] + '">' +
        names[names.length - 1] +
        '</button>' +
        '<div class="dropdown-menu" aria-labelledby="dropdownMenuButton"' + '>' +
        '<a class="dropdown-item" href="#"> Times picked: 0 </a + >' +
        // <a class="dropdown-item" href="#">Another action</a>
        '</div>' +
        '</div >'
    );

    console.log(names);
});

// click event for pick a name button
$('#pickName').click(function () {
    // Picks a random name
    let randomName = names[Math.floor(Math.random() * names.length)];
    // goes through each named button
    $('.nameChoices').each(function(){
        if (randomName !== this.id) {
            // if this person wasn't picked turn the button red
            $(this).removeClass('btn-secondary');
            $(this).addClass('btn-danger');
        } else {
            // if this person was picked turn the button green
            $(this).removeClass('btn-secondary');
            $(this).addClass('btn-success');
        }
    });

    $('#pickName').addClass('disabled').attr('disabled')

    console.log('picked: ', randomName);
});

// click event for reset button
$('#reset').click(function () {
    // goes through each named button
    $('.nameChoices').each(function(){
        // change named button color to grey
        $(this).removeClass('btn-danger');
        $(this).removeClass('btn-success');
        $(this).addClass('btn-secondary');
    })
})