# Clue Notes

Clue notes is a digital version of the note pad used in the Clue board game.

The site can be used either on the local machine, or set up using a VM to host it.

## Run code locally

To run the code localy, download and extract the code. Then open up index.html which can be found in the public folder in your web browser.

## VM hosting

First, download and install [Vagrant](https://www.vagrantup.com/docs/installation/) and [VirtualBox](https://www.virtualbox.org/). Then download and extract the code. Open up the comandline and navigate to the extracted code and run the following command.

`vagrant up`

The VM will be initialized and configured for you. To access the site:
..* If you want to access the site on the same machine that is hosting it, you can navigate to localhost:8080
..* To access it on a different device, first find the ip address of the host machine. This can be done from the command line with by running `ipconfig` from the commandline. You want the IPv4 address listed under Ethernet Adapter Ethernet. You can then access the site by navigating to yourIpAddress:8080
