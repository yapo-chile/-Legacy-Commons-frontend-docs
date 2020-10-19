# Test

## Narcos Test
### Context: 
The NARCOS test suite is a test battery that uses python, selenium webdriver and chrome directly on the machine where the site is hosted (Centos 6.5). This are old tests and the team only can update but not create new test.

### How Run
In order to run the narco tests in your regress container, the site requires some Python dependencies to run them; these can be installed running the following script on the Yapo repo inside the regress container:

```bash
$cd tests && ./install_dependencies.sh
```

After installing the dependencies, you need to start up your selenium stack with adv outside the container (from your home folder) running the command:

```bash
$adv yapo-regress selenium-up
```

Run a Test
```bash
nose name.compplete.of.test
```

### Watch running tests
Dowload tools like: VNC Viewer

use this url: localhost:15901
pass: secret

## Trans Test
The trans tests are used to validate the functionality of most transactions used in the site, and should be checked each time a feature related to trans is added, modified or deleted.

#Steps for testing

1. Go to daemon/trans folder in Yapo.cl
2. Run 
```bash 
make rc rd rs-<nombre de la testsuite>
```

3. Run a test, example:
+ Name of test: **s029-review-accept-refuse.t08-t-review-1_v3.settoken.exec.mail.pgsqldiff**, so you need to run
```bash
make rc rd rs-review-accept-refuse
```

- The team Front-end doesn´t run and touch these tests with exception of the email test.
- More information: https://confluence.mpi-internal.com/display/YAPO/Commands+for+testing#Commandsfortesting-Transtests
