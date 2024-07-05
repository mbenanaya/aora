import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import { signIn } from '@/lib/appwrite'

const SignIn = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false)

    const submit = async () => {
        if(!form.email || !form.password ) {
            Alert.alert('Error', 'Please fill in all the fields')
        }

        setIsSubmitting(true)

        try {
            await signIn(form.email, form.password)

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
                    <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Log in to Aora</Text>

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
                        title='Log in'
                        handlePress={submit}
                        containerStyles='mt-7'
                        isLoading={isSubmitting}
                    />

                    <View className="flex-row justify-center pt-5">
                        <Text className="text-lg text-gray-100 font-pregular">
                            Don't have an account?{' '}
                        </Text>
                        <Link href='/sign-up' className='text-lg text-secondary font-psemibold'>Sign Up</Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn;
