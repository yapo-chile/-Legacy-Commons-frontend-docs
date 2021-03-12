# Podium
There are several approaches to working with [microfrontend](https://micro-frontends.org/), but after studying all the benefits we have decided to work with [Podium](https://podium-lib.io).

you can find more information in our [confluence documents](https://confluence.mpi-internal.com/display/YAPO/Podium)

Podium is a library that allows us to build a site by dividing it into segments, for example we can create a header, a content section and a footer, all destined to work together, but developed and executed in isolation.

## Our strategy
We plan to decouple blocket with Podium, how? we'll add a gateway between the user and the site:

![Podium Strategy 1](~@source/assets/podium/podium-strategy.png)
![Podium Strategy 2](~@source/assets/podium/podium-strategy-2.png)

## What have we got?

We have already build a gateway to the Home ([mobile](https://m.yapo.cl/) and [desktop](https://www.yapo.cl/)), Listing ([mobile](https://m.yapo.cl/region_metropolitana) and [desktop](https://www.yapo.cl/region_metropolitana)) and the Adview (mobile and desktop), with diferent adoption rates (still is in testing).

### Status
Page | Repository | Adoption | Status
--- | --- | --- | :---:
Home      | [Layout](https://github.mpi-internal.com/Yapo/podium-layout-home), [Podlet legacy](https://github.mpi-internal.com/Yapo/podium-podlet-home-legacy) | desktop 100%, mobile 100%| success
Adview     | [Layout](https://github.mpi-internal.com/Yapo/podium-layout-adview), [Podlet legacy](https://github.mpi-internal.com/Yapo/podium-podlet-adview-legacy)| desktop 75%, mobile 75%| in progress...
Listing |  [Layout](https://github.mpi-internal.com/Yapo/podium-layout-listing), [Podlet legacy](https://github.mpi-internal.com/Yapo/podium-podlet-listing-legacy) | desktop 100%, mobile 100% | success
Dashboard |    |    | pending

We also created two seed repositories which will allow us to create layout and podlet quickly:

* https://github.mpi-internal.com/Yapo/fe-page-seed
* https://github.mpi-internal.com/Yapo/fe-section-seed (Nuxtjs + Podium-lib)

we already have podlet and layouts in production, this can be seen in the vehicle valuation project https://www.yapo.cl/motores, and soon in the dashboard pack https://www.yapo.cl/dashboard-pack.

## Next Steps
[Done]~~To complete the transition from blocket to podium, we need a seed project that will allow us to build microfrontend easier and faster, so we are now building it, first as a client-side project, and after as a server-side, why? we have now a similar project [altiro-seed](https://github.mpi-internal.com/Yapo/altiro-seed) designed for create [microsites](/yapo/frontend-docs/stack/microsites), and it should be easier to adapt.~~

first approach (Done): [https://github.mpi-internal.com/Yapo/fe-section-header](https://github.mpi-internal.com/Yapo/fe-section-header)