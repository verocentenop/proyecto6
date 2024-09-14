# Proyecto 6

Este es mi proyecto 6. En él trabajo por primera vez con una BBDD de Mongo Atlas y creo colecciones con datos relacionados entre ellos, haciendo peticiones a través de Insomnia y comprobando el funcionamiento de cada uno de los elementos del CRUD.

Está basado en elementos base del fútbol. Lo componen 3 colecciones, Ligas, Clubes y Jugadores. Están organizados y entrelazados por diversos recursos que comparten entre ellos.

## Tabla de Contenidos
1. [Instalación](#instalación)
2. [Uso](#uso)
3. [Características](#características)
4. [Configuración](#configuración)
5. [Contribuir](#contribuir)
8. [Contacto](#contacto)

## Instalación

Instrucciones para instalar el proyecto.
```bash
- Clonar el repositorio
git clone https://github.com/verocentenop/proyecto6.git

- Entrar al directorio del proyecto
cd proyecto6
``` 

## Uso
```bash
- Comando para iniciar el proyecto:
npm run dev
npm run seed (para ejecutar la semilla)

- Ejemplos de rutas para hacer gestiones:
CLUBES:
http://localhost:3000/api/v1/clubes/pais/Inglaterra (país)
http://localhost:3000/api/v1/clubes/66d5918092d5fb956bdb945f (ID)

JUGADORES:
http://localhost:3000/api/v1/jugadores/posicion/MCO (posición)
http://localhost:3000/api/v1/jugadores/edad/24 (edad)

LIGAS:
http://localhost:3000/api/v1/ligas/clubes/FC%20Barcelona (nombre de club)
http://localhost:3000/api/v1/ligas/pais/Alemania (país )

``` 
## Características
- Se pueden solicitar datos por ID, país, nombre, club o posición.
- Cada colección tiene un CRUD completo.
- El elemento Seeds envía datos a la colección de jugadores.

## Configuración
Los datos sensibles están configurados en un .env tratado con .gitignore

## Contacto
Información de contacto para preguntas o comentarios.

- **Email**: verocentenop@gmail.com
- **GitHub**: verocentenop
