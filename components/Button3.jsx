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

const PrimaryColor = '#3f41db';

const Button3 = () => {
    const [isClicked, setIsClicked] = useState(false);

    const iconOpacity = useSharedValue(0);
    const translateY = useSharedValue(0);
    const scale = useSharedValue(1);
    const iconScale = useSharedValue(1);

    const handlePress = () => {
        translateY.value = withTiming(isClicked ? -55 : 0, {
            duration: 600,
        });
        iconOpacity.value = withTiming(isClicked ? 1 : 0, {
            duration: 500,
        });
        scale.value = withTiming(isClicked ? 0.4 : 1, {
            duration: 600,
        });

        iconScale.value = withTiming(isClicked ? 1 : 0.6, {
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
                { scale: scale.value },
            ],
        };
    }, [isClicked]);

    rIcon = useAnimatedStyle(() => {
        return {
            opacity: iconOpacity.value,
            transform: [{ scale: iconScale.value }],
        };
    }, [isClicked]);

    return (
        <TouchableOpacity onPress={handlePress} activeOpacity={1}>
            <View style={styles.outerContainer}>
                <Animated.View style={[styles.innerContainer, rInnerContainer]}>
                    <View style={styles.buttonContent}>
                        <Text style={styles.text}>Share</Text>
                    </View>
                </Animated.View>

                <Animated.View style={[styles.iconContianer, rIcon]}>
                    <FontAwesome
                        name="whatsapp"
                        size={42}
                        color={PrimaryColor}
                    />
                    <FontAwesome
                        name="facebook"
                        size={42}
                        color={PrimaryColor}
                    />
                    <FontAwesome
                        name="instagram"
                        size={42}
                        color={PrimaryColor}
                    />
                    <FontAwesome
                        name="twitter"
                        size={42}
                        color={PrimaryColor}
                    />
                </Animated.View>
            </View>
        </TouchableOpacity>
    );
};

export default Button3;

const styles = StyleSheet.create({
    outerContainer: {
        width: width * 0.8,
        height: 110,
        backgroundColor: '#f0f0f3',
        borderRadius: 50,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#3d3cd0',
        borderWidth: 2,
    },
    innerContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: PrimaryColor,
    },
    buttonContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 45,
        textAlign: 'center',
        fontWeight: '700',
        color: '#fff',
        textTransform: 'uppercase',
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
        padding: 5,
        paddingTop: 10,
    },
});
