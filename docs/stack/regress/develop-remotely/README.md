## Develop remotely on regress

Till this day, to develop on regress we only had this two options

- Edit the code with __vim__ on the container's terminal
- Connect remotely to the container via VSCode and keep paired both local and remote repos

As you can see, both cases create problems; The first one forces us to be a vim's seniors, the other one opens room for mistakes working with two codebases.

To solve this problem, we can use plugins on our favourite editor, in this case __remote explorer__ for __Visual Studio Code__. Connecting remotely to our container allow us to use all kind of extensions and helpers of our IDE, while keeping a single font of truth for our codebase.

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