# arq-2020-q1
Universidad de Quilmes - Arquitectura de Software 2020 - Primer Semestre

## Backend

Utiliza **Python 3.8.2** y **django 3.0.6** dependiendo el sistema operativo se instalan desde https://www.python.org/downloads/ y https://www.djangoproject.com/download/ respectivamente.

Una vez instalados ambos programas la aplicación debemos correr las migraciones con el siguiente comando:

`python manage.py migrate`

Esto nos va a crear las tablas en la base de datos en base a las migraciones escritas.
Al estar utilizando SQLite no hay que realizar hacer nada con la Base de Datos ya que viene integrada con Python.

Luego para levantar el servidor utilizaremos:

`python manage.py runserver`

Por defecto se escoge el puerto 8000, pero puede ser modificado agregando el puerto al final del comando.


## Frontend

Utilizando Node superior a la versión **12.17**, debemos utilizar **npm** para instalar la aplicación:

`npm install`

Una vez hecho esto debemos levantar la app en desarrollo con:

`nvm run dev`

Una vez hecho esto podemos encontrar a la aplicación levantada en nuestro puerto 8080
