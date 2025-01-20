import classes from "../../styles/components/hoc/Footer.module.scss"

const Footer = ()=>{
    return <div className={classes["Footer"]}>
       <div className={classes["infoSections"]}>
                <div className={classes["section"]}>
                        <div className={classes["LogText"]}>
                            <h3>cyber</h3>
                            <p className={classes["text1"]}>We are a residential interior design firm located in <td></td>Portland. Our boutique-studio offers more than</p>
                    </div>
                   </div>
                <div className={classes["section"]}>
                    <p className={classes["text2"]}> <b> Services</b></p>
                    <p className={classes["text2"]}>Bonus program</p>
                    <p className={classes["text2"]}>Gift cards</p>
                    <p className={classes["text2"]}>Credit and payment</p>
                    <p className={classes["text2"]}>Service contracts</p>
                    <p className={classes["text2"]}>Non-cash account</p>
                    <p className={classes["text2"]}>Payment</p> 
                </div>
                <div className={classes["section"]}>
                    <p className={classes["text3"]}> <b>Assistance to the buyer </b> </p>
                    <p className={classes["text3"]}>Find an order</p>
                    <p className={classes["text3"]}>Terms of deivery</p>
                    <p className={classes["text3"]}>Exchange and return of goods</p>
                    <p className={classes["text3"]}>Guarantee</p>
                    <p className={classes["text3"]}>Frequently asked questions</p>
                    <p className={classes["text3"]}>Terms of use of the site</p>                </div>
        </div>
        {/* <div className={classes["socialInfo"]}>
        <div className={classes["socialFacebook"]}></div>
        </div> */}
        
    </div>
}

export default Footer