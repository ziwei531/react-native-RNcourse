import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	ScrollView,
	FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

const App = () => {
	const [courseGoals, setCourseGoals] = useState([]);
	const [modalIsVisible, setModalIsVisible] = useState(false);

	const startAddGoalHandler = () => {
		setModalIsVisible(true);
	};

	const endAddGoalHandler = () => {
		setModalIsVisible(false);
	};

	const addGoalHandler = (enteredGoalText) => {
		setCourseGoals((currentGoals) => [
			...currentGoals,
			{ key: Math.random().toString(), text: enteredGoalText },
		]);
	};

	const removeGoalHandler = (goalId) => {
		setCourseGoals((currentGoals) => {
			return currentGoals.filter((goal) => goal.key !== goalId);
		});
	};

	return (
		<>
			<StatusBar style="light" />
			<View style={styles.container}>
				<Button
					onPress={startAddGoalHandler}
					title="Add New Goal"
					color="#5e0acc"
				/>
				{modalIsVisible && (
					<GoalInput
						visible={modalIsVisible}
						onDeleteItem={removeGoalHandler}
						onAddGoal={addGoalHandler}
						onCancel={endAddGoalHandler}
					/>
				)}
				<View style={styles.goalsContainer}>
					{/* <ScrollView>
					{courseGoals.map((goal, index) => {
						return (
							<View style={styles.goalContainer} key={index}>
								<Text style={styles.goalItem}>{goal}</Text>
							</View>
						);
					})}
				</ScrollView> */}
					<FlatList
						data={courseGoals}
						renderItem={(itemData) => {
							return (
								<GoalItem
									id={itemData.item.key}
									text={itemData.item.text}
									onDeleteItem={removeGoalHandler}
								/>
							);
						}}
					/>
				</View>
			</View>
		</>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16, // 16 on left and right
		backgroundColor: "#1e085a",
		justifyContent: "center",
	},

	goalsContainer: {
		flex: 5,
	},
});
