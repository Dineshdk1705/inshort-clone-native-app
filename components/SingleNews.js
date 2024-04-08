import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ImageBackground,
  Linking,
} from "react-native";
import React, { useContext } from "react";
import { NewsContext } from "../API/Context";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const SingleNews = ({ item, index }) => {
  const { darkTheme } = useContext(NewsContext);
  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
        // backgroundColor: "red",
        transform: [{ scaleY: -1 }],
      }}
    >
      <Image
        source={{ uri: item.urlToImage }}
        style={{ height: "45%", resizeMode: "cover", width: windowWidth }}
      />
      <View
        style={{
          ...styles.description,
          backgroundColor: darkTheme ? "#282c35" : "white",
        }}
      >
        <Text style={{ ...styles.title, color: darkTheme ? "white" : "black" }}>
          {item.title}
        </Text>
        <Text
          style={{ ...styles.content, color: darkTheme ? "white" : "black" }}
        >
          {item.description}
        </Text>
        <Text style={{ color: darkTheme ? "white" : "black" }}>
          Short by - <Text> {item.author ?? "unknown"}</Text>
        </Text>
      </View>
      <ImageBackground
        blurRadius={30}
        style={styles.footer}
        source={{ uri: item.urlToImage }}
      >
        <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
          <Text style={{ fontSize: 15, color: "white" }}>
            '{item?.content?.slice(0, 45)}...'
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Read More
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  content: {
    fontSize: 18,
    paddingBottom: 10,
  },
  description: {
    padding: 15,
    flex: 1,
  },
  footer: {
    height: 80,
    width: windowWidth,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#d7be69",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});

export default SingleNews;
