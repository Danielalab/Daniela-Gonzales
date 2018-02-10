window.onload = () => {
  let divContainerBgImg = $('#work .container-bg-img');
  let spanNameProyect;

  function showText () {
    $(this).css('color', '#61DDD5');;
  };
  function hideText() {
    $(this).css('color', 'transparent');; 
  }
  
  [divContainerBgImg].forEach(element => {
    $(element).on('mouseenter', showText);
    $(element).on('mouseleave', hideText);    
  });

}