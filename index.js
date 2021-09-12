// array to store names to be picked from
let names = [];
let count = 1;
// click event for entering names button
$('#nameBtn').click(function () {
    // getting the entered name
    let enteredName = $('#nameInput').val();
    // saving entered name to names array
    names.push({ name: enteredName, timesPicked: 0 });
    // clearing input field
    $('#nameInput').val('');
    // Creates dropdown for the last name entered
    $('#names').append(
        '<button class="btn btn-secondary dropdown-toggle nameChoices" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="' + names[names.length - 1].name + '">' +
        names[names.length - 1].name +
        '</button>' +
        '<div class="dropdown-menu" aria-labelledby="dropdownMenuButton"' + '>' +
        '<a class="dropdown-item" href="#"> Times picked: </a + >' +
        // <a class="dropdown-item" href="#">Another action</a>
        '</div>' +
        '</div >'
    );
    console.log(names);
});

// click event for picking a random name
$('#pickName').click(function () {
    // adds to count tracking how many times a name has been picked
    count++;

    let pickingFrom = [];

    // increases odds of people picked fewer times total to be picked
    names.forEach(names => {
        let timesToAdd = count - names.timesPicked;
        if (count > timesToAdd) {
            for (let i = 0; i < timesToAdd; i++) {
                pickingFrom.push(names.name);
            }
        }
    });
    console.log(pickingFrom);

    // Picks a random name
    let randomNumber = names[Math.floor(Math.random() * names.length)]
    // goes through each named button
    $('.nameChoices').each(function () {
        if (this.id !== randomNumber.name) {
            // if this person wasn't picked turn the button red
            $(this).removeClass('btn-secondary');
            $(this).addClass('btn-danger');
        } else {
            // if this person was picked turn the button green
            $(this).removeClass('btn-secondary');
            $(this).addClass('btn-success');
            randomNumber.timesPicked++
        }
    });
    // console.log('picked: ', randomNumber.name);
    // console.log('count: ', count);
});

// click event for reset button
$('#reset').click(function () {
    // goes through each named button
    $('.nameChoices').each(function () {
        // remove red then green color from button
        $(this).removeClass('btn-danger');
        $(this).removeClass('btn-success');
        // change named button color to grey
        $(this).addClass('btn-secondary');
    });
})