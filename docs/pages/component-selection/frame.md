<script>
new Vue({
  el: "grid:nth-of-type(1)",
  data: {
    config: {
        gridTemplateColumns: "1fr 1fr",
    },
    items: [
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
            customContent: "<span class='component-active-status'>Active</span>",
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
            customContent: "<span class='component-active-status'>Active</span>",
        },
    ]
  }
});
</script>

This is the base of the HevORT

[frame-template](../../assets/templates/grid-template.md ':include')