
let createGridData = (gridNumber, items = [], config = {}) => {
    return new Vue({
        el: `grid:nth-of-type(${gridNumber})`,
        data: {
            config: config,
            items: items,
        }
    });
}