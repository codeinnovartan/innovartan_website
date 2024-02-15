import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import classes from "./InputDropdown.module.css";

const InputDropdown = ({
  heading,
  data,
  settingData,
  stateChangeFunction,
  stateChangeInfo,
}) => {
  
  const handleSelect = (item) => {
    settingData(heading, item);
    stateChangeFunction(heading, item);
  };

  return (
    <div style={{ margin: 30, width: "120px" }}>
      <div>
        <h6 style={{ color: "grey" }}>{heading}</h6>
      </div>
      <DropdownButton className={classes.dropDown} title={stateChangeInfo}>
        {data.map((item, index) => {
          return (
            <Dropdown.Item
              key={index}
              style={{ width: "50px" }}
              onClick={() => handleSelect(item)}
            >
              {item}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
    </div>
  );
};

export default InputDropdown;
