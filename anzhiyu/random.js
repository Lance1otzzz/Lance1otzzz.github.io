var posts=["posts/4a17b156.html","posts/aa03632b.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };