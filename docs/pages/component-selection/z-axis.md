<script>
new Vue({
  el: "grid:nth-of-type(1)",
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
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4184059"},
                {title: "CAD File", link: "https://a360.co/3gweJiw"},
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
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4387638"},
                {title: "CAD File", link: "https://a360.co/3bSwQzF"},
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
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4723500"},
                {title: "CAD File", link: "https://a360.co/3bSwQzF"},
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
</script>

Choose your weapon wisely ;)

[z-axis-template](../../assets/templates/grid-template.md ':include')