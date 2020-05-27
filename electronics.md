# Choosing Electronic Components

## 1. The Control Board
3D printer electronics have come a long way since the popular RAMP.  32 bit boards are now the standard and more stepper motor drivers are being added.
The additional stepper drivers can be mapped to serve different purpose; tool changer, multiple material extruder, etc...

The HevORT's basic requirements to use the ZR (self leveling) is that you have at least 6 intependent stepper motor drivers.
1. X axis
2. Y axis
3. Extruder
4. First Z motor
5. Second Z motor
6. Third Z motor

At this point as I only have experience with one specific control board, the documentation from this site will only cover that board. For now...

### The Duet from [Duet3D](https://duet3d.com/)
![alt text](/images/duetboard.png) 

Considered by many as the Cadillac of control boards, this open source device has many advantages over the majority of current available boards.  A bit more expensive, but nobody ever regretted... At least that I know of...

#### What makes it so special?  a few things;
* Integrated web interface that allows for complete control over the printer from anywhere using anything
* Excellent stepper motor drivers:
  * Duet 2 (wifi, Ethernet and expansion board Duex2 & 5 ) are equipped with super quiet Trinamic TMC2660 capable of delivering 2.4Amp to your motors.
  * Duet 3 (MAin board and expansion) are equipped with powerful and noiseless [Trinamic TMC5160](https://www.trinamic.com/products/integrated-circuits/details/tmc5160/) capable of providing 4.45Amp,
* On the fly (during print) adjustements of almost all parameters:
  * Acceleration / Jerk
  * Motor Current
  * Retraction
  * Pressure advance
  * Z Offset (baby steps)
  * etc..
* Excellent support community with lots of knowledge
* Integrated heat management through PCB dissipation.  No need for additional cooling, heat sink of fan if properly mounted.
* and I could go on for hours.

#### My typical workflow using the Duet looks like:

__From the office:__ 
* Design Part in Fusion and export to .stl
* Slice part using Ultimaker Cura slicer
* Upload and Start the .gcode file to the printer directly from Cura using the Duet plugin
* Open remote cam browser to watch the printer's first moves and print progress

__In the shop:__ 
* Pick up the part and play!


[Back to main page](/README.md)
