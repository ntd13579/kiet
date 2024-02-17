import React from 'react'
import { Text, View, Pressable } from 'react-native'

const HomeScreen = () => {
  return (
    <View>
      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          padding: 12,
          backgroundColor: 'white',
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 8 }}>
          Quản lý khóa luận
        </Text>
      </Pressable>
    </View>
  )
}

export default HomeScreen
