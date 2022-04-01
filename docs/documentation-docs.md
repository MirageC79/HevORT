# Documentation for the documentation

This file explains how to **use, expand or modify** the existing documentation.


## Foundation

This documentation uses [docsify](https://docsify.js.org/), a documentation "generator".  
**docsify** helps make writing documentation easy, pretty and feature rich.

**docsify** itself has a detailed documentation, explaining every available feature.

## Grid view

To have a unified way of showing a large amount of related parts we use the grid view implementation.

### Usage
````vue
<grid v-bind:config="{gridTemplateColumns: '1fr 1fr'}">
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

<grid v-bind:config="{gridTemplateColumns: '1fr 1fr'}">
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