# Getting started

There are several things you need to install and configure before starting.

## Install [Homebrew](https://brew.sh/)
``` bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## Install [Git](https://git-scm.com/)
``` bash
brew install git
```

## Install [NodeJS](https://nodejs.org/)
``` bash
brew install node
```

## Install [Yarn](https://yarnpkg.com/)
``` bash
brew install yarn
```

## Install [Docker](https://www.docker.com/)
``` bash
brew cask install docker
```

## Install [TunnelBlick](https://tunnelblick.net/)
``` bash
brew cask install tunnelblick
```

## Install [VScode](https://code.visualstudio.com/)
``` bash
brew cask install visual-studio-code
```

## Configure git with your name and email
``` bash
git config global user.name "First Last" (keep the quotes)
git config global user.email "Email" (keep the quotes)
```

## Generate a SSH key
``` bash
ssh-keygen -t rsa -b 4096 -C <yourname@adevinta.com>
ssh-add ~/.ssh/id_rsa
```

To check if there is an SSH key created, you can run in the terminal

``` bash
ls -al ~/.ssh
```

To know how is the SSH key, you can run in the terminal
```bash
cat ~/.ssh/id_rsa.pub
```

### Tips
- When creating the SSH key from the terminal will request a password, it is advisable not to put any password in the future and in the use of this, do not put the password at every moment.
- When the SSH key is created, it is added - with the second command provided in the first point - to the SSH-Agent, allowing us to remember each of the user's private keys for the duration of the session, so that the user is in charge of performing the authentication. 


## Clone [ADV cli](https://github.mpi-internal.com/cli/adv/)
``` bash
git clone git@github.mpi-internal.com:cli/adv.git
cd adv
./bin/adv-install
source "/Users/<user>/.adv/bin/adv-shell-integration-v1.sh"
```

## Add hosts files
``` bash
sudo vim /etc/hosts
127.0.0.1 regress.yapo.cl
172.21.10.101 registry01.msf.yapo.cl
```
