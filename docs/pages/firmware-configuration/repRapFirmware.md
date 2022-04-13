# RepRapFirmware Configuration

![Cover Flat](docs/assets/images/cover-flat.png)

You made it!  your printer is assembled!  Congratulations :)  
Now you just need to get the Duet control board to know your HevORT. Time for Firmware Configuration!

Oh, and don't worry, We all got goose bumps when first hearing about _Firmware Configuration_.  It is totally normal to see this task as a monster.  I will help you to turn that monster into a fun one.  Remember, eventually that monster is going to work for you :)

I will be dropping things here as I am able to document them. If you feel you would be able to write one of these section, please contact me through the [FB support Group](https://www.facebook.com/groups/hevort/) .


1. Communicating with your Duet
2. Understanding the system files of your duet.
3. Creating your initial config.g file
4. Define your printer geometry and dimensions
5. [Configure Triple Z Axis](#5-configure-triple-z-axis)

## Creating your initial Config.g file

The config.g file is the main configuration file that is run on every power up sequence.  If you change a value in this file, the system will ask for reboot when saving.

### RepRap Firmware 2 On Duet 2

I have created a cleaned up example version of my config.g that you can use to create your own.  The best approach should be to generate your first draft with the online [ReprapFirmware Automated tool](https://configtool.reprapfirmware.org/Start), then have a look at it and modify it by including what you need from mine.

| RRF version | config.g file example                                                             | Last Updated  |
|:-----------:|-----------------------------------------------------------------------------------|:-------------:|
|    2.04     | [>Text File<](docs/assets/references/firmware-settings/2.04config_g_example.txt) | Jul 23rd 2020 |

### RepRap Firmware 3 on Duet 2

Here is an example of a config file running RRF3 on a Duet**2** control board

| RRF version | config.g file example                                                       | Last Updated  |
|:-----------:|-----------------------------------------------------------------------------|:-------------:|
|      3      | [>Text File<](docs/assets/references/firmware-settings/RRF3_D2_config.txt) | Jul 23rd 2020 |

### RepRap Firmware 3 on Duet 3

**RRF Config Tool instructions for Duet 3**

|                    RepRapFirmWare_ConfigTool Section                     |  Last Updated   |
|:------------------------------------------------------------------------:|:---------------:|
|                                  Start                                   |      *NA*       |
|   [>General<](docs/assets/references/firmware-settings/RRF3_D3P2.htm)   | August 31, 2020 |
| [>I/O Mapping<](docs/assets/references/firmware-settings/RRF3_D3P3.htm) | August 31, 2020 |
|   [>Motors<](docs/assets/references/firmware-settings/RRF3_D3P4.htm)    | August 31, 2020 |
|                                 EndStops                                 |       NA        |
|                                 Heaters                                  |       NA        |
|                                   Fans                                   |       NA        |
|                                  Tools                                   |       NA        |
|                               Compensation                               |       NA        |
|                                 Network                                  |       NA        |
|                                  Finish                                  |       NA        |

### Configure Triple Z Axis

The triple independent Z axis parameters will be set via  
[M671](https://duet3d.dozuki.com/Wiki/Gcode#Section_M671_Define_positions_of_Z_leadscrews_or_bed_levelling_screws) command in your config.g file  
Using the following Excel file, you will generate the adequate line of command for your configuration.

[>Firmware Settings Generator<](docs/assets/references/firmware-settings/FirmWareSettings.xlsx)
