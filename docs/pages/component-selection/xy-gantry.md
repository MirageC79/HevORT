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
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4184477"},
                {title: "CAD File", link: "https://a360.co/2UEaOHa"},
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
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4402495"},
                {title: "CAD File", link: "https://a360.co/3ABEubX"},
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
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4629715"},
                {title: "CAD File", link: "https://a360.co/35p2MH0"},
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
                {title: "Thingiverse", link: "https://www.thingiverse.com/thing:4625509"},
                {title: "CAD File", link: "https://a360.co/3dxzysP"},
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
            title: "(XYHT) MGN9 Carbon Fiber X-Axis",
            image: "../assets/images/components/OPTION_XYHT_CFX_MGN9_Thumb.jpg",
            description: `A 2020 Carbon Fiber Tube is replacing X extrusion for huge weight saving.`,
            buttons: [
                {title: "STLs", link: "https://www.thingiverse.com/thing:4880808"},
                {title: "BOM - Web", link: "https://miragec79.github.io/HevORT/bom/Option_XYHT_CFX_MGN9.htm"},
                {title: "BOM - Download", link: "https://miragec79.github.io/HevORT/bom/Option_XYHT_CFX_MGN9.xlsx"},
                {title: "CAD File", link: "https://a360.co/3z3ofD8"},
            ],
            customContent: "<span class='component-active-status'>Active</span>",
        },
        {
            title: "(HD9) MGN9 Carbon Fiber X-Axis",
            image: "../assets/images/components/OPTION_HD9_CFX_MGN9_Thumb.jpg",
            description: `A 2020 Carbon Fiber Tube is replacing X extrusion for huge weight saving.`,
            buttons: [
                {title: "STLs", link: "https://github.com/MirageC79/HevORT/tree/master/files/STL/HD9/Option_HD9_CFx"},
                {title: "BOM - Web", link: "https://miragec79.github.io/HevORT/bom/Option_HD9_CFx_MGN9.htm"},
                {title: "BOM - Download", link: "https://miragec79.github.io/HevORT/bom/Option_HD9_CFx_MGN9.xlsx"},
                {title: "CAD File", link: "https://a360.co/3ttC8sp"},
            ],
            customContent: "<span class='component-active-status'>Active</span>",
        },
        {
            title: "(HD12) MGN9 Carbon Fiber X-Axis",
            image: "../assets/images/components/OPTION_HD12_CFX_MGN9_Thumb.jpg",
            description: `A 2020 Carbon Fiber Tube is replacing X extrusion for huge weight saving.`,
            buttons: [
                {title: "STLs", link: "https://www.thingiverse.com/thing:4886459"},
                {title: "BOM - Web", link: "https://miragec79.github.io/HevORT/bom/Option_HD12_CFx_MGN9.htm"},
                {title: "BOM - Download", link: "https://miragec79.github.io/HevORT/bom/Option_HD12_CFx_MGN9.xlsx"},
                {title: "CAD File", link: "https://a360.co/3gqVqt4"},
            ],
            customContent: "<span class='component-active-status'>Active</span>",
        },
    ]
  }
});
</script>

You will find below the various configuration for XY Gantry.  Select one in function of your needs:

[xy-gantry-template](../../assets/templates/grid-template.md ':include')

### Further options
Alternative version/improvements to the above Gantry parts (like Carbon fibre)

[xy-gantry-options-template](../../assets/templates/grid-template.md ':include')
