// Tobble active
function toggleSidebar () {
    const sidebar = document.getElementById('sidemenu');
    sidebar.classList.toggle('sidemenu__active');
    const hamburger = document.getElementsByClassName('hamburger')[0];
    hamburger.classList.toggle('hamburger__deactivate');
}