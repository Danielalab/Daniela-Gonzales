window.onload = () => {
  let divContainerBgImg = $('#work .container-bg-img');
  let spanNameProyect;

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