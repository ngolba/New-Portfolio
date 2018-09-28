$('#slider').mousedown(() => {
    $('#slideText').hide();
})

$('#slider').change(() => {
    if ($('#slider').val() === "100") {
        $('#welcomeText, #slideBox').fadeOut(200)
        $('#phoneHolder').delay(200).slideUp(1000)
        $('.centerY').delay(1200).slideUp(0);
        $('.afterStart').delay(3300).slideDown(1000);
        $('body').delay(1300).animate({backgroundPosition: '0%', backgroundPositionY: '100%'}, 1000).delay(1000).animate({backgroundPositionY: '-10%'}, 1000)
    }
})

const greeting = "Hello, my name is Nathan."
const greeting2 = "I write code."
const takeALook = "Take a look..."

$(document).ready(() => {
    let i = 0;
    let welcomeText = setInterval(() => {
        $('#greeting').append(greeting[i])
        i++;
        if (i === greeting.length) {
            clearInterval(welcomeText);
            i = 0;
            let secondText = setInterval(() => {
                $('#secondText').append(greeting2[i])
                i++;
                if (i === greeting2.length) {
                    clearInterval (secondText)
                    i = 0;
                    let lookText = setInterval(() => {
                        $('#takeLook').append(takeALook[i])
                        i++
                        if (i === takeALook.length) {
                            clearInterval (lookText)
                            $('#slideBox').slideDown(500);
                        }
                    }, 100)
                }
            }, 100)
        }
    }, 100)
})

$('#portBtn').click(() => {
    $('#aboutMe').slideUp(500)
    $('#portfolio').delay(500).slideDown(500)
})

$('#homeBtn').click(() => {
    $('#aboutMe').delay(500).slideDown(500)
    $('#portfolio').slideUp(500)
})

