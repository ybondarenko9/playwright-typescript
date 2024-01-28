# Playwright Typescript Automation framework (Page object model)

## Built With

- [Playwright](https://playwright.dev)
- [Typescript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)

## Installation

Prerequisites:
Node.js 14(or above) and Java 8 (or above)

- Clone the repo using URL
  https://github.com/ybondarenko9/playwright-typescript.git
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

- To run tests in docker containers, install docker and use the below commands to compose the docker image from the
  docker file;

```bash
docker build -t {image name} .   
```

- To create the container and launch it use:

```bash
docker run -it -d {image name}
```

- Check the container is up and running; copy the container id

```bash
docker ps -a 
```

- Login in to the running container

```bash
docker exec -it {container id} bash
```

- Run tests from the docker bash if needed;

```bash
npm run test
```

