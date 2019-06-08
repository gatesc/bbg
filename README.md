** Getting Started **

1. Make the client framework template in react
`create-react-app client`
Note: you might need to install the program. If so, use `npm i -g create-react-app`

When done, it enables the following...

```
  ===========================================================
  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

  We suggest that you begin by typing:

  cd client
  npm start
  ============================================================
```  


2. To make http calls easier from node.js (and can also be used on the client), use `axios`. To install, `npm -i -S axios`

3. To make the client side server and the backend server start at the same time and make the client side server be able to transparently access the backend server, add line `"proxy": https://penguin.linux.test:3001` to the package.json file.

Also need to enable the concurrently package.  Do this with:
```
npm init -y
npm i -S concurrently
```

