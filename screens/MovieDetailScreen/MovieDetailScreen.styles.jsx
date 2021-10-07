import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
  },
  image: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 200,
    height: 300,
    resizeMode: "contain"
  },
  movieCellImage: { 
    height: 80, 
    width: 54, 
    resizeMode: "contain" 
  },
  h1: {
    fontFamily: "Avenir",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 20,
  },
  h2: {
    fontFamily: "Avenir",
    fontSize: 18,
    fontWeight: "300",
    marginTop: 20,
    textAlign: "center",
  },
  h3: {
    fontFamily: "Avenir",
    fontSize: 18,
    fontWeight: "300",
    color: "gray",
    marginTop: 10,
    textAlign: "center",
  },
  h4: {
    fontFamily: "Avenir",
    fontSize: 18,
    fontWeight: "300",
    marginTop: 20,
    textAlign: "center",
  },
});
