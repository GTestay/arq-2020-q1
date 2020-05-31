# arq-2020-q1
Universidad de Quilmes - Arquitectura de Software 2020 - Primer Semestre 


# Instalación 
## Backend
Originalmente el backend fue creado utilizando: *https://start.spring.io/*

### Requisitos:
* Tener *[maven](https://maven.apache.org/)* descargado. 
* Tener bajada la [JDK](https://www.java.com/es/download/) (openJDK u oracle) más actual ya que este proyecto utiliza *Kotlin* en versión 11.
* Para poder levantar la DB utilicé *[docker](https://docs.docker.com/get-docker/)*, y *[docker-compose](https://docs.docker.com/compose/install/)* para levantar el container

### Uso 
Agregar en las `application.properties` la conexión a postgresql (si no, utilizara H2 por defecto), esto está así para que sea configurable por el usuario y no sea **público**.
ejecutar `docker-compose up` en la carpeta */db*
`mvn clean install`
`mvn spring-boot:run` <- levanta la app de forma local.
o
`java -jar target/<nombre-del-jar>.jar` <- levanta el jar con la app ya buildeada.


## Frontend
### Requisitos:
* Tener [yarn](https://classic.yarnpkg.com/en/docs/cli/install/) (en mi caso, aunque NPM también sirve).
* Tener [NodeJS](https://nodejs.org/es/)
* Para [VueJS](https://vuejs.org/), seguí la [guía oficial]( https://vuejs.org/v2/guide/installation.html).

### Uso:
`yarn global add @vue/cli` 
`yarn install`
`yarn serve` levanta la app de forma local 
