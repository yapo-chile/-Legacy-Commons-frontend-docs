# Blocket

This doc aims to develop locally on blocket

## index

- What blocket is.
- Installing blocket from **yapo-regress**.
- Develop remotely with **remote: containers** VSCode extension.

### What blocket is

Some oldish backend idk i'm not a sysadmin

### Lift a yapo-regress docker environment

Actually, the confluence link is pretty good

### Use yapo-regress remotely

List your GLIBC versions
```bash
sudo strings /usr/lib64/libstdc++.so.6 | grep GLIBCXX
```

If you try to install libstd you will get this error

```bash
Error: Package: libstdc++-4.8.5-39.el7.x86_64 (/libstdc++-4.8.5-39.el7.x86_64)
Requires: libc.so.6(GLIBC_2.14)(64bit)
 You could try using --skip-broken to work around the problem
 You could try running: rpm -Va --nofiles --nodigest
```
That's saying to us that we need **GLIBC_2.14**

Install Development tools

```bash 
sudo yum install "Development tools"
```

Then, install glibc
```bash
sudo yum install glibc-devel.i686 glibc.i686
```

Thats where it becomes __hacky__, a lot of fonts advise us about the risk of building ourselves such a..., we will do it anyway.


Enter to /tmp directory
```bash
cd /tmp
```

Fetch the glibc_2.14 package using **wget**

```bash
wget http://ftp.gnu.org/gnu/glibc/glibc-2.14.tar.gz
```
Uncompress the downloaded package
```bash
tar xvxf glibc-2.14.tag.gz
```
Let it do its job, if everithing ok, then will create a folder with the name of the uncompressed package

```bash
cd glibc-2.14
```
Create a folder where we will build our package and position on it.
```bash
mkdir glibc-build
cd glibc-build
```
Excecute the following instruction
```bash
../configure --prefix='/opt/glibc-2.18'
```
This take a little long too, let it work...

Before excecuting the installation, we need to fix a a script

```
vi ../scripts/test-indallation.pl
```

- change if `(/$ld_so_name/)`  
- to if `(/\Q$ld_so_name\E/)`

Save it and hit!

```bash
make
make install
```
> This will take reeeeeally long, first time i fell asleep before it ended.





