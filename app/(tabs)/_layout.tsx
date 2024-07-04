import { View, Text, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import {icons} from '../../constants'

const TabIcon = ({ icon, color, name, focused }: { icon: ImageSourcePropType, color: string, name: string, focused: boolean }) => {
    return (
        <View className='justify-center items-center gap-2 '>
            <Image 
                source={icon}
                resizeMode='contain'
                tintColor={color}
                className='w-6 h-6'
            />
            <Text className={`${focused ? 'font-psemibold' : 'font-regular'} text-xs`} style={{ color: color }} >{name}</Text>
        </View>
    )
}

const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#ffa001',
                    tabBarInactiveTintColor: '#cdcde0',
                    tabBarStyle: {
                        backgroundColor: '#161622',
                        borderTopWidth: 1,
                        borderTopColor: '#232533',
                        height: 84,
                    }
                }}
            >
                <Tabs.Screen
                    name='Home'
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                name='Home'
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='Bookmark'
                    options={{
                        title: 'Bookmark',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.bookmark}
                                color={color}
                                name='Bookmark'
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='Create'
                    options={{
                        title: 'Create',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.plus}
                                color={color}
                                name='Create'
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='Profile'
                    options={{
                        title: 'Profile',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.profile}
                                color={color}
                                name='Profile'
                                focused={focused}
                            />
                        )
                    }}
                />
            </Tabs>
        </>
    )
}

export default TabsLayout