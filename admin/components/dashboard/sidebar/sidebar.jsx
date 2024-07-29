import MenuLink from "./menuLink/menuLink";
import styles from './sidebar.module.css';
import { MdDashboard, MdAnalytics, MdPeople, MdNotifications, MdSettings, MdTripOrigin } from 'react-icons/md';

const SideBar = () => {
  const mainMenuItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <MdDashboard />,
    },
    {
      title: "Analytics",
      path: "/dashboard/analytics",
      icon: <MdAnalytics />,
    },
    {
      title: "Transactions",
      path: "/dashboard/transactions",
      icon: <MdTripOrigin />,
    },
    {
      title: "Users",
      path: "/dashboard/users",
      icon: <MdPeople />,
    },
    {
      title: "Teams",
      path: "/dashboard/teams",
      icon: <MdPeople />,
    },
    {
      title: "Notifications",
      path: "/dashboard/notifications",
      icon: <MdNotifications />,
    },
    {
      title: "SOS",
      path: "/dashboard/sos",
      icon: <MdTripOrigin />,
    },
    {
      title: "Trip Management",
      path: "/dashboard/trips-management",
      icon: <MdTripOrigin />,
    },
  ];

  const settingsItem = {
    title: "Settings",
    path: "/dashboard/settings",
    icon: <MdSettings />,
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <h3 className={styles.logo} >LOGO</h3>
      </div>
      <div className={styles.sidebarContent}>
        <ul className={styles.menuList}>
          <span className={styles.menuText}>MENU</span>
          {mainMenuItems.map((item, index) => (
            <li key={index} className={styles.menuItem}>
              <MenuLink item={item} />
            </li>
          ))}
        </ul>
        {/* ====setings and dark mode section==== */}
        <ul className={styles.settings}>
          <li className={styles.menuItem}>
            <MenuLink item={settingsItem} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
