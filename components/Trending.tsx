import { View, Text, FlatList, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable'
import { icons } from '@/constants'
import { Video, ResizeMode } from 'expo-av'

const zoomIn = {
	0: {
		scale: 0.9
	},
	1: {
		scale: 1.1
	}
}
const zoomOut = {
	0: {
		scale: 1
	},
	1: {
		scale: 0.9
	}
}

interface Post {
	$id: string;
	title: string;
	thumbnail: string;
	video: string;
	creator: {
		username: string;
		avatar: string;
	};
}

interface TrendingProps {
	posts?: Post[]
}

const TrendingItem = ({ activeItem, item }: { activeItem: any, item: Post }) => {
	const [play, setPlay] = useState(false)

	return (
		<Animatable.View
			className='mr-5'
			animation={activeItem === item.$id ? zoomIn : zoomOut}
			duration={500}
		>
			{play ? (
				<Video
				source={{uri: item.video}}
				className='w-52 h-72 rounded-[35px] my-3 bg-white/10'
				resizeMode={ResizeMode.CONTAIN}
				useNativeControls
				shouldPlay
				onPlaybackStatusUpdate={(status) => {
					if (status.didJustFinish) {
						setPlay(false)
					}
				}}
				/>
			) : (
				<TouchableOpacity
					className='relative justify-center items-center'
					activeOpacity={0.7}
					onPress={() => setPlay(true)}
				>
					<ImageBackground
						source={{ uri: item.thumbnail }}
						className='w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40'
						resizeMode='cover'
					/>

					<Image
						source={icons.play}
						className='w-12 h-12 absolute'
						resizeMode='contain'
					/>
				</TouchableOpacity>
			)}
		</Animatable.View>
	)
}

const Trending: React.FC<TrendingProps> = ({ posts }) => {
	const [activeItem, setActiveItem] = useState(posts ? posts[0] : null)

	const viewableItemsChanged = ({ viewableItems }: { viewableItems: any }) => {
		if (viewableItems.length > 0) {
			setActiveItem(viewableItems[0].key)
		}
	}

	return (
		<FlatList
			data={posts}
			keyExtractor={(item) => item.$id}
			renderItem={({ item }) => (
				<TrendingItem activeItem={activeItem} item={item} />
			)}
			onViewableItemsChanged={viewableItemsChanged}
			viewabilityConfig={{
				itemVisiblePercentThreshold: 70
			}}
			contentContainerStyle={{ x: 170 }}
			horizontal
			showsHorizontalScrollIndicator={false}
		/>
	)
}

export default Trending