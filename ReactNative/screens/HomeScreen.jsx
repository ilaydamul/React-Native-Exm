import { StyleSheet, Text, View, Button} from 'react-native';

export default function HomeScreen({navigation}) {
    return (
        <View style={centerContainer}>
            <Text>Home Screen</Text>
            <Button title="Go to Login" onPress={()=>{navigation.navigate("Login")}}/>
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