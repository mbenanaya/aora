import { View, Text, FlatList } from 'react-native'
import React from 'react'

interface TrendingProps {
	posts?: []
}

const Trending:React.FC<TrendingProps> = ({posts}) => {
	return (
		<FlatList
				data={posts}
				keyExtractor={(item) => item.$id}
				renderItem={({ item }) => (
					<Text className='text-3xl text-white'>{item.id}</Text>
				)}
				horizontal
				showsHorizontalScrollIndicator={false}
			/>
	)
}

export default Trending