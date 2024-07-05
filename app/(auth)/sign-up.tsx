import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import {createUser} from '@/lib/appwrite'

const SignUp = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false)

    const submit = async () => {
        if(!form.username || !form.email || !form.password ) {
            Alert.alert('Error', 'Please fill in all the fields')
        }

        setIsSubmitting(true)

        try {
            const result = await createUser(form.email, form.password, form.username)

            // set it to globbal state

            router.replace('(tabs)/Home')
        } catch (error:any) {
            Alert.alert('Error', error.message)
        } finally {
            setIsSubmitting(false)
        }

    }

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className="w-full min-h-[80vh] justify-center px-4 my-6">
                    <Image source={images.logo} resizeMode='contain' className='w-[115px] h-[35px]' />
                    <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Sign up to Aora</Text>

                    <FormField
                        title='Username'
                        value={form.username}
                        handleChangeText={(e: string) => setForm({ ...form, username: e })}
                        otherStyles='mt-10'
                    />

                    <FormField
                        title='Email'
                        value={form.email}
                        handleChangeText={(e: string) => setForm({ ...form, email: e })}
                        otherStyles='mt-7'
                        keyboardType='email-address'
                    />

                    <FormField
                        title='Password'
                        value={form.password}
                        handleChangeText={(e: string) => setForm({ ...form, password: e })}
                        otherStyles='mt-7'
                    />

                    <CustomButton
                        title='Sign up'
                        handlePress={submit}
                        containerStyles='mt-7'
                        isLoading={isSubmitting}
                    />

                    <View className="flex-row justify-center pt-5">
                        <Text className="text-lg text-gray-100 font-pregular">
                        Already have an account?{' '}
                        </Text>
                        <Link href='/sign-in' className='text-lg text-secondary font-psemibold'>Log In</Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUp;
