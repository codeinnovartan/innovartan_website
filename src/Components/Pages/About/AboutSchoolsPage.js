import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import classes from "./AboutSchoolPage.module.css";
import Swiper from "./Swiper";

import { Rating } from "react-simple-star-rating";
import { getSchools } from "../../Store/ApiCall";

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
  console.log(visibleData, "visibleData");

  useEffect(() => {
    const getSchool = async () => {
      const data = await getSchools(state, city);
      setSchoolData(data);
      console.log(data);
    };
    getSchool();
  }, [state, city]);

  return (
    <div className={classes.AContainer}>
      <div className={classes.fDiv}>
        <div className={classes.leftConatiner}>
          <p style={{ color: "white", fontWeight: "bold" }}>
            GIVE WINGS TO YOUR CHILD
          </p>
          <h1 style={{ color: "white", fontWeight: "bold", fontSize: 60 }}>
            EXPLORE
          </h1>
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
            size={20}
            fillColor={"black"}
            emptyStyle={{ color: "white" }}
            style={{ marginTop: "-20px" }}
          />
          <p style={{ color: "white" }}>{visibleData?.description}</p>
          <div className={classes.badgeContainer}>
            <h3 style={{ color: "white" }}>A cs-l School</h3>
          </div>
        </div>
      </div>
      <div className={classes.sDiv}>
        <div>
          <Swiper data={schoolData} changeIndexFunction={changeIndex} />
        </div>
      </div>
    </div>
  );
};

export default AboutSchoolsPage;
