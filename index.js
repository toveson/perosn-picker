let names = [];

$('#nameBtn').click(function () {
    // getting the entered name
    let enteredName = $('#nameInput').val();
    // saving entered name to names array
    names.push(enteredName);
    // clearing input field
    $('#nameInput').val('');
    // Creates dropdown for the last name entered
    $('#names').append(
        '<button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="' + names[names.length - 1] + '">' +
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