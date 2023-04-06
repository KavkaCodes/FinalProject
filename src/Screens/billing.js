import styles from '@/styles/Home.module.css'
import Tables from "../components/tables";

export default function Billing(){
    return (
        <div className={styles.billing}>
            <Tables></Tables>
            <div className={styles.bill}>
                <div className={styles.billing}>
                    <div className={styles.billInfo}>
                        <div className={styles.billHeader}>
                            <div className={styles.billHeaderItem}>
                                <p className={styles.billHeaderItemText}>Item Name</p>
                            </div>
                            <div className={styles.billHeaderItem}>
                                <p className={styles.billHeaderItemText}>Comments</p>
                            </div>
                            <div className={styles.billHeaderItem}>
                                <p className={styles.billHeaderItemText}>Quantity</p>
                            </div>
                            <div className={styles.billHeaderItem}>
                                <p className={styles.billHeaderItemText}>Rate</p>
                            </div>
                        </div>
                        <div className={styles.billItems}>
                            <div className={styles.billItem}>
                                <div className={styles.billItemField}>
                                    Butter Chicken
                                </div>
                                <div className={styles.billItemField}>
                                    ---
                                </div>
                                <div className={styles.billItemField}>
                                    2
                                </div>
                                <div className={styles.billItemField}>
                                    11.20
                                </div>
                            </div>
                            <div className={styles.billItem}>
                                <div className={styles.billItemField}>
                                    Butter Chicken
                                </div>
                                <div className={styles.billItemField}>
                                    ---
                                </div>
                                <div className={styles.billItemField}>
                                    2
                                </div>
                                <div className={styles.billItemField}>
                                    11.20
                                </div>
                            </div>
                            <div className={styles.billItem}>
                                <div className={styles.billItemField}>
                                    Butter Chicken
                                </div>
                                <div className={styles.billItemField}>
                                    ---
                                </div>
                                <div className={styles.billItemField}>
                                    2
                                </div>
                                <div className={styles.billItemField}>
                                    11.20
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.billCalc}>
                        <div className={styles.calc} id={styles.separateGap} >
                            <p className={styles.calcClassification} >SubTotal:</p>
                            <p className={styles.amount}>200.00</p>
                        </div>
                        <div className={styles.calc}>
                            <p className={styles.calcClassification}>HST 13%:</p>
                            <p className={styles.amount}>26.00</p>
                        </div>
                        <div className={styles.calc} id={styles.separateGap}>
                            <p className={styles.calcClassification}>Total:</p>
                            <p className={styles.amount} id={styles.separate}>226.00</p>
                        </div>
                    </div>
                </div>
                <div className={styles.cta}>

                </div>
            </div>
        </div>
    )
}