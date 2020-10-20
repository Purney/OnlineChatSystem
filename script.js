$(function() {
    getDraftMessage();

    $('#sendMessageInput').keyup(function()  {
        console.log($(this).val());

        if($(this).val() != "")
        {
            $('#sendMessage').prop('disabled', false);
            localStorage.setItem("draftMessage", $(this).val());
        }
        else {
            $('#sendMessage').prop('disabled', true);
            
        }
    })

    $('#sendMessage').click( function(){
        let messageBody = $('#sendMessageInput').val();
        console.log(messageBody);
        let message = new Message(messageBody, "will", "randomer");
        let confirmationMessage;
     
        console.log("Sent message");
        console.log(message);

        addNewMessage(message, false);

        delay(1000).then(function() {
            message.messageRecieved();
            confirmationMessage = new Message("Message Recieved at " + message.dateRecieved, "randomer", "will");
            addNewMessage(confirmationMessage, true);
            confirmationMessage.messageRecieved();
        });
     })
})

function getDraftMessage() {
    console.log($('#sendMessageInput').val())
    if (localStorage.draftMessage != undefined)
        $('#sendMessageInput').val(localStorage.draftMessage);

    console.log($('#sendMessageInput').val())
}

function addNewMessage(message, incoming){
    let messageBoard = $('#messages');
    let newMessage;
    let singleMessageClass = "single-message";

    if (incoming)
        singleMessageClass += "-incoming";

    newMessage = "<div class='single-message-wrapper'><div class='" + singleMessageClass + "'>" + message.body + "</div></div>";
    messageBoard.append(newMessage);
}

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