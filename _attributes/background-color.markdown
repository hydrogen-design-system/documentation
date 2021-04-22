---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

pageID: backgroundColor
category: "Background Colors"
title: "Background Colors"
description: "Sets a color or gradient as the element's background color value."
syntax: 
  - data-h2-bg-color="MEDIA(COLOR)"
  - data-h2-bg-color="MEDIA(GRADIENT)"
notes:
options:
  - title: MEDIA
    type: media
    content:
  - title: COLOR
    type: color
    content: 
  - title: GRADIENT
    type: color
    content: 
examples:
  - "<div data-h2-flex-grid='base(top, expanded, flush, medium)'>
      <div data-h2-flex-item='base(1of1) medium(1of5)'>
        <div data-h2-bg-color='base(theme-1)' data-h2-padding='base(all, medium)' data-h2-radius='base(small)'></div>
      </div>
      <div data-h2-flex-item='base(1of1) medium(1of5)'>
        <div data-h2-bg-color='base(theme-2)' data-h2-padding='base(all, medium)' data-h2-radius='base(small)'></div>
      </div>
      <div data-h2-flex-item='base(1of1) medium(1of5)'>
        <div data-h2-bg-color='base(theme-3)' data-h2-padding='base(all, medium)' data-h2-radius='base(small)'></div>
      </div>
      <div data-h2-flex-item='base(1of1) medium(1of5)'>
        <div data-h2-bg-color='base(theme-4)' data-h2-padding='base(all, medium)' data-h2-radius='base(small)'></div>
      </div>
      <div data-h2-flex-item='base(1of1) medium(1of5)'>
        <div data-h2-bg-color='base(linear-135[1][2])' data-h2-padding='base(all, medium)' data-h2-radius='base(small)'></div>
      </div>
    </div>"
---