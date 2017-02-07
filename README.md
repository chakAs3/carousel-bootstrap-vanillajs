# carousel-bootstrap-vanillajs

It is a simple carousel module that loads data from JSON file (data could be retrieved directly by calling the REST API , but it has to be cross domaine origin allowed .

I have used the following Tools and frameworks :

##ES6 :
 Very easily to write code in modern ECMAScript 6 standards  
##Yo ( Yeoman ) :
 to scaffold my project easily to a structured folders using file generators and kick start configurations
##Webpack :
 A very handy module bundler  and  task manager i have used it to implement SASS , and Babel from ES6 to ES5  Javascript supported in all browsers , as well from watching file changes , run and build my project .
##Sass :
i have used sass to override some bootstrap variables, set my own variables and have more dynamic css .



##Bootstrap 3 :
just to exploit the power of bootstrap especially in layout and skinning using less or sass .


I have only used native javascript ( Vanilla ) in my code to  load JSON , manipulate the DOM , and control the Carousel ( no JQuery ) , there is also another version that i made without bootstrap at all , Only sass , and ES6 You can check it here .[Sass/ES6 Carousel code]  (https://github.com/chakAs3/carousel-sass-es6)



## Demo
to see the final result it is deployed here [Online Demo](http://trixlabs.com/ww/carousel/)



## Deploy locally 

first clone the project to your workspace
```sh

$ git clone https://github.com/chakAs3/carousel-bootstrap-vanillajs.git

```

run npm install to install all dependencies ( package.json )

```sh

$ npm install

```

build the project using webpack commad or npm

```sh

$ npm run build

```

serve the web application on localhost using webpack command or npm

```sh

$ npm run start

```
