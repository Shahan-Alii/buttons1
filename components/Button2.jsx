import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const { width } = Dimensions.get('window');

const PrimaryColor = '#2b21a8';

const Button2 = () => {
    const [isClicked, setIsClicked] = useState(false);

    const iconOpacity = useSharedValue(0);
    const translateY = useSharedValue(0);
    const scale = useSharedValue(1);

    const handlePress = () => {
        translateY.value = withTiming(isClicked ? -81 : 0, {
            duration: 600,
        });
        iconOpacity.value = withTiming(isClicked ? 1 : 0, {
            duration: 500,
        });
        scale.value = withTiming(isClicked ? 1 : 0.6, {
            duration: 600,
        });

        setIsClicked(!isClicked);
    };

    const rInnerContainer = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: translateY.value,
                },
            ],
        };
    }, [isClicked]);

    rIcon = useAnimatedStyle(() => {
        return {
            opacity: iconOpacity.value,
            transform: [{ scale: scale.value }],
        };
    }, [isClicked]);

    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={1}
            style={styles.container}
        >
            <View style={styles.outerContainer}>
                <Animated.View style={[styles.innerContainer, rInnerContainer]}>
                    <View style={styles.buttonContent}>
                        <Text style={styles.text}>Share</Text>
                    </View>
                </Animated.View>

                <Animated.View style={[styles.iconContianer, rIcon]}>
                    <View style={styles.iconShadow}>
                        <FontAwesome6
                            name="whatsapp"
                            size={42}
                            color={PrimaryColor}
                        />
                    </View>
                    <View style={styles.iconShadow}>
                        <FontAwesome6
                            name="facebook"
                            size={42}
                            color={PrimaryColor}
                        />
                    </View>
                    <View style={styles.iconShadow}>
                        <FontAwesome6
                            name="instagram"
                            size={42}
                            color={PrimaryColor}
                        />
                    </View>
                    <View style={styles.iconShadow}>
                        <FontAwesome6
                            name="twitter"
                            size={42}
                            color={PrimaryColor}
                        />
                    </View>
                </Animated.View>
            </View>
        </TouchableOpacity>
    );
};

export default Button2;

const styles = StyleSheet.create({
    container: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 2,
        elevation: 7,
    },

    outerContainer: {
        width: width * 0.8,
        height: 110,
        backgroundColor: '#e9ecf0',
        borderRadius: 30,

        shadowColor: '#0b0b0b',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10,
        padding: 8,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#232323',
        borderWidth: StyleSheet.hairlineWidth,
        overflow: 'hidden',
    },
    innerContainer: {
        width: '90%',
        height: '80%',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e6e9ec',
        shadowColor: '#232323c9',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 7,
        elevation: 7,
        position: 'absolute',
    },
    buttonContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 45,
        textAlign: 'center',
        fontWeight: '700',
        color: PrimaryColor,
    },
    iconContianer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 10,
        paddingLeft: 25,
    },
    iconShadow: {
        shadowColor: '#3e33dc',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 11,
        elevation: 10,
        // borderRadius: 50,
    },
});
