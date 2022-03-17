<script>
new Vue({
  el: "grid:nth-of-type(1)",
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
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4238471"},
                {title: "CAD File", link: "https://a360.co/2U1i6ob"},
            ],
            customContent: "<span class='component-active-status'>Since March 2020</span>",
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
            customContent: "<span class='component-active-status'>Since May 2020</span>",
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
            customContent: "<span class='component-active-status'>Since July 2020</span>",
        },
    ]
  }
});
new Vue({
  el: "grid:nth-of-type(2)",
  data: {
    config: {
        gridTemplateColumns: "1fr 1fr",
    },
    items: [
        {
            title: "HextrudORT",
            image: "../assets/images/components/HextrudORT_CoverThumb.jpg",
            description: `Collection of multiple print heads based on the HextrudORT (Extruder + Hotend) carriage`,
            buttons: [
                {title: "HextrudORT GitHub Page", link: "https://miragec79.github.io/HextrudORT/"},
            ],
            customContent: "<span class='component-active-status'>Active</span>",
        },
    ]
  }
});
</script>

Several versions are already published, but a lot more are being created by the community.  
Search for HevORT on [Thingiverse](https://www.thingiverse.com/) to find the latest.  
This list will capture the ones I created plus the ones from members of the [FB community](https://www.facebook.com/groups/hevort/) that wish to have their work posted here.  
All configuration here below include the [BLtouch from Antclabs](https://www.antclabs.com/bltouch) as a Z probe.

[print-head-template](../../assets/templates/grid-template.md ':include')

### HextrudORT

The HextrudORT is a special print head because it is not just one print head but multiple.  
It starts with a generic carriage and allows different Print heads to be mounted to that carriage.  
Supported print heads include (as of now):
* Nova
* Dragon
* Mosquito
* E3D V6 (+Volcano)
* Rapido (+UHF setup)

[hextrudort-template](../../assets/templates/grid-template.md ':include')