![alt text](/images/printbanner.png)
# How to print the HevORT STLs?

## 1. Which material?
Pretty much any common 3D printing material can be used to print the HevORT parts.  
After trying a few materials over the years, here is how I would categorise them in a very non-scientific way:


_**Price**: Price in USD per kilogram
**Rigidity**: Force required to induce deflexion.  
**Crack Resistant**: Amount of deflexion before rupture. (Non-Brittleness)  
**Layer Adhesion**: Difference between forces required to break perpendicular to layers VS parralel to layers.  
**Heat Resistance**: Temperetaure value from which material looses its rigidity in Celcius degrees.  
**Easy to print**: Level of technical knowledge or special equipment required in order to achieve good prints._  


Material|Brand|Price|Rigidity|Crack Resistant|Layer Adhesion|Heat Resist|Easy to Print|Special Print Condition|
--------|-----|-----|--------|---------------|--------------|---------: |-------------|-----------------------|
ASA|FormFutura ApolloX|45|++++|+++|+++|98|++++|Enclosure|
ABS|Spool3D.ca|23|++++|+++|++++|105|+++|Enclosure|
Nylon PA12|Filaments.ca|45|+++++|++++|+++++|110|+|SuperDry + Enclosure + Bed Adhesion compound
[Nylon HDCF](https://filaments.ca/products/heavy-duty-carbon-fiber-nylon-filament-1-75mm?_pos=7&_sid=4b8f2ed8b&_ss=r&variant=1500223668232){:target="_blank"}|Filaments.ca|98|++++|+++++|+++++|167|++|Dry + Enclosure + Bed Adhesion compound
Nylon Alloy910|Taulman3D|60|++|+++++|+++++|82|++++|Dry|
PETG|Filaments.ca|30|+++|+++|++++|85|+++|Dry|
PETG CF|Filaments.ca|38|++++|+++|+++|90|+++|Dry|
PLA|Filaments.ca EcoTough|27|++++|+++|++++|65|+++++|NA|
PLA|Generic|20|+++++|++|++++|65|+++++|NA|
_PC Polycarbonate_| _Never tried yet..._

I am currently running ABS on the big parts and HDCF Nylon for the more technical parts such as the Y and X carriages.

## 2. Placing your parts in the slicer.
All STL files are already properly oriented for optimal print results and optimal layer orientation.  

## 3. Slicer Settings
In this section I will assume that you have some experience with 3D printing and that your printer is calibrated.  If you are not too sure about what I mean by calibrated, have a look at [my personal recipee for printer calibration](/printercalibration.md){:target="_blank"}

The following printer settings are based on [Ultimaker Cura](https://ultimaker.com/software/ultimaker-cura){:target="_blank"} setting nomenclature which may vary if you are using a different slicer.

Before we start, ensure to make all settings visible by going into:  
`Preferences/Configure Cura.../Settings`  
Select `Check All` then `Close`  

![Alt text](/images/allsettings.png)

### The Settings!

Note that not all settings will be detailed and explained.

![alt text](/images/cura_quality.png)  
Section|Setting|Recommended Value|Comment
-------|-------|-----------------|-------
Quality|Layer Height|Between 0.12 and 0.24| No structural or precision gain by going lower than 0.12. But going higher than 0.24 might create issues with small holes and other fine details.
Quality|Line width|0.46 (for 0.4mm nozzle)|I usually set this to be a little bit wider than the nozzle diameter.  This ensures a better pressure of the layer against the part while providing a better finish I feel.


Shell|








[Back to Main Page](/README.md)
