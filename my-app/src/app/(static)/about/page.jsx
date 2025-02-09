import React from "react";
import Image from "next/image";
import product from "../../../../assets/product.jpeg"; // Ensure it's inside the `public` folder or `import` is allowed in your setup

export default function About() {
  return (
    <>
      <div className="container">
        <div className="row g-3">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card">
              {/* Using next/image for optimization */}
              <Image src={product} className="card-img-top" alt="Product Image" width={300} height={200} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card">
              {/* Using next/image for optimization */}
              <Image src={product} className="card-img-top" alt="Product Image" width={300} height={200} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card">
              {/* Using next/image for optimization */}
              <Image src={product} className="card-img-top" alt="Product Image" width={300} height={200} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
