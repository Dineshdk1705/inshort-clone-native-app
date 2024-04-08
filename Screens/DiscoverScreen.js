import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useContext } from "react";
import { NewsContext } from "../API/Context";
import Carousel from "react-native-snap-carousel";
import { categories, sources } from "../API/api";
import Search from "../components/Search";

const DiscoverScreen = () => {
  const { setCategory, setSource, darkTheme } = useContext(NewsContext);
  const windowWidth = Dimensions.get("window").width;
  const SLIDE_WIDTH = Math.round(windowWidth / 3.5);
  return (
    <View style={styles.discover}>
      {/* search */}
      <Search />

      {/* category */}
      <Text
        style={{ ...styles.subtitle, color: darkTheme ? "white" : "black" }}
      >
        Category
      </Text>
      <Carousel
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.category}
            onPress={() => setCategory(item.name)}
          >
            <Image source={{ uri: item.pic }} style={styles.categoryImage} />
            <Text
              style={{ ...styles.name, color: darkTheme ? "white" : "black" }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        layout={"default"}
        data={categories}
        sliderWidth={windowWidth}
        itemWidth={SLIDE_WIDTH}
        activeSlideAlignment={"start"}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
      />

      {/* sources */}
      <Text
        style={{ ...styles.subtitle, color: darkTheme ? "white" : "black" }}
      >
        Sources
      </Text>
      <View style={styles.sources}>
        {sources.map((s) => (
          <TouchableOpacity
            style={styles.sourceContainer}
            onPress={() => setSource(s.id)}
            key={s.id}
          >
            <Image source={{ uri: s.pic }} style={styles.sourceImage} />
            <Text
              style={{ ...styles.name, color: darkTheme ? "white" : "black" }}
            >
              {s.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  discover: {
    padding: 10,
    alignItems: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 8,
    marginHorizontal: 5,
    borderBottomColor: "#007FFF",
    borderBottomWidth: 5,
    alignSelf: "flex-start",
    borderRadius: 10,
  },
  category: {
    height: 130,
    margin: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  categoryImage: {
    height: "60%",
    width: "100%",
    resizeMode: "contain",
  },
  name: {
    fontSize: 14,
    textTransform: "capitalize",
  },
  sources: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingVertical: 15,
  },
  sourceContainer: {
    height: 150,
    width: "40%",
    borderRadius: 10,
    margin: 15,
    backgroundColor: "#cc313d",
  },
  sourceImage: {
    height: "100%",
    borderRadius: 10,
    resizeMode: "cover",
  },
});

export default DiscoverScreen;
