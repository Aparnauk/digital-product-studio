const navLinkEls = document.querySelectorAll('.nav_link');
const windowPathname = window.location.pathname;

navLinkEls.forEach(navLinkEL => {
    if (navLinkEL.href.includes (windowPathname)){
        navLinkEL.classList.add('active');
    }
});