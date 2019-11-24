(function() {
    'use strict';

    //-----------------------------------------------
    // Implement scrollspy for menu links

    const section = document.querySelectorAll(".section");
    const sections = {};
    let section_offset = 100;

    Array.prototype.forEach.call(section, (e) => {
        sections[e.id] = e.offsetTop;
    });

    const changeActiveTo = (currentNavEl) => {
        document.querySelector('a[href*='+ currentNavEl +']').setAttribute('class', 'nav-active');
    };

    const clearNavActive = () => {
        if(document.querySelector('.nav-active')){
            document.querySelector('.nav-active').setAttribute('class', ' ');
        }
    };

    window.onscroll = () => {
        let scrollPosition = (document.documentElement.scrollTop || document.body.scrollTop) + section_offset;

        for (let i in sections) {
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

    //-----------------------------------------------
    // Implement hamburger behavior for mobile menu

    const hamburger = document.querySelector('.hamburger');

    const handleClick = () => {
        hamburger.classList.toggle('hamburger--active');
    }

    hamburger.addEventListener('click', handleClick)
})();
