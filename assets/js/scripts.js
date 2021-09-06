$(function () {
  // Handler for .ready() called.
  var nav = document.querySelector('nav');

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 200) { //Añadimos clases con jquery
      $('nav').addClass('bg-dark', 'shadow');
    } else {
      $('nav').removeClass('bg-dark', 'shadow');
    }
  });

  $('.main__title').hover(function () {
    $('.main__title').addClass('text-danger')
  }, function () {
    $('.main__title').removeClass('text-danger')
  })

  $('.form__btn-submit').on("click", function (event) {
    event.preventDefault();
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if ($('#nom-usr').val() != "" && emailRegex.test($('#mail-usr').val())) {
      $('#modal-body').text('Te has suscrito correctamente a Grupo2 Valparaíso.');
      $('#exampleModal').modal('show');
    } else {
      $('#modal-body').text('Debes ingresar un nombre y correo válido.');
      $('#exampleModal').modal('show');
    }
  });

});