var posts=["posts/7fb984f.html","posts/524c5408.html","posts/c910ccc9.html","posts/48c3b5d3.html","posts/4a17b156.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};