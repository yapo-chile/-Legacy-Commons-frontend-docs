# Stack

## Microsites


## Microservices


## Blocket


## Widgets

### yapo-widgets
#### swiss

### ts-services

### altiro-components

### altiro

### yapo-legacy-fe

Yapo legacy fe es un proyecto creado bajo la necesidad de desacoplar el código 'front' de regress.

En primera instancia y para poder utilizar yapo-legacy-fe se necesita clonar el proyecto en tu computador.
Este proyecto se encuentra en [github](https://github.mpi-internal.com/Yapo/yapo-legacy-fe) y puedes descargarlo con el siguiente comando desde el terminal.
``` bash
git clone git@github.mpi-internal.com:Yapo/yapo-legacy-fe.git
```

Ya dentro de el proyecto y al encontrarse en la respectiva branch, a utilizar, se debe:
- Dentro del terminal ir a la carpeta sass del proyecto, esta se encuentra en root/packages/sass/src/sass.
``` bash
cd packages/sass/src/sass
```
- Actualizar los paquetes del proyecto.
``` bash
yarn
```
- Dentro de la carpeta sass ya se puede ejecutar el proyecto.
``` bash
yarn dev
```

Esto compilará todos los archivos sass y alojará en un server local en el puerto xxxx, adémas de levantar los archivos, este quedara con hotreload; esto significa, que, con cada actualización de un archivo sass, se compilará automáticamente el css que se vea involucrado, por lo que bastaría solamente con recargar la página de blocket donde se estén usando.

Para que que los cambios visuales se vean reflejados, se debe también, sincronizar con el proyecto de Yapo/yapo.cl.

#### Como sincronizar Yapo-legacy-fe con Yapo/yapo.cl

Para poder utilizar Yapo-legacy-fe en conjunto a Yapo/yapo.cl debes tener ambos proyectos descargados en tu computador.

Si no haz descargado los proyectos puedes hacerlos desde [Yapo/yapo.cl](git@github.mpi-internal.com:Yapo/Yapo.cl.git), [Yapo-legacy-fe](https://github.mpi-internal.com/Yapo/yapo-legacy-fe).

Al tener los proyectos en tu máquina local y encontrarte en las respectivas branch, debes:
- Dentro de la carpeta de Yapo.cl, desde el terminal -dentro de regress-, ejecutar
``` bash
make enable-css-redirect
```
Esto habilitará una redirección de todos tus archivos css hacia el host donde tengas yapo-legacy-sass corriendo. Si quieres obtener mas información puedes leer la [documentación](https://confluence.mpi-internal.com/pages/viewpage.action?spaceKey=YAPO&title=Development+with+yapo-legacy-fe).

- ¿Cómo desactivarlo?
``` bash
make disable-css-redirect
```

#### PRE-RELEASE

Se debe realizar pre-release básicamente cada vez que se requiera QA, y así apruebe nuestro Pull Request.

¿Cómo realizar pre-release?
- Dentro del proyecto Yapo-legacy-fe, desde el terminal, situados en el root de este, se debe ejecutar:
``` bash
yarn lerna:prerelease
```
  Al realizar este comando a través de la consola nos indicará la nueva versión de sass y nos pedirá nuestra aprobación (y/n), si está todo bien respondemos con 'y'. En este mismo paso nos indicará la nueva versión de sass. Si quieres obtener mas información puesde leer la [documentación](https://github.com/lerna/lerna) oficial.

- Dentro del proyecto Yapo/yapo.cl agregamos la nueva versión -indicada en el punto anterior- de sass, dentro de el archivo package.json, en el array de "dependencies" - "@yapo-legacy-fe/sass".

- Actualizamos nuestro proyecto de Yapo/yapo.cl, ejecutando a través del terminal, situados en el root:
``` bash 
yarn
```

- Agregamos todos los cambios y los subimos a los respectivos repositorios.


#### MERGE

Al pasar bien todas las revisiones correspondientes al desarrollo realizado, se debe tener en cuenta los siguientes pasos para realizar merge correctamente de ambos proyectos -Yapo-legacy-fe, Yapo/yapo.cl-.
- Primero se debe realizar merge de la rama del proyecto YAPO-LEGACY-FE.
- Esperar la nueva release del proyecto; esto se puede revisar en Travis y/o Github.
- Copiar el número de release.
- Dentro del proyecto YAPO/YAPO.CL, actualizamos el archivo package.json, indicandole el nuevo número de release.
- Ejecutar desde el root del proyecto -desde el editor de código-, 
``` bash
yarn
```
si deseas hacerlo desde el ambiente de regress se debe ejecutar:
``` bash
. artifactory-npm-env.sh && yarn
```
- Se deben subir los cambios -actualización de package.json- del proyecto Yapo/yapo.cl a Github.
- Ya se puede realizar merge de la respectiva branch del proyecto Yapo/yapo.cl.

::: tip
Si se realiza merge a la branch del proyecto Yapo/yapo.cl sin la versión nueva de sass, no hay problema, se puede crear una branch nueva desde el proyecto de Yapo/yapo.cl y ahí añadir la nueva versión de sass, obtenida desde el merge del proyecto Yapo-legacy-fe.
:::

## Experiments


## Tagging

