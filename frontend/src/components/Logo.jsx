import styles from "./Logo.module.css"
import { GiAbstract061 as Icon } from "react-icons/gi";


export default function Logo() {
  return (
    <div className={styles.logotipo}>
      <Icon style={styles2.icon}/>
      <h1>ANAILS</h1>
    </div>
  );
}

const styles2 = {// CSS-in-JS
  icon: {
  fontSize: "35px"
}
}
