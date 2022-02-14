// Tobble active
function toggleSidebar () {
    const sidebar = document.getElementById('sidemenu');
    sidebar.classList.toggle('sidemenu__active');
    const hamburger = document.getElementsByClassName('hamburger')[0];
    hamburger.classList.toggle('hamburger__deactivate');
}

const counters = document.querySelectorAll('.skills__graphs_persentage'),
         lines = document.querySelectorAll('.skills__graphs-item-body-sausage');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
})

$('document').ready(function(){
    $('form').submit(function (e) {
        e.preventDefault();

        $.ajax({
          type: 'POST',
          url: 'mailer/mail.php',
          data: $(this).serialize()
        }).done(function () {
          $(this).find('input').val("");
          $('form').trigger('reset');
        });
        return false
    });
});