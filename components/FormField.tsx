import { View, Text, TextInput, TouchableOpacity, Image, KeyboardTypeOptions } from 'react-native'
import React, { useState } from 'react'
import { icons } from '@/constants';

interface FormFieldProps {
	title?: string;
	placeHolder?: string;
	value?: string;
	handleChangeText?: (text: string) => void;
	otherStyles?: string;
	keyboardType?: KeyboardTypeOptions;
}

const FormField: React.FC<FormFieldProps> = ({ title, placeHolder, value, handleChangeText, otherStyles, keyboardType, ...props }) => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<View className={`space-y-2 ${otherStyles}`}>
			<Text className='text-base text-gray-200 font-pmedium'>{title}</Text>

			<View className="w-full h-16 border-2 border-black-200 px-4 bg-black-100 rounded-2xl focus:border-secondary flex-row items-center">
				<TextInput
					value={value}
					placeholder={placeHolder}
					placeholderTextColor='#7b7b8b'
					onChangeText={handleChangeText}
					secureTextEntry={title === 'Password' && !showPassword}
					style={{ flex: 1, color: '#fff' }}
					keyboardType={keyboardType}
					{...props}
				/>

				{title === 'Password' && (
					<TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
						<Image className='w-6 h-6' resizeMode='contain' source={!showPassword ? icons.eye : icons.eyeHide} />
					</TouchableOpacity>
				)}
			</View>
		</View>
	)
}

export default FormField;
