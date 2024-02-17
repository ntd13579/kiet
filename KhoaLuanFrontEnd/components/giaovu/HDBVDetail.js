import React from 'react'
import { Text, View, Pressable } from 'react-native'

const hoidong = {
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
  thesises: [
    {
      id: 1,
      title: 'Khoa luận 1',
      students: [
        {
          id: 1,
          name: 'Nguyễn Văn A',
          student_code: 'B12345',
        },
        {
          id: 2,
          name: 'Nguyễn Văn B',
          student_code: 'B12346',
        },
      ],
      status: true,
    },
    {
      id: 1,
      title: 'Khoa luận 1',
      students: [
        {
          id: 1,
          name: 'Nguyễn Văn A',
          student_code: 'B12345',
        },
        {
          id: 2,
          name: 'Nguyễn Văn B',
          student_code: 'B12346',
        },
      ],
      status: true,
    },
    {
      id: 1,
      title: 'Khoa luận 1',
      students: [
        {
          id: 1,
          name: 'Nguyễn Văn A',
          student_code: 'B12345',
        },
        {
          id: 2,
          name: 'Nguyễn Văn B',
          student_code: 'B12346',
        },
      ],
      status: true,
    },
  ],
}

const HDBVDetail = () => {
  return (
    <View>
      <Text>Thành viên:</Text>
      {hoidong.members.map((member, index) => (
        <Text key={index}>
          {member.name} - {member.role}
        </Text>
      ))}
      <View>
        <Text>Các khóa luận đã phân công:</Text>
        {hoidong.thesises.map((thesis) => (
          <Pressable
            onPress={() => null}
            style={{
              margin: 15,
              flexDirection: 'row',
              backgroundColor: 'white',
            }}
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
                  {thesis.title}
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

              {thesis.students.map((student) => (
                <View style={{ marginTop: 6 }}>
                  <Text style={{ fontSize: 16, color: 'gray' }}>
                    {student.name} - {student.student_code}
                  </Text>
                </View>
              ))}
              {thesis.status ? (
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
                    Đã bảo vệ
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
                    Chưa bảo vệ
                  </Text>
                </View>
              )}
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  )
}

export default HDBVDetail
