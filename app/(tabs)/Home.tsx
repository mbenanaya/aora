import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import SearchInput from '@/components/SearchInput'
import Trending from '@/components/Trending'
import EmtyState from '@/components/EmtyState'

const Home = () => {
	return (
		<SafeAreaView className='bg-primary h-full'>
			<FlatList
				// data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
				data={[]}
				keyExtractor={(item) => item.$id}
				renderItem={({ item }) => (
					<Text className='text-3xl text-white'>{item.id}</Text>
				)}
				ListHeaderComponent={() => (
					<View className='my-6 px-4 space-y-6'>
						<View className='justify-between items-start flex-row mb-6'>
							<View>
								<Text className='text-sm text-gray-100 font-pmedium'>
									Welcome Back
								</Text>
								<Text className='text-2xl text-white font-psemibold'>
									Mouhcine
								</Text>
							</View>

							<View className="mt-1 5">
								<Image
									source={images.logoSmall}
									className='w-9 h-10'
									resizeMode='contain'
								/>
							</View>
						</View>

						<SearchInput

						/>

						<View className="w-full flex-1 pt-5 pb-8">
							<Text className="text-lg text-gray-100 font-pregular mb3">
								Latest Videos
							</Text>
							<Trending posts={[{id:1}, {id:2}, {id:3}] ?? []} />
						</View>
					</View>
				)}
				ListEmptyComponent={() => (
					<EmtyState
						title='No Videos Found'
						subtitle='Be the first one to upload a video'
					/>
				)}
			/>
		</SafeAreaView>
	)
}

export default Home