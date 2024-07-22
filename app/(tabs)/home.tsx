import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <View className='flex items-center justify-center flex-1'>
      <Text className=''>Home</Text>
      <Link href='/'>Go home</Link>
    </View>
  )
}

export default Home