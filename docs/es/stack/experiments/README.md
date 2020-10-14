# Experimentos

### Que es Houston y como funciona

Houston es una plataforma de desarrollo para test _A/A_, _A/B_, _A/B/C_, desarrollada por Adevinta.

Funciona a través de _Feature Flags_, que se podrían considerar como variables para controlar el experimento.

En cada experimento, debe existir al menos un _Feature Flag_, un porcentaje de alocación de usuarios en donde el experimento segmentará a los usuarios entre las variantes, y un estado (se puede dejar agendado, o que sólamente corra, o que parta apagado). También se pueden agregar usuarios QA para forzar que vean alguna variante en especifíca.

Por ahora, Houston sólo funciona en _MSITE_ y _Aplicaciones Móbiles_, aún no hay opción disponible para hacer experimentos en _Desktop_.

A modo de ejemplo, si quisieras probar un botón de contacto más grande, o una fuente específica a una página, o cualquier cosa; podrías hacer un script que emcapsule ese cambio, crear un _feature flag_ haga la inserción o no inserción del script, y verlo en vivo en segundos.


### Entornos de Houston

Actualmente existen 3 entornos:
* Houston Dev
* Houston Pre
* Houston Pro


#### Houston Dev

El entorno de desarrollo de Houston está montado en todos los ambientes dev para msite, es decir, todos los experimentos para msite, se podrían ver en todos los entornos.

```
https://m.dev01.yapo.cl/
https://m.dev02.yapo.cl/
https://m.dev03.yapo.cl/
y así con los demás.
```


#### Houston Pre

Hasta donde se sabe, la versión de pre-producción (STG), no está funcionando.

#### Houston Pro

El entorno de producción carga todos los experimentos en _m.yapo.cl_, así que ojo al empezar un experimento por primera vez, asegúrate de que no se esté rompiendo nada más.


### Información necesaria

#### Feature flags:

Cada feature flag debe contener las siguientes cosas:

- **Name**: cada experimento debe tener al menos un feature flag, así que trata de que el nombre de la variable sea autodescriptivo.
- **Description**: una descripción corta de qué será lo que hará esta variable.
- **Type**: puede ser de tipo  _text_, _number_, _boolean_ o _custom_.
- **Value** este es el valor inicial que tendrá nuestro feature flag, este valor se carga en el sitio indiferente del estado del experimento, así que cuidado con no romper nada.
- **Tenant**: en cuál marketplace se aplicará.
- **Application**: es cual aplicación se cargará.
- **Platform**: en nuestro caso, esta siempre debiese ser _Web_, ya que la otra opción son las aplicaciones móviles.


#### Experimentos:

Cada experimento debe contener lo siguiente:

- **Experiment name**: todo experimento debiese llevar un nombre autodescriptivo.
- **Hypothesis**: es similar a la descripción, pero enfocada en qué es lo que hará el experimento, y que es lo que se espera del mismo (ej: cambiando _x_, esperamos aumentar _y_, o conseguir más leads en _z_).
- **Tenant**: similar al _feature flag_, será el marketplace al que se agregue este experimento.
- **Application**: a que aplicación se cargará este experimento.
- **Platform**: siguiendo la linea de que somos equipo front, por defecto su valor será _Web_.
- **Feature flag**: cual será el _feature flag_ asociado al experimento, en las variantes podremos cambiar el valor de este..
- **N Variants**: se pueden crear _n_ variantes con diferentes valores, según el _feature flag_ que estemos usando.
- **User allocation**: % de usuarios a los que se les mostrará cada variante; puedes setear en 0% si sólo quieres probar con algunos id en _QA users_.
- **QA users**: acá puedes agregar distintos _pulse id_ para forzar a que vean alguna variante en específico (sirve muchísimo al momento de hacer testing, o mostrar progreso con el equipo) ***.
- **State**: siempre está la opción de dejar programado el encendido del experimento, dejarlo corriendo, o mantenerlo en standby (siempre trata de guardar el _id del experimento_ para entregárselo a tu _Product Owner_).

***.
Si necesitas conseguir tu _pulse id_, puedes usar este script en la consola del explorador en todos los ambientes de yapo.
```
pulse(tracker => tracker.getEnvironmentId().then(id => console.log('pulse id', id)))
```