import { StyleSheet, Text, View, StatusBar } from "react-native";
import InshortTabs from "./components/InshortTabs";
import Context, { NewsContext } from "./API/Context";
import { useContext } from "react";

const App = () => {
  const { darkTheme } = useContext(NewsContext);
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: darkTheme ? "#282C35" : "white",
      }}
    >
      <InshortTabs />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
};
