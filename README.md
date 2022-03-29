# apiRest
Aplicación para registrar una base de datos para poder consultar, borrar, modificar.
Utilizaremos express, mongodb, TDD con jest

1. Estructura aplicación.
   
- Creamos el package.json. Iniciamos el npm.

        npm init -y 
- Instalamos la dependencia `express` framwork para crear API rápidas.(podemos crear vistas, formularios)
- 
        npm install express
- La aplicación de express la generamos por un lado y el servidor por otro.
- Creamos el servidor:
    - Carpeta bin (va a permitir arrancar el servidor con el que se lanzaran las peticiones)
    - server.js 
    - app.js (representará la aplicación express)
    
            1. Requerimos express. Express nos devuelve una función. Para crear la aplicación hay que lanzar la función. 
            2. Con el `module.exports = app;` exportamos la app.
   Para crear el server traemos la libreria `node.js` con el htto.
   Traemos la aplicación app.
   Creamos el servidor. Generamos una variable server con el método createServer le pasamos la app que se va a encargar de gestionar todas las peticiones y respuestas
        
        const server = http.createServer(app);
    Arrancamos el servidor. Lo ponemos a escuchar en el puerto 3000.
    Suscribir al evento de listening para que emita un mensaje sobre el servidor.

    package.json - modificación de scripts:
    
        start - para poder subirlo a los diferentes entornos de producción
        dev - instalamos `nodemon` para poder arrancar la aplicación y que se reinicie constantemente.
        
            npm install nodemon --save-dev 
            (sólo instalación de desarrollo no producción. La utilizamos para mejorar desarrollo). El servidor se reiniciará automáticamente.

    Configuración de express
    
        - llamada a express.json para poder interactuar con ficheros de tipo json.
        - express.urlencoded para obtener elementos de la ruta a la hora de sacar elementos o partes variables de la ruta. Utilizamos la libreria extended: true (querystring library) para que no utilice la que viene por defecto.
        - Inicio para recibir peticiones y respondemos
        - ARRANCAMOS APLICACIÓN 
        
            npm run dev
            
   ![image](https://user-images.githubusercontent.com/67627523/160562284-43a1b832-6d24-4851-809e-a382368f5803.png)

    Configuración de directorios
           
