import React from "react";

const BlogArticle = ({ data }) => {
  return (
    <div>
      <img src={data.image} alt="random" />
      <h1>Blog Article</h1>
      <h2>{data.title}</h2>
      <h5>{data.subtitle}</h5>
      <small className="text-muted">{data.date}</small>
      <p>{data.content}</p>
    </div>
  );
};

export default BlogArticle;
