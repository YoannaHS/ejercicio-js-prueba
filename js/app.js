window.addEventListener('load', function(){
    var divContainer = document.getElementById('div1');
    var link = divContainer.firstElementChild;
    console.log(link);

    // Consultando atributos
    console.log(link.attributes);
    console.log(link.href);
    // link.href-->Nos permite cambiar el url original del html
    link.href = 'http://htmlcolorcodes.com/es/';
    console.log(link.className);

    // Obteniendo datos del button
    var boton = divContainer.lastElementChild;
    console.log(boton);
    console.log(boton.attributes);
    console.log(boton.name = 'entrada');
    

    var title = document.getElementsByClassName('title1')[0];
    title.addEventListener('mouseover', function(){
        title.textContent = 'Si no practicas, no aprendes';
    });
    title.addEventListener('mouseout', function(){
        title.textContent = 'Aprendiendo a utilizar eventos';
    });
    var image = document.
        
    });