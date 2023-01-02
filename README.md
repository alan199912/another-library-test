# NgxObelisco

[![Versión de Obelisco en npm](https://img.shields.io/npm/v/@alan199912/library-test?label=NgxObelisco%20en%20npm&logo=npm)](https://www.npmjs.com/package/@alan199912/library-test)
![Deploy storybook](https://github.com/gcba/ngx-obelisco/workflows/Build%20and%20Deploy/badge.svg?branch=main)

NgxObelisco es una libreria de Angular basado en el sistema de diseño Obelisco y en componentes para los productos digitales de la ciudad de Buenos Aires.

### [Ver la documentación de componentes](https://gcba.github.io/estandares/componentes/web//).

## Cómo usarlo

NgxObelisco se distribuye por medio del [paquete publicado en npm](https://www.npmjs.com/package/@alan199912/library-test).
Es recomendable usar este sistema para definir la versión a usar y poder actualizarla fácilmente.

### Instalación

Para instalarlo en un proyecto que ya usa npm, hay que ejecutar:

```js
npm install @alan199912/library-test
```

## Cómo importarlo

Obelisco cuenta de dos partes principales que se pueden importar de varias formas.

### Iconografía

Obelisco utiliza la librería de Boxicons que se puede instalar de las siguientes maneras:

Utilizando el paquete npm:

```js
npm install boxicons
```

Para utilizarlas con su CDN podemos hacerlo de la siguiente forma:

```html
<link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />
```

Importando en el archivo angular.json de la siguiente manera:

```json
"styles": [
  "src/styles.scss",
  "node_modules/boxicons/css/boxicons.min.css"
],
```

### Tipografías

Obelisco requiere las tipografías **Nunito** y **Open sans** disponibles en google fonts, para utilizarlas con su CDN podemos hacerlo de la siguiente forma:

```html
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap" rel="stylesheet"></link>
```

### Estilos

Para importar el scss, podemos hacerlo en el archivo angular.json de la siguiente forma:

```json
"styles": [
  "src/styles.scss",
  "node_modules/ngx-obelisco/src/lib/scss/obelisco.scss"
]
```

### Javascript

Como NgxObelisco está construido sobre Obelisco y bootstrap 4, [debemos tener esas dependencias](https://getbootstrap.com/docs/4.6/getting-started/introduction/#js).

Un ejemplo de cómo importalas en index.html es:

```js
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
```

> **Importante** <br>
> Revisá las [versiones y herramientas aceptadas](https://asijira-confluence.buenosaires.gob.ar/display/ASI/Versiones++y+Herramientas+aceptadas+por+la+ASI) por la **Agencia de Seguridad Informática (ASI)** del Gobierno de la Ciudad antes de elegir una versión de estas dependencias.

## Mantenimiento y colaboración

El mantenimiento y desarrollo de Obelisco lo hace el equipo de la Dirección General de Experiencia Digital, pero lo utilizan tanto equipos de gobierno como proveedores externos.

Para agilizar y hacer más transparente el proceso, cualquier persona puede [contribuir de varias formas](CONTRIBUTING.md).
