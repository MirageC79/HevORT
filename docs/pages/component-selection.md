# Component Selection

The HevORT project has been designed to be modular. This means you can select from multiple components configuration and assemble the one that will suit your needs.

## 1. Frame/Enclosure
This is the base of the HevORT

<grid columns="1fr 1fr">
<item title="Frame" image="docs/assets/images/components/FrameThumb.png">
  <description slot="description">
    The bare base frame with a side electronics bay
  </description>
  <buttons slot="buttons">
    <item-button url="https://a360.co/3dCjsfY">Frame Hardware Map</item-button>
    <item-button url="https://a360.co/3LKTHLL">CAD File</item-button>
    <item-button url="bom/BOM_Frame_ElecExt.htm">BOM - Web</item-button>
    <item-button icon="fa fa-download" url="bom/BOM_Frame_ElecExt.xlsx">BOM<br>Download</item-button>
  </buttons>
  <tags slot="tags">
  </tags>
</item>
<item title="Enclosure" image="docs/assets/images/components/AcidBeeThumb.png">
  <description slot="description">
    The Acid Bee Enclosure
  </description>
  <buttons slot="buttons">
    <item-button url="https://www.thingiverse.com/thing:5188673">Thingiverse</item-button>
    <item-button url="https://a360.co/3HOJCyF">CAD File</item-button>
    <item-button url="bom/BOM_Enclosure_AcidBee.htm">BOM - Web</item-button>
    <item-button icon="fa fa-download" url="bom/BOM_Enclosure_AcidBee.xlsx">BOM<br>Download</item-button>
  </buttons>
  <tags slot="tags">
  </tags>
</item>
</grid>

## 2. XY Gantry
You will find below the various configuration for XY Gantry.  Select one in function of your needs:

<grid>
<item title="Standard XY" image="docs/assets/images/components/XYThumb.png">
  <description slot="description">
    This version is suited for the commonly available GT2 pulleys.
    <br>These pulleys available from China and other location are 9mm thick and have wider flanges(lips).
  </description>
  <buttons slot="buttons">
    <item-button url="https://www.thingiverse.com/thing:4184477">Thingiverse</item-button>
    <item-button url="https://a360.co/2UEaOHa">CAD File</item-button>
    <item-button url="bom/BOM_XY_STD.htm">BOM - Web</item-button>
    <item-button icon="fa fa-download" url="bom/BOM_XY_STD.xlsx">BOM<br>Download</item-button>
  </buttons>
  <tags slot="tags">
    <item-tag>6mm belt</item-tag>
    <item-tag>Nema17</item-tag>
  </tags>
</item>
<item title="(HT) XY High Temp" image="docs/assets/images/components/XYHTThumb.png">
  <description slot="description">
    The High Temp version of the XY gantry features 5mm bore pulleys. These are slightly thicker (10mm) and have a
    narrower lips.
    <br>Note that due to extreme compactness of some components,
    <br>transition bushings are necessary to fit the 5mm bore onto 3mm hardware.
  </description>
  <buttons slot="buttons">
    <item-button url="https://www.thingiverse.com/thing:4402495">Thingiverse</item-button>
    <item-button url="https://a360.co/3ABEubX">CAD File</item-button>
    <item-button url="bom/BOM_XYHT.htm">BOM - Web</item-button>
    <item-button icon="fa fa-download" url="bom/BOM_XYHT.xlsx">BOM<br>Download</item-button>
  </buttons>
  <tags slot="tags">
    <item-tag>6mm belt</item-tag>
    <item-tag>Nema17</item-tag>
  </tags>
</item>
<item title="(HD9) XY Heavy Duty 9mm" image="docs/assets/images/components/XYHD9Thumb.png">
  <description slot="description">
    This XY Gantry will fit on the same frame as the Standard and HT version of the XY Gantry.
    <br>The XYHD gantry are meant for very large printers or for the ones with very high performance in mind.
    <br><br>Featuring:
    <br>9mm 2GT Belt,
    <br>Center Pulley Bore 5mm Dowell Pins,
    <br>MGN12H instead of MGN12C and more...
  </description>
  <buttons slot="buttons">
    <item-button url="https://www.thingiverse.com/thing:4629715">Thingiverse</item-button>
    <item-button url="https://a360.co/35p2MH0">CAD File</item-button>
    <item-button url="bom/BOM_XYHD9.htm">BOM - Web</item-button>
    <item-button icon="fa fa-download" url="bom/BOM_XYHD9.xlsx">BOM<br>Download</item-button>
  </buttons>
  <tags slot="tags">
    <item-tag>9mm belt</item-tag>
    <item-tag>Nema17</item-tag>
    <item-tag>Nema23</item-tag>
    <item-tag>Servo</item-tag>
  </tags>
</item>
<item title="(HD12) XY Heavy Duty 12mm" image="docs/assets/images/components/XYHD12Thumb.png">
  <description slot="description">
    This XY Gantry will fit on the same frame as the Standard and HT version of the XY Gantry.
    <br>The XYHD gantry are meant for very large printers or for the ones with very high performance in mind.
    <br><br>Featuring:
    <br>12mm 2GT Belt,
    <br>Center Pulley Bore 5mm Dowell Pins,
    <br>MGN12H instead of MGN12C and more...
  </description>
  <buttons slot="buttons">
    <item-button url="https://www.thingiverse.com/thing:4625509">Thingiverse</item-button>
    <item-button url="https://a360.co/3dxzysP">CAD File</item-button>
    <item-button url="bom/BOM_XYHD12.htm">BOM - Web</item-button>
    <item-button icon="fa fa-download" url="bom/BOM_XYHD12.xlsx">BOM<br>Download</item-button>
  </buttons>
  <tags slot="tags">
    <item-tag>12mm belt</item-tag>
    <item-tag>Nema17</item-tag>
    <item-tag>Nema23</item-tag>
    <item-tag>Servo</item-tag>
  </tags>

</item>
</grid>

### X Axis Options
Alternative version/improvements to the above Gantry parts (like Carbon fibre)

<grid>
<item title="(XYHT) MGN9 Carbon Fiber X-Axis" image="docs/assets/images/components/OPTION_XYHT_CFX_MGN9_Thumb.jpg">
  <description slot="description">
    A 2020 Carbon Fiber Tube is replacing X extrusion for huge weight saving.
  </description>
  <buttons slot="buttons">
    <item-button url="https://www.thingiverse.com/thing:4880808">Thingiverse</item-button>
    <item-button url="https://a360.co/3z3ofD8">CAD File</item-button>
    <item-button url="bom/Option_XYHT_CFX_MGN9.htm">BOM - Web</item-button>
    <item-button icon="fa fa-download" url="bom/Option_XYHT_CFX_MGN9.xlsx">BOM<br>Download</item-button>
  </buttons>
  <tags slot="tags">
    <item-tag>6mm belt</item-tag>
	<item-tag>Carbon Fiber</item-tag>
	<item-tag>MGN9</item-tag>
  </tags>
</item>
<item title="(HD9) MGN9 Carbon Fiber X-Axis" image="docs/assets/images/components/OPTION_HD9_CFX_MGN9_Thumb.jpg">
  <description slot="description">
    A 2020 Carbon Fiber Tube is replacing X extrusion for huge weight saving.
  </description>
  <buttons slot="buttons">
    <item-button url="https://github.com/MirageC79/HevORT/tree/master/files/STL/HD9/Option_HD9_CFx">STLs</item-button>
    <item-button url="https://a360.co/3ttC8sp">CAD File</item-button>
    <item-button url="bom/Option_HD9_CFx_MGN9.htm">BOM - Web</item-button>
    <item-button icon="fa fa-download" url="bom/Option_HD9_CFx_MGN9.xlsx">BOM<br>Download</item-button>
  </buttons>
  <tags slot="tags">
    <item-tag>9mm belt</item-tag>
	<item-tag>Carbon Fiber</item-tag>
	<item-tag>MGN9</item-tag>
  </tags>
</item>
<item title="(HD9) MGN9 Top Rail Carbon Fiber X-Axis" image="docs/assets/images/components/XYHD9_CFx_MGN9_TopRail_Thumb.jpg" status="** NEW **">
  <description slot="description">
    A 2020 Carbon Fiber Tube is replacing X extrusion for huge weight saving.
	The MGN9 linear rail is mounted on the top of the Carbon Fiber Tube to facilitate the installation of longer hotends and extruders like the Vz-HextrudORT Low.
  </description>
  <buttons slot="buttons">
    <item-button url="https://github.com/MirageC79/HevORT/tree/master/files/STL/HD9/Option_HD9_CFx_TopRail">STLs</item-button>
    <item-button url="https://a360.co/3YuR1c5">CAD File</item-button>
    <item-button url="bom/Option_HD9_CFx_TopRail_MGN9.htm">BOM - Web</item-button>
    <item-button icon="fa fa-download" url="bom/Option_HD9_CFx_TopRail_MGN9.xlsx">BOM<br>Download</item-button>
  </buttons>
  <tags slot="tags">
    <item-tag>9mm belt</item-tag>
	<item-tag>Carbon Fiber</item-tag>
	<item-tag>MGN9</item-tag>
	<item-tag>Top Rail</item-tag>
  </tags>
</item>
<item title="(HD12) MGN9 Carbon Fiber X-Axis" image="docs/assets/images/components/OPTION_HD12_CFX_MGN9_Thumb.jpg">
  <description slot="description">
    A 2020 Carbon Fiber Tube is replacing X extrusion for huge weight saving.
  </description>
  <buttons slot="buttons">
    <item-button url="https://www.thingiverse.com/thing:4886459">Thingiverse</item-button>
    <item-button url="https://a360.co/3gqVqt4">CAD File</item-button>
    <item-button url="bom/Option_HD12_CFx_MGN9.htm">BOM - Web</item-button>
    <item-button icon="fa fa-download" url="bom/Option_HD12_CFx_MGN9.xlsx">BOM<br>Download</item-button>
  </buttons>
  <tags slot="tags">
    <item-tag>12mm belt</item-tag>
	<item-tag>Carbon Fiber</item-tag>
	<item-tag>MGN9</item-tag>
  </tags>
</item>
<item title="(HD12) MGN9 Top Rail Carbon Fiber X-Axis" image="docs/assets/images/components/XYHD12_CFx_MGN9_TopRail_Thumb.jpg" status="** NEW **">
  <description slot="description">
    A 2020 Carbon Fiber Tube is replacing X extrusion for huge weight saving.
	The MGN9 linear rail is mounted on the top of the Carbon Fiber Tube to facilitate the installation of longer hotends and extruders like the Vz-HextrudORT Low.
  </description>
  <buttons slot="buttons">
    <item-button url="https://github.com/MirageC79/HevORT/tree/master/files/STL/HD12/OPTION%20HD12CFx_TopRail">STLs</item-button>
    <item-button url="https://a360.co/3YTyTso">CAD File</item-button>
    <item-button url="bom/Option_HD12_CFx_TopRail_MGN9.htm">BOM - Web</item-button>
    <item-button icon="fa fa-download" url="bom/Option_HD12_CFx_TopRail_MGN9.xlsx">BOM<br>Download</item-button>
  </buttons>
  <tags slot="tags">
    <item-tag>12mm belt</item-tag>
	<item-tag>Carbon Fiber</item-tag>
	<item-tag>MGN9</item-tag>
	<item-tag>Top Rail</item-tag>
  </tags>
</item>
</grid>

## 3. Z Axis and Build Plate
HevORT uses triple Z system to leverage the self levelling function from your firmware.  <br>Choose your weapon wisely ;)

<grid>
<item title="ZR V2.6 (WobbleX)" image="docs/assets/images/components/ZR_V2.6_Thumb.jpg" status="** NEW **">
  <description slot="description">
    Making use of the awesome design from <i>EvoMoto</i>, ZR V2.6 will digest all the wobble you can imagine!
	<br>Using all other goodies from ZR V2.5, this version has been revised to simplify printing while increasing overall rigidity. A little bit of oomph was also added to the looks ;).
    <br><br><u>Two options are available:</u><br>1- This better option uses the WobbleX metal isolators.
	Equivalent to wobble rings, these isolators are made from aluminum and can support very large and heavy build plates.
    <br><br>2- The second option is to print wobble rings yourself. They should work fine but I invite you to make them out of a very rigid material 
	with limited creep. ABS-CF would be a good pick.
	<br><br><u>Carried over from ZR_V2.5:</u>
	<br>- Double row angular contact bearing for better axial load support to
    the ball screw.
    <br>- Quality shaft collar from Ruland is providing a better resting shoulder to the thrust bearing
	than the poor half lip of a thread the SFU1204 usually offers.
  </description>
  <buttons slot="buttons">
    <item-button url="https://github.com/MirageC79/HevORT/tree/master/files/STL/ZR_V2.6">STLs GitHub</item-button>
    <item-button url="https://a360.co/44C6QRo">CAD File</item-button>
    <item-button url="bom/BOM_ZR_V2.6.htm">BOM - Web</item-button>
    <item-button icon="fa fa-download" url="bom/BOM_ZR_V2.6.xlsx">BOM<br>Download</item-button>
  </buttons>
  <tags slot="tags">
  <item-tag>WobbleX</item-tag>
  <item-tag>12mm Ball Screw</item-tag>
  <item-tag>Wobble Rings</item-tag>
  <item-tag>NEMA17</item-tag>
  </tags>
</item>
<item title="ZR V2.5" image="docs/assets/images/components/ZR_V2.5_Thumb.jpg" status="Retired">
  <description slot="description">
    Using the same Z wobble management as V2, this new version integrates
    <br><br>2 new features:<br>First, A double row angular contact bearing is now offering better axial load support to
    the ball screw.
    <br><br>Second, a quality shaft collar from Ruland is providing a better resting shoulder to the thrust bearing
    <br>than the poor half lip of a thread the SFU1204 usually offers.
  </description>
  <buttons slot="buttons">
    <item-button url="https://www.thingiverse.com/thing:4723500">Thingiverse</item-button>
    <item-button url="https://a360.co/3bSwQzF">CAD File</item-button>
    <item-button url="bom/BOM_ZR_V2.5.htm">BOM - Web</item-button>
    <item-button icon="fa fa-download" url="bom/BOM_ZR_V2.5.xlsx">BOM<br>Download</item-button>
  </buttons>
  <tags slot="tags">
  <item-tag>12mm Ball Screw</item-tag>
  <item-tag>Wobble Wings</item-tag>
  <item-tag>NEMA17</item-tag>
  </tags>
</item>
<item title="ZR V2 (Wobble wings)" image="docs/assets/images/components/ZRV2Thumb.png" status="Retired">
  <description slot="description">
    Some may say, get proper alignment, get quality parts, go back to lead screw... Well
    <br><br>The size of the bed on that printer makes it quite heavy.
    <br>Moving it down and up in a non planar printing mode will get standards lead screw to wear out pretty quick.
    <br><br>So for the ones of us who did not win the cheap ball screw lottery,
    <br><br>this version of ZR system introduces Z wobble management using magnets and ball bearings.
    <br>Also a second thrust bearing was added to allow the use of a M10X1.00 nut to secure the ball screw better.
  </description>
  <buttons slot="buttons">
    <item-button url="https://www.thingiverse.com/thing:4387638">Thingiverse</item-button>
    <item-button url="https://a360.co/3gweJiw">CAD File</item-button>
    <item-button url="bom/BOM_ZR_V2.htm">BOM - Web</item-button>
    <item-button icon="fa fa-download" url="bom/BOM_ZR_V2.xlsx">BOM<br>Download</item-button>
  </buttons>
  <tags slot="tags">
  <item-tag>12mm Ball Screw</item-tag>
  <item-tag>NEMA17</item-tag>
  </tags>
</item>
<item title="ZR" image="docs/assets/images/components/ZRThumb.png" status="Retired">
  <description slot="description">
    This initial version of the Self Leveling Z axis on MGN rails from the HevORT
    <br>works just fine if you are using quality Ball screws with excellent frame alignment as well as perfect
    tolerances printed parts...
    <br>Sounds impossible to get?
    <br><br>look at V2 below :)
  </description>
  <buttons slot="buttons">
    <item-button url="https://www.thingiverse.com/thing:4184059">Thingiverse</item-button>
    <item-button url="https://a360.co/3gweJiw">CAD File</item-button>
  </buttons>
  <tags slot="tags">
  </tags>
</item>
</grid>

## 4. Print Head
Several versions are already published, but a lot more are being created by the community.
Search for HevORT on [Thingiverse](https://www.thingiverse.com/) to find the latest.
This list will capture the ones I created plus the ones from members of the [FB community](https://www.facebook.com/groups/hevort/) that wish to have their work posted here.
All configuration here below include the [BLtouch from Antclabs](https://www.antclabs.com/bltouch) as a Z probe.

<grid>
<item title="E3D Hemera" image="docs/assets/images/components/HemeraThumb.png">
  <description slot="description">
    Including configuration for E3D V6,
    <br>Volcano
    <br>and Super Volcano heatblocks.
    <br><br>Part cooling is achieved via BerdAir system
    .<br><br>Duct STL include on the Thingiverse page.
  </description>
  <buttons slot="buttons">
    <item-button url="https://www.thingiverse.com/thing:4238471">Thingiverse</item-button>
    <item-button url="https://a360.co/2U1i6ob">CAD File</item-button>
    <item-button url="bom/BOM_X_Hemera.htm">BOM - Web</item-button>
    <item-button icon="fa fa-download" url="bom/BOM_X_Hemera.xlsx">BOM<br>Download</item-button>
  </buttons>
  <tags slot="tags">
  </tags>
</item>
<item title="BMG/Titan Aqua" image="docs/assets/images/components/BMGAquaThumb.png">
  <description slot="description">
    This is the all metal BMG (Right Hand) paired with a Titan Aqua cooling plate,
    <br>E3D Volcano
    <br>and the E3D slim stepper.
    <br><br>BLTouch and Optical endstop sensor mounts as well.
  </description>
  <buttons slot="buttons">
    <item-button url="https://www.thingiverse.com/thing:4411289">Thingiverse</item-button>
    <item-button url="https://a360.co/3fY7MFT">CAD File</item-button>
    <item-button url="bom/BOM_BMGAqua.htm">BOM - Web</item-button>
    <item-button icon="fa fa-download" url="bom/BOM_BMGAqua.xlsx">BOM<br>Download</item-button>
  </buttons>
  <tags slot="tags">
    <item-tag>water cooled</item-tag>
  </tags>
</item>
<item title="E3D Hemera Top Mounted and SuperVolcano" image="docs/assets/images/components/HemeraTopMountThumb.png">
  <description slot="description">
    This print head requires the use of E3D Super Volcano.
    <br><br>Part cooling is achieved by BerdAir system.
    <br><br>Bltouch and optical sensors are used for positioning.
  </description>
  <buttons slot="buttons">
    <item-button url="https://www.thingiverse.com/thing:4556554">Thingiverse</item-button>
    <item-button url="https://a360.co/39ryl4z">CAD File</item-button>
    <item-button url="bom/BOM_X_HemeraTopMount.htm">BOM - Web</item-button>
    <item-button icon="fa fa-download" url="bom/BOM_X_HemeraTopMount.xlsx">BOM<br>Download</item-button>
  </buttons>
  <tags slot="tags">
    <item-tag>Volcano</item-tag>
  </tags>
</item>
</grid>

### HextrudORT

The HextrudORT is a special print head because it is not just one print head but multiple.
It starts with a generic carriage and allows different Print heads to be mounted to that carriage.
Supported print heads include (as of now):
* Nova
* Dragon
* Mosquito
* E3D V6 (+Volcano)
* Rapido (+UHF setup)

<grid columns="1fr 1fr">
<item title="HextrudORT" image="docs/assets/images/components/HextrudORT_CoverThumb.jpg">
  <description slot="description">
    Collection of multiple print heads based on the HextrudORT (Extruder + Hotend) carriage
  </description>
  <buttons slot="buttons">
    <item-button url="https://miragec79.github.io/HextrudORT">HextrudORT GitHub Page</item-button>
  </buttons>
  <tags slot="tags">
  </tags>
</item>
</grid>

## 4. Electronics

<grid v-bind:config="{gridTemplateColumns: '1fr 1fr'}">
<item title="Electronics" image="docs/assets/images/components/ElectronicsThumb.jpg">
  <description slot="description">
    Electronics List of material for Power Management and Control Board
  </description>
  <buttons slot="buttons">
    <item-button url="https://www.thingiverse.com/thing:3953165">Electronics Island proposal</item-button>
    <item-button url="bom/BOM_Electronics.htm">BOM - Web</item-button>
    <item-button icon="fa fa-download" url="bom/BOM_Electronics.xlsx">BOM<br>Download</item-button>
  </buttons>
  <tags slot="tags">
  </tags>
</item>
</grid>
