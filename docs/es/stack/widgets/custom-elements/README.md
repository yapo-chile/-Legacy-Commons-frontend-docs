# Custom Elements

Actualmente -28 de septiembre, 2020- en nuestro stack trabajamos Custom Elements en el proyecto de [Yapo-Widgets](https://github.mpi-internal.com/Yapo/yapo-widgets), uno de los propositos de trabajar así es ir diviendo tareas y/o proyectos los cuales podrían replicarse en el sitio de Yapo, y al mismo tiempo no seguir desarrollando en regress.

Hasta el día de hoy se han trabajado los custom elements con librerías como swiss, haunted, atomic e inclusive se han combinado con Vanilla.

## Como crear un custom element en el repo yapo-widgets

En primera instancia se debe tener el repositorio de [Yapo-Widgets](https://github.mpi-internal.com/Yapo/yapo-widgets) descargado de forma local. 

``` bash
git clone git@github.mpi-internal.com:Yapo/yapo-widgets.git
```
Dentro del repositorio se encontrara la carpeta packages que contiene todos los web components existentes -incluyendo los de experimentación-.

![packages](~@source/assets/custom-elements/packages.png)

Para crear un nuevo custom elements se debe -por ahora- copiar la carpeta de cualquier componente ya existente y volver a copiarla dentro de packages, haciendo el renombramiento correspondiente.
Dentro de la carpeta de los componentes se encontrara -en la mayoría de estas- lo necesario para:
* Crear la funcionalidad requerida.
* Hacer uso de los hooks -según la libreria que se este utilizando-.
* Agregar el component a storybook.
* Realizar los test correspondientes con Jest.

Es necesario cumplir con todos los puntos mencionados anteriormente, ya que es la base para tener y mantener de una forma más fácil y correcta los componentes, al no tratarse de experimentos, pero, si se crean componentes para experimentación no es necesario agregar los test.

### Como crear test

### Como agregar el componente a Storybook

Para documentar el componente en Storybook, se debe modificar, actualizar o crear el archivo README.md dentro de la carpeta de el componente.
Donde se incorporarán datos como: 
* El nombre del componente.
* Supported events.
* Properties: propName, propType, defaultValue, isRequired.
* Usage.
* Instalation.
* Build.
* Entre otros.



## Prerelease

Para poder utilizar nuestro componente dentro de el repositorio de yapo, tenemos dos opciones: crear una prerelease o agregar el componente de manera local en regress.

Para crear la prerelease del componente, se debe estar situado en el root del proyecto y ejecutar desde la consola:
```bash
yarn lerna:prerelease
```
Al realizar esto, en la misma consola nos dará una nueva versión de nuestro componente, en donde nos hara confirmar o negar esta acción. Al confirmarla se puede ir revisando los task en travis y si sale todo bien se podrá utilizar la versión indicada en regress.

![confirmation](~@source/assets/custom-elements/prerelease/confirmation.png)
![confirmation2](~@source/assets/custom-elements/prerelease/confirmation2.png)

:::danger
OJO: por cada cambio que detecte lerna -en mas de un componente- este creara un tag, en este caso y actualmente, no es factible que se publique mas de un tag a la vez.
:::

### Que hacer si se publica mas de un tag?

Se deberá borrar los tag y se volverán a crear.
* Eliminar el tag que se había creado en la prerelease; desde el root de nuestro proyecto, ejecutar en la consola:
```bash
git push origin :nombreTag 
```
* Volver a publicar el tag
```bash
git push origin nombreTag
```
* Como se menciono con anterioridad cada estado del tag se puede ir revisando desde Travis.

### Agregar el componente de manera local en regress

Se recomienda utilizar esta opción cuándo se tienen que realizar cambios menores en el componente.
Situados en la carpeta de nuestro componente se debe ejecutar desde la terminal
```bash
yarn build
```

Dentro de nuestra carpeta>dist, se encontrarán los archivos bundle.

![bundle](~@source/assets/custom-elements/prerelease/bundle.png)

Se recomienda utilizar el archivo bundle.module.js en vez de bundle.legacy.js ya que este último se tiende a caer.
Dentro de nuestro js deberemos copiar todo y pegarlo dentro de la consola, donde se quiere utilizar el componente y aparecerá.

Ejemplo:
![bundle](~@source/assets/custom-elements/prerelease/componenteLocal.png)

En el caso de que la consola nos de error por variables se puede customizar el código copiado:
* En el inicio del código agregamos ( () => { antes de const
* Finalizamos el archivo cerrando nuestra función anónima, }) ();
* Borramos la línea de código // # sourceMappingURL=bundle.module.js.map
* Guardamos y volvemos a pegar el contenido de el archivo .js en la consola.


## Implementación del widget a regress

Actualmente en el repo de Yapo existe una bconf llamada bconf.txt.widgets, la cual se encuentra dentro de conf>common>bconf esta es una bconf global, en la que podemos según componente indicar el número de versión de este.

Al realizar la prerelease del componente este nos indico un número, como primer paso debemos agregar o actualizar el número de versión de nuestro componente en el archivo de bconf.

![bconf](~@source/assets/custom-elements/bconf.png)

Como segundo paso debemos agregar nuestro widget al tmpl donde lo queremos implementar/utilizar.
Entonces agregamos dos script en nuestro tmpl, ej:

``` bash
<script type="module" charset="UTF-8">
	import"https://widgets.yapo.cl/nombre-componente/<%$(widget_nombre.version)%>/bundle.module.js"
</script>
<script nomodule charset="UTF-8" src="//widgets.yapo.cl/nombre-componente/<%$(widget_nombre.version)%>/bundle.legacy.js"></script>
```

Finalizamos agregando nuestro tag, ej:

``` bash
  <da-detail
    date=' 28 septiembre, 2020'
    product-title='titulo x'
    product-price='$ 291.000'
    product-cuota=""
    previous-price='12 UF'
    product-price-uf='10 UF'
  >
  </da-detail>
```

Y con esto ya bastaría para que el componente creado se pueda visualizar correctamente.

