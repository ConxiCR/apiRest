# apiRest
Aplicación para registrar una base de datos para poder consultar, borrar, modificar.
Utilizaremos express, mongodb, TDD con jest

[video #1](https://www.youtube.com/watch?v=of-c7lV0i6g)

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
   Para crear el server traemos la libreria `node.js` con el http.
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

3. Módelo para guardar viajes
   
   [video #2](https://www.youtube.com/watch?v=CvO-JHjcwoM&list=PLs4YDKCLLrp-44HNv4j-Efw6WZITMzxo1&index=2)

   Definiremos un módelo a donde vamos a introducir información para luego crear una colección dentro de la BBDD y crear documentos dentro de la colección. Cómo podemos generar los modelos que conectarán nuestra aplicación con las colecciones de MongoDB. Utilizamos la librería Mongoose para conseguir este objetivo y poder especificar qué tipos de valores vamos a almacenar y cuántos validadores necesitaremos.  

    1. creamos un `modelo trip.models.js`
        - Instalación de mongoose `npm install mongoose`
        - Revisar en el packase.json que este instalada la libreria.
        - De mongoose extraemos el Schema(clase que va a permitir generar la estructura o arquitectura que van a tener los diferentes documentos).
        - Creación del Schema del trip. Utilizamos la libreria 'mongoose'.
        - Creación de un objeto de la clase Schema. Definiremos que campos vamos a utilizar, así como validaciones para los campos.
        - Los campos están acompañados de un objeto con tipos propios de mongoose para dar formato a todos los elementos que insertemos en la BBDD. En el campo 'category' definimos los tipos concretos con los valores que va a recuperar esta categoria 'enum:[...]'
        - `timestamps: true` - Definimos como segundo parametro otras opciones. Para cada documento se genera el campo create date (en que momento se ha creado) y el update date (en que momento se ha actualizado).
        - Exportamos. Llamamos al método model de moogose para que relacione el nombre de la colección(en minúsculas) con el Schema que lo representa. `module.exports = mongoose.model('trip', tripSchema);`
        - Prueba del modelo - `fichero pruebaModelo.js`
                       1. Traemos a mongoose. Lo vamos a utilizar para conectar.
                       2. Traemos el modelo Trip
                       3. Función autoejecutada. async await. Le indicamos la URL local + nombre BBDD
                       4. Instalación [mondoDB](https://www.youtube.com/watch?v=gkCnXcxHC4o)(https://www.mongodb.com/try/download/community)
                       5. Lo lanzamos para ver si se ejecuta correctamente.
            
         ![image](https://user-images.githubusercontent.com/67627523/161260647-1a5eae6e-1a46-404d-b005-aa28dc02c38e.png)
                        6. Comprobaciones:
                        en el shell de mongoDB: use nombrearchivo p.e. apiRest
                        7. `show collections;`
                        8. Sobre la instancia de la BBDD interactuamos con la collection trips y que hag un find para buscar todos los documentos que hay dentro de la colección`db.trips.find();`
