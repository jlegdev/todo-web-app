# TodoCern

# Usage
Application can be used by running **npm start**

# Dependency
This project uses :

- Angular Material for components / design

- Ngx Toastr for notification

- Subsink to manage the unsubscribing of Observable easily

CERN font and CERN colours are used. Angular Material theme was generated using CERN colours.

( https://design-guidelines.web.cern.ch/guidelines/colours )

( https://design-guidelines.web.cern.ch/guidelines/web-fonts )



# Architecture
directories :

- api : services for data api

- components : components of application

- core : core components (navbar) and http interceptor

- model : enum and model files

- shared : ui components and services

Two modules are available:

- The first is the app module which contains home's components.

- The second is the category module, its lazy loaded when routing on Category View.

Components follow the container / presentation design
