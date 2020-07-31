# Experimentos 
# NEEDS TRANSLATION (SHAME ON YOU)

### What is Houston and how it works

Houston is a  _A/A_, _A/B_, _A/B/C_ development testing platform made by Adevinta.

The way that it works is through _Feature Flags_, these are like variables to handle inside the experiment itself.

With every experiment, there is at least one Feature Flag, an Allocated Percentage of users where the experiment will apply any of the variants, QA to force check any variant, and a scheduler.

By now, Houston is only running on _MSITE_ and _Apps_, on desktop there is no chance yet to test this kind of things.

As an example, if you want to test a bigger contact button, or a different font in a specific page (or whatever), you can develop the script with the feat, create a feature flag with the insertion and not insertion of the script, and assign every other information; and see it live in seconds.

### Houston environments

There are 3 different environments by now

* Houston Dev
* Houston Pre
* Houston Pro

#### Houston Dev

The development environment of Houston is loaded inside every Yapo dev instance for msite, every experiment should be displayed on every dev environment

```
https://m.dev01.yapo.cl/
https://m.dev02.yapo.cl/
https://m.dev03.yapo.cl/
and so on.
```


#### Houston Pre

As I know, pre environment is not working (?)

#### Houston Pro

The production environment of Houston loads every experiment inside m.yapo.cl, so be careful starting the experiment for the first time to check if it breaks or not.


### How to experiment and necessary stuff

#### Feature flags:

Every feature flag must contain these things:

- **Name**: every experiment would handle a feature flag name, so it must be self explanatory.
- **Description**: a short description of what will this variable do.
- **Type**: the type can be _text_, _number_, _boolean_ or _custom_.
- **Value** this is the initial value for this feature flag, as it exists after every experiment; you should care to not break anything.
- **Tenant**: is in which marketplace this feature flag will be applied.
- **Application**: is in which application will be applied.
- **Platform**: in our case, it should always be _Web_, as the other options are mobile platforms.

#### Experiment:

Every experiment must contain these things:

- **Experiment name**: every experiment must contain a self explanatory name.
- **Hypothesis**: is like a description, but focusing on what will your experiment test do, and how it will achieve something else (eg: by changing _x_, i can get more _y_ or increase _z_).
- **Tenant**: same as feature flag, which marketplace this experiment will be applied.
- **Application**: which application it will be applied.
- **Platform**: as the feature flag before, it should be _Web_ as long as we are the frontend team.
- **Feature flag**: which feature flag will be the control variable.
- **N Variants**: you can add _n_ variants with differents values based on the feature flag used.
- **User allocation**: % allocation of users on every variant. if you're testing, 0% is the best way, including your pulse id on _QA users_.
- **QA users**: here you can asign a pulse id to watch an especific variant (especially for testing purposes) ***.
- **State**: you can schedule or run the experiment whenever you want (please save the experiment id for your _Product Owner_).

***.
You can get your pulse id using this script in your browser console on any yapo site.
```
pulse(tracker => tracker.getEnvironmentId().then(id => console.log('pulse id', id)))
```
