var posts=["2024/06/16/24小时无人直播流/","2024/06/23/Air14/","2024/06/16/docker配置代理/","2024/06/15/hello-world/","2024/06/17/比对文本工具-beyondcompare/","2024/06/22/markdown语法/","2024/06/15/零成本搭建个人博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };