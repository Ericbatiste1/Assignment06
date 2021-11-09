$(".accordion-desc0").hide();
$(".accordion-desc1").hide();
$(".accordion-desc2").hide();
$(".accordion-desc3").hide();
$(".accordion-desc4").hide();
$(".accordion-desc5").hide();
$(".accordion-desc6").hide();
$(".accordion-desc7").hide();
$(".accordion-desc8").hide();
$(".accordion-desc9").hide();

$(function () {
    $('.accordion').on('click', '.accordion-title0', function (e) {
        e.preventDefault();
        $(this)
            .toggleClass('active')
            .next('.accordion-desc0')
            .slideToggle(750);
            $(".accordion-desc1").hide();
            $(".accordion-desc2").hide();
            $(".accordion-desc3").hide();
            $(".accordion-desc4").hide();
    });
});

$(function () {
    $('.accordion').on('click', '.accordion-title1', function (e) {
        e.preventDefault();
        $(this)
            .toggleClass('active')
            .next('.accordion-desc1')
            .slideToggle(750);
            $(".accordion-desc0").hide();
            $(".accordion-desc2").hide();
            $(".accordion-desc3").hide();
            $(".accordion-desc4").hide();
    });
});

$(function () {
    $('.accordion').on('click', '.accordion-title2', function (e) {
        e.preventDefault();
        $(this)
            .toggleClass('active')
            .next('.accordion-desc2')
            .slideToggle(750);
            $(".accordion-desc0").hide();
            $(".accordion-desc1").hide();
            $(".accordion-desc3").hide();
            $(".accordion-desc4").hide();
    });
});

$(function () {
    $('.accordion').on('click', '.accordion-title3', function (e) {
        e.preventDefault();
        $(this)
            .toggleClass('active')
            .next('.accordion-desc3')
            .slideToggle(750);
            $(".accordion-desc0").hide();
            $(".accordion-desc2").hide();
            $(".accordion-desc4").hide();
            $(".accordion-desc1").hide();
    });
});

$(function () {
    $('.accordion').on('click', '.accordion-title4', function (e) {
        e.preventDefault();
        $(this)
            .toggleClass('active')
            .next('.accordion-desc4')
            .slideToggle(750);
            $(".accordion-desc0").hide();
            $(".accordion-desc2").hide();
            $(".accordion-desc3").hide();
            $(".accordion-desc1").hide();
    });
});

$(function () {
    $('.accordion2').on('click', '.accordion-title5', function (e) {
        e.preventDefault();
        $(this)
            .toggleClass('active')
            .next('.accordion-desc5')
            .slideToggle(750);
            $(".accordion-desc6").hide();
            $(".accordion-desc7").hide();
            $(".accordion-desc8").hide();
            $(".accordion-desc9").hide();
    });
});

$(function () {
    $('.accordion2').on('click', '.accordion-title6', function (e) {
        e.preventDefault();
        $(this)
            .toggleClass('active')
            .next('.accordion-desc6')
            .slideToggle(750);
            $(".accordion-desc5").hide();
            $(".accordion-desc7").hide();
            $(".accordion-desc8").hide();
            $(".accordion-desc9").hide();
    });
});

$(function () {
    $('.accordion2').on('click', '.accordion-title7', function (e) {
        e.preventDefault();
        $(this)
            .toggleClass('active')
            .next('.accordion-desc7')
            .slideToggle(750);
            $(".accordion-desc5").hide();
            $(".accordion-desc6").hide();
            $(".accordion-desc8").hide();
            $(".accordion-desc9").hide();
    });
});

$(function () {
    $('.accordion2').on('click', '.accordion-title8', function (e) {
        e.preventDefault();
        $(this)
            .toggleClass('active')
            .next('.accordion-desc8')
            .slideToggle(750);
            $(".accordion-desc5").hide();
            $(".accordion-desc6").hide();
            $(".accordion-desc7").hide();
            $(".accordion-desc9").hide();
    });
});

$(function () {
    $('.accordion2').on('click', '.accordion-title9', function (e) {
        e.preventDefault();
        $(this)
            .toggleClass('active')
            .next('.accordion-desc9')
            .slideToggle(750);
            $(".accordion-desc5").hide();
            $(".accordion-desc6").hide();
            $(".accordion-desc7").hide();
            $(".accordion-desc8").hide();
    });
});

$(function () {
    $('.tab-list').each(function () {
        let $this = $(this);                                    
        $this.on('click', '.tab-control', function (e) {        
            e.preventDefault();                                 
            let $activeLink = $(this);                         
            let $activeTab = $activeLink.parent();
            let activeId = this.hash;                          

            if (activeId && !$activeTab.is('.active')) {     

                let $oldActivetab = $this.find('li.active');        
                let $oldSelector = $oldActivetab.find('a').attr('href');     
                let $oldPanel = $($oldSelector);                    
                $oldPanel.removeClass('active');                
                $oldActivetab.removeClass('active');            
                $(activeId).addClass('active');                
                $activeTab.addClass('active');       
            }
        });
    });
});




