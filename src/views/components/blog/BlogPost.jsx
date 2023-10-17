import React from "react";
import { Blogdata } from "./Blog/BlogPost";
import { useNavigate, createSearchParams, Link } from "react-router-dom";

const BlogPost = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="mx-5 mt-5">
        {Blogdata.Post.map((data) => (
          (
            data.isFavorite ?
              <div className="card mb-3 border-0 " key={data.id}>
                <div className="row g-0 mx-auto">
                  <div className="col-md-4 align-items-center d-flex">
                    <div className="card-body">
                      <h5 className="card-title">{data.title}</h5>
                      <p className="card-text">{data.subtitle}</p>
                      <p className="card-text">
                        <small className="text-muted">{data.date}</small>
                      </p>

                      <Link
                        to={{
                          pathname: "/BlogArticle",
                          search: `?${createSearchParams({
                            id: data.id
                          })}`
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
                  <div className="col-md-8">
                    <img
                      src={data.image}
                      className="img-fluid rounded-start"
                      style={{
                        width: "100%",
                        height: "80%",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                      alt="..."
                      loading='lazy'
                    />
                  </div>
                </div>
              </div>
              : null)))}
      </div>
      {/* post */}
      
      <div className="row row-cols-1 row-cols-md-2 g-4 mx-5 ">
        {Blogdata.Post.map((data) => (
          ( !data.isFavorite ?
          <div className="card mb-5 border-0">
            <img
              src={data.image}
              className="img-fluid rounded-start"
              style={{
                width: "100%",
                height: "80%",
                objectFit: "cover",
                borderRadius: "10px",
                maxHeight: "400px",
                
              }}
              alt="..."
              loading='lazy'
            />
            <div className="card-body">
              <Link
                to={{
                  pathname: "/BlogArticle",
                  search: `?${createSearchParams({
                    id: data.id
                  })}`
                }}
                className="link-primary"
                style={{
                  textDecoration: "none",
                }}
              >
                {data.title}
              </Link>
              <p className="card-text">{data.subtitle}</p>
              <p className="card-text">
                <small className="text-muted">{data.date}</small>
              </p>
            </div>
          </div>
          : null)
        ))}
      </div>

      {/* end */}
    </>
  );
};

export default BlogPost;
