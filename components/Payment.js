import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Image,
	TouchableOpacity,
} from "react-native";
import React from "react";

const Payment = (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.emptyview}></View>
			<View style={styles.textContainer}>
				<Text style={styles.testonline}>PAYMENT SUCCESSFUL</Text>
				<Text style={styles.ipsum}>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					ith
				</Text>
			</View>
			<View style={styles.emptyviewimg}></View>
			<View style={styles.imgContainer}>
				<Image style={styles.image} source={require("../assets/pay.png")} />
			</View>
			<View style={styles.emptyview}></View>
			<View style={styles.touchcontainer}>
				<TouchableOpacity
					style={styles.opacity}
					onPress={() => {
						props.navigation.navigate("Online");
					}}>
					<Text style={styles.next}>GET STARTED</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.emptyview}></View>
			<View style={styles.btn}>
				<TouchableOpacity
					onPress={() => {
						props.navigation.navigate("AddToCart");
					}}>
					<Text style={{ color: "gray", marginRight: 50 }}>PREVIOUS</Text>
				</TouchableOpacity>
				<Text style={styles.round}></Text>
				<Text style={styles.round}></Text>
				<Text style={styles.roundDeep}></Text>

				<TouchableOpacity
					onPress={() => {
						props.navigation.navigate("Online");
					}}>
					<Text style={styles.skip}>SKIP</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default Payment;

const styles = StyleSheet.create({
	container: {
		flex: 100,
		marginHorizontal: 16,
	},
	emptyview: {
		flex: 10,
	},
	emptyviewimg: {
		flex: 5,
	},

	textContainer: {
		flex: 30,
	},
	testonline: {
		fontSize: 25,
		fontWeight: "bold",
		marginVertical: 10,
	},
	ipsum: {
		color: "grey",
		fontSize: 16,
	},

	imgContainer: {
		flex: 20,
		marginBottom: 70,
	},

	image: {
		height: 250,
		width: 400,
		alignSelf: "center",
	},

	btn: {
		flex: 10,
		flexDirection: "row",
		alignItems: "flex-end",
	},
	roundDeep: {
		width: 20,
		height: 10,
		backgroundColor: "#FF62E0",
		marginLeft: 6,
		marginRight: 6,
		borderRadius: 10,
	},

	touchcontainer: {
		flex: 10,
		backgroundColor: "#FF62E0",
		borderRadius: 50,
		width: 200,
		alignSelf: "center",
	},
	next: {
		color: "#ffff",
		fontSize: 25,
		alignSelf: "center",
		paddingVertical: 10,
	},
	round: {
		backgroundColor: "grey",
		height: 10,
		width: 10,
		borderRadius: 5,
		marginLeft: 6,
		justifyContent: "space-evenly",
	},

	skip: {
		color: "grey",
		marginLeft: 110,
	},
});
