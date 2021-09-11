import React from 'react';

const Home = () => {
  return (
    <div style={styles.Presentation}>
      <br/>
      <h1>RSM Pets Stores</h1>
      <h3>by The Reactors</h3>
    </div>
  );
};

const styles = {
  Presentation: {
    paddingBottom: "20px",
    display: "flex",
    textAlign: "center",
    alignContent: "flex-start",
    justifyItems: "flex-start",
    flexDirection: "column",
  },
};
export default Home;