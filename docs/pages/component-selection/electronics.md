<script>
new Vue({
  el: "grid:nth-of-type(1)",
  data: {
    config: {
        gridTemplateColumns: "1fr 1fr",
    },
    items: [
        {
            title: "Electronics",
            image: "../assets/images/components/ElectronicsThumb.jpg",
            description: `Electronics List of material for Power Management and Control Board`,
            buttons: [
                {title: "Electronics Island proposal", link: "https://www.thingiverse.com/thing:3953165"},
                {title: "BOM - Web", link: "https://miragec79.github.io/HevORT/bom/BOM_Electronics.htm"},
                {title: "BOM - Download", link: "https://miragec79.github.io/HevORT/bom/BOM_Electronics.xlsx"},
            ],
            customContent: "<span class='component-active-status'>Active</span>",
        },
    ]
  }
});
</script>

[electronics-template](../../assets/templates/grid-template.md ':include')

