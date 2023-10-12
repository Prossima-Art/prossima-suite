import React from "react";
import { Blogdata } from "./Blog/BlogPost";

const BlogPost = () => {
  return (
    <>
      {/* Destaque */}
      <div className="mx-5 mt-5">
        {Blogdata.Destaque.map((data) => (
          <div class="card mb-3 border-0 " >
          <div class="row g-0 mx-auto">
            <div class="col-md-4 align-items-center d-flex">
              <div class="card-body">
                <h5 class="card-title">{data.title}</h5>
                <p class="card-text">{data.subtitle}</p>
                <p class="card-text"><small class="text-muted">{data.date}</small></p>
                <a href={data.href}
                className="link-primary"
                style={{
                  textDecoration: "none",
                 
                }}
                >
                  {data.button}</a>
              </div>
            </div>
            <div class="col-md-8">
              <img src={data.image} class="img-fluid rounded-start"
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
      {/* <hr class="solid"></hr> */}

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
