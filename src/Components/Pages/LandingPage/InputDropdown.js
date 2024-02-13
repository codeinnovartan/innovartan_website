import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import classes from "./InputDropdown.module.css";

const InputDropdown = ({ heading, data, settingData }) => {
  const [selectedItem, setSelectedItem] = useState("Select State");

  // console.log(data, "inside Dropdown");

  const handleSelect = (item) => {
    settingData(heading, item);
    setSelectedItem(item);
  };

  return (
    <div style={{ margin: 30 }}>
      <div>
        <h6 style={{ color: "grey" }}>{heading}</h6>
      </div>
      <DropdownButton className={classes.dropDown} title={selectedItem}>
        {data.map((item, index) => {
          return (
            <Dropdown.Item key={index} onClick={() => handleSelect(item)}>
              {item}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
    </div>
  );
};

export default InputDropdown;
