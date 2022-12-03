
window.onload = () => {
    const menuIconElement = document.querySelector('#menu-icon');
    
    function getMobileMenuElement() {
        return document.querySelector('#mobile-menu');
    }

    menuIconElement.addEventListener('click', () => {
        const mobileMenuElement = getMobileMenuElement();
        mobileMenuElement.style.display = 'block';
    });

    const mobileMenuCloseIconElement = document.querySelector('#mobile-menu__close-icon');
    mobileMenuCloseIconElement.addEventListener('click', () => {
        const mobileMenuElement = getMobileMenuElement();
        mobileMenuElement.style.display = 'none';
    });

    window.onresize = (e) => {
        console.log(e);
    }
}