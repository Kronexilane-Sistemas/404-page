/**
 *  404.JS Gestiona la página web de error 404 através de JQUERY
 *      - Carga cada vez una imagen distinta
 *      - Utiliza un archivo JSON para definir la página de salto
 */

$(document).ready(function(){    
    // Variables
    var title;
    var msg;
    var jump;
    var maximgs;
    var pathimg;
    var logo;

    
    // ----------- Funciones accesorias ---------
    
    // #### Genera un número aleatorio hasta un max ###
    function getRandomInt(max) {        
        return Math.floor(Math.random() * max);
    }    
    
    // ### Lectura de Parámetros del archivo JSON ####
    function ReadParameters(){        
        var jsonFile="404.json";
        $.getJSON(jsonFile,function(json){
            title=json.title;
            msg=json.msg;
            jump=json.jump;
            maximgs=json.maximgs;
            pathimg=json.pathimg;
            logo=json.logo;
            // Cambia la imagen
            ChangeImage(maximgs);
            // Cambia los textos
            ChangeContent(json);
        });
        
    };
    
    // ### Cambio de imagen aleatoria  ####
    function ChangeImage(maximgs){        
        var img=pathimg+"/404_"+getRandomInt(maximgs)+".jpg";        
        $('#image').attr("src",img);
        $('#logo').attr("src",pathimg+"/logo.png")
    }
    
    // ### Cambio de parámetros
    function ChangeContent(obj){
        $('#title').html(obj.title);
        $('#text').html(obj.msg);
        $('#back').html(obj.jumptext);
        $('#back').attr("href",obj.jump);
        // Decidir si se pone una interjección o el icono
        // se basa en si contiene el punto y una extensión .png,.jpg,.gif
        if(obj.surprise.includes(".png") || obj.surprise.includes(".jpg") || obj.surprise.includes(".gif")){
            $('#iconrowsurprise').removeClass("d-none");            
            $('#iconsurprise').attr("src",obj.pathimg+"/"+obj.surprise);            
        }else{
            $('#surprise').text(obj.surprise);        
        }

        // Quita o pone el logo
        if(!obj.logo) $('#visiblelogo').addClass("d-none"); 
    }

    /**
     * Lectura de datos de configuración del JSON y ejecución
     * de funciones accesorias que usan esos parámetros
     */
    ReadParameters();
   

 });