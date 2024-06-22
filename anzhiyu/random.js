var posts=["2024/06/15/hello-world/","2024/06/15/零成本搭建个人博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };