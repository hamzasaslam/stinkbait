import React from 'react'
import styles from "./Subscription.module.css"
import { Radio } from 'antd';

const Subscription = () => {
  return (
    <>
     <Radio.Group defaultValue="a" buttonStyle="solid" className={styles.btngroup}>
        <Radio.Button value="a" className={styles.monthly}>Monthly</Radio.Button>
        <Radio.Button value="b" className={styles.annually}>Annually</Radio.Button>
      </Radio.Group>
    </>
  )
}

export default Subscription