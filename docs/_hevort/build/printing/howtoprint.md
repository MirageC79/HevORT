---
title: How to Print
permalink: /hevort/build/printing/
has_children: false
parent: Build your HevORT
nav_order: 3100
---

<img src="/HevORT/images/hevort/printbanner.png" width="800">

# How to print the HevORT STLs?
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}
---

## Which material?
Pretty much any common 3D printing material can be used to print the HevORT parts.  
After trying a few materials over the years, here is how I would categorise them in a very non-scientific way:


_**Price**: Price in USD per kilogram  
**Rigidity**: Force required to induce deflection.  
**Crack Resistant**: Amount of deflection before rupture. (Non-Brittleness)  
**Layer Adhesion**: Difference between forces required to break perpendicular to layers VS parallel to layers.  
**Heat Resistance**: Temperature value from which material looses its rigidity in Celsius degrees.  
**Easy to print**: Level of technical knowledge or special equipment required in order to achieve good prints._  


Material|Brand|Price|Rigidity|Crack Resistant|Layer Adhesion|Heat Resist|Easy to Print|Special Print Condition|
--------|-----|-----|--------|---------------|--------------|---------: |-------------|-----------------------|
[ASA](https://filaments.ca/collections/3d-filaments/diameter_1-75mm+brand_formfutura+application_weather-resistant){:target="_blank"}|FormFutura ApolloX|45|++++|+++|+++|98|++++|Enclosure|
[ABS](https://filaments.ca/collections/3d-filaments/diameter_1-75mm+material_abs+brand_filaments-ca){:target="_blank"}|Filaments.ca|23|++++|+++|++++|105|+++|Enclosure|
[Nylon PA12](https://filaments.ca/search?options%5Bunavailable_products%5D=show&options%5Bprefix%5D=last&q=nylon+pa12){:target="_blank"}|Filaments.ca|45|+++++|++++|+++++|110|+|SuperDry + Enclosure + Bed Adhesion compound
[Nylon HDCF](https://filaments.ca/products/heavy-duty-carbon-fiber-nylon-filament-1-75mm?_pos=7&_sid=4b8f2ed8b&_ss=r&variant=1500223668232){:target="_blank"}|Filaments.ca|98|++++|+++++|+++++|167|++|Dry + Enclosure + Bed Adhesion compound
[Nylon Alloy910](https://filaments.ca/products/alloy-910-1kg-black-1-75mm?_pos=11&_sid=ed1504fe8&_ss=r&variant=40372475272){:target="_blank"}|Taulman3D|60|++|+++++|+++++|82|++++|Dry|
[PETG](https://filaments.ca/collections/3d-filaments/diameter_1-75mm+material_petg+brand_filaments-ca){:target="_blank"}|Filaments.ca|30|+++|+++|++++|85|+++|Dry|
[PETG CF](https://filaments.ca/products/carbon-fiber-petg-filament-1-75mm?_pos=6&_sid=4f89c7644&_ss=r&variant=1299737051144){:target="_blank"}|Filaments.ca|38|++++|+++|+++|90|+++|Dry|
[PLA EcoTough](https://filaments.ca/collections/3d-filaments/diameter_1-75mm+material_ecotough-pla-2-0){:target="_blank"}|Filaments.ca|27|++++|+++|++++|70|+++++|NA|
PLA|Generic|20|+++++|++|++++|65|+++++|NA|
_PC Polycarbonate_| _Never tried yet..._

I am currently running ABS on the big parts and HDCF Nylon for the more technical parts such as the Y and X carriages.

## Placing your parts in the slicer.
All STL files are already properly oriented for optimal print results and optimal layer orientation.  

## Slicer Settings
In this section I will assume that you have some experience with 3D printing and that your printer is calibrated.  If you are not too sure about what I mean by calibrated, have a look at [my personal recipe for printer calibration](/HevORT/hevort/build/calibration/){:target="_blank"}

The following printer settings are based on [Ultimaker Cura](https://ultimaker.com/software/ultimaker-cura){:target="_blank"} setting nomenclature which may vary if you are using a different slicer.

Before we start, ensure to make all settings visible by going into:  
`Preferences/Configure Cura.../Settings`  
Select `Check All` then `Close`  

<img src="/HevORT/images/hevort/allsettings.png">

____________________________________________________________________________________  


Note that not all settings will be detailed and explained.

### QUALITY

<img src="/HevORT/images/hevort/cura_quality.png">


Section|Setting|Recommended Value|Comment
-------|-------|-----------------|-------
Quality|Layer Height|Between 0.12 and 0.24| No structural or precision gain by going lower than 0.12. But going higher than 0.24 might create issues with small holes and other fine details.
Quality|Line Width|0.46 (for 0.4mm nozzle)|I usually set this to be a little bit wider than the nozzle diameter.  This ensures a better pressure of the layer against the part while providing a better finish I feel.  

______________________________________________________________________________  


### SHELL

<img src="/HevORT/images/hevort/cura_shell1.png"><img src="/HevORT/images/hevort/cura_shell2.png">

Section|Setting|Recommended Value|Comment
-------|-------|-----------------|-------
Shell|Wall Line Count|3 to 4|I prefer setting this parameter over setting the wall thickness. 3 to 4 walls will provide solid parts.
Shell|Top/Bottom thickness|1mm|This means between 8 and 4 top and bottom layers, depending on your layer height.


### INFILL

<img src="/HevORT/images/hevort/cura_infill1.png">

Section|Setting|Recommended Value|Comment 
-------|-------|-----------------|-------
Infill|Infill Density|25-30%|Going higher than 50 % will not add significant strength for large components.
Infill|Infill Pattern|Grid or Gyroid|The advantages of gyroid infill over the tested infill types are: high shear strength, and low weight (so less filament needed).
Infill|Infill Before Walls|ON|With this setting enabled, infill will be printed before the walls. This results in better overhangs because the walls will stick to the already printed infill. Printing in this order can also have a disadvantage. If the infill is printed before the walls, there is a chance that the infill will be visible through the walls, resulting in a rougher surface finish.