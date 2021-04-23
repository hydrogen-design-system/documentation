---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

pageID: radius
category: "Radius"
title: Radius
description: Sets the element's corner radius values.
syntax: 
  - data-h2-radius="MEDIA(RADIUS)"
  - data-h2-radius="MEDIA(RADIUS, RADIUS, RADIUS, RADIUS)"
notes:
  - When assigning different values to each corner, the order is top-left, top-right, bottom-right, bottom-left.
options:
  - title: MEDIA
    type: media
    content:
  - title: RADIUS
    type: custom
    content: "<pre>
      small\n
      medium\n
      large
    </pre>"
examples:
  - <div data-h2-flex-grid='b(top, expanded, flush, medium)'>
      <div data-h2-flex-item='b(1of1) m(1of5)'>
        <div data-h2-bg-color='b(theme-1)' data-h2-padding='b(all, medium)' data-h2-radius='b(small)'></div>
      </div>
      <div data-h2-flex-item='b(1of1) m(1of5)'>
        <div data-h2-bg-color='b(theme-1)' data-h2-padding='b(all, medium)' data-h2-radius='b(medium)'></div>
      </div>
      <div data-h2-flex-item='b(1of1) m(1of5)'>
        <div data-h2-bg-color='b(theme-1)' data-h2-padding='b(all, medium)' data-h2-radius='b(large)'></div>
      </div>
      <div data-h2-flex-item='b(1of1) m(1of5)'>
        <div data-h2-bg-color='b(theme-1)' data-h2-padding='b(all, medium)' data-h2-radius='b(small, small, large, large)'></div>
      </div>
      <div data-h2-flex-item='b(1of1) m(1of5)'>
        <div data-h2-bg-color='b(theme-1)' data-h2-padding='b(all, medium)' data-h2-radius='b(large, small, medium, large)'></div>
      </div>
    </div>
---