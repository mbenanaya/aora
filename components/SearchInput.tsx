import { View, Text, TextInput, TouchableOpacity, Image, KeyboardTypeOptions } from 'react-native'
import React, { useState } from 'react'
import { icons } from '@/constants';

interface SearchInputProps {
	title?: string;
	placeHolder?: string;
	value?: string;
	handleChangeText?: (text: string) => void;
	otherStyles?: string;
	keyboardType?: KeyboardTypeOptions;
}

const SearchInput: React.FC<SearchInputProps> = ({ title, placeHolder, value, handleChangeText, otherStyles, keyboardType, ...props }) => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<View className="w-full h-16 border-2 border-black-200 px-4 bg-black-100 rounded-2xl focus:border-secondary flex-row justify-center items-center space-x-4">
			<TextInput
				value={value}
				placeholder='Search for a video topic'
				placeholderTextColor='#7b7b8b'
				onChangeText={handleChangeText}
				secureTextEntry={title === 'Password' && !showPassword}
				className='text-base mt-0.5 text-white h-full flex-1 font-pregular'
				keyboardType={keyboardType}
				{...props}
			/>

			<TouchableOpacity>
				<Image
					source={icons.search}
					className='w-5 h-5'
					resizeMode='contain'
				/>
			</TouchableOpacity>
		</View>
	)
}

export default SearchInput;
