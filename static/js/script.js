$(document).ready(function () {
    var oldNick = null

    function poll() {
        return new Promise(resolve => {
            $.ajax({
                type: "POST",
                url: '/poll',
            }).done(function (msg, textStatus, jqXHR) {
                resolve({ msg, jqXHR })
            })
        })
    }

    function sendMessage(mess) {
        var today = new Date();
        var time

        if (today.getHours() < 10) {
            time = '0' + today.getHours() + ":"
        } else {
            time = today.getHours() + ":"
        }

        if (today.getMinutes() < 10) {
            time += '0' + today.getMinutes() + ":"
        } else {
            time += today.getMinutes() + ":"
        }

        if (today.getSeconds() < 10) {
            time += '0' + today.getSeconds()
        } else {
            time += today.getSeconds()
        }

        var dateTime = time;

        $.ajax({
            type: "POST",
            url: '/mess',
            data: { newMess: mess, date: dateTime, nick: name, oldNick: oldNick, color: color },
            dataType: "json",
        })
    }

    function putMess(data) {
        switch (data.newMess) {
            case '/color':
                $('.' + data.nick).css('color', data.color)
                break;

            case '/nick':
                $('.' + data.oldNick).addClass(data.nick)
                $('.' + data.oldNick).removeClass(data.oldNick)
                $('.nick.' + data.nick).html(`&lt;@${data.nick}&gt;`)
                break;

            case '/quit':
                $('#messages').append(`<span class="alert">${data.nick} has left the room</span><br>`)
                break;

            case '/welcome':
                $('#messages').append(`<span class="alert">${data.nick} has enter the room</span><br>`)
                break;

            default:
                $('#messages').append(`<span class="first ${data.nick}" style="color: ${data.color};">[${data.date}]</span>
                                <span class="nick ${data.nick}" style="color: ${data.color};">&lt;@${data.nick}&gt;</span>
                                <span class="message">${data.newMess}</span><br>`)
                $('.message').emoticonize({
                    delay: 150,
                })
                $("#messages").animate({ scrollTop: $("#messages")[0].scrollHeight }, 'fast')
        }
    }

    var name = prompt("Welcome! What's ur nickname:")
    var color = '#' + Math.floor(Math.random() * 16777215).toString(16)

    if (name) {
        $('#chat').css("display", "block")
        sendMessage('/welcome')

        const pollLoop = () => {
            poll().then((data) => {
                if (data.jqXHR.status !== 204) {
                    putMess(data.msg)
                    pollLoop()
                }
            })
        }

        pollLoop()

    } else {
        alert("If u don't want to enter why did u even come?")
    }


    $('#newMessage').on("keyup", function (event) {
        event.preventDefault()
        if (event.keyCode === 13) {
            switch ($('#newMessage').val()) {
                case '/color':
                    color = '#' + Math.floor(Math.random() * 16777215).toString(16)
                    $('.' + name).css('color', color)
                    sendMessage($('#newMessage').val())
                    break;

                case '/nick':
                    oldNick = name
                    name = prompt("Enter ur new nickname:")
                    if (name) {
                        $('.' + oldNick).addClass(name)
                        $('.' + oldNick).removeClass(oldNick)
                        $('.nick.' + name).html(`&lt;@${name}&gt;`)
                        sendMessage($('#newMessage').val())
                    } else {
                        alert("Why did u lie to me?")
                        name = oldNick
                    }
                    break;

                case '/quit':
                    if (confirm("Are u sure that u want leave us?")) {
                        sendMessage($('#newMessage').val())
                        $('#chat').css("display", "none")
                        alert('Bye!')
                    }
                    break;

                case '/help':
                    $('#messages').append(`<span class="alert" style="color: red">
                                                available commands
                                            </span><br>
                                            <span class="alert" style="color: red">
                                                /color - change user's color
                                            </span><br>
                                            <span class="alert" style="color: red">
                                                /help - display this message
                                            </span><br>
                                            <span class="alert" style="color: red">
                                                /nick - change user's nick
                                            </span><br>
                                            <span class="alert" style="color: red">
                                                /quit - quit the chat
                                            </span><br>`)
                    break;

                default:
                    if ($('#newMessage').val()[0] != '/') {
                        sendMessage($('#newMessage').val())
                    } else {
                        $('#messages').append(`<span class="alert" style="color: red">
                                                    command not found: ${$('#newMessage').val()}
                                                </span><br>`)
                    }

                    break;
            }

            $('#newMessage').val('')
        }
    })
})