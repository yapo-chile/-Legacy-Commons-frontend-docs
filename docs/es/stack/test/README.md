# Test

## Narcos Test

Para probar un test de narcos, se deben seguir los siguientes pasos:
1. Desde el terminal ejecutar
```bash
adv yapo-regress selenium-up
```
2. Ingresar a la respectiva branch donde se requiere ejecutar el/los test. -recuerda haber realizado make rall.-
3. Ingresar a la carpeta test.
4. Se tienen que instalar las dependencias antes de ejecutar el/los test -dentro de la carpeta test-.
```bash
./install_dependencies.sh
```
5. Ejecutar test.
```bash
nose nombre.completo.del.test
```


## Trans Test

Para probar un test de trans, se deben seguir los siguientes pasos:

1. Entrar a la carpeta daemon/trans.
2. ejecutar 
```bash 
make rc rd rs-<nombre de la testsuite>
````

Ejemplo:
+ Nombre del test: **s029-review-accept-refuse.t08-t-review-1_v3.settoken.exec.mail.pgsqldiff**, entonces se debería ejecutar
```bash
make rc rd rs-review-accept-refuse
```

OJO: no siempre es necesario ejecutar los test de trans, por parte de frontend, a menos que sea neceario.
