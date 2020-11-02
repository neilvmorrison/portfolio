import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import axios from "axios";

import Text from "../../components/Text";
import Button from "../../components/Button";

const styles = createUseStyles((theme) => ({
  root: {
    background:
      'linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("http://unsplash.it/1920/1280")',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    color: "#fff",
    textAlign: "center",
  },
}));

function Header() {
  const [data, setData] = useState(undefined);
  useEffect(() => {
    async function getHeaderContent() {
      const { data } = await axios.get("http://localhost:1337/headers/1");
      setData(data);
    }
    getHeaderContent();
  }, []);
  const classes = styles();
  return (
    <header className={classes.root}>
      {data && (
        <div>
          <Text component="h2" variant="h3">
            Welcome
          </Text>
          <Text component="h2" variant="h1">
            {data.Title}
          </Text>
          <Button onClick={() => {}}>{data.CallToActionText}</Button>
        </div>
      )}
    </header>
  );
}

export default Header;
