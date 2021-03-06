import React from "react";
import { StatusBar, YellowBox } from "react-native";
import Routes from "./src/routes";

YellowBox.ignoreWarnings = ["Unrecognized WebSocket connection option"];

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#7D40E7" barStyle="light-content" />
      <Routes />
    </>
  );
}
