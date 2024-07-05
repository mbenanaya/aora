import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import { router } from 'expo-router'
import CustomButton from './CustomButton'

interface EmtyStateProps {
    title: string
    subtitle: string
}

const EmtyState: React.FC<EmtyStateProps> = ({ title, subtitle }) => {
    return (
        <View className='justify-center items-center px-4'>
            <Image
                source={images.empty}
                className='w-[270px] h-[215px]'
                resizeMode='contain'
            />

            <Text className='text-xl text-center text-white font-psemibold mt-2'>
                {title}
            </Text>
            <Text className='text-sm text-gray-100 font-pmedium'>
                {subtitle}
            </Text>

            <CustomButton
                title='Create Video'
                handlePress={() => router.push('(tabs)/create')}
                containerStyles='w-full my-5'
            />
        </View>
    )
}

export default EmtyState