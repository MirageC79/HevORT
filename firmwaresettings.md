# Firmware Settings

You made it!  your printer is assembled!  Congratulations :)  
Now you just need to get the control board to know your HevORT. Time for Firmware Configuration!

Oh, and dont worry, We all got goose bumps when first hearing firmware configuration.  It is totally normal to see this task as a monster.  We will make that monster a fun one, and actually that monster is going to work for us :)

I will be dropping things here as I am able to document them. If you feel you would be able to write one of these section, please contact me through the [FB support Group](https://www.facebook.com/groups/hevort/).


1. Communicating with your Duet
2. Understanding the system files of your duet.
3. Creating your initial config.g file
4. Define your printer geometry and dimensions
5. [Configure Triple Z Axis](https://github.com/MirageC79/HevORT/blob/master/firmwaresettings.md#5-configure-triple-z-axis)
6. 

![alt text](https://github.com/MirageC79/HevORT/blob/master/images/Coverflat.png?raw=true)

### 5. Configure Triple Z Axis

The triple independent Z axis parameters will be set via [M671](https://duet3d.dozuki.com/Wiki/Gcode#Section_M671_Define_positions_of_Z_leadscrews_or_bed_levelling_screws) command in your config.g file
Using the following Excel file, you will generate the adequate line of command for your configuration.
[Firmware Settings Generator](FirmWareSettings.xlsx)
