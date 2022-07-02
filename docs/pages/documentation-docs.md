# Documentation for the documentation

This file explains how to **use, expand or modify** the existing documentation.

|INFO|
Some files may not work when downloaded when using the local docsify server<br>
as they get corrupted for some reason.   

Once the documentation is pushed to github they work again (on github pages).

|INFO|

## Foundation

This documentation uses [docsify](https://docsify.js.org/), a documentation "generator".  
**docsify** helps make writing documentation easy, pretty and feature rich.

**docsify** itself has a detailed documentation, explaining every available feature.

## Work on docsify documentation locally

With docsify it is possible to host a local webserver.  
This way you don't have to push it to GitHub and wait for the changes to be refreshed.

1. you will need to have [Node.js](https://nodejs.org/en/download/) installed.
   - Make sure it is added to your **PATH** environment
2. Open a new terminal and execute
````shell
npm -v
````
It should return the current **npm** version installed.
3. Install the **docsify-cli** by executing the following command
````shell
npm i docsify-cli -g
````
This will install the docsify utility globally on your computer
4. Install git on your computer: [git](https://git-scm.com/downloads)
5. Navigate to a directory on your computer where you want to download the **HevORT** git repository to
6. Clone the **HevORT** git repository by executing the following command in your terminal
````shell
git clone https://github.com/MirageC79/HevORT.git
````
7. Navigate into the created **HevORT** folder (where the **index.html** file is located). Example:
````shell
cd HevORT
````
8. Execute the following command to start the local **docsify** webserver
````shell
docsify serve
````
9. The documentation should now be available at **https://localhost:3000**

## Grid view

To have a unified way of showing a large amount of related parts we use the grid view implementation.

### Usage
````vue
<grid v-bind:config="{gridTemplateColumns: '1fr 1fr 1fr'}">
  <item title="Item title" image="https://via.placeholder.com/400.png/FF0000/000000?text=Placeholder+Image" status="I'm active">
    <description slot="description">
      Full html support description text
    </description>
    <buttons slot="buttons">
      <item-button url="<link/path to open when clicked>">Link button</item-button>
      <item-button icon="fa fa-download" url="<link/path to open when clicked>">Download button</item-button>
    </buttons>
    <credits slot="credits">
      <credit name="1. Credit">1. Description</credit>
      <credit name="2. Credit" />
      <credit name="3. Credit">3. Description</credit>
    </credits>
  </item>
</grid>
````

### Explanation

- grid
  - v-bind:config="{}"
    - **OPTIONAL**
    - configuration for this grid item goes in between the ``{}``
    - default: {gridTemplateColumns: '1fr 1fr 1fr'}
    - options:
      - gridTemplateColumns
        - example: {gridTemplateColumns: '1fr 1fr'} = results in a 2 column grid
- item
  - title
    - **REQUIRED**
    - Any text (html supported)
  - image
    - **REQUIRED**
    - default: placeholder image
    - Should be link/path to image file
  - status
    - **OPTIONAL**
    - default: empty (not shown)
    - Any text (avoid to long text)
- description
  - **OPTIONAL**
  - content
    - Any text (html supported)
  - slot="description" required. Don't remove!
- buttons
  - **OPTIONAL**
  - content
    - ``<item-button>`` elements
  - slot="buttons" required. Don't remove!
  - Single button will use full width
  - More than one button will be use a grid with 2 columns
- item-button
  - url
    - **REQUIRED**
    - any link/path to a resource (file, website, ...)
  - content
    - **REQUIRED**
    - Is used as the button title
  - icon
    - **OPTIONAL**
    - css class added to ``<i>`` element. See [FontAwesome](https://fontawesome.com/icons)
  - hint
    - **OPTIONAL**
    - a small hint text displayed at the bottom left of the button (placed on the border)
    - some hint texts are automatically generated. These can be overridden by manually defining the **hint** prop
      - setting it to the text "null" will hide it.
      - Automatically generated hints are:
        - **url** starts with `https://a360.` results in ``f360`` text
        - **url** ends with `.step` results in ``step`` text
- credits
  - **OPTIONAL**
  - content
    - ``<credit>`` elements
  - slot="buttons" required. Don't remove!
- credit
  - name
    - **REQUIRED**
    - Any text
  - content
    - **OPTIONAL**
    - Shown below name
### Result

<grid v-bind:config="{gridTemplateColumns: '1fr 1fr 1fr'}">
  <item title="Item title" image="https://via.placeholder.com/400.png/FF0000/000000?text=Placeholder+Image" status="I'm active">
    <description slot="description">
      Full html support description text
    </description>
    <buttons slot="buttons">
      <item-button url="<link/path to open when clicked>">Link button</item-button>
      <item-button icon="fa fa-download" url="<link/path to open when clicked>">Download button</item-button>
    </buttons>
    <credits slot="credits">
      <credit name="1. Credit">1. Description</credit>
      <credit name="2. Credit" />
      <credit name="3. Credit">3. Description</credit>
    </credits>
  </item>
</grid>

## Plugins

Apart from using **docsify** this documentation also uses some self written   
plugins which helps writing documentation even further.

### hevort-button

This plugin allows to quickly create pretty full width buttons.

#### Example:

[>I'm a download button<](#)

[>>I'm a link button<<](#)

#### Usage
- Download
````markdown
[>I'm a download button<]()
````
- Link
````markdown
[>>I'm a link button<<]()
````

The link/path to download file goes in between **()**

### notification-markup

This plugin adds the ability to create different notification boxes.

#### Options
- WARNING
- INFO
- DANGER
- SUCCESS

### Example
|INFO|
Info notification
|INFO|

#### Usage

Place your text in between two ``|INFO|`` texts.