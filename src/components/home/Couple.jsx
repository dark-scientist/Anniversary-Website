import React from "react";

function Couple() {
  return (
    <section id="couple">
      <div className="couple-container container">
        <div className="couple-title">
          <div className="vector-img"></div>
          <h1>Naanga</h1>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 border-right">
            <div className="couple-wrap">
              <div className="couple-img">
                <img
                  src="https://i.im.ge/2024/12/06/z0CD9G.PXL-20231222-115401189.jpeg"
                  alt="Bom"
                />
              </div>
              <div className="couple-content">
                <h3>My Muttapuffsu</h3>
                <p>Kind and loving gal</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="couple-wrap">
              <div className="couple-img">
                <img
                  src="https://i.im.ge/2024/12/07/z0xWxm.photo-6239777180129280976-y.jpeg"
                  alt="Jet"
                />
              </div>
              <div className="couple-content">
                <h3>your Muttasweetu</h3>
                <p>oombu (he wrote this).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Couple;
