/**
Para visualizar correctamente las pijadas de las anotaciones: install extension --> Better Comments

# Time-Organizer

Aplicación tipo agenda para organizar el tiempo y las tareas del día a día, enfocada en
personas con TDA (Trastorno por déficit de atención), aunque puede ser útil para cualquiera quien quiera
usarla.

# Los pasos para arrancar el Backend

    * Abre la terminal y navega hasta la carpeta raíz del proyecto (si ya no estás en ella).

    * Verifica si en la raíz existe el archivo package.json (contiene la configuración del proyecto y las dependencias necesarias).

    * Ejecuta el comando npm install o npm i (creará una carpeta "node_modules" que contiene todas las independencias instaladas).

    * Crea el archivo .env y copia en el la estructura del archivo .env.example. Los campos que faltan rellénalos con los datos necesarios.

    * Ejecuta el comando npm run initdb para crear las tablas necesarias en la base de datos.

    * Ejecuta el comando npm run dev para lanzar el servidor



# Lista de los Endpoints:

 * * Tables
    ● Crear una Tabla

 * * Tasks
    ● Crear una Tarea
    ● Editar una Tarea
    ● Finalizar una Tarea
    ● Finalizar una Tarea a través del ID
    ● Finalizar una Tarea con un intervalo de tiempo establecido.
    ● Eliminar una Tarea
    ● Eliminar una Tarea
    ● Valoración de una Tarea finalizada



 * * SubTask
    ● Crear una SubTarea
    ● Editar una SubTarea
    ● Finalizar una SubTarea
    ● Eliminar una SubTarea

 * * Notes
    ● Crear una Nota
    ● Editar una Nota
    ● Eliminar una Nota   

 * * Family
    ● Crear una lista con las familias de las tareas
 

 * * Lists
    ● Crear una lista de tareas con filtro/búsqueda
    ● Crear una lista de tareas finalizadas 
    ● Crear una lista de usuarios (admin)
    ● Crear una lista de tareas
    ● Crear una lista de tareas a través del ID



 * * Users
    ● Registrar un Usuario 
    ● Validar un Usuario
    ● Login de usuarios
    ● Eliminar un usuario con todas sus tareas (Admin)
    ● Desabilitar/Habilitar un usuariko (Admin)

 * * Password
    ● Cambiar Contraseña
    ● Recuperar Contraseña

 * * Annotations
    ● Crear una anotación genérica
    ● Editar una anotación genérica
    ● Eliminar una anotación genérica    
   


* ! IMPORTANTE !!!!!! Sprint III !!!!

    * TODO --> Hasta el 1/08 



# CARACTERÍSTICAS MÍNIMAS:

* ! Recuerdo que el proyecto tendrá que tener como mínimo las siguientes características (además de utilizar las tecnologías del bootcamp): 

    * Gestión de usuario (login, registro, validación por e-email, cambio y recuperación password, modificación perfil)

    * Gestión de subida imagenes/files

    * Listado principal de los servicios/productos con filtro/búsqueda y ordenación

    * Detalle del servicio/producto

    * Valoración del servicio/producto (rating, like, …)

    * Gestión de mínimo dos tipos de usuarios (ejemplos: normal y admin, normal y experto, paciente y médico, …)





# LA PLATAFORMA PERMITE (*):


* * USUARIO NO REGISTRADO

    ● Visualizar la landing de la plataforma

    ● Registro (con envío de e-mail de validación)
        ○ e-mail
        ○ username
        ○ contraseña

    ● Login con enlace de recuperación contraseña


* * USUARIO REGISTRADO

    ● Visualización de las tareas en distintos formatos (lista,         calendario mes, calendario
    semana, …)

    ● Búsqueda / filtro por:
        ○ tarea (compra, gym, reunión)
        ○ familia (trabajo, estudios, casa)
        ○ día
        ○ mes
        ○ año

    ● Ordenación por horas, tareas, familias (solo en formato lista)

    ● Gestión del perfil (edición de datos)
        ○ e-mail
        ○ username
        ○ contraseña
        ○ avatar

    ● Creación y modifica tarea:
        ○ color
        ○ descripción
        ○ subtareas
        ○ anotaciones (rendimiento, observaciones, sensaciones, etc)
        ○ asignar un intervalo de tiempo a cada tarea y días que se repita la tarea a lo
        largo de la semana o mes
        ○ clasificar las tareas por familias

    ● Listado de las tareas finalizadas

    ● Las tareas de un intervalo superior a 30 min, finalizarán automáticamente

    ● Las tareas de un intervalo menor a 30 min y las subtareas se finalizarán manualmente

    ● Detalle de una tarea (con sus subtareas)

    ● Eliminación tarea

    ● Evaluación tarea una vez finalizada

    ● Aplazar o adelantar una o todas las tareas del día (semana, mes) simultáneamente

    ● Editar el fondo de la agenda (del día, semana, mes, año)

    ● Añadir, editar o eliminar las anotaciones

    ● Autoevaluación (del día, semana, mes, año) en forma de un gráfico

    ● Recuento de los objetivos alcanzados sobre los propuestos (del
    día, mes, año)


* * USUARIO ADMINISTRADOR

El usuario admin (se creará de forma fija desde código) y, una vez logueado, podrá:

    ● deshabilitar los usuarios inactivos (se le enviará un correo)

    ● rehabilitar un usuario

    ● eliminar un usuario con todas sus tareas


   
(*) El equipo puede añadir y/o modificar los requisitos para personalizar la plataforma y tomar las decisiones
adecuadas en las partes en las cuales no se entra en el detalle.
*/


