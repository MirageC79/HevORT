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

### 3.1 RepRap Firmware 2 On Duet 2
I have created a cleaned up example version of my config.g that you can use to create your own.  The best approach should be to generate your first draft with the online [ReprapFirmware Automated tool](https://configtool.reprapfirmware.org/Start){:target="_blank"}, then have a look to it and modify it by inluding what you need from mine.  

RRF version|config.g file example|Last Updated
  :-----:  |---------------------|  :----:   
2.04|[Text File](/files/2.04config_g_example.txt){:target="_blank"}|Jul 23rd 2020  

&nbsp  
&nbsp  

### 3.2 RepRap Firmware 3 on Duet 2  
Here is an example of a config file running RRF3 on a Duet**2** control board

RRF version|config.g file example|Last Updated
  :-----:  |---------------------|  :----:   
3|[Text File](/files/RRF3_D2_config.txt){:target="_blank"}|Jul 23rd 2020 

&nbsp  
&nbsp  

### 3.3 RepRap Firmware 3 on Duet 3  
Here is an example of a config file running RRF3 on a Duet**3** control board

RRF version|config.g file example|Last Updated
  :-----:  |---------------------|  :----:   
3|*NA*

&nbsp  

# RRF Config Tool instructions for Duet 3 #

RepRapFirmWare_ConfigTool Section|Last Updated
 :-----------------------------: |  :------:  
 Start|*NA*
 [General](/RRF3_D3P2.htm){:target="_blank"}|August 31, 2020  
 [I/O Mapping](/RRF3_D3P3.htm){:target="_blank"}|August 31, 2020  
 Motors|NA
 EndStops|NA
 Heaters|NA
 Fans|NA
 Tools|NA
 Compensation|NA
 Network|NA
 Finish|NA

&nbsp  
 &nbsp  
 

### 5. Configure Triple Z Axis

The triple independent Z axis parameters will be set via [M671](https://duet3d.dozuki.com/Wiki/Gcode#Section_M671_Define_positions_of_Z_leadscrews_or_bed_levelling_screws){:target="_blank"} command in your config.g file
Using the following Excel file, you will generate the adequate line of command for your configuration.
[Firmware Settings Generator](FirmWareSettings.xlsx)

[Back to Main Page](/README.md)
