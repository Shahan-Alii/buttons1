import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';
import React, { useState } from 'react';

import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from 'react-native-reanimated';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const PrimaryColor = '#2b21a8';

const { width } = Dimensions.get('window');

const Button1 = () => {
    const [isClicked, setIsClicked] = useState(false);

    const translateX = useSharedValue(0);
    const iconOpacity = useSharedValue(0);

    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }],
        };
    }, [isClicked]);

    rIcon = useAnimatedStyle(() => {
        return {
            opacity: iconOpacity.value,
        };
    }, [isClicked]);

    const handlePress = () => {
        translateX.value = withTiming(isClicked ? 0 : -width * 0.69, {
            duration: 600,
        });
        iconOpacity.value = withTiming(isClicked ? 0 : 1, {
            duration: 600,
        });

        setIsClicked(!isClicked);
    };

    return (
        <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
            <Animated.View style={[styles.innerContainer, rStyle]}>
                <Text style={styles.text}>Share</Text>
            </Animated.View>

            <Animated.View style={[styles.iconContianer, rIcon]}>
                <FontAwesome name="whatsapp" size={42} color="white" />
                <FontAwesome name="facebook" size={42} color="white" />
                <FontAwesome name="instagram" size={42} color="white" />
                <FontAwesome name="twitter" size={42} color="white" />
            </Animated.View>
        </TouchableOpacity>
    );
};

export default Button1;

const styles = StyleSheet.create({
    btnContainer: {
        width: width * 0.8,
        height: 90,
        backgroundColor: PrimaryColor,
        borderRadius: 50,
        shadowColor: PrimaryColor,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.9,
        shadowRadius: 20,
        elevation: 30,
        borderColor: '#7783ef',
        borderWidth: 3,

        overflow: 'hidden',
    },
    innerContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: '700',
        color: PrimaryColor,
        textTransform: 'uppercase',
    },

    iconContianer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 10,
        paddingLeft: 25,
    },
});
