---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

pageID: shadows
category: "Shadows"
title: Shadows
description: Adds a drop shadow effect to the element.
syntax: 
  - data-h2-shadow="MEDIA(SHADOW)"
notes:
options:
  - title: MEDIA
    type: media
    content:
  - title: SHADOW
    type: custom
    content: "<pre>
      small\n
      medium\n
      large
    </pre>"
examples:
  - "<div data-h2-flex-grid='b(top, expanded, flush, medium)'>
      <div data-h2-flex-item='b(1of1) m(1of5)'>
        <div data-h2-bg-color='b(white)' data-h2-padding='b(all, medium)' data-h2-radius='b(small)' data-h2-shadow='b(smaller)'></div>
      </div>
      <div data-h2-flex-item='b(1of1) m(1of5)'>
        <div data-h2-bg-color='b(white)' data-h2-padding='b(all, medium)' data-h2-radius='b(small)' data-h2-shadow='b(small)'></div>
      </div>
      <div data-h2-flex-item='b(1of1) m(1of5)'>
        <div data-h2-bg-color='b(white)' data-h2-padding='b(all, medium)' data-h2-radius='b(small)' data-h2-shadow='b(medium)'></div>
      </div>
      <div data-h2-flex-item='b(1of1) m(1of5)'>
        <div data-h2-bg-color='b(white)' data-h2-padding='b(all, medium)' data-h2-radius='b(small)' data-h2-shadow='b(large)'></div>
      </div>
      <div data-h2-flex-item='b(1of1) m(1of5)'>
        <div data-h2-bg-color='b(white)' data-h2-padding='b(all, medium)' data-h2-radius='b(small)' data-h2-shadow='b(larger)'></div>
      </div>
    </div>"
---