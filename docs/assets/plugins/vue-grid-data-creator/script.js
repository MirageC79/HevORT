
let createGridData = (gridNumber, items = [], config = {}) => {
    return new Vue({
        el: `grid:nth-of-type(${gridNumber})`,
        data: {
            config: config,
            items: items,
        },
        methods: {
            toggleDescription: function (buttonEvent, item) {
                let descriptionElement = buttonEvent.target.parentElement.parentElement.querySelector(".grid-item-description");

                if(descriptionElement.style.maxHeight) {
                    descriptionElement.classList.remove("grid-item-description-expanded");
                } else {
                    descriptionElement.classList.add("grid-item-description-expanded");
                }

                Vue.set(item, "descriptionExpanded", !item.descriptionExpanded);
            },
        }
    });
}