import React from "react";
import { useParams } from "react-router-dom";
// import { Blogdata } from "./BlogPost";

const BlogArticle = () => {
  const { image, title, subtitle, date, content  } = useParams();

  return (
    <div>
      <img src={image} alt="random" />
      <h1>Blog Article</h1>
      <h2>{title}</h2>
      <h5>{subtitle}</h5>
      <small className="text-muted">{date}</small>
      <p>{content}</p>
    </div>
  );
};

export default BlogArticle;
