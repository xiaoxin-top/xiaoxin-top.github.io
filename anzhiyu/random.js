var posts=["2024/06/20/hello-world/","2024/06/20/tags/index/","2024/06/20/first/","2024/06/20/categories/index/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };