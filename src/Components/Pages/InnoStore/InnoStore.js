import React, { useEffect, useState } from "react";
import { getAppStore } from "../../Store/ApiCall"; // Assuming this is your API call function

import styles from "./InnoStore.module.css";
import StoreCard from "../../StoreCard/StoreCard";
import SearchBar from "../../SearchBar/SearchBar";

const InnoStore = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getAppStore();
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <SearchBar />
      <div className={styles.storeNav}></div>
      <div className={styles.storeBackground}>
        <h1 className={styles.heading}>INNOVARTAN STORE</h1>
        <div className={styles.storeCards}>
          {data?.map((item, index) => (
            <StoreCard
              key={index}
              schoolName={item.school_name}
              schoolImage={item.school_image}
              schoolCode={item.school_code}
              appLink={item.app_link}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default InnoStore;
