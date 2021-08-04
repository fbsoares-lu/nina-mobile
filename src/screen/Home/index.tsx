import React from "react";
import { Dimensions, View, Text } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from "react-native-maps";

import pawPin from '../../assets/pawPin.png';


export function Home() {

    return(
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <MapView 
                provider={PROVIDER_GOOGLE}
                style={{
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height,
                }}

                initialRegion={{
                    latitude: -8.2071019,
                    longitude: -34.9206513,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008,
                }}
            >
                <Marker 
                    coordinate={{
                        latitude: -8.2071019,
                        longitude: -34.9206513,
                    }}
                >
                    <Callout tooltip>
                        <View style={{
                            width: 160,
                            height: 46,
                            paddingHorizontal: 16,
                            backgroundColor: 'rgba(255, 255, 255, 0.897)',
                            borderRadius: 16,
                            justifyContent: 'center'
                        }}>
                            <Text
                                style={{
                                    color: '#e91818',
                                    fontSize: 14
                                }}
                            >Ong Pet Feliz</Text>
                        </View>
                    </Callout>
                </Marker>
            </MapView>
        </View>
    )
};