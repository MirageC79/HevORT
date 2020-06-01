---
permalink: /modsandmore/speye/
---
![alt text](https://github.com/MirageC79/HevORT/blob/master/images/spybanner.png?raw=true)

# The SpEye Filament and Jam Detector

Not only this unit will pause your print when you are out of filament, but it will also do the same if you have a spool jam.  
Sensitivity can be adjusted to adapt to your setup.

I also use it as a pause button :)  

## Download: 
### [From Thingiverse](https://www.thingiverse.com/thing:4299458)

## Bill of Material

Part Description|Qty
----------------| :-: 
623ZZ Bearings|3
M3 X 35mm Screw|1
Spring|2 (Can use pen spring. One needs to be stiffer)
M3 Washer|2
M3 Nut|3
Optical End Stop sensor|1
M6 PTFE fitting|2
M3 X 12mm Screw|2

## Print Setup:
- SpEye_CaseV1.6.stl
- SpEye_PlungerV1.5.stl

Place the parts as it is already positionned in the STL file.  The Case needs to print standing up as shown below\
![alt text](https://github.com/MirageC79/HevORT/blob/master/images/speyecura.png?raw=true)

Setting|Value
-------|-----
Material|PLA, PETG, ABS
Support|NO, ensure your bridging settings are good.  You may need to file a bit the roof of the plunger section.
Layer Thickness|Try to keep it between 0.1mm and 0.2mm. Thicker layer will create friction on the filament when loding it to the SpEye


## Assembly

## Connection & Firmware configuration
_These instructions assume you are using a Duet2 (wifi or ethernet) controller board._
### DUET2 Wifi / Ethernet
1. Connect the SpEye optical sensor as follow:

SpEye Optical End Stop Pin|E0 EndStop Connector pin from DUET2
 :----------------------: | :-------------------------------:             
G (Ground)|GND (Ground)
S (Signal)|E0 STOP
V (VCC)|+3.3V

![alt text](https://github.com/MirageC79/HevORT/blob/master/images/duetwifi_speye.png?raw=true)

2. Place the following line of code within your config.g file from your Duet.  
`M591 D0 P1 C3 S1				     ; Filament Monitoring on Extruder0 using E0 input(C3)`  

Refer to [M591](https://duet3d.dozuki.com/Wiki/Gcode#Section_M591_Configure_filament_sensing){:target="_blank"} 

[Back to Add-Ons](../)
