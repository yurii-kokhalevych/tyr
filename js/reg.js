$(function() {
    $('#btn-send').click(sendForm);
});

function sendForm(e) {
    e.preventDefault();
    // if ((!$('#name').val())||
    //         (!$('#surname').val())||
    //         (!$('#birthday').val())||
    //         (!$('#email').val())||
    //         (!$('#mobilephone').val())||
    //         (!$('#city').val())){
    //             alert('Please fill required fields')
    //             return;
    //         }
    $.ajax({
        url: "https://formspree.io/borodatuu@gmail.com",
        method: "POST",
            data: {
            name: $('#name').val(),
            surname: $('#surname').val(),
            gender: $('#male').val(),
            gender: $('#female').val(),
            birthday:$('#birthday').val(),
            email: $('#email').val(),
            mobilephone:$('#mobilephone').val(),
            city:$('#city').val(),
                   },
        dataType: "json",
        success: function(){
            $('.login1').html(alert('Дякую, що скористалися нашими послугами'));
            $('.login1')[0].reset();
            }
    });
}