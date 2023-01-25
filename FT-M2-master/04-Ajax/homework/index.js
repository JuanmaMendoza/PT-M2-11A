var URL = 'http://localhost:5000/amigos';
let showFriends = function () {
    $('#lista').empty();
    $.get(`${URL}`, function (friends) {
        console.log(friends);
        friends.forEach(element => {
            $('#lista').append(`<li id="${element.id}"> ${element.name}\ <button id="${element.id}" onclick = "deleteFriend(${element.id})">X</button> </li>`)
        });
    });
};

$('#boton').click(showFriends);

$('#search').click(function () {
    let id = $('#input').val();
    if (id) {
        $.get(`${URL}/${id}`, function (friend) {
            console.log(friend);
            $('#amigo').text(`Nombre: ${friend.name} - Edad: ${friend.age} - Email: ${friend.email}`)
            $('#input').val('');
        })
    }
    $('#input').val('ingresar número de id')
})
let deleteFriend = function (IdCruz) {
    let idDeletear;
    if(typeof IdCruz === 'number'){
        idDeletear = IdCruz
    }else{
        idDeletear = $('#inputDelete').val();
    }
    let friend;
    if (idDeletear) {
        $.get(`${URL}/${idDeletear}`, function (amigo) {
            friend = amigo;
        });
        $.ajax({
            url: `${URL}/${idDeletear}`,
            type: 'DELETE',
            success: function () {
                $('#success').text(`Tu amigo ${friend.name}, fue eliminado.`);
                $('#inputDelete').val('');
                showFriends();
            }
        })
    } else{
    $('#inputDelete').val('Ingrese un Id valido');
    }
}
$('#delete').click(deleteFriend);
