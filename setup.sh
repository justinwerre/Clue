#!/bin/bash

sudo apt-get -y update

sudo apt-get -y install apache2

if ! [ -L /var/www ]; then
	rm -rf /var/www
	ln -fs /vagrant/public /var/www
fi

/etc/init.d/apache2 restart