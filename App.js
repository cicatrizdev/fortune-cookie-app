import { StatusBar } from "expo-status-bar";
import React from "react";
import { Appbar } from "react-native-paper";
import FortuneCookie from "./src/components/FortuneCookie/FortuneCookie";

export default function App() {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Fortune Cookie" subtitle="Wise words for you :)" />
      </Appbar.Header>
      <FortuneCookie />
      <StatusBar style="auto" />
    </>
  );
}
