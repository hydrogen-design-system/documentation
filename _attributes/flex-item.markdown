---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

pageID: flexItem
category: "Flex Grid"
title: Flex Items
description: By default H2 offers a 12 column grid, meaning you can specify flex items using a range of 1 to 12.<br>e.g. <code>data-h2-flex-item="b(1of1) s(1of2) m(1of6) l(1of12)"</code><br>These values are calculated as percentages, so <code>1of2</code> meaning that the item will span 1 of the columns if the grid were 2 columns wide (meaning this item would span 50% of the available space). Similarly, <code>1of3</code> would span 33% of the grid, while <code>2of5</code> would span 40% of the grid.
syntax: 
  - data-h2-flex-item="MEDIA(XofY)"
notes:
options:
  - title: MEDIA
    type: media
    content:
  - title: X, Y
    type: custom
    content: "<pre>
      1\n
      2\n
      3\n
      ...\n
      12
    </pre>"
examples:
---