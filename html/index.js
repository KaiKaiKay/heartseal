$(function () {
    $('.textHover').mousemove(function (e) {
        let theText = $(this).attr('data-text')

        $('#theDiv').show().text(theText).css({
            left: e.pageX + 10,
            top: e.pageY + 10
        })
    }).mouseout(function () {
        $('#theDiv').hide()
    })
})	