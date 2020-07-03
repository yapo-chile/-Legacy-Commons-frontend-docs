# Empezando 

Hay varias cosas que necesitas instalar y configurar antes de empezar.

## Instalar [Homebrew](https://brew.sh/)
``` bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## Instalar [Git](https://git-scm.com/)
``` bash
brew install git
```

## Instalar [NodeJS](https://nodejs.org/)
``` bash
brew install node
```

## Instalar [Yarn](https://yarnpkg.com/)
``` bash
brew install yarn
```

## Instalar [Docker](https://www.docker.com/)
``` bash
brew cask install docker
```

## Instalar [TunnelBlick](https://tunnelblick.net/)
``` bash
brew cask install tunnelblick
```

## Instalar [VScode](https://code.visualstudio.com/)
``` bash
brew cask install visual-studio-code
```

## Configurar Git con tu nombre e email
``` bash
git config global user.name "First Last" (keep the quotes)
git config global user.email "Email" (keep the quotes)
```

## Generar una clave SSH 
``` bash
ssh-keygen -t rsa -b 4096 -C <yourname@adevinta.com>
ssh-add ~/.ssh/id_rsa
```

Para revisar si existe una clave SSH creada, puedes ejecutar en el terminal

``` bash
ls -al ~/.ssh
```

Para saber cual es la clave SSH generada, puedes ejecutar en el terminal
```bash
cat ~/.ssh/id_rsa.pub
```

### Tips
- Al crear la clave SSH desde la terminal solicitara una contraseña, es recomendable no poner ninguna contraseña para que en el futuro y en la utilizacion de esta, no coloques en cada momento la contraseña.
- Al crear la clave SSH se agrega -con el segundo comando previsto en el primer punto-, al SSH-Agent, esto permitiendonos recordar mientras dure la sesión cada una de las claves privadas del usuario, de modo que este se encarga de realizar la autenticación. 

## Clonar [ADV cli](https://github.mpi-internal.com/cli/adv/)
``` bash
git clone git@github.mpi-internal.com:cli/adv.git
cd adv
./bin/adv-install
source "/Users/<user>/.adv/bin/adv-shell-integration-v1.sh"
```

## Agregar archivos hosts
``` bash
sudo vim /etc/hosts
127.0.0.1 regress.yapo.cl
172.21.10.101 registry01.msf.yapo.cl
```
