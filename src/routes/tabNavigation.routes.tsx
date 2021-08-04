import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import { Home } from "../screen/Home";
import { Adoption } from "../screen/Adoption";

const {
    Navigator,
    Screen
} = createBottomTabNavigator();

export function TabNavigation() {
    return (
        <Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerShown: false
            })}
        >
            <Screen name="Home" component={Home} />
            <Screen name="Adoption" component={Adoption} />
        </Navigator>
    );
};