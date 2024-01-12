# **KLIPPER CONFIGURATION**

## What is Klipper?

Klipper is a 3d-Printer Firmware. It combines the power of a general purpose computer with one or more microcontrollers. <br>
In a typical Klipper installation, a [Raspberry Pi](https://www.raspberrypi.com/) (rpi) is used as the main brain of the 3D-Printer. This rpi will host the Klipper firmware and will handles all the heavy lifting; it does the calculation, file handling, managing configuration files, and more.  

The printer's controller board will get a client version of the klipper firmware so the rpi can send order for controlling; stepper, heaters, fans, end-stops, etc...
Klipper client can also be installed on a large variety of other micro-controllers (mcu) such as Arduinos.  Klipper can control several client mcu's.

The Klipper firmware is a popular choice among the HevORT community.  
You can find some configuration examples on our GitHub page:
[>>Klipper Implementation Examples on **HevORT**<<](https://github.com/MirageC79/HevORT/tree/master/firmware/klipper)
<br>
<a class="hevort-message hevort-btn" target="_blank" href="https://www.klipper3d.org/Overview.html" rel="noopener"><span class="hevort-btn-text">Visit the Official Klipper Documentation</span><img alt="Facebook Logo" src="docs/assets/images/klipperlogo.png" /></a>

## Configuring Z self-leveling
### Bed Self Leveling 
The Klipper macro [Z_TILT_ADJUST](https://www.klipper3d.org/Config_Reference.html#z_tilt) is used to adjust the height of all 3 Z-Axis on the HevORT in a manner to bring the bed parralel to the XY plane.  The lift points correspond to the center of the POS8 rod end that connects the bed to the Z sliders.<br>

This macro will probe a user defined number of points across the bed surface (usually 3 or 4 points).  The returned height of these points will then be used to calculate the current attitude of the bed. 
Using the XY coordinates of the bed lifting points in relation to the nozzle, the *Z_TILT_ADJUST* function will finally establish how much adjustment is required to each Z screw.<br>
|WARNING| Wrong coordinates of the lifting points will affect the system's ability to perform a proper "Self-Leveling". |WARNING|


### 1. Access the Z Lift Points Calculator Tool

[>>Z Lift Points Calculator<<](https://app.powerbi.com/view?r=eyJrIjoiMTliMTBmYjMtMTQwOC00NWU2LWFhZmEtOWE4YzNjMDc0YWRjIiwidCI6IjY0NTExOWI0LTIzOGYtNDc2YS05ZTM4LTdhODNiYTJhZWI5NiJ9)
* Open the [Calculator](https://app.powerbi.com/view?r=eyJrIjoiMTliMTBmYjMtMTQwOC00NWU2LWFhZmEtOWE4YzNjMDc0YWRjIiwidCI6IjY0NTExOWI0LTIzOGYtNDc2YS05ZTM4LTdhODNiYTJhZWI5NiJ9) page
* Select your Z Axis
* Select your XY Gantry Style
* Select your X Cross Member
* Select your Print head
* Click "*Results*"
<br>
    <img src="docs/assets/references/firmware-settings/ToolSelection.png" alt="image" style="width:800px;height:auto;">
<br>
<sub>* NOTE - If the *Results* button is not showing, your are missing one or more selection.</sub>

---
The *Results* page provides a confirmation of your selection as well as the critical dimensions used for the calcutations.
On this page:
* Adjust the *Build Size* slider to the value you used for the [Frame Calculation](/pages/frame-calculation.md).
* Take note of the XY coordinates for each lift points
* Take also note of the Z probe offset values.
<br>
<img src="docs/assets/references/firmware-settings/ToolResults.png" alt="image" style="width:800px;height:auto;">
<br>


### 2. Apply config in klipper
Enter the coordinates into your printer.cfg file following this example: 
<br>*See the Klipper documentation on* [*Z_Tilt*](https://www.klipper3d.org/Config_Reference.html#z_tilt)

```printer.cfg
[z_tilt]
# The order of these "z_positions" should match your Z, Z1 and Z2 stepper driver order. 
z_positions:            # Position of the POS8 rod end ball center 
    -22.940,-10.300     # Front Left Z actuator
    153.268,317.910     # Rear Center Z actuator
    329.476,-10.300     # Front Right Z actuator

# It is recommended to use 3 or 4 points maximum to define the bed attitude.  
# Either place a point close to each corner, or close to each lift points.
points: #Nozzle Position, Bed will be probed at the location whe the probe is when noxxle is on this point.
    10,10
    10,266
    266,266
    266,10

[bltouch] or [beacon] or [probe]
# These value represent the XY distance from Nozzle to center of Z probe.
x_offset: 0
y_offset: 51
```