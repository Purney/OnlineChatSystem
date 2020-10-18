$(function() {
    $('#sendMessageInput').keyup(function()  {
        if($('#sendMessageInput').val() != "")
            $('#sendMessage').prop('disabled', false);
        else {
            $('#sendMessage').prop('disabled', true);
        }
    })
})