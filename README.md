# JUGALBANDI API FRONTEND : Frontend for Generic Q&A of Jugalbandi APIs

[Jugalbandi API Frontend](https://jugalbandi-api-frontend-fer6v2lowq-uc.a.run.app/) is the frontend service for the Generic Q&A APIs of the Jugalbandi set of APIs. 

The tech stack mainly includes React with Javascript and also [Ant Design](https://ant.design/components/overview/) as the UI library.

# 🔧 1. Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To use the code, you need to follow these steps:

1. Clone the repository from GitHub:

   ```bash
   git clone git@github.com:OpenNyAI/Jugalbandi-api-frontend.git
   ```

2. The code requires **Node 18 or higher** and the project follows Yarn package system. Go through the official [Node](https://nodejs.org/en/docs) documentation to install Node and Yarn in your respective systems.

3. Once Node is installed, go into the folder and run the following command to install the dependencies:

   ```bash
   yarn install
   ```

This command will install all the dependencies, that are mentioned in **package.json** and create a **node_modules** folder at the root of your project directory.


# 🏃🏻 2. Running

Once the above installation steps are completed, run the following command in the root folder of the repository in terminal, to start the application

```bash
yarn start
```

*yarn start* runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


# 📃 3. Specification and Documentation

### Folder Structure

```
.eslintrc.json
.gitignore
.storybook
   |-- main.js
   |-- preview.js
Dockerfile
README.md
nginx
   |-- nginx.conf
package.json
public
   |-- bot-avatar.png
   |-- favicon.ico
   |-- index.html
   |-- logo192.png
   |-- logo512.png
   |-- manifest.json
   |-- robots.txt
src
   |-- API
   |   |-- Api.js
   |-- App.css
   |-- App.js
   |-- App.test.js
   |-- UuidDatabase.js
   |-- components
   |   |-- BotAvatar.js
   |   |-- Content.js
   |   |-- DocumentTabs.js
   |   |-- DocumentTabs.stories.js
   |   |-- FeedbackButtons.js
   |   |-- Footer.css
   |   |-- Footer.js
   |   |-- Footer.stories.js
   |   |-- Header.css
   |   |-- Header.js
   |   |-- Header.stories.js
   |   |-- Loader.css
   |   |-- Loader.js
   |   |-- Loader.stories.js
   |   |-- UuidInput.js
   |   |-- UuidInput.stories.js
   |   |-- UuidSelect.js
   |   |-- UuidSelect.stories.js
   |-- index.css
   |-- index.js
   |-- reportWebVitals.js
   |-- sample-result.js
   |-- screens
   |   |-- Jugalbandi.js
   |-- setupTests.js
   |-- utlities
   |   |-- ActionProvider.js
   |   |-- Chatbot.js
   |   |-- CustomContext.js
   |   |-- MessageParser.js
   |   |-- config.js
yarn.lock
```
- All the source code is within `/src` folder.

- In the UI:
  - In the left corner, in the dropdown, you can select whether to give a new UUID number or to choose from a list of pre-existing UUID numbers.
  -  the chatbox presents user and bot conversation.
  - in the box on the right hand side, the document is shown along with the highlighted portion from where the bot has taken the response, for a particular question.

    <img src="/public/1.png"/>

<img src="/public/2.png"/>

<img src="/public/3.png"/>

<img src="/public/4.png"/>

<img src="/public/5.png"/>

<img src="/public/6.png"/>

# 🚀 4. Deployment

This repository comes with a Dockerfile which is present in the root of the project directory. You can use this dockerfile to deploy your version of this application to Cloud Run.
Make the necessary changes to your dockerfile with respect to your new changes. (Note: The given Dockerfile will deploy the base code without any error, provided you added the required environment variables (mentioned in the .env file if any) to either the Dockerfile or the cloud run revision).

You can run the following command to to build the application:

```bash
yarn build
```

_`yarn build` builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information._


# 📜🖋 5. Yarn commands

- All the yarn commands like install, start, build, test, etc. are specified inside a file called **package.json**. You can check out and customize the commands in this file.
- Adding package through yarn:

  - To add a new npm package to the project, run the following command:

    ```bash
    yarn add <package-name>
    ```

  - To add a custom package to the project, run the following command:

    ```bash
    yarn add <path_to_custom_package>
    ```

- Removing package through yarn:

  - To remove a npm package from the project, run the following command:

    ```bash
    yarn remove <package-name>
    ```

- Running tests through yarn:

  - To run all the tests, run the following command:

    ```bash
    yarn test
    ```

  - To run a specific test, run the following command:

    ```bash
    yarn test <path_to_test_file>
    ```

- Ejecting through yarn:

  - To eject, run the following command:

    ```bash
    yarn eject
    ```

    **Note: this is a one-way operation. Once you `eject`, you can’t go back!**

    If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

    Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

    You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.   

# 👩‍💻 6. Usage

To directly use the Jugalbandi API Frontend without cloning the repo, you can follow below steps to get you started:

1.  Visit [https://jugalbandi-api-frontend-fer6v2lowq-uc.a.run.app/](https://jugalbandi-api-frontend-fer6v2lowq-uc.a.run.app/).
2.  Now you can go through the application and select any particular document from the dropdown or give a new UUID for a newly uploaded document. You can also generate response for any question regarding a particular document (UUID).
