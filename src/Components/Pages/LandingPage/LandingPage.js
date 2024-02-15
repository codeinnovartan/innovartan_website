import React, { useEffect, useState } from "react";
import classes from "./LandingPage.module.css";
import InputDropdown from "./InputDropdown";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getSchoolCity, getSchoolState } from "../../Store/ApiCall";

const LandingPage = () => {
  const [states, setStates] = useState([]);
  const [citys, setCitys] = useState([]);
  const [stateDropdown, setStateDropdown] = useState("Select State");
  const [cityDropdown, setCityDropdown] = useState("Select City");

  const [data, setData] = useState({
    state: "",
    city: "",
  });

  const handleChanges = (type, value) => {
    if (type === "State") {
      setData((prev) => {
        return {
          state: value,
          city: "",
        };
      });
      const fetchCity = async () => {
        const data = await getSchoolCity(value);
        setCitys(data);
      };
      fetchCity();
    }
    if (type === "City") {
      setData((prev) => {
        return {
          ...prev,
          city: value,
        };
      });
    }
  };

  const dropDownState = (type, value) => {
    // if (functionType === "setState") {
    if (type === "State") {
      setStateDropdown(value);
      setCityDropdown("Select City");
    }
    if (type === "City") {
      setCityDropdown(value);
    }
  };
  // }

  useEffect(() => {
    const fetchState = async () => {
      const state = await getSchoolState();
      setStates(state);
    };
    fetchState();
  }, []);

  return (
    <div className={classes.lPOuterContainer}>
      <div className={classes.backGroundImage}>
        <div className={classes.textContainer}>
          <div className={classes.headinContainer}>
            <h1 className={classes.headingText}>
              Find the best School for your child in your city
            </h1>
          </div>
          <div className={classes.paraContainer}>
            <p className={classes.paraText}>
              Choosing the right school for your child is a pivotal decision
              that shapes their future. We at Innovartan understand the
              importance of providing a nurturing environment that fosters
              holistic development and academic excellence.
            </p>
          </div>
          <h5 className={classes.subheadingText}>Visit Us Today!</h5>
          <p className={classes.paraText}>
            Explore the possibilities that await your child. Schedule a visit to
            experience our vibrant campuses, meet our dedicated staff, and
            discover why we stand out as the best choice for your child's
            education. Your child's journey to success begifs with Innovartan
          </p>
        </div>
        <div className={classes.searchContainer}>
          <InputDropdown
            heading={"State"}
            settingData={handleChanges}
            data={states}
            stateChangeFunction={dropDownState}
            stateChangeInfo={stateDropdown}
          />
          <InputDropdown
            heading={"City"}
            settingData={handleChanges}
            data={citys}
            stateChangeFunction={dropDownState}
            stateChangeInfo={cityDropdown}
          />
          <div className={classes.submiteButton}>
            {data.state ? (
              <Button variant="warning">
                <Link to={`/about?state=${data.state}&city=${data.city}`}>
                  Search
                </Link>
              </Button>
            ) : (
              <Button variant="warning" disabled>
                <Link to={`/about?state=${data.state}&city=${data.city}`}>
                  Search
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
