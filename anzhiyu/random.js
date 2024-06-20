var posts=["2024/06/20/hello-world/","2024/06/20/first/","2024/06/20/essay/index/","2024/06/20/categories/index/","2024/06/20/tags/index/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };