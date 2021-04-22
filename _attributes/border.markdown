---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

pageID: borders
category: "Borders"
title: "Borders"
description: "Sets a border on the element."
syntax: 
  - data-h2-border="MEDIA(COLOR, SIDE, STYLE, WEIGHT)"
notes:
options:
  - title: MEDIA
    type: media
    content:
  - title: COLOR
    type: color
    content:
  - title: SIDE
    type: side
    content: 
  - title: STYLE
    type: custom
    content: "<pre>
      solid\n
      dashed
    </pre>"
  - title: WEIGHT
    type: custom
    content: "<pre>
      small\n
      medium\n
      large
    </pre>"
examples:
  - "<div data-h2-flex-grid='base(top, expanded, flush, medium)'>
        <div data-h2-flex-item='base(1of1) medium(1of5)'>
          <div data-h2-border='base(theme-1, all, solid, small)' data-h2-padding='base(all, medium)' data-h2-radius='base(small)'></div>
        </div>
        <div data-h2-flex-item='base(1of1) medium(1of5)'>
          <div data-h2-border='base(theme-2, top, dashed, large)' data-h2-padding='base(all, medium)'></div>
        </div>
        <div data-h2-flex-item='base(1of1) medium(1of5)'>
          <div data-h2-border='base(theme-3, top-bottom, solid, medium)' data-h2-padding='base(all, medium)'></div>
        </div>
        <div data-h2-flex-item='base(1of1) medium(1of5)'>
          <div data-h2-border='base(theme-4, all, dashed, small)' data-h2-padding='base(all, medium)' data-h2-radius='base(small)'></div>
        </div>
        <div data-h2-flex-item='base(1of1) medium(1of5)'>
          <div data-h2-border='base(theme-5, all, solid, large)' data-h2-padding='base(all, medium)' data-h2-radius='base(small)'></div>
        </div>
      </div>"
---