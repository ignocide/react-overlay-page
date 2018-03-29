# react-overlay-page

react component. It is not for react-native.

## Installation

```
npm install react-overlay-page --save
```  

## Usage

```
import OverlayPage from 'react-overlay-page'
...

let options = {
  isOpen: true,
  mountOnRender: false,
  style: {
    backgroundColor: 'yellow'
  }
}

...

<OverlayPage {...options} >
    <YourContents/>
</OverlayPage>
```  

### Properties

| Property      | Type   | Description                                   | Default  | Required |
| ------------- | ------ | --------------------------------------------- | -------- | -------- |
| isOpen        | bool   | open state                                    | -        | yes      |
| mountOnRender | bool   | render children component Every time you open | true     | no       |
| direction     | String | One of ("bottom", "top", "right", "left")     | "bottom" | no       |
| zIndex        | number | overlaypages zIndex                           | 100      | no       |
| duration      | String | example "0.3s"                                | "0.3s"   | no       |
| style         | Object | overlaypage's style                           | {}       | no       |

## License

Copyright (c) 2018 Ignocide.
