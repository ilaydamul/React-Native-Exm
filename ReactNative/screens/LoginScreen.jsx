import { StyleSheet, Text, View } from 'react-native';

export default function LoginScreen() {
    return (
        <View style={centerContainer}>
            <Text>Login Screen</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    centerContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})