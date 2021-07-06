import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

const FortuneCookie = () => {
	const [fortunes, setFortunes] = useState();
	const [fortune, setFortune] = useState();

	useEffect(() => {
		getFortunes();
	}, []);

	const getFortunes = () => {
		return axios
			.get('https://type.fit/api/quotes')
			.then((response) => {
				setFortunes(response.data);
			})
			.catch((err) => console.error(err));
	};

	const handlePress = () => {
		if (fortunes.length > 0) {
			const fortuneIndex = Math.floor(Math.random() * fortunes.length) + 1;
			return setFortune(fortunes[fortuneIndex]);
		}
	};
	return (
		<View style={styles.container}>
			<Image style={styles.img} source={require('../../assets/fortune-cookie.png')} />
			<Text style={styles.fortune}>{fortune?.text}</Text>

			<Button mode='contained' onPress={handlePress}>
				Crack that cookie!
			</Button>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	img: {
		width: 250,
		height: 230,
	},
	fortune: {
		fontSize: 20,
		color: '#dd7b22',
		margin: 30,
		fontStyle: 'italic',
		textAlign: 'center',
	},
});

export default FortuneCookie;
