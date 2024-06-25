var posts=["looking/3766f053.html","looking/5c120c19.html","looking/c8e05f01.html","looking/3610a686.html","looking/f134a8e5.html","looking/4d33b968.html","looking/8f33bcf2.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };