# Vögelroboter

The bird quiz robot

[See the quiz directory README.md to run the quiz](quiz/README.md)

## Next steps:

- get current code running on a raspberry pi with two pumps
- add dispensing liquids to the code.
- package two pumps, power (5 and 12 volt), Raspberry Pi, and mounting screws

## Electronics

- Raspberry pi
- Motor hat
- two peristaltic pumps
- 12 volt power for pumps
- 5 volt power for Raspberry Pi

## Case 

- Some sort of cute bird 
- Somewhere to mount the raspberry pi and two pumps.  
  Various samples and laser cuttable pattern in hellodrinkbot/hardware 
  [Basic Box](../../hardware/basic_box)

## Sofware

- Either add a monitor and keyboard to the Raspberry pi, or connect a 
  tablet or laptop to the raspberry pi via wifi. The raspberry pi will run
  an open Wifi access point with a python-flask app serving the bird quiz. 

## About the Birds

Downsized images of the birds are already loaded. The admin page has links to the wikipedia pages with attribution and licensing information. 

See bird_list.csv for the name of each bird file 
and the link to the wikipedia page for each image with the full attribution 
and licensing details.

## Sounds? (a stretch goal!)

- The raspberry pi has an audio output. If you add speakers the bot could
  play bird songs. See examples of playing sounds  in the [Bender bot](../bender/README.md)
