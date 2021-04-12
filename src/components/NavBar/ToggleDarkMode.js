import { useState } from "react";
import { Switch } from "@material-ui/core";

import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness3Icon from "@material-ui/icons/Brightness3";

const ToggleDarkMode = ({ setDarkMode, darkMode, classes }) => {
  const [switchState, setSwitchState] = useState({
    light: !darkMode,
    dark: darkMode,
  });

  const handleSwitchChange = (e) => {
    setSwitchState({ ...switchState, [e.target.name]: e.target.checked });
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <div className={classes.iconWText}>
      <Switch
        checked={switchState.light}
        onChange={handleSwitchChange}
        name="light"
        inputProps={{ "aria-label": "secondary checkbox" }}
        color="primary"
      />
      {darkMode ? (
        <Brightness3Icon color="primary" />
      ) : (
        <Brightness7Icon color="primary" />
      )}
    </div>
  );
};

export default ToggleDarkMode;
