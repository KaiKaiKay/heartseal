//這邊是加入最愛
function switchFavorite() {
    let heart = document.getElementById("heart");
    if (heart.title === "加入最愛") {
        heart.src = "../../pic/products_inner/heart-red.png";
        heart.title = "取消最愛";
    }
    else {
        heart.src = "../../pic/products_inner/heart.png";
        heart.title = "加入最愛";
    }
}

function initFavorite() {
    document.getElementById("heart").onclick = switchFavorite;
}
window.addEventListener("load", init, false);

// 這邊是手機輪播
$(document).ready(function () {
    let divWidth = $('#sliderBoard').width();
    let imgCount = $('#content li').length;
    for (let i = 0; i < imgCount; i++) {
        $('#contentButton').append('<li></li>');
    }
    $('#contentButton li:first').addClass('clicked');

    $('#content li').width(divWidth);
    $('#content').width(divWidth * imgCount);

    let index = 0;
    let timer = setInterval(moveToNext, 3000);

    $('#contentButton li').click(function () {
        clearInterval(timer);
        index = $(this).index();

        $('#content').css({
            'transform': `translateX(${-index * divWidth}px)`
        });

        $(this).addClass('clicked');
        $('#contentButton li').not(this).removeClass('clicked');

        timer = setInterval(moveToNext, 3000);
    });

    function moveToNext() {
        if (index < imgCount - 1) {
            index++;
        } else {
            index = 0;
        }

        $('#content').css({
            'transform': `translateX(${-index * divWidth}px)`
        });

        $(`#contentButton li:eq(${index})`).addClass('clicked');
        $(`#contentButton li`).not(`:eq(${index})`).removeClass('clicked');
    }

    $(window).resize(function () {
        divWidth = $('#sliderBoard').width();
        $('#content li').width(divWidth);
        $('#content').width(divWidth * imgCount);
        $('#content').css({
            'transform': `translateX(${-index * divWidth}px)`
        });
    });
});

//這邊是大圖換小圖
    function showLarge(e) {
        document.getElementById("large").src = e.target.src;
    }

    function init() {
        let smalls = document.getElementsByClassName("small");
        for (let i = 0; i < smalls.length; i++) {
            smalls[i].onclick = showLarge;
        }
    }
    window.addEventListener("load", function () {
        initFavorite();
        initShowLarge();
    }, false);




