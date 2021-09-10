let names = [];

$('#nameBtn').click(function () {
    let enteredName = $('#nameInput').val();
    names.push(enteredName);
    console.log(names);
});