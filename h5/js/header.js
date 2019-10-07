$(function () {
    // 默认语言
    var lang = "fan";
    
    if ('localStorage' in window) {
        var lang = localStorage.getItem('lang') || navigator.language.slice(0, 2);
        if (!Object.keys(arrLang).includes(lang)) lang = 'fan';

        if (localStorage.getItem("lang")) {
            switch (localStorage.getItem("lang")) {
                case "fan":
                    $(".selected-lang span").text("繁體中文");
                    break;
                case "en":
                    $(".selected-lang span").text("English");
                    break;
                case "kor":
                    $(".selected-lang span").text("한국어");
                    break;
                case "jp":
                    $(".selected-lang span").text("日本語");
                    break;
            }
        } else {
            localStorage.setItem("lang", "fan")
        }
    }

    $(function () {
        $(".lang").each(function (index, element) {
            $(this).text(arrLang[lang][$(this).attr("key")]);
        });
        $(".translate").click(function () {
            var lang = $(this).attr("id");

            $(".selected-lang span").text($(this).text());

            // 更新语言
            if ('localStorage' in window) {
                localStorage.setItem('lang', lang);
            }

            $(".lang").each(function (index, element) {
                $(this).text(arrLang[lang][$(this).attr("key")]);
            });

            $(".fixed-lang").hide();

            window.location.reload();
        });

        // 选择语言框
        $(".selected-lang").click(function () {
            $(".fixed-lang").show();
        });
        $(".fixed-lang").click(function () {
            $(".fixed-lang").hide();
        });
    });
})