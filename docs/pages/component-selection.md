# Which Components do I need?

The HevORT project has been designed to be modular. This means you can select from multiple components configuration and assemble the one that will suit your needs.

<script>
    createGridData(1, [
        {
            title: "Frame",
            image: "../assets/images/components/FrameThumb.png",
            description: `The bare base frame with a side electronics bay`,
            buttons: [
                {title: "Frame Hardware Map", link: "https://a360.co/3dCjsfY"},
                {title: "BOM - Web", link: "https://miragec79.github.io/HevORT/bom/BOM_Frame_ElecExt.htm"},
                {title: "BOM - Download", link: "https://miragec79.github.io/HevORT/bom/BOM_Frame_ElecExt.xlsx"},
                {title: "CAD File", link: "https://a360.co/2xUD9B9"},
            ],
        },
        {
            title: "Enclosure",
            image: "../assets/images/components/AcidBeeThumb.png",
            description: `The  Acid Bee Enclosure`,
            buttons: [
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:5188673"},
                {title: "BOM - Web", link: "https://miragec79.github.io/HevORT/bom/BOM_Enclosure_AcidBee.htm"},
                {title: "BOM - Download", link: "https://miragec79.github.io/HevORT/bom/BOM_Enclosure_AcidBee.xlsx"},
                {title: "CAD File", link: "https://a360.co/3HD6rlY"},
            ],
        },
    ], {gridTemplateColumns: "1fr 1fr"});
    createGridData(2, [
        {
            title: "Standard XY",
            image: "../assets/images/components/XYThumb.png",
            description: `This version is suited for the commonly available GT2 pulleys.
                        <br>These pulleys available from china and other location are 9mm thick and have wider flanges(lips).`,
            buttons: [
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4184477"},
                {title: "CAD File", link: "https://a360.co/2UEaOHa"},
            ],
        },
        {
            title: "(HT) XY High Temp",
            image: "../assets/images/components/XYHTThumb.png",
            description: `The High Temp version of the XY gantry features 5mm bore pulleys.  These are slightly thicker (10mm) and have a narrower lips.
                        <br>Note that due to extreme compactness of some components,
                        <br>transition bushings are necessary to fit the 5mm bore onto 3mm hardware.`,
            buttons: [
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4402495"},
                {title: "CAD File", link: "https://a360.co/3ABEubX"},
            ],
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
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4629715"},
                {title: "CAD File", link: "https://a360.co/35p2MH0"},
            ],
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
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4625509"},
                {title: "CAD File", link: "https://a360.co/3dxzysP"},
            ],
        },
    ]);
    createGridData(3, [
        {
            title: "(XYHT) MGN9 Carbon Fiber X-Axis",
            image: "../assets/images/components/OPTION_XYHT_CFX_MGN9_Thumb.jpg",
            description: `A 2020 Carbon Fiber Tube is replacing X extrusion for huge weight saving.`,
            buttons: [
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4880808"},
                {title: "BOM - Web", link: "https://miragec79.github.io/HevORT/bom/Option_XYHT_CFX_MGN9.htm"},
                {title: "BOM - Download", link: "https://miragec79.github.io/HevORT/bom/Option_XYHT_CFX_MGN9.xlsx"},
                {title: "CAD File", link: "https://a360.co/3z3ofD8"},
            ],
        },
        {
            title: "(HD9) MGN9 Carbon Fiber X-Axis",
            image: "../assets/images/components/OPTION_HD9_CFX_MGN9_Thumb.jpg",
            description: `A 2020 Carbon Fiber Tube is replacing X extrusion for huge weight saving.`,
            buttons: [
                {title: "Thingiverse", link: "https://github.com/MirageC79/HevORT/tree/master/files/STL/HD9/Option_HD9_CFx"},
                {title: "BOM - Web", link: "https://miragec79.github.io/HevORT/bom/Option_HD9_CFx_MGN9.htm"},
                {title: "BOM - Download", link: "https://miragec79.github.io/HevORT/bom/Option_HD9_CFx_MGN9.xlsx"},
                {title: "CAD File", link: "https://a360.co/3ttC8sp"},
            ],
        },
        {
            title: "(HD12) MGN9 Carbon Fiber X-Axis",
            image: "../assets/images/components/OPTION_HD12_CFX_MGN9_Thumb.jpg",
            description: `A 2020 Carbon Fiber Tube is replacing X extrusion for huge weight saving.`,
            buttons: [
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4886459"},
                {title: "BOM - Web", link: "https://miragec79.github.io/HevORT/bom/Option_HD12_CFx_MGN9.htm"},
                {title: "BOM - Download", link: "https://miragec79.github.io/HevORT/bom/Option_HD12_CFx_MGN9.xlsx"},
                {title: "CAD File", link: "https://a360.co/3gqVqt4"},
            ],
        },
    ]);
    createGridData(4, [
        {
            title: "ZR",
            image: "../assets/images/components/ZRThumb.png",
            description: `This initial version of the Self Leveling Z axis on MGN rails from the HevORT
                        <br>works just fine if you are using quality Ball screws with excellent frame alignment as well as perfect tolerances printed parts...
                        <br>Sounds impossible to get?
                        <br></br>look at V2 below :)`,
            buttons: [
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4184059"},
                {title: "CAD File", link: "https://a360.co/3gweJiw"},
            ],
            status: "Retired"
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
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4387638"},
                {title: "CAD File", link: "https://a360.co/3bSwQzF"},
            ],
        },
        {
            title: "ZR V2.5",
            image: "../assets/images/components/ZR_V2.5_Thumb.jpg",
            description: `Using the same Z wobble management as V2, this new version integrates
                        <br><br>2 new features:<br>First, A double row angular contact bearing is now offering better axial load support to the ball screw.
                        <br><br>Second, a quality shaft collar from Ruland is providing a better resting shoulder to the thrust bearing than the poor half lip of a thread the SFU1204 usually offers.`,
            buttons: [
                {title: "CAD File", link: ""},
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4723500"},
                {title: "CAD File", link: "https://a360.co/3bSwQzF"},
            ],            
        },
        {
            title: "HyperCube Evolution Z Adapters",
            image: "",
            description: `_Upcoming._ This option will let you use standard <a href="https://www.thingiverse.com/thing:2254103">Hypercube Evolution from SCOTT_3D</a> Z installation to your HevORT printer.`,
            status: "TBD",
        },
    ]);
    createGridData(5, [
        {
            title: "E3D Hemera",
            image: "../assets/images/components/HemeraThumb.png",
            description: `Including configuration for E3D V6,
                        <br>Volcano
                        <br>and Super Volcano heatblocks.
                        <br><br>Part cooling is achieved via BerdAir system
                        .<br><br>Duct STL include on the Thingiverse page.`,
            buttons: [
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4238471"},
                {title: "CAD File", link: "https://a360.co/2U1i6ob"},
            ],
        },
        {
            title: "BMG/Titan Aqua",
            image: "../assets/images/components/BMGAquaThumb.png",
            description: `This is the all metal BMG (Right Hand) paired with a Titan Aqua cooling plate,
                        <br>E3D Volcano
                        <br>and the E3D slim stepper.
                        <br><br>BLTouch and Optical endstop sensor mounts as well.`,
            buttons: [
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4411289"},
                {title: "CAD File", link: "https://a360.co/3fY7MFT"},
            ],
        },
        {
            title: "E3D Hemera Top Mounted and SuperVolcano",
            image: "../assets/images/components/HemeraTopMountThumb.png",
            description: `This print head requires the use of E3D Super Volcano.
                        <br><br>Part cooling is achieved by BerdAir system.
                        <br><br>Bltouch and optical sensors are used for positioning.`,
            buttons: [
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4556554"},
                {title: "CAD File", link: "https://a360.co/39ryl4z"},
            ],
        },
    ]);
    createGridData(6, [
        {
            title: "HextrudORT",
            image: "../assets/images/components/HextrudORT_CoverThumb.jpg",
            description: `Collection of multiple print heads based on the HextrudORT (Extruder + Hotend) carriage`,
            buttons: [
                {title: "HextrudORT GitHub Page", link: "https://miragec79.github.io/HextrudORT/"},
            ],
        },
    ], {gridTemplateColumns: "1fr 1fr"});
    createGridData(7, [
        {
            title: "Electronics",
            image: "../assets/images/components/ElectronicsThumb.jpg",
            description: `Electronics List of material for Power Management and Control Board`,
            buttons: [
                {title: "Electronics Island proposal", link: "https://www.thingiverse.com/thing:3953165"},
                {title: "BOM - Web", link: "https://miragec79.github.io/HevORT/bom/BOM_Electronics.htm"},
                {title: "BOM - Download", link: "https://miragec79.github.io/HevORT/bom/BOM_Electronics.xlsx"},
            ],
        },
    ], {gridTemplateColumns: "1fr 1fr"});
</script>

## 1. Frame/Enclosure
This is the base of the HevORT

[frame-template](../assets/templates/grid-template.md ':include')

## 2. XY Gantry
You will find below the various configuration for XY Gantry.  Select one in function of your needs:

[xy-gantry-template](../assets/templates/grid-template.md ':include')

### Further options
Alternative version/improvements to the above Gantry parts (like Carbon fibre)

[xy-gantry-options-template](../assets/templates/grid-template.md ':include')

## 3. Z Axis and Build Plate
Choose your weapon wisely ;)

[z-axis-template](../assets/templates/grid-template.md ':include')

## 4. Print Head
Several versions are already published, but a lot more are being created by the community.  
Search for HevORT on [Thingiverse](https://www.thingiverse.com/) to find the latest.  
This list will capture the ones I created plus the ones from members of the [FB community](https://www.facebook.com/groups/hevort/) that wish to have their work posted here.  
All configuration here below include the [BLtouch from Antclabs](https://www.antclabs.com/bltouch) as a Z probe.

[print-head-template](../assets/templates/grid-template.md ':include')

### HextrudORT

The HextrudORT is a special print head because it is not just one print head but multiple.  
It starts with a generic carriage and allows different Print heads to be mounted to that carriage.  
Supported print heads include (as of now):  
* Nova
* Dragon
* Mosquito
* E3D V6 (+Volcano)
* Rapido (+UHF setup)

[print-head-template](../assets/templates/grid-template.md ':include')

## 4. Electronics

[print-head-template](../assets/templates/grid-template.md ':include')