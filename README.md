
# TodoCern

## Usage
Application can be used by running **npm start**

## Dependency
This project uses :

- Angular Material for components / design

- Ngx Toastr for notification

- Subsink to manage the unsubscribing of Observable easily

CERN font and CERN colours are used. Angular Material theme was generated using CERN colours.

( https://design-guidelines.web.cern.ch/guidelines/colours )

( https://design-guidelines.web.cern.ch/guidelines/web-fonts )



## Architecture
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

## Possible evolution
- Use datepicker on task new / edit components. Put a minimal date value to today in html and using form Validator
- Allow drag and drop on tasks list to handle the task finish's statu using Angular Drag and Drop
- Implement on home page a panel displaying the tasks that will soon expire.
- Display form error on html (today, only the validate button is disabled)
