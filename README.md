This repo contains the basic testing of homepage and loginpage of https://www.bbc.co.uk/news with the e2e tests written in Cypress.

## Help + Testing

The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

### 1. Install Cypress

[Follow these instructions to install Cypress.](https://on.cypress.io/installing-cypress)

### 2. Run this repo

After cloning this project, run these commands:

```bash 
## cd into the cloned repo
cd cypress-bbc

## install the node_modules
npm install cypress

## open cypress from your root project
npx cypress open
```

[Follow these instructions to open the app] (https://docs.cypress.io/guides/getting-started/opening-the-app#What-you-ll-learn)

### 3. Run the Spec File

1. Select a browser to run E2E Testing 
2. After opening the browser
3. Under E2E specs, select the test files and run them accordingly