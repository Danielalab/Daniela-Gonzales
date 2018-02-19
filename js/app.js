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

  // funcionalidad para mostrar cada proyecto

  let getDataProyect = (id) => {
    id = parseInt(id);
    let dataProyect = proyects[id - 1];
    console.log(dataProyect);
    nameProyect.text(dataProyect.name);
    description.text(dataProyect.description);
    btnSite.attr('href', 'dataProyect.url');
    btnGithub.attr('href', 'dataProyect.github');
    imgModal.attr('src', `assets/images/${id}.png`);
  }; 

  let showProyect = (event) => {
    event.preventDefault();
    let id = event.target.id;
    getDataProyect(id); 
  };

  [...proyectsContainers].forEach(element => {
    $(element).on('click', showProyect);
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