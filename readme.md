
[Indee](http://indee.io)
Built by [Jonjoe Whitfield](http://jonjoe.io)

# Indee's Wordpress Gulp Workflow

##Contents
- What Is It?
- System Requirments
- How Do I Use It?
- Software Stack
- Features
- Provided Libraries
- Todo

## What Is It? 
Taskrunner for wordpress development.

## System Requirments 

All you need is a [modern browser](http://www.google.com/intl/en_uk/chrome/browser/) a terminal window and [NodeJS](http://nodejs.org/) installed.. 

## How Do I Use It?
Once you have cloned the repositiory you will first need to delete the **.git** file. This file will interfere with your project if you decide to use git so remove it straight after download. 

```
$ cd /path/to/your/directory
$ rm -rf .git
```

If you are using git now go ahead and initialise a new repo. 

```
$ git init
```

Now thats out of the way down to business. **All** packages needed for the project in its default state are explicitly stated. This means that no fiddling around required to get it to run. 

Simply do the following:

```
$ sudo npm install
```

At this point your terminal window will take a few minutes to put everything together. Once its done do the following:

```
$ bower install
```

The same will happen again. Now finally:

```
$ gulp
```

The default gulp task will compile all the template code and start a web server. The server will generate a **random port number**. This number will be 4 digits long and be prefixed with 8. The **full dev url is posted in the terminal window** and just cos its super helpful, it will open up a browser window. 

Live reload works out of the box so off you go!

## Software Stack

Split into two sections. The front end prototype and the wordpress development. Prototyping is performed in _prototyping in the root of the project. 

*_prototyping*
- Jade(Pretty)
- SASS(SCSS)/Compass
- JavaScript
- Image Crunching
- CoffeeScript(Optional)
- Node Server

*Wordpress Development*
- SASS(SCSS)/Compass
- Image Crunching
- JavaScript
- CoffeeScript(Optional)

## Features
- Native live reloading(no scripts, extensions or plugins)
- Dynampic Ports for multiple simultaneous projects
- Auto new tab on browser
- Image compression
- Style compression
- Script compression
- Script concatinations
- SASS Error Catching (Gulp wont crash on error)
- All tasks running in harmony from default command
- Live compiling from default command
- Style auto prefixing

## Provided Libraries:
- [jQuery](http://jquery.com/)
- [Mondernizr](http://modernizr.com/)
- [Bootstrap](http://getbootstrap.com/)
- [OwlCarousel 2](http://www.owlcarousel.owlgraphic.com/)
- [HolderJS](http://imsky.github.io/holder/)
- [Font Awesome ... Ofcourse!](http://fortawesome.github.io/Font-Awesome/)
- [Animate CSS](http://daneden.github.io/animate.css/)

## ToDo
- Integrate and fully Automate Bower Package Manager
- Lint JS
- Native Notifications for success and error warnings
- Integrate Sourcemapping


