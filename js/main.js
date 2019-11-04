$(function () {


    $('.icon-bars').on('click', function () {
        $('.top-menu').slideToggle();
    })
    $('.dd-menu').on('click', function () {
        $('.dd-menu ul').slideToggle();
    })

    $(function () {
        $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
            $(this).addClass('active')
                .siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content')
                .removeClass('active')
                .eq($(this).index()).addClass('active');
        });
    });

    $(function () {
        $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
            let temp = $(this).index();
            $(this).addClass('active')
                .siblings().removeClass('active')
                .closest('div.lang-tabs').find('label')
                .toggleClass('active');
            tinyMCE.remove();
            if (temp == 1) {
                initTiny('ru');
            } else {
                initTiny('en');
            }
        });
    });
    function initTiny(lang) {
        tinymce.init({
            selector: 'textarea.tinymce',
            themes: 'silver',
            language: lang,
            menubar: true,
            height: 300,
            plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen emoticons',
                'insertdatetime media table paste code help wordcount'
            ],
            toolbar1: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
            toolbar2: 'print preview media emoticons',
        });
    };
    initTiny('en');

});