import React, { useState } from "react";
import { Blogdata } from "./Blog/BlogPost";
import { Link } from 'react-router-dom';


const BlogPost = () => {
  const [data, setData] = useState(Blogdata);
  return (
    <>
      {/* Destaque */}
      <div className="mx-5 mt-5">
        {Blogdata.Destaque.map((data) => (
          <div className="card mb-3 border-0 " >
          <div className="row g-0 mx-auto">
            <div className="col-md-4 align-items-center d-flex">
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.subtitle}</p>
                <p className="card-text"><small className="text-muted">{data.date}</small></p>
                <Link to={`/BlogArticle?id=${data.id}`} 
                className="link-primary"
                style={{
                  textDecoration: "none",
                 
                }}
                >
                  {data.button}</Link>
              </div>
            </div>
            <div className="col-md-8">
              <img src={data.image} className="img-fluid rounded-start"
              style={{
                width: "100%",
                height: "80%",
                objectFit: "cover",
              }}
              alt="..."/>
            </div>
          </div>
        </div>
        ))}
      </div>
      {/* <hr className="solid"></hr> */}

      {/* post */}

      <div className="row row-cols-1 row-cols-md-2 g-4 mx-5 ">
        {Blogdata.Post.map((data) => (
          <div className="card mb-5 border-0">
            <img
              src={data.image}
              className="img-fluid rounded-start"
              style={{
                width: "100%",
                height: "80%",
                objectFit: "cover",
              }}
              alt="..."
            />
            <div className="card-body">
            <a href={data.href}
                className="link-primary"
                style={{
                  color: "#000",
                  textDecoration: "none",
                 
                }}
                >
                  <h5 className="card-title">{data.title}</h5></a>
              
              <p className="card-text">{data.subtitle}</p>
              <p className="card-text">
                <small className="text-muted">{data.date}</small>
              </p>
              
            </div>
          </div>
        ))}
      </div>

      {/* end */}
    </>
  );
};

export default BlogPost;
