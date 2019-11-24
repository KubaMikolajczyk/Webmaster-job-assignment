(function() {
    'use strict';

    // Implement scrollspy for menu links
    var section = document.querySelectorAll(".section");
    var sections = {};
    var section_offset = 100;
    var i = 0;

    Array.prototype.forEach.call(section, function(e) {
        sections[e.id] = e.offsetTop;
    });

    var changeActiveTo = function(currentNavEl){
        document.querySelector('a[href*='+ currentNavEl +']').setAttribute('class', 'nav-active');
    };

    var clearNavActive = function() {
        if(document.querySelector('.nav-active')){
            document.querySelector('.nav-active').setAttribute('class', ' ');
        }
    };

    window.onscroll = function() {
        var scrollPosition = (document.documentElement.scrollTop || document.body.scrollTop) + section_offset;

        for (i in sections) {
            if(scrollPosition < sections['portfolio']){
                clearNavActive();
            }
            else if(scrollPosition > sections['portfolio'] && scrollPosition < sections['about']){
                clearNavActive();
                changeActiveTo('portfolio');
            }
            else if(scrollPosition > sections['about'] && scrollPosition < sections['contact']){
                clearNavActive();
                changeActiveTo('about');
            } else{
                clearNavActive();
                changeActiveTo('contact');
            }
        }
    };
})();
