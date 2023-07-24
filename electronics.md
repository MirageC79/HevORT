# Choosing Electronic Components

1. [The Control Board](/electronics.md#1-the-control-board) 
2. [Stepper Motors](/electronics.md#2-the-stepper-motors)

## 1. The Control Board
3D printer electronics have come a long way since the popular RAMP boards.  
32bit control boards are now the standard and more stepper motor drivers are being added to allow for all sorts of capabilities tool changer, multiple material extruder and even Triple Z Motor Self Leveling :)

The HevORT's basic requirements to use the ZR (self leveling) is that you have at least 6 intependent stepper motor drivers.
1. X axis
2. Y axis
3. Extruder
4. First Z motor
5. Second Z motor
6. Third Z motor

At this point as I only have experience with one specific control board, the documentation from this site will only cover that board. For now...

### The Duet from [Duet3D](https://duet3d.com/){:target="_blank"}
![alt text](/images/duetboard.png) 

Considered by many as the Cadillac of control boards, this open source device has many advantages over the majority of current available boards.  A bit more expensive, but nobody ever regretted... At least that I know of...

#### What makes it so special?  a few things;
> * Integrated web interface [(Duet Web Control)](https://duet3d.dozuki.com/Wiki/Duet_Web_Control_Manual){:target="_blank"} that allows for complete control over the printer from anywhere using anything
> * Excellent stepper motor drivers:
>   * Duet 2 (wifi, Ethernet and expansion board Duex2 & 5 ) are equipped with super quiet [Trinamic TMC2660](https://www.trinamic.com/products/integrated-circuits/details/tmc2660-pa/){:target="_blank"} capable of delivering 2.4Amp to your motors.
>   * Duet 3 (MAin board and expansion) are equipped with powerful and noiseless [Trinamic TMC5160](https://www.trinamic.com/products/integrated-circuits/details/tmc5160/){:target="_blank"} capable of providing 4.45Amp,
> * On the fly (during print) adjustements of almost all parameters:
>   * Acceleration / Jerk
>   * Motor Current
>   * Retraction
>   * Pressure advance
>   * Z Offset (baby steps)
>   * etc..
> * Excellent [documentation](https://duet3d.dozuki.com/) and a support community with lots of knowledge
> * Integrated heat management through PCB dissipation.  No need for additional cooling, heat sink of fan if properly mounted.
> * and I could go on for hours.

#### My typical workflow using the Duet looks like:

  __From the office:__ 
  * Design Part in Fusion360 and export to .stl
  * Slice part using Ultimaker Cura slicer
  * Upload .gcode file to the printer directly from Cura using the Duet plugin
  * Open Duet Web Control (DWC) and start heating build plate and nozzle
  * Load selected filament configuration file _(I like to have Acceleration, Jerk, Pressure advance and temperatere targetted PID   individually set per filament type.  The duet allows you to create filament profile that you can attribute to your selected tool/extruder)_

  __Walk to the shop:__ 
  * Ensure printer is all set and clear to print
  * Load the chosen filament 
  * Use web browser from the printer's tablet _(A cheap Amazon Fire 8)_ to access the web control and start the previously loaded job. 
  * Witness the self leveling from the bed
  * Closely look at the nozzle height during printing of the skirt/brim.  Adjust on the fly using the babystep 0.05mm + -  command from   the DWC.
  * Walk away and keep looking at my web cam once in a while using my phone.
  _In case of failure, I will use my phone to log on the DWC and stop the printer_
  * Come back, pick up the part and play!

## Which Duet to buy?
Two possible configurations of Duet can currently serve your HevORT: _Remember, you need at least 6 stepper drivers to use the ZR Self Leveling._\
Both solutions will be similar in price if we exclude the optional raspberry pi that the Duet 3 can use.  [Read more abour Duet3 and RPI](https://betrue3d.dk/rpi-and-duet-3-why-and-how/?fbclid=IwAR16IzLQhu4W4G6IMp81qFp3ousTRf1AjmVV-9iawk4osm4pF1tQDGAXfwg){:target="_blank"}
The Duet2 (Main Board) + Duex5 (Expansion) will provide you with more stepper drivers for the same price

We've learned lately that a new Duet Board will see the light soon.  Look at Duet 2 Pro in the table here below.   

Components|Number of Drivers|Raspberry Pi interface|Price|Expandability|Technology release date
----------|-----------------|----------------------|-----|-------------|-----------------------
Duet 2 (wifi or ethernet) + Duex5|10|NO|+++|0 Additional Stepper|2017
Duet 3 MB 6HC|6|[YES](https://betrue3d.dk/rpi-and-duet-3-why-and-how/?fbclid=IwAR16IzLQhu4W4G6IMp81qFp3ousTRf1AjmVV-9iawk4osm4pF1tQDGAXfwg){:target="_blank"}|++++|up to 24 Additional Stepper|2019
[_Duet 2 Pro_](https://forum.duet3d.com/topic/16786/duet-2-pro-4-u/10?_=1592597785623&fbclid=IwAR15hDTJ40d1xfQxxkTIBQmrbcReVolsKxkBpS4tp2ly33M-Ao8jsITXew8){:target="_blank"}|_TBA_|_Same as Duet3_|_TBA_|_TBA_|_TBA_  



## 2. The Stepper Motors
![alt text](/images/e3dhightorque.png)

[Servo or Stepper?](https://www.amci.com/industrial-automation-resources/plc-automation-tutorials/stepper-vs-servo/){:target="_blank"}  Very good read on the topic.  
[Calculate the power rating and max speed of your stepper motor:](https://www.allaboutcircuits.com/tools/stepper-motor-calculator/){:target="_blank"}



### [Back to main page](/README.md)
