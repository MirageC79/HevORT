# Which STLs do I need?

The HevORT project has been designed to be modular. This means you can select from multiple components configuration and assemble the one that will suit your needs.

<script>
new Vue({
  el: "grid:nth-of-type(1)",
  data: {
    config: {},
    items: [
        {
            title: "Standard XY",
            image: "../assets/images/components/XYThumb.png",
            description: `This version is suited for the commonly available GT2 pulleys.
                        <br>These pulleys available from china and other location are 9mm thick and have wider flanges(lips).`,
            buttons: [
                {title: "CAD File", link: ""},
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4184477"}
            ],
            customContent: "<span class='component-active-status'>Since April 2019</span>",
        },
        {
            title: "(HT) XY High Temp",
            image: "../assets/images/components/XYHTThumb.png",
            description: `The High Temp version of the XY gantry features 5mm bore pulleys.  These are slightly thicker (10mm) and have a narrower lips.
                        <br>Note that due to extreme compactness of some components,
                        <br>transition bushings are necessary to fit the 5mm bore onto 3mm hardware.`,
            buttons: [
                {title: "CAD File", link: ""},
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4402495"}
            ],
            customContent: "<span class='component-active-status'>Since May 2020</span>",
        },
        {
            title: "(HD9) XY Heavy Duty 9mm",
            image: "../assets/images/components/XYHD9Thumb.png",
            description: `This XY Gantry will fit on the same frame as the Standard and HT version of the XY Gantry.
                        <br>The XYHD gantry are meant for very large printers or for the ones with very high performance in mind.
                        <br><br>Featuring:
                        <br>9mm or 12mm 2GT Belt,
                        <br>Center Pulley Bore 5mm Dowell Pins,
                        <br>MGN12H instead of MGN12C and more...`,
            buttons: [
                {title: "CAD File", link: ""},
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4629715"}
            ],
            customContent: "<span class='component-active-status'>Since Oct 2020</span>",
        },
        {
            title: "(HD12) XY Heavy Duty 12mm",
            image: "../assets/images/components/XYHD12Thumb.png",
            description: `This XY Gantry will fit on the same frame as the Standard and HT version of the XY Gantry.
                        <br>The XYHD gantry are meant for very large printers or for the ones with very high performance in mind.
                        <br><br>Featuring:
                        <br>9mm or 12mm 2GT Belt,
                        <br>Center Pulley Bore 5mm Dowell Pins,
                        <br>MGN12H instead of MGN12C and more...`,
            buttons: [
                {title: "CAD File", link: ""},
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4625509"}
            ],
            customContent: "<span class='component-active-status'>Since Oct 2020</span>",
        },
    ]
  }
});
new Vue({
  el: "grid:nth-of-type(2)",
  data: {
    config: {},
    items: [
        {
            title: "ZR",
            image: "../assets/images/components/ZRThumb.png",
            description: `This initial version of the Self Leveling Z axis on MGN rails from the HevORT
                        <br>works just fine if you are using quality Ball screws with excellent frame alignment as well as perfect tolerances printed parts...
                        <br>Sounds impossible to get?
                        <br></br>look at V2 below :)`,
            buttons: [
                {title: "CAD File", link: ""},
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4184059"}
            ],
            customContent: "<span class='component-active-status component-active-status-retired'>Feb 2020 - RETIRED</span>",
        },
        {
            title: "ZR V2 (Wobble wings)",
            image: "../assets/images/components/ZRV2Thumb.png",
            description: `Some may say, get proper alignment, get quality parts, go back to lead screw... Well
                        <br<brThe size of the bed on that printer makes it quite heavy.
                        <br>Moving it down and up in a non planar printing mode will get standards lead screw to wear out pretty quick.
                        <br><br>So for the ones of us who did not win the cheap ball screw lottery,
                        <br><br>this version of ZR system introduces Z wobble management using magnets and ball bearings.
                        <br>Also a second thrust bearing was added to allow the use of a M10X1.00 nut to secure the ball screw better.`,
            buttons: [
                {title: "CAD File", link: ""},
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4387638"}
            ],
            customContent: "<span class='component-active-status'>Since May 2020</span>",
        },
        {
            title: "ZR V2.5",
            image: "../assets/images/components/ZR_V2.5_Thumb.jpg",
            description: `Using the same Z wobble management as V2, this new version integrates
                        <br><br>2 new features:<br>First, A double row angular contact bearing is now offering better axial load support to the ball screw.
                        <br><br>Second, a quality shaft collar from Ruland is providing a better resting shoulder to the thrust bearing than the poor half lip of a thread the SFU1204 usually offers.`,
            buttons: [
                {title: "CAD File", link: ""},
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4723500"}
            ],            
            customContent: "<span class='component-active-status'>Since Jan 2021</span>",
        },
        {
            title: "HyperCube Evolution Z Adapters",
            image: "",
            description: `_Upcoming._ This option will let you use standard <a href="https://www.thingiverse.com/thing:2254103">Hypercube Evolution from SCOTT_3D</a> Z installation to your HevORT printer.`,
            customContent: "<span class='component-active-status'>TBD</span>",
        },
    ]
  }
});
new Vue({
  el: "grid:nth-of-type(3)",
  data: {
    config: {},
    items: [
        {
            title: "E3D Hemera",
            image: "../assets/images/components/HemeraThumb.png",
            description: `Including configuration for E3D V6,
                        <br>Volcano
                        <br>and Super Volcano heatblocks.
                        <br><br>Part cooling is achieved via BerdAir system
                        .<br><br>Duct STL include on the Thingiverse page.`,
            buttons: [
                {title: "CAD File", link: ""},
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4238471"}
            ],
            customContent: "<span class='component-active-status'>Since March 2020</span>",
        },
        {
            title: "BMG/Titan Aqua Frankenstien by RUDDFAB12",
            image: "../assets/images/components/BMGAquaThumb.png",
            description: `This is the all metal BMG (Right Hand) paired with a Titan Aqua cooling plate,
                        <br>E3D Volcano
                        <br>and the E3D slim stepper.
                        <br><br>BLTouch and Optical endstop sensor mounts as well.`,
            buttons: [
                {title: "CAD File", link: ""},
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4411289"}
            ],
            customContent: "<span class='component-active-status'>Since May 2020</span>",
        },
        {
            title: "E3D Hemera Top Mounted and SuperVolcano",
            image: "../assets/images/components/HemeraTopMountThumb.png",
            description: `This print head requires the use of E3D Super Volcano.
                        <br><br>Part cooling is achieved by BerdAir system.
                        <br><br>Bltouch and optical sensors are used for positioning.`,
            buttons: [
                {title: "CAD File", link: "#"},
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4556554"}
            ],
            customContent: "<span class='component-active-status'>Since July 2020</span>",
        },
    ]
  }
});
</script>


## 1. XY Gantry
You will find below the various configuration for XY Gantry.  Select one in function of your needs:

[xy-gantry-template](../assets/templates/grid-template.md ':include')

## 2. Z Axis and Build Plate
Choose your weapon wisely ;)

[z-axis-template](../assets/templates/grid-template.md ':include')

## 3. Print Head
Several versions are already published, but a lot more are being created by the community.  
Search for HevORT on [Thingiverse](https://www.thingiverse.com/) to find the latest.  
This list will capture the ones I created plus the ones from members of the [FB community](https://www.facebook.com/groups/hevort/) that wish to have their work posted here.  
All configuration here below include the [BLtouch from Antclabs](https://www.antclabs.com/bltouch) as a Z probe.

[print-head-template](../assets/templates/grid-template.md ':include')