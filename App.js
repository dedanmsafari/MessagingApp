import React from "react";
import { ThemeProvider } from "styled-components";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import {
  useFonts as usePermanentMarker,
  PermanentMarker_400Regular,
} from "@expo-google-fonts/permanent-marker";
import {
  useFonts as useFraunces,
  Fraunces_500Medium,
  Fraunces_700Bold,
} from "@expo-google-fonts/fraunces";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import * as firebase from "firebase";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC4juBR04cHs4EKTWeeGF54WrXS8vdoJUA",
  authDomain: "stretch-ebb6e.firebaseapp.com",
  projectId: "stretch-ebb6e",
  storageBucket: "stretch-ebb6e.appspot.com",
  messagingSenderId: "813177374019",
  appId: "1:813177374019:web:6b8dfbe1715998d9289bf6",
  measurementId: "${config.measurementId}",
};

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold,
  });
  const [permanentMarkerLoaded] = usePermanentMarker({
    PermanentMarker_400Regular,
  });
  const [frauncesLoaded] = useFraunces({
    Fraunces_500Medium,
    Fraunces_700Bold,
  });

  if (!latoLoaded || !permanentMarkerLoaded || !frauncesLoaded) {
    return <AppLoading />;
  }

    return (
      <>
        <ThemeProvider theme={theme}>
          <AuthenticationContextProvider>
            <Navigation />
          </AuthenticationContextProvider>
        </ThemeProvider>
        <ExpoStatusBar style="auto" />
      </>
    );
  }


