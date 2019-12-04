$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});
$(document).ready(function() {
    $('#log').click(function(event) {
        event.preventDefault()
        $.ajax({
            url: "https://info-space-admin.herokuapp.com/log/",
            type: "POST",
            data: {name: "admin"},
            dataType: "html",
            beforeSend: beforeSend,
            success: success,
            error: error
        })
    })
})
function beforeSend() {
    console.log('sending...');
}
function success(data) {
    console.log(data);
}
function error(e) {
    console.log(e);
}