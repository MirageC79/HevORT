# Frame Size Calculation

## Ordering Extrusion Profiles, Rails and Ball Screws.

The [_Frame & Friends Calculator_](../assets/references/FrameCalculator.xlsx) Excel sheet will help you to figure out the exact dimensions and quantity of extrusion you need to order.
It will also define the rails, ballscrews, bed plate and heater pad size you need for that size.  
Since rails and ballscrew can only be ordered into preset dimensions, please ensure that the print size you select will give you standard rail and screw size.

Proposed sizes can be found into the Calculator.
## [Frame & Friends Calculator](../assets/references/FrameCalculator.xlsx)

## How to use the Frame Calculator

### 1. Enter your desired print area dimension for **X axis and Z only**.
*(Y axis will be filled in automatically) X and Y ration as to be kept to 1:1 due to the Bed Arms angle.  They are pointing the exact center of the bed by design, changing the XY ratio will affect this center point.*  
<br>
__NEW! Selection box for gantry type (STD/HT or HD)__ will now trigger selection of certain option lines. Summary table will be reflecting this selection.  
__NOTE*__ - HD print area will be smaller due to wider Y carriages and bigger print head. around 35mm will be amputed to X and Y.  
<br>
![Frame Calculation Example 1](../assets/images/frame/framecalc1.png)

### 2. Refresh the pivot table by right clicking on it and selecting *Refresh*.

![Frame Calculation Example 2](../assets/images/frame/framecalc2.png)

### EXAMPLES
Here are a couple of snapshots from results of recommended sizes:

<script>
new Vue({
  el: "grid:nth-of-type(1)",
  data: {
    config: {
      gridTemplateColumns: "1fr 1fr 1fr 1fr"
    },
    items: [
        {
            title: "STD/HT <br> X315 Y315 Z340",
            image: "../assets/images/frame/size-examples/315_315_340.png",
        },
        {
            title: "STD/HT <br> X415 Y415 Z440",
            image: "../assets/images/frame/size-examples/415_415_440.png",
        },
        {
            title: "HD <br> X315 Y315 Z340",
            image: "../assets/images/frame/size-examples/315_315_340HD.png",
        },
        {
            title: "HD <br> X415 Y415 Z440",
            image: "../assets/images/frame/size-examples/415_415_440HD.png",
        },
    ]
  }
});
</script>

[grid-template](../assets/templates/grid-template.md ':include')

