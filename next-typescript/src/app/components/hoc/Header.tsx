/* eslint-disable @next/next/no-img-element */
import classes from "../../styles/components/hoc/Header.module.scss"
const Header = ()=>{
    return <div className={classes["Header"]}>
        <div className={classes["logoHeader"]}> 
            <h2>cyber</h2>
        </div>
        <div className={classes["SerchStr"]}> 
            <button className={classes["search-button"]}>
                <img src="https://img.icons8.com/ios-filled/50/000000/search--v1.png" alt="Поиск"/>
            </button>
            <input type="search" className={classes["search-input"]} placeholder="Search"/>
        </div>
        <div className={classes["imgCont"]}>
        <img width="24" height="24"  src="https://img.icons8.com/material-outlined/24/like--v1.png" alt="like--v1" className={classes["imgHeart"]} />            
        <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/shopping-cart--v1.png" alt="shopping-cart--v1"/>

        </div>
    </div>
}
export default Header