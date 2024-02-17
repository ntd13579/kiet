import React from 'react'
import { Text, View, Pressable } from 'react-native'

const khoaluan = {
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
  instructors: [
    {
      id: 1,
      name: 'Giảng viên A',
    },
    {
      id: 2,
      name: 'Giảng viên B',
    },
  ],
  ThesisDefenseCommittee: {
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
  },
  date: '01/01/2024',
  score: 8,
}

const KLDetail = () => {
  return (
    <View>
      <Pressable
        style={{
          flexDirection: 'row',
          alignSelf: 'stretch',
          justifyContent: 'space-between',
          padding: 12,
          backgroundColor: 'white',
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: '500', color: 'red' }}>
          Chỉnh sửa điểm
        </Text>
      </Pressable>

      <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 8 }}>
        {khoaluan.title}
      </Text>
      <Text>
        Sinh viên:
        {khoaluan.students.map((student, index) => (
          <Text key={index}>
            {student.name} - {student.student_code}
          </Text>
        ))}
      </Text>
      <Text>
        Giảng viên hướng dẫn:
        {khoaluan.instructors.map((instructor, index) => (
          <Text key={index}>{instructor.name}</Text>
        ))}
      </Text>
      <Text>
        Hội đồng bảo vệ:
        {khoaluan.ThesisDefenseCommittee.members.map((member, index) => (
          <Text key={index}>
            {member.name} - {member.role}
          </Text>
        ))}
      </Text>
      <Text>
        Ngày bảo vệ:
        {khoaluan.date}
      </Text>
      <Text>Điểm số: {khoaluan.score}</Text>
    </View>
  )
}

export default KLDetail
