function sendForm3(e) {
    e.preventDefault();
    if ((!$('#quantity3').val())||
            (!$('#name3').val())||
            (!$('#phone3').val())||
            (!$('#email3').val())||
            (!$('#route3').val())||
            (!$('#custom_date2').val())){
                alert('Будь-ласка заповніть всі необхідні поля')
                return;
            }
    $.ajax({
        url: "https://formspree.io/borodatuu@gmail.com",
        method: "POST",
            data: {
            quantity: $('#quantity3').val(),
            name: $('#name3').val(),
            phone: $('#phone3').val(),
            email: $('#email3').val(),
            route:$('#route').val(),
            custom_date:$('#custom_date').val(),
            product_id3:$('#product_id3').val(),
            comments:$('#comments').val(),
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