function Menu() {
    const mobileUl = document.getElementById('mobile-ul');

    if (innerWidth < 400) {
        mobileUl?.classList.toggle('w-[100%]');
    } else {
        mobileUl?.classList.toggle('w-[75%]');
    }
}

export default Menu;