## Develop remotely on regress

Till this day, to develop on regress we only had this two options

- Edit the code with __vim__ on the container's terminal
- Connect remotely to the container via VSCode and keep paired both local and remote repos

As you can see, both cases create problems; The first one forces us to be a vim's seniors, the other one opens room for mistakes working with two codebases.

To solve this problem, we can use plugins on our favourite editor, in this case __remote explorer__ for __Visual Studio Code__. Connecting remotely to our container allow us to use all kind of extensions and helpers of our IDE, while keeping a single font of truth for our codebase.

## Updating OS libraries

> Note, if you are reading this after january 2021, its safe for you jump to __Install and use remote - containers extension__

To this point everything sounds so cool right?, but putting this on practice you will find this:
![error_container](~@source/assets/regress/error_container.png)

I know, i know... such a creepy log. we must keep with this:


> /usr/lib/libstdc++.so.6: version GLIBCXX_3.4.18 not found


This means that Yapo.cl's container, which is based on __CentOS 6.10__ is too old to have the versions of __libstdc++__ and __glibc__ which are required by __NodeJS__ to work properly. Exactly, we need __GLIBCXX_3.4.18__.

So, let's start! first of all you must enter to your container like a normal day

```bash
adv yapo-regress regress-local
```

Once we're on the image's terminal, we can check the version of glibc with this command:

```bash 
ldd --version
```

>We need the version __2.17__ or superior, CentOS has the __2.12__

To get this, we just have to get the __rpm__ packages from a trusty source, and then install it.

first download all glibc related libraries

```bash
wget http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-2.17-55.el6.x86_64.rpm
wget http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-common-2.17-55.el6.x86_64.rpm
wget http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-devel-2.17-55.el6.x86_64.rpm
wget http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-headers-2.17-55.el6.x86_64.rpm
wget https://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-utils-2.17-55.el6.x86_64.rpm
wget https://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-static-2.17-55.el6.x86_64.rpm
```
And install all in once with a single command

```bash
sudo rpm -Uvh \
    glibc-2.17-55.el6.x86_64.rpm \
    glibc-common-2.17-55.el6.x86_64.rpm \
    glibc-devel-2.17-55.el6.x86_64.rpm \
    glibc-headers-2.17-55.el6.x86_64.rpm \
    glibc-static-2.17-55.el6.x86_64.rpm \
    glibc-utils-2.17-55.el6.x86_64.rpm --force --nodeps
```

Do the same with the libstdc++ related libraries

```bash
wget https://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/gcc-4.8.2-16.3.fc20/libstdc++-4.8.2-16.3.el6.x86_64.rpm
wget https://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/gcc-4.8.2-16.3.fc20/libstdc++-devel-4.8.2-16.3.el6.x86_64.rpm
wget https://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/gcc-4.8.2-16.3.fc20/libstdc++-static-4.8.2-16.3.el6.x86_64.rpm
```

Install like the last ones

```bash
sudo rpm -Uvh \
    libstdc++-4.8.2-16.3.el6.x86_64.rpm \
    libstdc++-devel-4.8.2-16.3.el6.x86_64.rpm \
    libstdc++-static-4.8.2-16.3.el6.x86_64.rpm --force --nodeps
```

And we're done! now you just must to restart your container

> Do this outside your image's terminal

```bash 
docker restart <YOUR-CONTAINER-ID>
```

## Update git

After making our repository work locally, we're going to find this ugly alert

![error_git](~@source/assets/regress/error_git.png)

This isn't exactly blocking our flow, but it's a problem as we're unable to use __Git__ related extensions like __Git Lens__ (to see who committed each line) or __Source Control__ (to see changes on our local branch).

To solve this, we strongly recommend to __Update Git__.

### Update git with Yum package manager

The faster you can update your container's git version is using __yum__ (*yellowdog updater, modified*), which is already installed on our __CentOS__ version.


> Copy and paste the commands inside your container's terminal to update git

Instal a remote copy of the git's __rpm__ package

```bash
sudo yum install http://opensource.wandisco.com/centos/6/git/x86_64/wandisco-git-release-6-1.noarch.rpm
```

Install the package in your container

```bash
sudo yum install git
```

And we're done! you can test your git version with this command:

```bash
git --version
```

## install and use _remote - containers_ extension

Being on any folder of VSCode, open the __Extensions tab__ ( __shift__ + __command__ + __x__ ). And search for __Remote - Containers__

![remote_containers](~@source/assets/regress/remote_containers.png)

Press install and the extension will be enable on your editor.

### Open Docker container on VSCode

Once the extension is installed, you will see the __Remote Explorer__ option on sidebar.

![remote_explorer](~@source/assets/regress/remote_explorer.png)

Press this option and you will see a tab with the list of avaliable containers in your machine

![container_list](~@source/assets/regress/container_list.png)

Hover above container's name and you will see two buttons; One is to attach to container and the another one is to delete it. Press ```Attach to container```

![attach](~@source/assets/regress/attach.png)

> The first time you enter, VSCode will make you choose the folder inside the container you will work in. For our case, **Yapo.cl**.

### Use VSCode with ISO 8851-1
Inside of your VSCode's container, enter to options ( __command__ + __,__ ), choose your container tab an define ```files.encoding``` as ```ISO 8859-1```

![configs](~@source/assets/regress/configs.png)

### ISO 8859-1 on terminal

The regress command ```make rall``` will fail unless you're using the right encoding, you can set it via bash with the nex command on your container's terminal.

```bash
echo "export LANG=en_US.ISO-8859-1" >> ~/.bashrc
```

This commands added a new line into ```~/.bashrc```. If you use another shell, or you desire a more custom implementation, you can edit bash manually.

Excecute to update terminal

```bash
source ~/.bashrc
```

That's all! With this steps you can develop and excecute regress commands on a single **codebase**.
