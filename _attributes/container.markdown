---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

pageID: containers
category: "Containers"
title: Containers
description: Adds fixed margins to the element so that its content is contained within the space. No container will exceed more than 90% of the viewport.
syntax: 
  - data-h2-container="MEDIA(ALIGNMENT, SIZE)"
notes:
options:
  - title: MEDIA
    type: media
    content:
  - title: ALIGNMENT
    type: custom
    content: "<pre>
      left\n
      center\n
      right
    </pre>"
  - title: SIZE
    type: custom
    content: "<pre>
      small\n
      medium\n
      large\n
      full
    </pre>"
examples:
  - <div data-h2-bg-color='b(linear-135[1][2])' data-h2-padding='b(top-bottom, large)'>
      <div data-h2-container='b(center, small)' data-h2-bg-color='b(black)' data-h2-padding='b(top-bottom, large)'></div>
    </div>
---