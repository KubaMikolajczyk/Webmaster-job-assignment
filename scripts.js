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
    const nav = document.querySelector('.navigation-mobile');

    const handleClick = () => {
        hamburger.classList.toggle('hamburger--active');
        nav.classList.toggle('navigation-mobile--active');
    };

    hamburger.addEventListener('click', handleClick)

    //-----------------------------------------------
    // Implement modals behaviour

    // code below is not pure ,I know i can make it better but as for now Im pretty beginner in JS

    // Get the modal
    const modal1 = document.getElementById("portfolio-modal-1");
    const modal2 = document.getElementById("portfolio-modal-2");
    const modal3 = document.getElementById("portfolio-modal-3");
    const modal4 = document.getElementById("portfolio-modal-4");
    const modal5 = document.getElementById("portfolio-modal-5");
    const modal6 = document.getElementById("portfolio-modal-6");

    // Get the button that opens the modal
    const btn1 = document.getElementById("portfolio-btn-1");
    const btn2 = document.getElementById("portfolio-btn-2");
    const btn3 = document.getElementById("portfolio-btn-3");
    const btn4 = document.getElementById("portfolio-btn-4");
    const btn5 = document.getElementById("portfolio-btn-5");
    const btn6 = document.getElementById("portfolio-btn-6");

    // Get the <span> element that closes the modal
    const span1 = document.getElementById('close-btn-1');
    const span2 = document.getElementById('close-btn-2');
    const span3 = document.getElementById('close-btn-3');
    const span4 = document.getElementById('close-btn-4');
    const span5 = document.getElementById('close-btn-5');
    const span6 = document.getElementById('close-btn-6');

    // When the user clicks on the button, open the modal
    btn1.onclick = function() {
        modal1.style.display = "block";
    };
    btn2.onclick = function() {
        modal2.style.display = "block";
    };
    btn3.onclick = function() {
        modal3.style.display = "block";
    };
    btn4.onclick = function() {
        modal4.style.display = "block";
    };
    btn5.onclick = function() {
        modal5.style.display = "block";
    };
    btn6.onclick = function() {
        modal6.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span1.onclick = function(e) {
        e.preventDefault();
        modal1.style.display = "none";
    };
    span2.onclick = function(e) {
        e.preventDefault();
        modal2.style.display = "none";
    };
    span3.onclick = function(e) {
        e.preventDefault();
        modal3.style.display = "none";
    };
    span4.onclick = function(e) {
        e.preventDefault();
        modal4.style.display = "none";
    };
    span5.onclick = function(e) {
        e.preventDefault();
        modal5.style.display = "none";
    };
    span6.onclick = function(e) {
        e.preventDefault();
        modal6.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal1) {
            modal1.style.display = "none";
        }
        else if(event.target == modal2){
            modal2.style.display = "none";
        }
        else if(event.target == modal3){
            modal3.style.display = "none";
        }
        else if(event.target == modal4){
            modal4.style.display = "none";
        }
        else if(event.target == modal5){
            modal5.style.display = "none";
        }
        else if(event.target == modal6){
            modal6.style.display = "none";
        }
    }

})();
