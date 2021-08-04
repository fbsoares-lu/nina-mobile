import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigation } from "./tabNavigation.routes";

export function Routes() {
    return (
        <NavigationContainer>
            <TabNavigation  />
        </NavigationContainer>
    );
};