***ZR V2.8 UPDATE***
Well sometimes we work hard and get great results out of it, and other times we get reality checks. This is the case with my early testing of ZR_V2.8.

- Installation went fairly well. A few fasteners need better access but overall all is good.
- Geared stepper motors are weird beasts. 1.8degree motors at 5.18:1 gear ratio and x16 microstep translates to 4144 steps per mm on SFU1604s. This is a lot of steps and a lot of rotation per sec. I had to reduce Max speed and accel a lot to avoid motors to skip.
- The height of the IGUS flange bearings adds too much height to the entire bed assembly. and compromises max tilt angle. I have identified a way of shaving 20mm down.
- IGUS flange bearing do feel a lot stiffer than POS8 as anticipated. Those are a great addition to the HevORT product family.
- Bed plate is really tight next to the bigger 26mm upper screw bearing and might contact in certain cases if your plate is too wide like mine is (346mm instead of 340).
- Now the real downer... the SFU1604 I received are for 2 of them much straighter than my previous 1204s but the third one has some deflection. Since these screws are by far more rigid than the 1204s, this translates into massive Z wobble. 🙁 The fact that I had to remove the left upper ball screw bearing leaves much more liberty to that wobbling to drag the bed around though.

My investigations and testings ares now leading me also in the path of spider couplings quality/alignment. I suspect they could also be partly responsible for inducing some of the screw wobble.

I have to admit I am very disappointed by this outcome. I was truly expecting 1604s to be straighter and better. I know I have been recommending 160X for the past few months by promising that a integration design would be available soon. This is now a set back.

So for now, here are my next steps and recommendations:
- The best working config of HevORT Z axis official release is the ZR_V2.5. Files are not on Thingiverse yet but that will be addressed in the course of the next few days.
- IGUS flange bearings are neat, cheap and easily sourceable. I will create a V2.5 version with them
- SFU160X solution will need to involve decoupling the XY wobble of the ball screw from the slider mount. I am strongly thinking about reusing the concept of wobble wings.
- Current ZR_V2.8 files will be removed from servers and archived.

For those of you that are already using SFU160X screws using custom designs or others, I would like to hear you out and get your feedback.
I am sorry for the delays into the delivery of a viable solution for the 160Xs. We will find a way! 

Thank you for your support.
Olivier