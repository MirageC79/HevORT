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
    <images slot="images">
      <item-image url="https://via.placeholder.com/400.png/FF0000/000000?text=Placeholder+Image+300px+red"></item-image>
      <item-image url="https://via.placeholder.com/600.png/0000FF/000000?text=Placeholder+Image+400px+blue"></item-image>
      <item-image url="https://via.placeholder.com/300.png/00FF00/000000?text=Placeholder+Image+200px+green"></item-image>
    </images>
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

### Result
<grid v-bind:config="{gridTemplateColumns: '1fr 1fr 1fr'}">
  <item title="Item title" image="https://via.placeholder.com/400.png/FF0000/000000?text=Placeholder+Image" status="I'm active">
    <description slot="description">
      Full html support description text
    </description>
    <images slot="images">
      <item-image url="https://via.placeholder.com/400.png/FF0000/000000?text=Placeholder+Image+300px+red"></item-image>
      <item-image url="https://via.placeholder.com/600.png/0000FF/000000?text=Placeholder+Image+400px+blue"></item-image>
      <item-image url="https://via.placeholder.com/300.png/00FF00/000000?text=Placeholder+Image+200px+green"></item-image>
    </images>
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

### Explanation

**Components** are elements you define like html elements ex.: ``<item></item>``.  
**Attributes** is data you define on a **Component** like ``title="Hello"`` ex.: ``<item title="Hello"></item>``.  
**Content** is what goes in between a **Component** like ``I'm a text`` ex.: ``<item-button>I'm a text</item-button>``.  

If a component below does not mention any **Attributes** or **Content** point, there are none for this **Component**

- grid
  - **REQUIRED**
  - attributes
    - v-bind:config="{}"
      - **OPTIONAL**
      - configuration for this grid item goes in between the ``{}``
      - default: {gridTemplateColumns: '1fr 1fr 1fr'}
      - options:
        - gridTemplateColumns
          - example: {gridTemplateColumns: '1fr 1fr'} = results in a 2 column grid
- item
  - attributes
    - title
      - **REQUIRED**
      - Any text (html supported)
    - image
      - **REQUIRED**
      - **OPTIONAL** (if **images** component is defined and contains at least one **item-image** component)
      - Gets replaced/ignored if an **images** component is defined containing **item-image** components
      - Should be link/path to image file
    - status
      - **OPTIONAL**
      - default: empty (not shown)
      - Any text (avoid too long text)
- description
  - **OPTIONAL** (recommended)
  - attributes
    - slot="description"
      - **REQUIRED**
  - content
    - Any text (html supported)
- images
  - **OPTIONAL** (if **image** attribute on **item** component is defined)
  - attributes
    - slot="images"
      - **REQUIRED**
  - content
    - ``<item-image>`` components
  - If multiple ``<item-image>`` components are defined, arrows will show up on the left & right of the image. 
    Allowing to click through all images.
  - Replaces **image** attribute on **item** component
- item-image
  - attributes
    - url
      - **REQUIRED**
      - any link/path to an image file (file, website, ...)
  - Because of an unknown issue. The closing tag ``</item-image>`` is required or only the first image will show up.
    No ``<item-image />`` shorthand allowed
- buttons
  - **OPTIONAL**
  - attributes
    - slot="buttons"
      - **REQUIRED**
  - content
    - ``<item-button>`` components
  - Single button will use full width
  - More than one button will use a grid with 2 columns
- item-button
  - attributes
    - url
      - **REQUIRED**
      - any link/path to a resource (file, website, ...)
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
  - content
    - **REQUIRED**
    - Used as the button title
- credits
  - **OPTIONAL**
  - attributes
    - slot="buttons"
      - **REQUIRED**
  - content
    - ``<credit>`` components
- credit
  - attributes
    - name
      - **REQUIRED**
      - Any text
  - content
    - **OPTIONAL**
    - Shown below name

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