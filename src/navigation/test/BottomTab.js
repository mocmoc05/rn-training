import React, { Component } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import posed from "react-native-pose";

const windowWidth = Dimensions.get("window").width;
const tabWidth = windowWidth / 4;
const SpotLight = posed.View({
    route0: { x: 0 },
    route1: { x: tabWidth },
    route2: { x: tabWidth * 2 },
    route3: { x: tabWidth * 3 }
});

const Scaler = posed.View({
    active: { scale: 1.25 },
    inactive: { scale: 1 }
});

export default class BottomTab extends Component {
    state = {  }
    render() {
        //console.log({props: this.props})
        const {
            renderIcon,
            getLabelText,
            activeTintColor,
            inactiveTintColor,
            onTabPress,
            onTabLongPress,
            getAccessibilityLabel,
            navigation
        } = this.props;
        const { routes, index: activeRouteIndex } = navigation.state;

        return (
            <SafeAreaView>
                <View style={{ flexDirection: "row", height: 52, elevation: 2 }}>
                    <View style={StyleSheet.absoluteFillObject}>
                        <SpotLight 
                            style={{
                                width: tabWidth,
                                height: "100%",
                                backgroundColor: "rgba(128,128,255,0.2)",
                                borderRadius: 8
                            }} 
                            pose={`route${activeRouteIndex}`} />
                    </View>
                    {routes.map((route, routeIndex) => {
                        const isRouteActive = routeIndex === activeRouteIndex;
                        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

                        return (
                            <TouchableOpacity
                                key={routeIndex}
                                style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", flexDirection: 'row' }}
                                onPress={() => {
                                    onTabPress({ route });
                                }}
                                onLongPress={() => {
                                    onTabLongPress({ route });
                                }}
                                accessibilityLabel={getAccessibilityLabel({ route })}
                            >
                                <Scaler
                                    pose={isRouteActive ? "active" : "inactive"}
                                    style={{ alignItems: isRouteActive ? '' : 'center', justifyContent: "center", marginLeft: 10, flex: isRouteActive ? 0 : 1 }}
                                >
                                    {renderIcon({ route, focused: isRouteActive, tintColor })}
                                </Scaler>
                                {isRouteActive && <Text style={{marginLeft: 10}}>{getLabelText({ route })}</Text>}
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </SafeAreaView>
        )
    }
}