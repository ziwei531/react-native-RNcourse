import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = (props) => {
	return (
		<View style={styles.goalContainer}>
			<Pressable
				android_ripple={{ color: "#dddddd" }}
				onPress={() => props.onDeleteItem(props.id)}
				style={({ pressed }) => pressed && styles.pressedItem}
			>
				<Text style={styles.goalText}>{props.text}</Text>
			</Pressable>
		</View>
	);
};

export default GoalItem;

const styles = StyleSheet.create({
	goalContainer: {
		margin: 8,

		borderRadius: 6,
		backgroundColor: "#5e0acc",
		color: "white",
	},

	goalText: {
		padding: 8,
		color: "white",
	},

	pressedItem: {
		backgroundColor: "#7e0fff",
	},
});
