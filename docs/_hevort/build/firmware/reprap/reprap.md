---
title: RepRap
permalink: /hevort/build/firmware/reprap/
parent: Firmware
grand_parent: Build your HevORT
nav_order: 3910
---

# Configure RepRap firmware
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}
---

![alt text](/HevORT/images/hevort/Coverflat.png)

## Creating your initial Config.g file
The config.g file is the main configuration file that is run on every power up sequence.  If you change a value in this file, the system will ask for reboot when saving.  

### RepRap Firmware 2 On Duet 2
I have created a cleaned up example version of my config.g that you can use to create your own.  The best approach should be to generate your first draft with the online [ReprapFirmware Automated tool](https://configtool.reprapfirmware.org/Start){:target="_blank"}, then have a look at it and modify it by including what you need from mine.  

RRF version|config.g file example|Last Updated
  :-----:  |---------------------|  :----:   
2.04|[Text File](/HevORT/files/hevort/2.04config_g_example.txt){:target="_blank"}|Jul 23rd 2020  

<br/>
<br/>

### RepRap Firmware 3 on Duet 2  
Here is an example of a config file running RRF3 on a Duet**2** control board

RRF version|config.g file example|Last Updated
  :-----:  |---------------------|  :----:   
3|[Text File](/HevORT/files/hevort/RRF3_D2_config.txt){:target="_blank"}|Jul 23rd 2020 

<br/>
<br/>

### RepRap Firmware 3 on Duet 3  
Here is an example of a config file running RRF3 on a Duet**3** control board

RRF version|config.g file example|Last Updated
  :-----:  |---------------------|  :----:   
3|*NA*

<br/> 

**RRF Config Tool instructions for Duet 3**

RepRapFirmWare_ConfigTool Section|Last Updated
 :-----------------------------: |  :------:  
 Start|*NA*
 [General](/HevORT/files/hevort/RRF3_D3P2.htm){:target="_blank"}|August 31, 2020  
 [I/O Mapping](/HevORT/files/hevort/RRF3_D3P3.htm){:target="_blank"}|August 31, 2020  
 [Motors](/HevORT/files/hevort/RRF3_D3P4.htm){:target="_blank"}|August 31, 2020
 EndStops|NA
 Heaters|NA
 Fans|NA
 Tools|NA
 Compensation|NA
 Network|NA
 Finish|NA

<br/>
<br/>

## Configure Triple Z Axis

The triple independent Z axis parameters will be set via [M671](https://duet3d.dozuki.com/Wiki/Gcode#Section_M671_Define_positions_of_Z_leadscrews_or_bed_levelling_screws){:target="_blank"} command in your config.g file
Using the following Excel file, you will generate the adequate line of command for your configuration.
[Firmware Settings Generator](/HevORT/files/hevort/FirmWareSettings.xlsx)