window.onload = () => {
  // seleccionando elementos del DOM
  let header = $('header');
  let main = $('#main');
  let footer = $('footer');
  let viewProyect = $('#view-proyect');
  let proyectsContainers = $('#work .container-proyect');
  let btnClose = $('#btn-close');
  let nameProyect = $('.modal-title');
  let description = $('#description');
  let btnSite = $('#site');
  let btnGithub = $('#github');
  let imgModal = $('#img-modal');
  let divContainerBgImg = $('#work .container-bg-img');
  let spanNameProyect;

  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $('.navbar').addClass('header-scroll')
    } else {
      $('.navbar').removeClass('header-scroll');
    }
  });

  // funcionalidad para efecto de presentación de los proyectos en la sección portafolio 
  function showText () {
    $(this).css('color', '#ffffff');;
  };

  function hideText() {
    $(this).css('color', 'transparent');; 
  }
  
  [divContainerBgImg].forEach(element => {
    $(element).on('mouseenter', showText);
    $(element).on('mouseleave', hideText);   
  });

}