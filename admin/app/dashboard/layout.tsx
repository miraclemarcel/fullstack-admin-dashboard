import Navbar from "../../components/dashboard/navbar/navbar"
import SideBar from "../../components/dashboard/sidebar/sidebar"
import styles from "../../components/dashboard/dashboard.module.css"
import { ReactNode } from "react";


interface RootLayoutProps {
  children: ReactNode;
}


const layout = ({children}: RootLayoutProps ) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
       <SideBar/>
      </div>
      <div className={styles.content}> 
          <Navbar/>
          {children}
        </div>
    </div>
  )
}



export default layout