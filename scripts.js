(function() {
    'use strict';

    // Implement scrollspy for menu links
    let section = document.querySelectorAll(".section");
    let sections = {};
    let section_offset = 100;


    Array.prototype.forEach.call(section, function(e) {
        sections[e.id] = e.offsetTop;
    });

    window.onscroll = () => {
        let scrollPosition = (document.documentElement.scrollTop || document.body.scrollTop) + section_offset;

        for ( let i in sections) {
            if (sections[i] <= scrollPosition) {
                if(document.querySelector('.nav-active')){
                    document.querySelector('.nav-active').setAttribute('class', ' ');
                }
                else if(sections[i] !== 0){
                    document.querySelector('a[href*=' + i + ']').setAttribute('class', 'nav-active');
                }

            }
        }
    };
})();
