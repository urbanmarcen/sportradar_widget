import React from "react";

// redux
import { store } from "store/store";
import { Provider } from "react-redux";
import Livescore from "pages/Livescore/Livescore";
import { Container } from "@mui/material";

function App() {
  return (
    <Container>
      <Livescore />
    </Container>
  );
}

type Props = {
  children: JSX.Element;
};

const AppWrapper = ({ children }: Props) => (
  <Provider store={store}>{children}</Provider>
);

export default App;
export { AppWrapper };
