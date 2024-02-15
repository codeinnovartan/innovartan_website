import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import classes from "./AboutSchoolPage.module.css";
import Swiper from "./Swiper";

import { Rating } from "react-simple-star-rating";
import { getSchools } from "../../Store/ApiCall";
import Footer from "../../Footer/Footer";

const AboutSchoolsPage = (props) => {
  const [searchParams] = useSearchParams();
  const state = searchParams.get("state");
  const city = searchParams.get("city");

  const [schoolData, setSchoolData] = useState([]);
  const [dataIndex, setDataIndex] = useState(0);

  const changeIndex = (type) => {
    if (type === "next") {
      setDataIndex((prev) => prev + 1);
    }
    if (type === "prev") {
      setDataIndex((prev) => prev - 1);
    }
  };

  const visibleData = schoolData[dataIndex];

  useEffect(() => {
    const getSchool = async () => {
      const data = await getSchools(state, city);
      setSchoolData(data);
    };
    getSchool();
  }, [state, city]);

  return (
    <div>
      <div className={classes.AContainer}>
        <div className={classes.fDiv}>
          <div className={classes.leftConatiner}>
            <div className={classes.tagContainer}>
              <i
                className="fa-solid fa-plane fa-2xl fa-rotate-by"
                style={{ transform: "rotate(-30deg)", color: "white" }}
              ></i>
              <p style={{ color: "white", fontWeight: "bold" }}>
                GIVE WINGS TO YOUR CHILD
              </p>
            </div>
            <div style={{ marginLeft: "20px", marginBottom: "40px" }}>
              <i
                className="fa-solid fa-chevron-right fa-lg"
                style={{ color: "white" }}
              ></i>
              <i
                className="fa-solid fa-chevron-right fa-lg"
                style={{ color: "white" }}
              ></i>
              <i
                className="fa-solid fa-chevron-right fa-lg"
                style={{ color: "white" }}
              ></i>
              <i
                className="fa-solid fa-chevron-right fa-lg"
                style={{ color: "white" }}
              ></i>
              <i
                className="fa-solid fa-chevron-right fa-lg"
                style={{ color: "white" }}
              ></i>
            </div>
            <h1 style={{ color: "white", fontWeight: "bold", fontSize: 60 }}>
              EXPLORE
            </h1>
            <div className={classes.sideLine}></div>
            <h3
              style={{
                color: "rgb(123, 189, 140)",
                fontWeight: "bold",
                fontSize: 35,
              }}
            >
              {visibleData?.school_name}
            </h3>
            <Rating
              initialValue={visibleData?.ratings}
              readonly={true}
              size={30}
              transition={true}
              allowFraction={true}
              fillColor={"orange"}
              emptyStyle={{ color: "rgb(225, 225, 225)" }}
              style={{ marginTop: "-20px" }}
            />
            <p style={{ color: "white" }}>
              {visibleData?.description.substring(0, 300)}
            </p>
            {visibleData?.is_certified === "1" ? (
              <div className={classes.badgeContainer}>
                <h3 style={{ color: "white" }}>A cs-l School</h3>
              </div>
            ) : null}
            <div style={{ marginLeft: "70%", marginTop: "10px" }}>
              <i
                className="fa-solid fa-chevron-right fa-lg"
                style={{ color: "white" }}
              ></i>
              <i
                className="fa-solid fa-chevron-right fa-lg"
                style={{ color: "white" }}
              ></i>
              <i
                className="fa-solid fa-chevron-right fa-lg"
                style={{ color: "white" }}
              ></i>
              <i
                className="fa-solid fa-chevron-right fa-lg"
                style={{ color: "white" }}
              ></i>
              <i
                className="fa-solid fa-chevron-right fa-lg"
                style={{ color: "white" }}
              ></i>
            </div>
          </div>
        </div>
        <div className={classes.sDiv}>
          <div>
            <Swiper data={schoolData} changeIndexFunction={changeIndex} />
          </div>
        </div>
      </div>
      <div className={classes.footerContainer}>
        <Footer />
      </div>
    </div>
  );
};

export default AboutSchoolsPage;
