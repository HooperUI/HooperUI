site_name: HooperUI - Easy and Fast
repo_url: https://github.com/Hooper93/HooperUI
repo_name: Hooper93/HooperUI
edit_uri: blob/master/docs/docs
site_author: ZhaoHaopeng
copyright: Copyright &copy; 2020 HooperUI

site_dir: build
theme:
    name: material
    custom_dir: overrides
    language: zh
    highlightjs: true
    palette:
        scheme: preference
        # primary: deep purple
        # accent: indigo
    features:
        # When instant loading is activated, clicks on all internal links will be intercepted and dispatched via XHR without fully reloading the page. 
        - instant
        # top-level sections are rendered in a menu layer below the header on big screens
        - tabs
    hljs_languages:
        - javascript
        - html
        - css
        - bash
markdown_extensions:
    - toc:
        permalink: true
    - admonition
    - pymdownx.details
    - pymdownx.tabbed
    - pymdownx.superfences
    - attr_list
    - def_list
    - pymdownx.tasklist:
        custom_checkbox: true
        clickable_checkbox: false
    - pymdownx.emoji:
        emoji_index: !!python/name:materialx.emoji.twemoji
        emoji_generator: !!python/name:materialx.emoji.to_svg
extra_css:
    - assets/extra.css
nav:
    - 主页: index.md
    - 快速起步:
        - Hi, HooperUI: guide/index.md
        - 安装: guide/install.md
    - 组件:
{{componentsNavList}} ## !这里必须顶到头，否则编译可能会出问题
    - 自定义主题:
        - Default: components/nav.md
    - 版本历史:
        - Default: components/nav.md
    - Sketch资源:
        - Default: components/nav.md
    - PR指引:
        - Default: guide/pr.md


extra:
    social:
        - icon: fontawesome/brands/weixin
          link: https://weixin.com/
        - icon: fontawesome/brands/weibo
          link: https://weibo.cn/
        - icon: fontawesome/brands/twitter
          link: https://twitter.com/
        - icon: fontawesome/brands/js
          link: https://amazingjs.cn/
