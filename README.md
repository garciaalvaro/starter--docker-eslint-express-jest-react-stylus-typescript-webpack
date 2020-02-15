![Banner Image](docs/banner.png)

# Starter

This is a custom starter project with the minimum configuration to start development. It includes:

- An express server
- Webpack configuration
- React
- TypeScript
- Stylus for the CSS
- Jest and Enzyme configuration
- Eslint and Prettier configuration
- Docker configuration

---

## Getting Started

### Installing and running

From the root directory inside your terminal follow this steps:

1. Replace the project name `starter--docker-eslint-express-jest-react-stylus-typescript-webpack` with your custom name
2. Replace the port `7000` with your custom port
3. Install the dependencies: `$ npm install`
4. Start Webpack and the server in development mode: `$ npm start`
5. Visit http://localhost:7000 (or your custom port from step 2) in your browser

### Scripts included

Now the project should be ready. The following are the provided scripts:

- `$ npm start` Start Webpack and the server in development mode
- `$ npm test` This will run type check, lint check, prettier check and Jest unit testing
- `$ npm run prod` Bundle the files and start the server in production mode
- `$ npm run prod-stop` Stop the production server

---

## Docker

The project also comes with Docker configuration files, so it can be run using Docker. It uses the production version of the app. First it bundles the scripts with Webpack, then it starts the pm2 server. It might take some seconds for the server to be ready.

- Run the command: `$ docker-compose up -d` which will download and install the dependencies and set up the container
- Once finished, it will be available in http://localhost:7000 (or your custom port)
