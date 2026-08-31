import React, { useEffect, useState } from "react";
import PageTransition from "../../components/PageTransition";
import Loading from "../../components/loading/Loading";
import "./blog.css";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/posts?limit=12")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts || []))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loading text="Loading blog posts..." />;
  }

  return (
    <PageTransition>
      <section className="blog_page">
        <div className="container">
          <div className="blog_header">
            <h2>Our Blog</h2>
            <p>Latest news, tips and trends from our store.</p>
            <div className="bottom_line"></div>
          </div>

          <div className="blog_grid">
            {posts.map((post) => (
              <article className="blog_card" key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <div className="blog_tags">
                  {post.tags?.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
