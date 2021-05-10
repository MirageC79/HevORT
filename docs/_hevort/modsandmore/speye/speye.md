---
title: SpEye
permalink: hevort/modsandmore/speye/
parent: Mods and More
nav_order: 7100
---
<img src="/HevORT/images/hevort/spybanner.png" width="800">

# The SpEye Filament and Jam Detector

Not only this unit will pause your print when you are out of filament, but it will also do the same if you have a spool jam.  
Sensitivity can be adjusted to adapt to your setup.

I also use it as a pause button :)  

## 1. Download: 
### [From Thingiverse](https://www.thingiverse.com/thing:4299458)

## 2. Bill of Material

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

## 3. Print Setup:
- SpEye_CaseV1.6.stl
- SpEye_PlungerV1.5.stl

Place the parts as it is already positionned in the STL file.  The Case needs to print standing up as shown below

<img src="/HevORT/images/hevort/speyecura.png" width="400">

Setting|Value
-------|-----
Material|PLA, PETG, ABS
Support|NO, ensure your bridging settings are good.  You may need to file a bit the roof of the plunger section.
Layer Thickness|Try to keep it between 0.1mm and 0.2mm. Thicker layer will create friction on the filament when loding it to the SpEye


## 4. Assembly

## 5. Connection & Firmware configuration
_These instructions assume you are using a Duet2 (wifi or ethernet) controller board with RepRap Firmware 2.0X and up._
### DUET2 Wifi / Ethernet
1. Connect the SpEye optical sensor as follow:

  SpEye Optical End Stop Pin|E0 EndStop Connector pin from DUET2
   :----------------------: | :-------------------------------:             
  G (Ground)|GND (Ground)
  S (Signal)|E0 STOP
  V (VCC)|+3.3V

  <img src="/HevORT/images/hevort/duetwifi_speye.png" width="300">

2. Place the following line of code within your config.g file from your Duet.  
  `M591 D0 P1 C3 S1				     ; Filament Monitoring on Extruder0 using E0 input(C3)`  

  Refer to [M591](https://duet3d.dozuki.com/Wiki/Gcode#Section_M591_Configure_filament_sensing){:target="_blank"} 