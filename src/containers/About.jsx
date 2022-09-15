import React from 'react';
import styles from './index.css';

const About = (props) => {
  // 只有服务端才传过来了context，组件中props为staticContext
  if (props.staticContext) {
    // 将css推入数组，改变了传入的context
    props.staticContext.css.push(styles._getCss());
  }
  return (
    <h3 className={styles.title}>About 页面</h3>
  );
};

export default About;