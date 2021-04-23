---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

pageID: visibility
category: "Visibility"
title: Visibility
description: Sets a handful of CSS properties that affects the element's visibility to users and machines.
syntax: 
  - data-h2-visibility="MEDIA(VISIBILITY)"
notes: 
  - Note that <code>invisible</code> hides the element visually, but it will still be found by assistive technologies. To hide the element entirely, use <code>hidden</code>.
options:
  - title: MEDIA
    type: media
    content:
  - title: VISIBILITY
    type: custom
    content: "<pre>
      invisible\n
      hidden\n
      visible
    </pre>"
examples:
---