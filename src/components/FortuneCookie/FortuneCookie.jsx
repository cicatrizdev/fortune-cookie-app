import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-native-paper";
import { Container, Fortune, StyledImage } from "./styles";

const FortuneCookie = () => {
  const [fortunes, setFortunes] = useState();
  const [fortune, setFortune] = useState();

  const getFortunes = () =>
    axios
      .get("https://type.fit/api/quotes")
      .then((response) => {
        setFortunes(response.data);
      })
      .catch((err) => console.error(err));

  const handlePress = () => {
    if (fortunes.length > 0) {
      const fortuneIndex = Math.floor(Math.random() * fortunes.length) + 1;
      return setFortune(fortunes[fortuneIndex]);
    }
    return setFortune({ text: "Unexpected error :( please, reload app and try again" });
  };

  useEffect(() => {
    getFortunes();
  }, []);

  return (
    <Container>
      <StyledImage source={require("../../assets/fortune-cookie.png")} />
      <Fortune>{fortune?.text}</Fortune>

      <Button mode="contained" onPress={handlePress}>
        Crack that cookie!
      </Button>
    </Container>
  );
};

export default FortuneCookie;
