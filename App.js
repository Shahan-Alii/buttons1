import { StatusBar } from 'expo-status-bar';
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import Button3 from './components/Button3';

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Button1 />
            <Button2 />
            <Button3 />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
});
