import swinging from "../assets/img/swinging.jpg";
import insideWater from "../assets/img/insideWater.jpg";
import locationA from "../Assets/icons/locationSVG.svg";
import plane from "../Assets/icons/plane-departure-solid.svg";
import palma from "../Assets/img/hamaki-on-2-palma.jpg";
export default function Images() {
  return (
    <div className="images-container">
      <div className="center-cont d-flex">
        <div>
          <img src={swinging} alt="swinging" className="swinging" />
        </div>
        <div className="flex-column">
          <div>
            {/* <!-- sz means same size --> */}
            <img src={insideWater} alt="" className="sz-img" />
          </div>
          <div className="sz-div flex-column flex-center">
            <img src={locationA} alt="location" className="location" />
            <h1>Beautiful places</h1>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia
            </p>
          </div>
        </div>
        <div className="flex-column">
          <div className="sz-div flex-column flex-center">
            <img src={plane} alt="plane" />
            <h1>Passionate Travel</h1>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia
            </p>
          </div>
          <div>
            <img src={palma} alt="palma" className="sz-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
