# wordpressNG

[Angular](https://angularjs.org/)/[Bootstrap](http://getbootstrap.com/) application to render Json services from WordPress

[Demo](http://giwi.surge.sh)

## Disclaimer

This is still in development stage, so it's quite unstable and not fully working. But fell free to attempt.

## Install and customize

### Prerequisite

You need a running Wordpress instance and the [JSON-API](https://wordpress.org/plugins/json-api/) installed.

#### Ubuntu

    sudo apt-get install git nodejs nodejs-legacy npm
    sudo npm install bower grunt-cli -g
    
## Build and install

    mkdir ~/giwiSoft
    cd ~/giwiSoft
    git clone https://github.com/Giwi/wordpressNG.git
    cd wordpressNG
    npm install
    bower install
    
Modify Gruntfile.js lines 58 and 64 in order to put your blog's url.

## Run

    grunt serve

## Deploy

   grunt dist

## Hosting 

You can host your customized site to [Surge](surge.sh) it's free ;)

    sudo npm install surge -g
    cd ~/giwiSoft/giwiSoft
    grunt build
    surge --project ./dist --domain yourDomain.surge.sh

Enjoy
