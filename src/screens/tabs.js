import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "./home/index";
import PlusIcon from "../svg/add.svg";
import HomeIcon from "../svg/home.svg";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors, fonts, heights, widths } from "../styles/style";
import { Box, Text, VStack } from "native-base";
import { StyleSheet } from "react-native";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const StackOptions = {
  animation: "fade_from_bottom",
  headerShown: false,
};

const TabOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      left: 0,
      elevation: 0,
      paddingBottom: 0,
      backgroundColor: "#ffffff",
      height: heights.bottomtabnavigation,
      marginTop: 60,
      borderTopWidth: 1,
      borderTopColor: colors.primary,
    },
};

const Tabs = () => {

  return (
    <Tab.Navigator
        screenOptions={{ lazy: false }}
        backBehavior="history"
        initialRouteName="Home"
        sceneContainerStyle={{ paddingBottom: heights.bottomtabnavigation }}
      >
        
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            ...TabOptions,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <VStack w={widths.W / 5} style={styles.tabIconWrapper}>
                <Box style={styles.tabIconContainer}>
                  <HomeIcon
                    width={40}
                    height={40}
                  />
                </Box>
              </VStack>
            ),
          }}
        />

        <Tab.Screen
          name="Add"
          component={Home}
          options={{
            ...TabOptions,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <VStack w={widths.W / 5} style={styles.tabIconWrapper}>
                <Box style={styles.tabIconContainer}>
                  <PlusIcon
                    width={30}
                    height={35}
                  />
                </Box>
              </VStack>
            ),
          }}
        />

      </Tab.Navigator>
  );
};

// const HomeNavigator = () => {

//   return (
//     <Stack.Navigator
//       backBehavior="history"
//       initialRouteName="Home"
//       screenOptions={screenOptions}>

//       <Stack.Screen name="Home" component={Home} />
      
//     </Stack.Navigator>
//   );
// };

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 15,
    },
  },
  tabIconWrapper: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  tabIconContainer: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  tabIconText: {
    textAlign: "center",
    fontSize: 12,
    marginTop: 2,
    fontFamily: fonts.BOLD,
  },
});

export default Tabs;
