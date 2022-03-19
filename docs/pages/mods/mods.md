# Mods

> This is the section for the community
>
> It showcases all the modification's people from the community have created and published

|INFO|
If you have created a mod for the HevORT too.
Please create a merge request to have it added 

[GitHub/HevORT - Pull Request](https://github.com/MirageC79/HevORT/pulls)


If you need help, the best place to ask is the Discord server

[Discord/HevORT](https://discord.gg/nCYRQAZPWV)
|INFO|

<script>
    createGridData(1, [
        {
            title: "EvoMoto HD12 AWD",
            image: "../../assets/images/mods/evomoto_awd_hd12.png",
            description: `This mod adds two more steppers to the HevORT.
                        <br>They replace the pulley mounts on the front for even more power.
                        <br><br>Requires (not including existing parts from the pulley mounts):
                        <br>-2 more steppers
                        <br>-2 driving pulleys for the stepper (20teeth)
                        <br>-6x M5 100mm screws (replaces existing M5 90mm)
                        <br>-2x M5 55mm screws (replaces existing M5 45mm)`,
            credits: [
                    {name: "EvoMoto"},
            ],
            buttons: [
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:5171980"},
            ],
        },
        {
            title: "EvoMoto STD/HT AWD",
            image: "../../assets/images/mods/evomoto_awd_std-ht.png",
            description: `This mod adds two more steppers to the HevORT.
                        <br>They replace the pulley mounts on the front for even more power.
                        <br><br>Requires (not including existing parts from the pulley mounts):
                        <br>-2 more steppers
                        <br>-2 driving pulleys for the stepper (20teeth)`,
            credits: [
                    {name: "EvoMoto"},
            ],
            buttons: [
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4815859"},
            ],
        },
        {
            title: "Hans Hanson HD12 AWD",
            image: "../../assets/images/mods/hans-hanson_awd_hd12.jpg",
            description: `Almost the same number and length of shafts are required as with the opposite Motor Mount and Pulley mount
                        <br><br>(except for the two Dowel Pin 5x40mm for the belt binder).
                        <br>The same goes for the idler and pulley.`,
            credits: [
                    {name: "Hans Hanson"},
            ],
            buttons: [
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4946002"},
                {title: "CAD File", link: "https://a360.co/3lwUEMv"}
            ],
        },
    ]);
    createGridData(2, [
        {
            title: "Wobble Rings for SFU1204",
            image: "../../assets/images/mods/evomoto_sfu1204_wobble_rings.jpg",
            description: `Alternative version of the original Wobble Rings for the ZR V2.5
                        <br>These do a better job at eliminating bad quality ballscrews
                        <br><br>Cheap ballscrews never run smooth, these wobble rings will eliminate any wobble
                        <br>the ballscrew would have induced into the print bed movement`,
            credits: [
                    {name: "EvoMoto"},
            ],
            buttons: [
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4781610"},
            ],
        },
        {
            title: "Wobble Rings for SFU1604",
            image: "../../assets/images/mods/evomoto_sfu1604_wobble_rings.png",
            description: `Same as the SFU1204 version but for SFU1604`,
            credits: [
                    {name: "EvoMoto"},
            ],
            buttons: [
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4785945"},
            ],
        },
        {
            title: "Z-Axis 2:1 reduction",
            image: "../../assets/images/mods/m3nt8l_z-axis_reduction.jpg",
            description: `2:1 reduction for the HevORT's ZR V2.5 Z-Axis
                        <br>This mod increases holding torque.
                        <br>It will also allow you to use 50mm longer ballscrews bringing you 50mm more Z-Travel.
                        <br><br>Requires (for all 3):
                        <br>3x 154 mm (77 tooth) 2GT closed loop belt
                        <br>3x 40 tooth pulley with 5mm bore
                        <br>3x Roland Coupler (as seen in standard HevORT Z 2.5)
                        <br>3x 5200-2RS double row angular contact bearing (as seen in standard HevORT Z 2.5)
                        <br>3x Coupler (as seen in standard HevORT Z 2.5)
                        <br>3x 5mm shaft pins
                        <br>3x 20 tooth pulley for the motor shaft (5mm) (as seen in standard HevORT Z 2.5)
                        <br>9x 625RS 5mm bore x 16mm OD x 5mm wide bearings`,
            credits: [
                    {name: "M3NT8L"},
            ],
            buttons: [
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4880007"},
            ],
        },
    ]);
    createGridData(3, [
        {
            title: "BL-Touch Rapido UHF Hotend bracket",
            image: "https://hevort-mods.donnerplays.de/images/BL_Touch_Rapido_Hotend_UHF_Bracket.png",
            description: `Mounting bracket for the BL-Touch when used on a Rapido UHF hotend.
                        <br>- Adds a lip on the top that prevents the support from rotating.
                        <br>- Uses nuts for all screw holes instead of screwing into the plastic
                        <br><br>Requires:
                        <br>- 3x M3 nuts
                        <br>- Main mounting screw: M3x(~35mm long screw)
                        <br>- BL-Touch screws: 2x M3x8mm screw`,
            credits: [
                    {name: "MirageC", description: "Initial work/version"},
                    {name: "DonnerPlays", description: "Modification to use M3 nuts instead of threading into the plastic"}
            ],
            buttons: [
                {title: "CAD File", link: "https://hevort-mods.donnerplays.de/cad/BL_Touch_Rapido_Hotend_UHF_Bracket.step", icon: "fa fa-download"},
            ],
        },
    ]);
    createGridData(4, [
        {
            title: "HD12/MGN12 CPAP Rapido Duct",
            image: "https://hevort-mods.donnerplays.de/images/HD12_MGN12_Rapido_Duct.png",
            description: `Fan duct for CPAP fan hose
                        <br>(15mm inner diameter)
                        <br><br>Mounts to the standard MGN12H/HD12 HextrudORT carriage
                        <br><br>Requires:
                        <br>- Standard: 4x M3x8mm screws
                        <br>- UHF: 4x M3x14mm screws`,
            credits: [
                    {name: "MirageC", description: "Initial work of MGN9 version"},
                    {name: "DonnerPlays", description: "Modification to fit HD12/MGN12"}
            ],
            buttons: [
                {title: "CAD File", link: "https://hevort-mods.donnerplays.de/cad/HD12_MGN12_Rapido_Duct.step", icon: "fa fa-download"},
            ],
        },
        {
            title: "HD12/MGN12H Rapido UHF Spacer",
            image: "https://hevort-mods.donnerplays.de/images/HD12_MGN12_Rapido_UHF_Spacer.png",
            description: `Spacer for the CPAP Rapido Duct
                        <br>when the rapido is used with a volcano nozzle (UHF)`,
            credits: [
                    {name: "MirageC", description: "Initial work of MGN9 version"},
                    {name: "DonnerPlays", description: "Modification to fit HD12/MGN12"}
            ],
            buttons: [
                {title: "CAD File", link: "https://hevort-mods.donnerplays.de/cad/HD12_MGN12_Rapido_UHF_Spacer.step", icon: "fa fa-download"},
            ],
        },
        {
            title: "HD12/MGN12 40mm fan mount (tested with Rapido hotend)",
            image: "https://hevort-mods.donnerplays.de/images/MGN12_HD12_Rapido_Fan_Shroud_40mm.png",
            description: `This bracket allows you to use a 40mm fan for
                        <br>hotend cooling on the
                        <br>MGN12/HD12 HextrudORT carriage
                        <br><br>Includes small side openings to help with getting out the hot air and help with installation.
                        <br><br>Is supported by two screws/flaps on the side
                        <br><br>Requires:
                        <br>- 3x M3x(8mm + fan size)
                        <br>Example: 20mm thick fan = 28mm = 25-30mm`,
            credits: [
                    {name: "MirageC", description: "Initial work on version for Rapido with 25mm fan"},
                    {name: "DonnerPlays", description: "Modification to allow 40mm fan to be used"}
            ],
            buttons: [
                {title: "CAD File", link: "https://hevort-mods.donnerplays.de/cad/MGN12_HD12_Rapido_Fan_Shroud_40mm.step", icon: "fa fa-download"},
            ],
        },
    ]);
    createGridData(5, [
        {
            title: "SpEye",
            image: "../assets/images/mods/spy-eye/spy-eye-printed.jpg",
            description: `Not only an empty filament detector.
                        <br>The SpEye can detect a spool jam and pause your print.`,
            credits: [
                    {name: "MirageC", description: "Initial work"},
            ],
            buttons: [
                {title: "SpyEye page", link: "#/pages/mods/spy-eye.md"},
            ],
        },
        {
            title: "ADXL345 mounting bracket on 40mm fan",
            image: "https://hevort-mods.donnerplays.de/images/ADXL345_40mm_Fan_Mount.png",
            description: `Allows you to easily mount an ADXL345 accelerometer to your print head.
                        <br><br>Mounts to the front of a 40mm fan.
                        <br>(tested with a 20mm thick fan)
                        <br><br>Requires: 3.5mm longer screws`,
            credits: [
                    {name: "DonnerPlays", description: "Initial work"},
            ],
            buttons: [
                {title: "CAD File", link: "https://hevort-mods.donnerplays.de/cad/ADXL345_40mm_Fan_Mount.step", icon: "fa fa-download"},
            ],
        },
        {
            title: "Hans Hanson FumesORT",
            image: "../assets/images/mods/hans-hanson_fumes-ort.jpg",
            description: `Fume filter mounted under the HevORT's print bed.
                        <br><br>Filter basket volume is approx. 313ml.
                        <br>Using activated charcoal pellets with a diameter of approx. 4mm
                        <br><br>Uses 4x 40x40x20 Sunon MF40202VX-1000U-A99
                        <br>Circulates 37m³/h with empty filter basked
                        <br>11m³/h with full filter at 24V or 6m³/h at 12V
                        <br><br>Requires:
                        <br>20x M3x8mm or M3x10
                        <br>16x M3x25mm (for 40x40x20 mm Fans)
                        <br>2x wago 221-413
                        <br>8x M5x8mm Socket Head Screws
                        <br>8x Hammer nut M5 for 2020 profile
                        <br>4x Hammer nut M3 for 2020 profile
                        <br>1x 295mm 2040 profile
                        <br>4x 40x40x20 Fans
                        <br>1x activated charcoal pellets`,
            credits: [
                    {name: "Hans Hanson"},
            ],
            buttons: [
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:5197675"},
                {title: "CAD File", link: "https://a360.co/3lwUEMv"}
            ],
        },
    ]);
</script>

## XY Gantry

[xy-gantry-template](../../assets/templates/grid-template.md ':include')

## Z-Axis

[z-axis-template](../../assets/templates/grid-template.md ':include')


## Extruder

[extruder-template](../../assets/templates/grid-template.md ':include')

## Cooling

[cooling-template](../../assets/templates/grid-template.md ':include')

## Other

[other-template](../../assets/templates/grid-template.md ':include')