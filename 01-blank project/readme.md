# init our npm project using
```sh
npm init -y
```

# install webpack 
```sh
npm install --save-dev webpack@5.97.1
npm install --save-dev webpack-cli@6.0.1
```

# create main.js into src folder
```sh
console.log('Wecome to the webpack world!')
```

# run node and check the output content
```sh
node src/main.js
=> Wecome to the webpack world!
```

# building our first script, update package.json file setting and run "npm run build-dev"
```sh
"main": "src/main.js",
"scripts": {
    "build-dev": "webpack --mode development",
    "build-prod": "webpack --mode production"
}
```

# check output content on dist folder
```sh
=> npm run build-dev:
asset main.js 1.23 KiB [emitted] (name: main)
./src/main.js 45 bytes [built] [code generated]
webpack 5.97.1 compiled successfully in 95 ms

=> npm run build-prod:
asset main.js 44 bytes [emitted] [minimized] (name: main)
./src/main.js 45 bytes [built] [code generated]
webpack 5.97.1 compiled successfully in 215 ms
```