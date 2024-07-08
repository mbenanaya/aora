import { View, Text, TextInput, TouchableOpacity, Image, KeyboardTypeOptions, Alert } from 'react-native'
import React, { useState } from 'react'
import { icons } from '@/constants';
import { router, usePathname } from 'expo-router';

const SearchInput = () => {
	const pathname = usePathname()
	const [query, setQuery] = useState('')

	return (
		<View className="w-full h-16 border-2 border-black-200 px-4 bg-black-100 rounded-2xl focus:border-secondary flex-row justify-between items-center space-x-4">
			<TextInput
				value={query}
				className='text-white'
				placeholder='Search for a video topic'
				placeholderTextColor='#cdcde0'
				onChangeText={(e) => setQuery(e)}
			/>

			<TouchableOpacity
				onPress={() => {
					if (!query) {
						return Alert.alert('Missing query', 'Please input something to search results across database')
					}

					if(pathname.startsWith('/search')) router.setParams({query})
					else router.push(`/search/${query}`) 
				}}
			>
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
