$('#slider').mousedown(() => {
    $('#slideText').hide();
})

$('#slider').change(() => {
    if ($('#slider').val() === "100") {
        $('#welcomeText, #slideBox').fadeOut(200)
        $('#phoneHolder').delay(200).slideUp(1000)
        $('.centerY').delay(1200).hide();
        $('.afterStart').delay(1300).slideDown();
    }
})

const greeting = "Hello, my name is Nathan."
const greeting2 = "I write code."

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
                    $('#slideBox').slideDown(500);
                }
            }, 100)
        }
    }, 100)
})
