$(function() {
    $('#send2').click(sendForm2);
});

function sendForm2(e) {
    e.preventDefault();
    if ((!$('#quantity2').val())||
            (!$('#name2').val())||
            (!$('#phone2').val())||
            (!$('#email2').val())||
            (!$('#route2').val())||
            (!$('#date2').val())){
                alert('Будь-ласка заповніть всі необхідні поля')
                return;
            }
    $.ajax({
        url: "https://formspree.io/borodatuu@gmail.com",
        method: "POST",
            data: {
            quantity: $('#quantity2').val(),
            name: $('#name2').val(),
            phone: $('#phone2').val(),
            email: $('#email2').val(),
            date: $('#date2').val(),
            product_id2:$('#product_id2').val(),
            fname1:$('#fname1').val(),
            fname:$('#fname').val(),
            fname2:$('#fname2').val(),
            fname3:$('#fname3').val(),
                   },
        dataType: "json",
        success: function(){
            $('#forma').html(alert('Дякую, що скористалися нашими послугами'));
            $('.login1')[0].reset();
            }
    });
}
