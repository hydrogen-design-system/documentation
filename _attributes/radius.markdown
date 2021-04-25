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
      none\n
      s\n
      m\n
      l
    </pre>"
examples:
  - <div data-h2-flex-grid='b(top, expanded, flush, m)'>
      <div data-h2-flex-item='b(1of1) m(1of5)'>
        <div data-h2-bg-color='b(theme-1)' data-h2-padding='b(all, m)' data-h2-radius='b(s)'></div>
      </div>
      <div data-h2-flex-item='b(1of1) m(1of5)'>
        <div data-h2-bg-color='b(theme-1)' data-h2-padding='b(all, m)' data-h2-radius='b(m)'></div>
      </div>
      <div data-h2-flex-item='b(1of1) m(1of5)'>
        <div data-h2-bg-color='b(theme-1)' data-h2-padding='b(all, m)' data-h2-radius='b(l)'></div>
      </div>
      <div data-h2-flex-item='b(1of1) m(1of5)'>
        <div data-h2-bg-color='b(theme-1)' data-h2-padding='b(all, m)' data-h2-radius='b(s, s, l, l)'></div>
      </div>
      <div data-h2-flex-item='b(1of1) m(1of5)'>
        <div data-h2-bg-color='b(theme-1)' data-h2-padding='b(all, m)' data-h2-radius='b(l, s, m, l)'></div>
      </div>
    </div>
---