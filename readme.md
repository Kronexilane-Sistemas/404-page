![Logo](img404/warning3.png)

## Aplicación 404 (Http not found)

### Página de error 404 personalizada

1. [Qué es el error 404](#queEs)
2. [Que ficheros la componen](#ficheros)
3. [Funcionamiento básico](#funcionamiento)

<a name="queEs"></a>
### ¿Qué es el error 404?
Es el número de error que los servidor http proporcionan cuando se introduce en la barra de direcciones una URL errónea o de algún recursos que no existe.

Está aplicación permite personalizar la página 404 de forma simple y elegante

<a name="ficheros"></a>

### Ficheros que lo componen

* 404.html: La página html.
* 404.css:  Las hojas de estílo en cascada.
* 404.js: Pequeño programa Javascript que permite controlar la aleatoriedad de la imagen de advertencia, textos, logo y demás parámetros.
img404/: Carpeta de imagenes (el nombre puede ser este o el parametrizado en el archivo .JSON en el parámetro *pathimg*).


<a name="funcionamiento"></a>

### Funcionamiento básico 
1. Se situará la carpeta img404 en el lugar del servidor que corresponda y a la cual referenciaremos en la configuración mediante la ruta:
http://www.servidor.com/img404

2. El resto de archivos 404.* (css,html,js,json) se situarán en la subcarpeta del dominio o subdominio para el que queramos tener la página 404

3. Modificaremos el fichero .JSON de parámetros tal que así:
~~~
{   
    "surprise":"", 
    "title":"",    
    "msg":"",
    "jumptext":"",
    "maximgs":,
    "pathimg":"",    
    "jump":"",
    "logo":false
}
~~~
### Parámetros
-   ***surprise***: Texto de interjección o icono de advertencia localizado en *pathimg.*
-   ***title***: Título de la advertencia.
-   ***msg***: Mensaje de adeventencia.
-   ***jumptext***:Texto del botón
-   ***maximgs***: (Número de imagenes-1) que sobre las que se hara la iteración aleatoria. Si hay ocho imagenes deberá ponerse 7 ya que van de la 0 a la 7.
-   ***pathimg***: Camino en el servidor de la carpeta de imagenes en la forma http://www.servidor.com/[carpeta_404]
-   ***jump***: URL de salto del botón de volver.
-   ***logo***: true|false activación o no, de la visualización de un archivo adicional de imagen situado también en la carpeta dada por pathimg y que deberá llamarse *logo.png*

### Observaciones
Los textos del fichero de configuración JSON que se visualizan en la página admiten texto HTML, de modo que aceptan entre medio tags html que permiten formatear bien el texto, entre ellos los código &xacute; para acentuaciones y otros.

Cada vez que se carga la página de eror se carga aleatoramiente la imagen de *0* a *maximgs-1* y deben tener el siguiente formato:
    **404_x.jpg**
