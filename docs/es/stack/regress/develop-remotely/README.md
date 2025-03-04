## Desarrolla remotamente en regress

Hasta este momento, para editar codigo en regress solo hemos tenido las siguientes dos opciones:

- Editar codigo a traves de vim dentro del mismo contenedor
- Conectarnos remotamente via SFTP manteniendo una sincronia entre nuestra versión local y la versión que se encuentra en nuestro contenedor

Como puedes ver, ninguna de de estas opciones nos provee un flujo de desarrollo optimo; La primera nos obliga a ser expertos en el uso de vim, y nos resta las bondades de nuestro IDE, mientras que la segunda nos abre espacio para romper todo si no tenemos cuidado de encontrarnos en la misma rama y commit en ambos ambientes.

Podemos desarrollar unicamente sobre la version de regress que se encuentra en nuestro contenedor, pero accediendo a el mediante el plugin __remote explorer__ de __VSCode__. De esta forma nos deshacemos de la necesidad de una copia local de Yapo.cl, y nos aseguramos de tener solo un codigo fuente.

Al instalar la extension __remote - containers__ en VSCode e intentar conectarnos a nuestro contenedor, encontraremos este error

> /usr/lib/libstdc++.so.6: version GLIBCXX_3.4.18 not found

El contenedor de Yapo.cl posee el sistema operativo CentOS 6.10, y esta version posee versiones de las librerias __libstc++__ y __glibc__ demasiado antiguas. NodeJS no puede funcionar sin __GLIBCXX_3.4.18__.

> Importante: para asegurarte de que tus cambios no rompen el deploy hacia produccion, asegurate de mantener tus cambios en el contenedor solo de forma local.

## instalar versiones posteriores de glibc y libstdc++

Ingresa normalmente a tu contenedor
```bash
adv yapo-regress regress-local
```

Checkea la version de glibc en tu contenedor

```bash 
ldd --version
```
> Necesitarás la version __2.17__ o superior, CentOS 6 posee la __2.12__

Testea si es que tienes la version 3.4.18 de __libstdc++__

```bash
strings /usr/lib64/libstdc++.so.6 | grep GLIBCXX
```

Actualiza glibc

```bash
wget http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-2.17-55.el6.x86_64.rpm
wget http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-common-2.17-55.el6.x86_64.rpm
wget http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-devel-2.17-55.el6.x86_64.rpm
wget http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-headers-2.17-55.el6.x86_64.rpm
wget https://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-utils-2.17-55.el6.x86_64.rpm
wget https://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-static-2.17-55.el6.x86_64.rpm
```

Instala los paquetes
```bash
sudo rpm -Uvh \
    glibc-2.17-55.el6.x86_64.rpm \
    glibc-common-2.17-55.el6.x86_64.rpm \
    glibc-devel-2.17-55.el6.x86_64.rpm \
    glibc-headers-2.17-55.el6.x86_64.rpm \
    glibc-static-2.17-55.el6.x86_64.rpm \
    glibc-utils-2.17-55.el6.x86_64.rpm --force --nodeps
```

Actualiza libstdc++

```bash
wget https://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/gcc-4.8.2-16.3.fc20/libstdc++-4.8.2-16.3.el6.x86_64.rpm
wget https://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/gcc-4.8.2-16.3.fc20/libstdc++-devel-4.8.2-16.3.el6.x86_64.rpm
wget https://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/gcc-4.8.2-16.3.fc20/libstdc++-static-4.8.2-16.3.el6.x86_64.rpm

```

instala los paquetes
```bash
sudo rpm -Uvh \
    libstdc++-4.8.2-16.3.el6.x86_64.rpm \
    libstdc++-devel-4.8.2-16.3.el6.x86_64.rpm \
    libstdc++-static-4.8.2-16.3.el6.x86_64.rpm --force --nodeps
```

Reinicia tu contenedor

> Ejecuta este paso fuera de tu contenedor

```bash 
docker restart <CONTAINER-ID>
```


## Actualiza Git

Luego de comenzar a trabajar remotamente en nustro repositorio, nos encontraremos con esta molesta alerta

![error_git](~@source/assets/regress/error_git.png)

Esto no es exactamente bloqueante en nuestro flujo de trabajo, pero será un problema al momento de usar extensiones de __VSCode__ que usan de Git como __Git Lens__ (para ver quien hiso commit a cada linea) o __Source Control__ (para ver los cambios en nuestra rama local).

Para resolver esto, recomendamos fuertemente __Actualizar Git__

### Actualiza git usando yum


La forma mas rapida con la que puedes actualizar git es usando __yum__ (*yellowdog updater, modified*), el cual ya está instalado en nuestra versión de __CentOS__.

> Copia y pega estos comands dentro de la terminal de tu contenedor para actualizar git

Instal a remote copy of the git's __rpm__ package
Instala le versión remota del paquete __rpm__ de Git.

```bash
sudo yum install http://opensource.wandisco.com/centos/6/git/x86_64/wandisco-git-release-6-1.noarch.rpm
```

Instala el paquete en tu sistema

```bash
sudo yum install git
```
Y Lo hemos logrado!, puedes testear tu versión de Git con el siguiente comando;

```bash
git --version
```