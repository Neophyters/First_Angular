# TodoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.8.

# Docker:
## Info
- Images: Dockerfile: `docker build -t <image-name>:<tag> .`
- Containers: Small VMs that are made from images: `docker run hello-world`
- Volumes: Hard drive for containers: `docker volume list`
## Installing
- First, install docker engine `sudo apt-get install docker.io -y`
- Second, install docker-compose `sudo apt-get install docker-compose -y`
- Third, install curl for debugging and testing `sudo apt-get install curl -y`
- Finally, install python for test server `sudo apt-get install python3 -y`
## Workflow
- Info:
  - Root of the project is bind mounted in the docker container, which means that local changes are reflected in the container.
  - The web app will show up on `localhost:4200`
  - MongoDB shows up on `mongodb://localhost:27017/`
- Docker Compose:
  - Type in terminal: `docker-compose up`
  - If there are changes to the dependencies you need to rebuild: `docker-compose build todo-app`

# Git: 
# Workflow
- Before working `git fetch --prune`
- If changes, checkout to main + pull `git checkout main && git pull main`

# Adding New Feature
- To create a new working branch `git switch -C <USER-ID>/feature/<description>`

# Putting up a PR
- Commit + test code `git add . && git commit -m "<message>"`
- Push `git push -u origin <current_branch>`
- Go to Github -> Pull Requests `main <-- <your-working-branch>`
- Add Rohan as code reviewers

# Basic Commands
- Adding to commit `git add . && git commit -m "<message>"`
- Viewing Git history `git log --oneline --graph --all`
- Create a Remote Tracking Branch `git branch --track <branch-name> origin/<branch-name>`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
