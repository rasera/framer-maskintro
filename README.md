# Maskintro for Framer

Create animated intro content placeholders inside Framer.

<img src='./images/maskintro-example.gif' alt='Maskintro example'/>

- [View Example][1]

## Installation

1. Download `maskintro.coffee` and put it in your `modules` folder.
2. Add this line at the top of your document.

```coffeescript
module = require 'maskintro'
```

## How to use

Target `maskintro()` to an `object`. 

```coffeescript
module.maskintro(<object>)
```

> **Note:** If the target object has `children elements` inside, the maskintro will create an animation queue ordered by each element `index`.

You can also specify a `delay` and a `color`.

```coffeescript
module.maskintro(<object>, <delay>, <color>)
module.maskintro(example, 2s, 'crimson')
```

1. **Delay:** The delay must be specified in seconds. By default there is no delay — `0s`.
2. **Color:** The color can be specified in `#000` or `rgb(0, 0, 0)` formats. By default the module uses the `fill-color` or the `text-color` from the target layer.

## Questions?

I am available here on GitHub, the [Framer Facebook Group][2], and [Twitter][3].

[1]:https://rasera.github.io/framer-maskintro/maskintro.framer/
[2]:https://www.facebook.com/groups/framerjs/
[3]:https://twitter.com/ricardorasera