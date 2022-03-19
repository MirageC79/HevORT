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
    createGridData(2, [
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
    createGridData(3, [
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

## Extruder

[frame-template](../../assets/templates/grid-template.md ':include')

## Cooling

[frame-template](../../assets/templates/grid-template.md ':include')

## Other

[frame-template](../../assets/templates/grid-template.md ':include')