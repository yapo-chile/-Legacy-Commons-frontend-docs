# Podium
Existen varias maneras para trabajar con [microfrontend](https://micro-frontends.org/), pero después de estudiar los beneficios decidimos trabjar con [Podium](https://podium-lib.io).

tu puedes encontrar más información en nuestros [documentos de confluence](https://confluence.mpi-internal.com/display/YAPO/Podium)

Podium es una librería que nos permite construir un sitio dividido en segmentos. Por ejemplo, podemos crear una cabecera, una sección de contenido y un pie de página, todos destinados para trabajar juntos, pero desarrollados y ejecutados de manera aislada.

## Nuestra estrategia
Planeamos desacoplar Blocket con Podium, ¿cómo? agregaremos un puente entre el usuario y el sitio:

![Podium Strategy 1](~@source/assets/podium/podium-strategy.png)
![Podium Strategy 2](~@source/assets/podium/podium-strategy-2.png)

## Y ahora ¿Qué tenemos?
Ya hemos construido un `gateway` para el `home`([mobile](https://m.yapo.cl/) y [desktop](https://www.yapo.cl/)), `listing` ([mobile](https://m.yapo.cl/region_metropolitana) y [desktop](https://www.yapo.cl/region_metropolitana)) y el `adview` (mobile y desktop), con distintas tasas de adopción (aún están en pruebas).

### Estado
Página | Repositorio | Adopción | Estado
--- | --- | --- | :---:
Home      | [Layout](https://github.mpi-internal.com/Yapo/podium-layout-home), [Podlet legacy](https://github.mpi-internal.com/Yapo/podium-podlet-home-legacy) | desktop 100%, mobile 100%| listo
Adview     | [Layout](https://github.mpi-internal.com/Yapo/podium-layout-adview), [Podlet legacy](https://github.mpi-internal.com/Yapo/podium-podlet-adview-legacy)| desktop 75%, mobile 75%| en progreso...
Listing |  [Layout](https://github.mpi-internal.com/Yapo/podium-layout-listing), [Podlet legacy](https://github.mpi-internal.com/Yapo/podium-podlet-listing-legacy) | desktop 100%, mobile 100% | listo
Dashboard |    |    | pending

además creamos dos repositorios semilla los cuales nos permitirán crear layout y podlet rápidamente:

* https://github.mpi-internal.com/Yapo/fe-page-seed
* https://github.mpi-internal.com/Yapo/fe-section-seed (Nuxtjs + Podium-lib)

ya tenemos puesto en producción podlet y layouts, esto lo podemos ver en el proyecto de tasación en vehículo https://www.yapo.cl/motores, y próximamente en dashboard pack https://www.yapo.cl/dashboard-pack

## Siguientes pasos

[Hecho] ~~Para completar la transición desde `Blocket` hacia `Podium`, necesitamos un proyecto semilla, que nos permita construir `microfrontend` más fácil y rápido, por lo mismo, estamos construyéndolo, primero como un proyecto `client-side` y luego un proyecto `server-side`, ¿Por qué? ahora tenemos un proyecto similar [altiro-seed](https://github.mpi-internal.com/Yapo/altiro-seed) diseñado para crear [microsites](/yapo/frontend-docs/stack/microsites), entonces debiese ser más simple de adaptar.~~

Primer acercamiento (Hecho): [https://github.mpi-internal.com/Yapo/fe-section-header](https://github.mpi-internal.com/Yapo/fe-section-header)