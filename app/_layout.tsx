import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import * as ScreenOrientation from "expo-screen-orientation";
import { StatusBar } from "expo-status-bar";

const WebViewScreen = () => {
  useEffect(() => {
    // Enable auto screen rotation
    ScreenOrientation.unlockAsync();

    return () => {
      // Lock back to portrait when leaving
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    };
  }, []);

  return (
    <View style={styles.container}>
      <WebView source={{ uri: "https://dragonsreel.com" }} style={styles.webview} />
      <StatusBar hidden />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default WebViewScreen;
