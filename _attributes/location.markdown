---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

pageID: location
category: "Positioning"
title: Location
description: Sets an element's top, right, bottom, and left values.
syntax: 
  - data-h2-location="MEDIA(SIDE, WHITESPACE)"
notes:
options:
  - title: MEDIA
    type: media
    content:
  - title: SIDE
    type: side
    content: 
  - title: WHITESPACE
    type: whitespace
    content: 
examples:
  - <div data-h2-bg-color='b(theme-1)' data-h2-position='b(relative)' data-h2-padding='b(all, xxl)'>
      <div data-h2-location='b(top-right, m)' data-h2-position='b(absolute)' data-h2-bg-color='b(black)' data-h2-padding='b(all, l)'></div>
    </div>
---