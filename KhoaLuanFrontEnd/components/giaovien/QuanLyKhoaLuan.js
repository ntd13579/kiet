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

const khoaLuanData = [
  {
    title: 'Phân tích lợi ích và chi phí Đường trên cao Nhiêu Lộc - Thị Nghè',
    students: [
      {
        name: 'Nguyễn Văn A',
        student_code: '123456789',
      },
      {
        name: 'Nguyễn Văn B',
        student_code: '987654321',
      },
    ],
    is_grade: true,
  },
  {
    title: 'Chính sách nâng cao năng lực cạnh tranh tỉnh Tây Ninh',
    students: [
      {
        name: 'Nguyễn Văn A',
        student_code: '123456789',
      },
      {
        name: 'Nguyễn Văn B',
        student_code: '987654321',
      },
    ],
    is_grade: false,
  },
  {
    title:
      'Nâng cao chất lượng nguồn nhân lực cho các Khu công nghiệp tỉnh Bắc Ninh đến 2020',
    students: [
      {
        name: 'Nguyễn Văn A',
        student_code: '123456789',
      },
      {
        name: 'Nguyễn Văn B',
        student_code: '987654321',
      },
    ],
    is_grade: true,
  },
]

const QLKLScreen = () => {
  function KhoaLuanItem({ item }) {
    return (
      <View>
        <Pressable
          onPress={() => null}
          style={{ margin: 15, flexDirection: 'row', backgroundColor: 'white' }}
        >
          <View style={{ padding: 10 }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text style={{ color: '#1f5f8c', fontSize: 20 }}>
                {item.title}
              </Text>
            </View>

            <Text
              style={{
                width: 210,
                marginTop: 6,
                fontWeight: 'bold',
              }}
            >
              Sinh viên:
            </Text>

            {item.students.map((student) => (
              <View style={{ marginTop: 6 }}>
                <Text style={{ fontSize: 16, color: 'gray' }}>
                  {student.name} - {student.student_code}
                </Text>
              </View>
            ))}
            {item.is_grade ? (
              <View
                style={{
                  backgroundColor: 'green',
                  paddingVertical: 2,
                  marginTop: 2,
                  borderRadius: 5,
                  width: 150,
                  paddingHorizontal: 3,
                }}
              >
                <Text style={{ textAlign: 'center', color: 'white' }}>
                  Đã chấm điểm
                </Text>
              </View>
            ) : (
              <View
                style={{
                  backgroundColor: '#f55742',
                  paddingVertical: 2,
                  marginTop: 2,
                  borderRadius: 5,
                  width: 150,
                  paddingHorizontal: 3,
                }}
              >
                <Text style={{ textAlign: 'center', color: 'white' }}>
                  Chưa chấm điểm
                </Text>
              </View>
            )}
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

      <ScrollView style={{ backgroundColor: '#F5F5F5' }}>
        {khoaLuanData.map((item, index) => (
          // item.properties.map((property, index) => (
          //   <KhoaLuanItem key={index} property={property} />
          // ))
          <KhoaLuanItem key={index} item={item} />
        ))}
      </ScrollView>
    </View>
  )
}

export default QLKLScreen
