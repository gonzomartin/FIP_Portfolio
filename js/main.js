(() => {

    const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

    /* Show Menu */
    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
    }

    /* Hide Menu */
    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
    }

    /* Remove Mobile Menu */
    const navLink = document.querySelectorAll('.nav__link')

    const linkAction = () =>{
        const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
        navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))

    /*=============== CHANGE BACKGROUND HEADER ===============*/

    function scrollHeader() {
        const header = document.getElementById('header')
        // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
        if(this.scrollY >= 350) header.classList.add('scroll-header');
        else header.classList.remove('scroll-header')
    }
    window.addEventListener('scroll', scrollHeader)

    // filters Options

    let mixerProjects = mixitup('.project_content', {
        selectors: {
            target: '.projects__card'
        },
        animation: {
            duration: 300
        }
    });

    /* Default filter products */ 
    mixerProjects.filter('.showall')

    /* Link active products */ 

    const linkProjects = document.querySelectorAll('.projects__item')

    function activeProject () {
        linkProjects.forEach(i => i.classList.remove('active-product'))
        this.classList.add('active-product')
    }
    linkProjects.forEach(i => i.addEventListener('click', activeProject));

    

})()





