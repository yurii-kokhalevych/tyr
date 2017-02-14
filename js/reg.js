$(function() {
    $('#send1').click(sendForm);
});

function sendForm(e) {
    e.preventDefault();
    if ((!$('#quantity1').val())||
            (!$('#name1').val())||
            (!$('#phone1').val())||
            (!$('#email1').val())||
            (!$('#custom_date1').val())){
                alert('Будь-ласка заповніть всі необхідні поля')
                return;
            }
    $.ajax({
        url: "https://formspree.io/borodatuu@gmail.com",
        method: "POST",
            data: {
            quantity: $('#quantity1').val(),
            name: $('#name1').val(),
            phone: $('#phone1').val(),
            email: $('#email1').val(),
            custom_date: $('#custom_date1').val(),
            product_id3:$('#product_id3').val(),
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


$(function() {
    $('#send3').click(sendForm3);
});

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