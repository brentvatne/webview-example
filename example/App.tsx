import { StyleSheet, Text, View } from "react-native";

import { ExpoWebView } from "expo-web-view";

export default function App() {
  const onLoad = ({ nativeEvent }: any) =>
    alert(`WebView finished loading url:\n${nativeEvent.url}`);

  return (
    <View style={styles.container}>
      <ExpoWebView
        style={{ flex: 1 }}
        url="https://docs.expo.dev/modules"
        onLoad={onLoad}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
