# Yapo legacy FE

Yapo legacy FE (Front-End) is a project created under the need to decouple the front code from regress.

To get started with it, clone the [github](https://github.mpi-internal.com/Yapo/yapo-legacy-fe) repository.

``` bash
git clone git@github.mpi-internal.com:Yapo/yapo-legacy-fe.git
```

Then, update the project packages
``` bash
cd yapo-legacy-fe/packages/sass/src/sass
yarn
```

Now, in the same folder you can run the project.
``` bash
yarn dev
```

This will compile and serve all the sass files under the port 10001, with hot-reload, meaning that every saved change in a file will automatically update the involved css files, so you can see those changes by simply reloading the page.

For all the visual changes to be reflected, you must also syncronize Yapo Legacy Fe with the Yapo/yapo.cl project.

#### How to syncronize Yapo legacy Fe with Yapo/yapo.cl

To start using Yapo legacy FE alongside Yapo/yapo.cl you must have both projects cloned. You can visit the repositories here: [Yapo/yapo.cl](git@github.mpi-internal.com:Yapo/Yapo.cl.git), [Yapo Legacy FE](https://github.mpi-internal.com/Yapo/yapo-legacy-fe)

Now you have to move to your regress environment (you can learn about regress [here](https://confluence.mpi-internal.com/pages/viewpage.action?spaceKey=YAPO&title=Yapo+Regress)), run the following command:

``` bash
make enable-css-redirect
```

This will enable the redirection of al your css files to the host where yapo-legacy-sass is running. You can read the [documentación](https://confluence.mpi-internal.com/pages/viewpage.action?spaceKey=YAPO&title=Development+with+yapo-legacy-fe) for more information. 

- How to desactivate it?
``` bash
make disable-css-redirect
```

#### PRE-RELEASE

When you are ready to test your changes, you will need to make a pre-release so your changes can be aproved.

How to make a pre-release?
- On the root Yapo legay FE directory, run the following command:
``` bash
yarn lerna:prerelease
```
This will make a new lerna pre-release. The console will print the new version, and will ask for your approval (y/n) to continue. If everything is ok, answer with 'y'. For further information about lerna, you can read the official [documentation](https://github.com/lerna/lerna).

- Now we add the new sass version (the one printed as output in the previous step) in the Yapo/yapo.cl project, by updating the dependencies array in the package.json file: - "@yapo-legacy-fe/sass".

- Update the Yapo/yapo.cl project, by running the following command at the root of the project:
``` bash 
yarn
```

- Finally, upload the changes to their respective repositories.


#### MERGE

This section needs to be revisited due to the recent changes to the deployment process.