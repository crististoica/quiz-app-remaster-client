import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import DashboardIcon from "@material-ui/icons/Dashboard";
import ForumIcon from "@material-ui/icons/Forum";
import SettingsIcon from "@material-ui/icons/Settings";

import useCurrentWidth from "./useCurrentWidth";
import HamburgerMenu from "./HamburgerMenu";

const list = [
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: DashboardIcon,
  },
  {
    path: "/community",
    label: "Community",
    icon: ForumIcon,
  },
  {
    path: "/admin",
    label: "Admin",
    icon: SettingsIcon,
    adminOnly: true,
  },
];

const Links = ({ classes }) => {
  const width = useCurrentWidth();
  const { isAdmin } = useSelector((state) => state.auth.data);

  const returnComponent =
    width < 640 ? (
      <HamburgerMenu classes={classes} list={list} />
    ) : (
      list.map(({ path, label, icon: Icon, adminOnly }) => {
        if (adminOnly && isAdmin) {
          return (
            <NavLink key={path} to={path} className={classes.navlink}>
              <Icon />
              <p>{label}</p>
            </NavLink>
          );
        } else if (!adminOnly) {
          return (
            <NavLink key={path} to={path} className={classes.navlink}>
              <Icon />
              <p>{label}</p>
            </NavLink>
          );
        }
        return null;
      })
    );

  return <div className={classes.navlinksContainer}>{returnComponent}</div>;
};

export default Links;
