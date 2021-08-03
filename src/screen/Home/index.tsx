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
                    pinColor='#320a7c'
                    icon={pawPin}
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
                                    color: '#0089a5',
                                    fontSize: 14
                                }}
                            >Ong Pet Feliz</Text>
                        </View>
                    </Callout>
                </Marker>
            </MapView>

            <View style={{
                position: 'absolute',
                left: 24,
                right: 24,
                bottom: 45,
                paddingLeft:24,
                
                height: 56,
                backgroundColor: '#ffffff',
                borderRadius: 20,

                flexDirection: 'row',
                elevation: 6
            }}>

            </View>
        </View>
    )
};