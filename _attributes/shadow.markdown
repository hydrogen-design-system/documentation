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
      xs\n
      s\n
      m\n
      l\n
      xl
    </pre>"
examples:
  - "<div data-h2-flex-grid='b(top, expanded, flush, m)'>
      <div data-h2-flex-item='b(1of1) m(1of5)'>
        <div data-h2-bg-color='b(white)' data-h2-padding='b(all, m)' data-h2-radius='b(s)' data-h2-shadow='b(xs)'></div>
      </div>
      <div data-h2-flex-item='b(1of1) m(1of5)'>
        <div data-h2-bg-color='b(white)' data-h2-padding='b(all, m)' data-h2-radius='b(s)' data-h2-shadow='b(s)'></div>
      </div>
      <div data-h2-flex-item='b(1of1) m(1of5)'>
        <div data-h2-bg-color='b(white)' data-h2-padding='b(all, m)' data-h2-radius='b(s)' data-h2-shadow='b(m)'></div>
      </div>
      <div data-h2-flex-item='b(1of1) m(1of5)'>
        <div data-h2-bg-color='b(white)' data-h2-padding='b(all, m)' data-h2-radius='b(s)' data-h2-shadow='b(l)'></div>
      </div>
      <div data-h2-flex-item='b(1of1) m(1of5)'>
        <div data-h2-bg-color='b(white)' data-h2-padding='b(all, m)' data-h2-radius='b(s)' data-h2-shadow='b(xl)'></div>
      </div>
    </div>"
---