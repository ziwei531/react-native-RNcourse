import React, { useState } from "react";

import {
	StyleSheet,
	View,
	TextInput,
	Button,
	Modal,
	Image,
} from "react-native";

const GoalInput = (props) => {
	const [enteredGoalText, setEnteredGoalText] = useState("");

	const addGoalHandler = () => {
		props.onAddGoal(enteredGoalText);
		props.onCancel();
		setEnteredGoalText("");
	};

	const goalInputHandler = (enteredText) => {
		setEnteredGoalText(enteredText);
	};

	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<Image
					source={require("../assets/images/goal.png")}
					style={styles.image}
				/>
				<TextInput
					onChangeText={goalInputHandler}
					style={styles.textInput}
					placeholder="Your Course Goal"
					value={enteredGoalText}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button color="#5e0acc" onPress={addGoalHandler} title="Add Goal" />
					</View>
					<View style={styles.button}>
						<Button color="#f31282" onPress={props.onCancel} title="Cancel" />
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default GoalInput;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
		backgroundColor: "#311b6b",
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#e4d0ff",
		backgroundColor: "#e4d0ff",
		color: "#120438",
		width: "100%",
		borderRadius: 6,
		marginRight: 8,
		padding: 16,
	},
	buttonContainer: {
		marginTop: 15,
		flexDirection: "row",
	},

	button: {
		width: "30%",
		marginHorizontal: 8,
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
});
