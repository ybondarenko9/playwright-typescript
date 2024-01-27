# Playwright Typescript Automation framework (Page object model)


## Built With

- [Playwright](https://playwright.dev)
- [Typescript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)

## Installation

Prerequisites:
NodeJS 14(or above) and Java 8 (or above)

- Clone the repo using the below URL
https://github.com/ybondarenko9/typescript-playwright.git
- Navigate to the folder and install npm packages using:
```bash
- npm install
```

- Install Playwright browsers
```bash
- npx @playwright/test install
```

## Usage

- Run all the spec files present in the "./tests" directory by using the below command
```bash
npm run test
```

- To generate allure report 
```bash
npm run test:reporter 
npm run open:allure-report
```

## Docker 
- To run tests in docker containers, install docker and use the below commands to compose the docker image from the docker file;
```bash
docker build -t {give image name} .   
```
- To create the container and launch it use:
```bash
docker run -it -d {same image name as in the previous command}
```
- Check the container is up and running; copy the container id
```bash
docker ps -a 
```
- Login in to the running container 
```bash
docker exec -it {container id} bash
```
- Run the commands as per need in the docker bash;
```bash
npm run test
```

