# Summary

Simple memo web app written for the purpose of practicing Angular using a fake DB back-end via JSON-server, with the help of Traversy Media's [Angular Crash Course](https://www.youtube.com/watch?v=3dHNOWTI7H8).

In partivular, the add form/button and memo item and their respectice CSS remain mostly unchanged.

Again, huge thanks to Traversy Media's great tutorial, check him out on [Youtube](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA)!

## What's Different

Removed _double click reminder_ as the function doesn't really fit with memos.

Added _priorities_, and a way to update them via clicking the arrow next to the display.

Added _category selection_, double click on a priority in the left column to select it.

Added _search bar_, searches specific memo item via description.

## To Test

Download all the files.

### Install the Dependencies

`npm install`

### Run JSON Server

`npm run server`

### Run Angular Local Server

`ng serve`
