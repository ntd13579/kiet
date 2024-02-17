import React from 'react'
import { Text, View, Pressable } from 'react-native'

const khoaluan =
  /* tên đề tài
 sinh viên
 hướng dẫn
 hội đồng bảo vệ
 ngày bảo vệ
 điểm số */
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
    scores: [
      {
        name: 'Giảng viên A',
        role: 'Chủ tịch',
        score: 8,
      },
      {
        name: 'Giảng viên B',
        role: 'Thư ký',
        score: 9,
      },
      {
        name: 'Giảng viên C',
        role: 'Bảo vệ',
        score: 10,
      },
    ],
  }

const KLDetail = () => {
  return (
    <View>
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
      <Text>
        Điểm số:
        {khoaluan.scores.map((score, index) => (
          <Text key={index}>
            {score.name} - {score.role} - {score.score}
          </Text>
        ))}
      </Text>
      <Text>
        Điểm trung bình:
        {khoaluan.scores.reduce((a, b) => a + b.score, 0) /
          khoaluan.scores.length}
      </Text>
    </View>
  )
}

export default KLDetail
