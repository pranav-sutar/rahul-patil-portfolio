import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";
import Project01 from "../components/NewComponents/Project01";
import Quote from "../components/NewComponents/Quote";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    // ✅ Check if splash was already shown during this browser session
    const splashShown = sessionStorage.getItem("splashShown");

    if (!splashShown && splashScreen.enabled) {
      // show splash only once per browser session
      setIsShowingSplashAnimation(true);
      const splashTimer = setTimeout(() => {
        setIsShowingSplashAnimation(false);
        sessionStorage.setItem("splashShown", "true"); // mark splash as shown
      }, splashScreen.duration);

      return () => clearTimeout(splashTimer);
    } else {
      setIsShowingSplashAnimation(false);
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting />
            <Quote />
            <Skills />
            <StackProgress />
            <Education />
            <StartupProject />
            <WorkExperience />
            <Projects />
            {/* <Achievement /> */}
            {/* <Blogs /> */}
            {/* <Talks /> */}
            {/* <Twitter /> */}
            {/* <Podcast /> */}
            <Profile />
            {/* <Footer /> */}
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
