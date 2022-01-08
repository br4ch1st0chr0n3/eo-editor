# EO dialect* editor

Created using [Lezer Grammar](https://lezer.codemirror.net/) and [Codemirror 6](https://codemirror.net/6/)

## Try online
* [Here](https://br4ch1st0chr0n3.github.io/eo-editor/)

## Diagnostics
* Rudimentary parser errors

## Differences of this *dialect from EO
* An attribute (or object) name should precede its value when reading left-to-right, top-to-bottom
* Discussed [here](https://github.com/cqfn/eo/issues/568)

## Run
* Install packages and build
    ```sh
    npm i
    npm run build:doc
    ```
* Open in browser `docs/index.html`. E.g.
    ```sh
    firefox docs/index.html
    ```