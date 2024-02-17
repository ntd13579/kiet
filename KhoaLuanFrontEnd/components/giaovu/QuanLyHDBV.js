import React from 'react'
import {
  Text,
  View,
  Pressable,
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

let HDBVData = [
  {
    id: 1,
    members: [
      {
        name: 'Giảng viên A',
        role: 'Chủ tịch',
      },
      {
        name: 'Giảng viên B',
        role: 'Thư ký',
      },
      {
        name: 'Giảng viên C',
        role: 'Bảo vệ',
      },
    ],
    assigned_quantity: 3,
  },
  {
    id: 1,
    members: [
      {
        name: 'Giảng viên A',
        role: 'Chủ tịch',
      },
      {
        name: 'Giảng viên B',
        role: 'Thư ký',
      },
      {
        name: 'Giảng viên C',
        role: 'Bảo vệ',
      },
    ],
    assigned_quantity: 3,
  },
  {
    id: 1,
    members: [
      {
        name: 'Giảng viên A',
        role: 'Chủ tịch',
      },
      {
        name: 'Giảng viên B',
        role: 'Thư ký',
      },
      {
        name: 'Giảng viên C',
        role: 'Bảo vệ',
      },
    ],
    assigned_quantity: 3,
  },
]

const QLHDBV = () => {
  function HDBVItem({ item }) {
    return (
      <View>
        <Pressable
          onPress={() => null}
          style={{ margin: 15, flexDirection: 'row', backgroundColor: 'white' }}
        >
          <View style={{ padding: 10 }}>
            <Text
              style={{
                width: 210,
                marginTop: 6,
                fontWeight: 'bold',
              }}
            >
              Thành viên:
            </Text>

            {item.members.map((member) => (
              <View style={{ marginTop: 6 }}>
                <Text style={{ fontSize: 16, color: 'gray' }}>
                  {member.name} - {member.role}
                </Text>
              </View>
            ))}
            <Text
              style={{
                width: 210,
                marginTop: 6,
                fontWeight: 'bold',
              }}
            >
              Số khóa luận đã phân công:
              <Text
                style={{
                  fontWeight: 'normal',
                }}
              >
                {item.assigned_quantity}
              </Text>
            </Text>
          </View>
        </Pressable>
      </View>
    )
  }

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          padding: 12,
        }}
      >
        <Pressable
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 12,
            backgroundColor: 'white',
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: '500' }}>
            Niên khóa:
            <Text style={{ color: 'red' }}> 2024</Text>
          </Text>
        </Pressable>
        <Pressable
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 12,
            backgroundColor: 'white',
            marginLeft: 20,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: '500' }}>Tìm kiếm</Text>
        </Pressable>
      </View>

      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'flex-start',
          justifyContent: 'space-between',
          padding: 12,
          backgroundColor: 'white',
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: '500' }}>Tạo hội đồng</Text>
      </Pressable>

      <ScrollView style={{ backgroundColor: '#F5F5F5' }}>
        {HDBVData.map((item, index) => (
          // item.properties.map((property, index) => (
          //   <KhoaLuanItem key={index} property={property} />
          // ))
          <HDBVItem key={index} item={item} />
        ))}
      </ScrollView>
    </View>
  )
}

export default QLHDBV
