export const SectionFormFields = [
  {
    label: 'ชื่อ Section',
    name: 'name',
    type: 'text',
    required: true,
    placeholder: 'ชื่อ Section'
  }
]

export const LectureFormFields = [
  {
    label: 'ชื่อ Video',
    name: 'name',
    type: 'text',
    required: true,
    placeholder: 'ชื่อ Video'
  },
  {
    label: 'เวลา Video',
    name: 'time',
    type: 'number',
    required: true,
    placeholder: 'เวลา'
  },
  {
    label: 'Link ของ Video',
    name: 'link',
    type: 'text',
    required: true,
    placeholder: 'https://www.youtube.com/watch?v=w4JKq3PIKJk'
  },
  {
    label: 'Video ตัวอย่าง',
    name: 'publish',
    type: 'select',
    option: [
      { value: false, name: 'Video ตัวอย่าง', hidden: true },
      { value: false, name: 'ไม่เผยแพร่' },
      { value: true, name: 'เผยแพร่' }
    ]
  }
]
