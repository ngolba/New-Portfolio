$('#slider').mousedown(() => {
    $('#slideText').hide();
})

$('#slider').change(() => {
    if ($('#slider').val() === "100") {
        console.log('done');
    }
})