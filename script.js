$(function() {
    $('#sendMessageInput').keyup(function()  {
        if($('#sendMessageInput').val() != "")
            $('#sendMessage').prop('disabled', false);
        else {
            $('#sendMessage').prop('disabled', true);
        }
    })

    $('#sendMessage').click( function(){
        let messageBody = $('#sendMessageInput').val();
        console.log(messageBody);
        let message = new Message(messageBody, "will", "randomer");
        console.log("Sent message");
        console.log(message);

        delay(1000).then(function() {
            message.messageRecieved();
            console.log("Recieve message");
            console.log(message);
        });
     })
})

/*Creating a delay promise*/ 
function delay(millisecond, v) {
    return new Promise(function(resolve) {
        setTimeout(resolve.bind(null, v), millisecond)
    });
}

//Base Message class
class Message {
    constructor(body, sender, reciever){
        this.body = body;
        this.sender = sender;
        this.reciever = reciever;
        this.dataSent = new Date();
    }

    messageRecieved = function() {
        this.dateRecieved = new Date();
    }
}