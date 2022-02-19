import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Online from "./components/Online";
import AddToCart from "./components/AddToCart";
import Payment from "./components/Payment";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Online" component={Online} />
				<Stack.Screen name="AddToCart" component={AddToCart} />
				<Stack.Screen name="Payment" component={Payment} />
				{/* <View style={styles.container}>
				<Payment />
			</View> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 16,
	},
});
