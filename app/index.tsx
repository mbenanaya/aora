import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Redirect, router } from 'expo-router'
import { images } from '@/constants'
import CustomButton from '@/components/CustomButton'
import { useGlobalContext } from '@/context/GlobalProvider'

const App = () => {
	const {isLoading, isLoggedIn} = useGlobalContext()
	if(!isLoading && isLoggedIn) return <Redirect href='(tabs)/Home' />

	return (
		<SafeAreaView className='bg-primary h-full'>
			<ScrollView contentContainerStyle={{ height: '100%' }}>
				<View className='w-full h-full justify-center items-center p-4'>
					<Image
						source={images.logo}
						className='w-[130px] h-[84px]'
						resizeMode='contain'
					/>

					<Image
						source={images.cards}
						className='max-w-[380px] w-full h-[300px]'
						resizeMode='contain'
					/>

					<View className="relative mt-5">
						<Text className="text-3xl text-center text-white font-bold">
							Discover Endless Possibilities with {' '}
							<Text className="text-secondary-200">Aora</Text>
						</Text>

						<Image
							source={images.path}
							className='max-w-[136px] h-[15px] absolute -bottom-2 -right-[-74]'
							resizeMode='contain'
						/>
					</View>

					<Text className="text-sm text-center text-gray-100 font-pregular mt-7">
						Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora
					</Text>

					<CustomButton
						title='Continue with Email'
						handlePress={() => router.push('/sign-in')}
						containerStyles='w-full mt-7'
					/>
				</View>
			</ScrollView>

			<StatusBar backgroundColor='#161622' style='light' />
		</SafeAreaView>
	)
}

export default App

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f2f2f2',
		justifyContent: 'center',
		alignItems: 'center'
	}
})