# Klipper configuration

## What is klipper

Klipper is a 3d-Printer firmware.   
It combines the power of a general purpose computer with one or more microcontrollers.

<br>
Usually we use a raspberry pi (rpi) as the main brain of our 3D-Printer.

That rpi handles all the heavy lifting, it does the calculation, file handling, managing configuration files, and more.

To make the printer actually move it sends commands to a normal microcontroller  
that than handles the hardware stuff like controlling steppers, reading sensors, ...

|INFO|
Klipper itself has a very detailed documentation. That explains all configuration options.  

[>>Klipper Documentation<<](https://www.klipper3d.org/Overview.html)
|INFO|

## Configuration Z_TILT_ADJUST

Z_TILT_ADJUST is used to even the height of all 3 Z-Axis on the HevORT

### 1. Get the Firmware Settings Generator

[>Firmware Settings Generator<](../../assets/references/firmware-settings/FirmWareSettings.xlsx)

1. Open  the Calculator page
2. Enter your PRINT_AREA XY
3. Enter your XY Style
4. Enter your Print head
5. It will show you the klipper z_tilt configuration you will need for your setup

Example: 
* PRINT AREA XY: ***315***
* XY Style: ***HDx***
* PRINT_HEAD: ***HextrudORT HD***

### 2. Apply config in klipper

```printer.cfg
[z_tilt]
z_positions:
    -39.288,-20.4
    136.921,307.81
    313.13,-20.4
points:
    10,10
    10,266
    266,266
    266,10

[bltouch]
sensor_pin: xxx
control_pin: xxx
x_offset: 22.775
y_offset: -8.705
```