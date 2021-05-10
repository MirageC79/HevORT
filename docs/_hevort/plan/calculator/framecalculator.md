---
title: Calculator
permalink: /hevort/plan/calculator/
has_children: false
parent: Plan your HevORT
nav_order: 2200
---
# Ordering Extrusion Profiles, Rails and Ball Screws.

The [_Frame & Friends Calculator_](/HevORT/files/hevort/FrameCalculator.xlsx) Excel sheet will help you to figure out the exact dimensions and quantity of extrusion you need to order.
It will also define the rails, ballscrews, bed plate and heater pad size you need for that size.  
Since rails and ballscrew can only be ordered into preset dimensions, please ensure that the print size you select will give you standard rail and screw size.

Proposed sizes can be found into the Calculator.
## [Frame & Friends Calculator](/HevORT/files/hevort/FrameCalculator.xlsx)

## How to use the Frame Calculator
### 1. Enter your desired print area dimension for **X axis and Z only**. 
*(Y axis will be filled in automatically) X and Y ration as to be kept to 1:1 due to the Bed Arms angle.  They are pointing the exact center of the bed by design, changing the XY ratio will affect this center point.*  
<br>
__NEW! Selection box for gantry type (STD/HT or HD)__ will now trigger selection of certain option lines. Summary table will be reflecting this selection.  
__NOTE*__ - HD print area will be smaller due to wider Y carriages and bigger print head. around 35mm will be amputed to X and Y.  
<br>
<img src="/HevORT/images/hevort/framecalc1.png" width="800">
<br>
<br>
<br>
### 2. Refresh the pivot table by right clicking on it and selecting *Refresh*.
<img src="/HevORT/images/hevort/framecalc2.png" width="200">  
<br>
<br>


### EXAMPLES:
Here are a couple of snapshots from results of recommended sizes:

Size|Frame Calculator results
--------------|------------------------
STD/HT <br> X315 Y315 Z340| <img src="/HevORT/images/hevort/315_315_340.png" width="100">  
STD/HT <br> X415 Y415 Z440| <img src="/HevORT/images/hevort/415_415_440.png" width="100">  
HD <br> X315 Y315 Z340*| <img src="/HevORT/images/hevort/315_315_340HD.png" width="120">  
HD <br> X415 Y415 Z440*| <img src="/HevORT/images/hevort/415_415_440HD.png" width="120"> 

* __NOTE__ - HD print area will be smaller due to wider Y carriages and bigger print head. around 35mm will be amputed to X and Y.
<br>
<br>
