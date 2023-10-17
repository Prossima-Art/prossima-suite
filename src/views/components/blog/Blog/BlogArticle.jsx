import React from "react";
import { Blogdata } from "./BlogPost";
import { useSearchParams } from "react-router-dom";
import { createSearchParams, Link } from "react-router-dom";

const BlogArticle = () => {
  const [searchParams] = useSearchParams();

  const getPostId = searchParams.get("id");
  const filterPostById = Blogdata.Post.filter((e) => e.id === getPostId);

  const replaceString = (str) => {
    if (!str) return str;
    return String(str).replaceAll("\n", "<br />");
  };
  return (
    <div>
      {filterPostById.map((data) => (
        <div
          key={data.id}
          className="fuild-container"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="mt-5" id="title" style={{ marginBlockStart: "20%", marginInline: "20%", textAlign:"center" }}>{data.title}</h1>

          <h5
            className="mt-5"
            style={{ marginBlockStart: "20%", marginInline: "20%" }}
          >
            {data.subtitle}
          </h5>
          <p className="text-muted">
            {data.author} |<span className="fw-bold">{data.date} </span>
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "start",
            }}
          >
            <img
              src={data.image}
              style={{
                width: "100%",
                display: "flex",
                objectFit: "cover",
                aspectRatio: "18/6",
              }}
              alt="random"
              loading='lazy'
            />

            <p
              dangerouslySetInnerHTML={{ __html: replaceString(data.content) }}
              className="mt-5 "
              style={{
                marginBlockStart: "20%",
                marginInline: "20%",
                height: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                textAlign: "justify",
                
                
              }}
            ></p>
          </div>
        </div>
      ))}

      <hr></hr>
      <h5 className="mx-5 p-5 fw-bold">Related articles</h5>

      <div className="row g-4 mx-5 ">
        {Blogdata.Post.slice(0, 4).map((data) => (
          <div className="col-sm-3">
            <div className="card mb-5 border-0 ">
              <img
                src={data.image}
                className="img-fluid rounded-start"
                style={{
                  width: "100%",
                  height: "80%",
                  objectFit: "cover",
                  borderRadius: "10px",
                  maxHeight: "150px",
                  
                }}
                alt="..."
                loading='lazy'
              />
              <div className="card-body">
                <p className="card-title">{data.title}</p>
                <p className="card-text">
                  <small className="text-muted">{data.date}</small>
                </p>
                <Link
                target="_top"
                
                  to={{
                    pathname: "/BlogArticle",
                    search: `?${createSearchParams({
                      id: data.id,
                    })}`,
                  }}
                  className="link-primary"
                  style={{
                    textDecoration: "none",
                    
                    
                  }}
                >
                  {data.button}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogArticle;
