$('#slider').mousedown(() => {
    $('#slideText').hide();
})

$('#slider').change(() => {
    if ($('#slider').val() === "100") {
        $('#welcomeText, #slideBox').fadeOut(200)
        $('#phoneHolder').delay(200).slideUp(1000)
        $('.centerY').delay(1200).fadeOut();
        $('.afterStart').delay(1300).slideDown();
    }
})
