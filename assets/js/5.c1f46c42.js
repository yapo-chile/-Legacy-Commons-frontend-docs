(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{205:function(e,a,s){"use strict";s.r(a);var r=s(0),o=Object(r.a)({},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"yapo-legacy-fe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yapo-legacy-fe","aria-hidden":"true"}},[e._v("#")]),e._v(" Yapo legacy fe")]),e._v(" "),s("h1",{attrs:{id:"needs-translation-shame-on-you"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#needs-translation-shame-on-you","aria-hidden":"true"}},[e._v("#")]),e._v(" NEEDS TRANSLATION (SHAME ON YOU)")]),e._v(" "),s("p",[e._v("Yapo legacy fe es un proyecto creado bajo la necesidad de desacoplar el código 'front' de regress.")]),e._v(" "),s("p",[e._v("En primera instancia y para poder utilizar yapo-legacy-fe se necesita clonar el proyecto en tu computador.\nEste proyecto se encuentra en "),s("a",{attrs:{href:"https://github.mpi-internal.com/Yapo/yapo-legacy-fe",target:"_blank",rel:"noopener noreferrer"}},[e._v("github"),s("OutboundLink")],1),e._v(" y puedes descargarlo con el siguiente comando desde el terminal.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone git@github.mpi-internal.com:Yapo/yapo-legacy-fe.git\n")])])]),s("p",[e._v("Ya dentro de el proyecto y al encontrarse en la respectiva branch, a utilizar, se debe:")]),e._v(" "),s("ul",[s("li",[e._v("Dentro del terminal ir a la carpeta sass del proyecto, esta se encuentra en root/packages/sass/src/sass.")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" packages/sass/src/sass\n")])])]),s("ul",[s("li",[e._v("Actualizar los paquetes del proyecto.")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("yarn\n")])])]),s("ul",[s("li",[e._v("Dentro de la carpeta sass ya se puede ejecutar el proyecto.")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("yarn dev\n")])])]),s("p",[e._v("Esto compilará todos los archivos sass y alojará en un server local en el puerto xxxx, adémas de levantar los archivos, este quedara con hotreload; esto significa, que, con cada actualización de un archivo sass, se compilará automáticamente el css que se vea involucrado, por lo que bastaría solamente con recargar la página de blocket donde se estén usando.")]),e._v(" "),s("p",[e._v("Para que que los cambios visuales se vean reflejados, se debe también, sincronizar con el proyecto de Yapo/yapo.cl.")]),e._v(" "),s("h4",{attrs:{id:"como-sincronizar-yapo-legacy-fe-con-yapo-yapo-cl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#como-sincronizar-yapo-legacy-fe-con-yapo-yapo-cl","aria-hidden":"true"}},[e._v("#")]),e._v(" Como sincronizar Yapo-legacy-fe con Yapo/yapo.cl")]),e._v(" "),s("p",[e._v("Para poder utilizar Yapo-legacy-fe en conjunto a Yapo/yapo.cl debes tener ambos proyectos descargados en tu computador.")]),e._v(" "),s("p",[e._v("Si no haz descargado los proyectos puedes hacerlos desde "),s("a",{attrs:{href:"git@github.mpi-internal.com:Yapo/Yapo.cl.git"}},[e._v("Yapo/yapo.cl")]),e._v(", "),s("a",{attrs:{href:"https://github.mpi-internal.com/Yapo/yapo-legacy-fe",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yapo-legacy-fe"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("Al tener los proyectos en tu máquina local y encontrarte en las respectivas branch, debes:")]),e._v(" "),s("ul",[s("li",[e._v("Dentro de la carpeta de Yapo.cl, desde el terminal -dentro de regress-, ejecutar")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" enable-css-redirect\n")])])]),s("p",[e._v("Esto habilitará una redirección de todos tus archivos css hacia el host donde tengas yapo-legacy-sass corriendo. Si quieres obtener mas información puedes leer la "),s("a",{attrs:{href:"https://confluence.mpi-internal.com/pages/viewpage.action?spaceKey=YAPO&title=Development+with+yapo-legacy-fe",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentación"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("ul",[s("li",[e._v("¿Cómo desactivarlo?")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" disable-css-redirect\n")])])]),s("h4",{attrs:{id:"pre-release"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pre-release","aria-hidden":"true"}},[e._v("#")]),e._v(" PRE-RELEASE")]),e._v(" "),s("p",[e._v("Se debe realizar pre-release básicamente cada vez que se requiera QA, y así apruebe nuestro Pull Request.")]),e._v(" "),s("p",[e._v("¿Cómo realizar pre-release?")]),e._v(" "),s("ul",[s("li",[e._v("Dentro del proyecto Yapo-legacy-fe, desde el terminal, situados en el root de este, se debe ejecutar:")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("yarn lerna:prerelease\n")])])]),s("p",[e._v("Al realizar este comando a través de la consola nos indicará la nueva versión de sass y nos pedirá nuestra aprobación (y/n), si está todo bien respondemos con 'y'. En este mismo paso nos indicará la nueva versión de sass. Si quieres obtener mas información puesde leer la "),s("a",{attrs:{href:"https://github.com/lerna/lerna",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentación"),s("OutboundLink")],1),e._v(" oficial.")]),e._v(" "),s("ul",[s("li",[s("p",[e._v('Dentro del proyecto Yapo/yapo.cl agregamos la nueva versión -indicada en el punto anterior- de sass, dentro de el archivo package.json, en el array de "dependencies" - "@yapo-legacy-fe/sass".')])]),e._v(" "),s("li",[s("p",[e._v("Actualizamos nuestro proyecto de Yapo/yapo.cl, ejecutando a través del terminal, situados en el root:")])])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("yarn\n")])])]),s("ul",[s("li",[e._v("Agregamos todos los cambios y los subimos a los respectivos repositorios.")])]),e._v(" "),s("h4",{attrs:{id:"merge"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#merge","aria-hidden":"true"}},[e._v("#")]),e._v(" MERGE")]),e._v(" "),s("p",[e._v("Al pasar bien todas las revisiones correspondientes al desarrollo realizado, se debe tener en cuenta los siguientes pasos para realizar merge correctamente de ambos proyectos -Yapo-legacy-fe, Yapo/yapo.cl-.")]),e._v(" "),s("ul",[s("li",[e._v("Primero se debe realizar merge de la rama del proyecto YAPO-LEGACY-FE.")]),e._v(" "),s("li",[e._v("Esperar la nueva release del proyecto; esto se puede revisar en Travis y/o Github.")]),e._v(" "),s("li",[e._v("Copiar el número de release.")]),e._v(" "),s("li",[e._v("Dentro del proyecto YAPO/YAPO.CL, actualizamos el archivo package.json, indicandole el nuevo número de release.")]),e._v(" "),s("li",[e._v("Ejecutar desde el root del proyecto -desde el editor de código-,")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("yarn\n")])])]),s("p",[e._v("si deseas hacerlo desde el ambiente de regress se debe ejecutar:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v(".")]),e._v(" artifactory-npm-env.sh "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" yarn\n")])])]),s("ul",[s("li",[e._v("Se deben subir los cambios -actualización de package.json- del proyecto Yapo/yapo.cl a Github.")]),e._v(" "),s("li",[e._v("Ya se puede realizar merge de la respectiva branch del proyecto Yapo/yapo.cl.")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("Si se realiza merge a la branch del proyecto Yapo/yapo.cl sin la versión nueva de sass, no hay problema, se puede crear una branch nueva desde el proyecto de Yapo/yapo.cl y ahí añadir la nueva versión de sass, obtenida desde el merge del proyecto Yapo-legacy-fe.")])])])},[],!1,null,null,null);a.default=o.exports}}]);