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