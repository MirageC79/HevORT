# Firmware Configuration

You made it!  your printer is assembled!  Congratulations :)  
Now you just need to get the Duet control board to know your HevORT. Time for Firmware Configuration!

Oh, and don't worry, We all got goose bumps when first hearing about _Firmware Configuration_.  It is totally normal to see this task as a monster.  I will help you to turn that monster into a fun one.  Remember, eventually that monster is going to work for you :)

I will be dropping things here as I am able to document them. If you feel you would be able to write one of these section, please contact me through the [FB support Group](https://www.facebook.com/groups/hevort/){:target="_blank"} .


1. Communicating with your Duet
2. Understanding the system files of your duet.
3. Creating your initial config.g file
4. Define your printer geometry and dimensions
5. [Configure Triple Z Axis](https://miragec79.github.io/HevORT/firmwaresettings.html#5-configure-triple-z-axis)
6. 

![alt text](https://github.com/MirageC79/HevORT/blob/master/images/Coverflat.png?raw=true)

### 3. Creating your initial Config.g file
The config.g file is the main configuration file that is run on every power up sequence.  If you change a value in this file, the system will ask for reboot when saving.  
I have created a cleaned up example version of my config.g that you can use to create your own.  The best approach should be to generate your first draft with the online ReprapFirmware Automated tool, then have a look to it and modify it by inluding what you need from mine.
_Note: Only RepRap Firmware 2 is being documented at this point.  RRF3 will soon follow as I start the build of a new machine._

RRF version|config.g file example|date posted
  :-----:  |---------------------|  :----:   
2.04|/files/config_g_example.txt|Jul 23rd 2020

  

### 5. Configure Triple Z Axis

The triple independent Z axis parameters will be set via [M671](https://duet3d.dozuki.com/Wiki/Gcode#Section_M671_Define_positions_of_Z_leadscrews_or_bed_levelling_screws){:target="_blank"} command in your config.g file
Using the following Excel file, you will generate the adequate line of command for your configuration.
[Firmware Settings Generator](FirmWareSettings.xlsx)

[Back to Main Page](/README.md)
