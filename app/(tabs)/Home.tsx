import { View, Text, FlatList, Image, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import SearchInput from '@/components/SearchInput'
import Trending from '@/components/Trending'
import EmtyState from '@/components/EmtyState'
import { getAllPosts, getLatestPosts } from '@/lib/appwrite'
import useAppwrite from '@/lib/useAppwrite'
import VideoCard from '@/components/VideoCard'

const Home = () => {
	const { data: posts, refetch } = useAppwrite(getAllPosts)
	const { data: latestPosts } = useAppwrite(getLatestPosts)

	const [refreshing, setRefreshing] = useState(false)

	const onRefresh = async () => {
		setRefreshing(true)
		await refetch()
		setRefreshing(false)
	}

	return (
		<SafeAreaView className='bg-primary h-full'>
			<FlatList
				data={posts}
				keyExtractor={(item: { $id: string, title: string, thumbnail: string, video: string, creator: { username: string, avatar: string } }) => item.$id}
				renderItem={({ item }) => (
					<VideoCard video={item} key={item.$id} />
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
							<Trending posts={latestPosts} />
						</View>
					</View>
				)}
				ListEmptyComponent={() => (
					<EmtyState
						title='No Videos Found'
						subtitle='Be the first one to upload a video'
					/>
				)}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
					/>
				}
			/>
		</SafeAreaView>
	)
}

export default Home