export const CourseFormFields = [
  {
    label: 'ชื่อหัวข้อ',
    name: 'name',
    type: 'text',
    required: true,
    placeholder: 'ชื่อหัวข้อ'
  },
  {
    label: 'รายละเอียด',
    name: 'detail',
    type: 'text',
    required: true,
    placeholder: 'รายละเอียด'
  },
  {
    label: 'รูปภาพ',
    name: 'thumbnail',
    type: 'text',
    required: true,
    placeholder: 'รูปภาพ'
  },
  {
    label: 'ราคา',
    name: 'price',
    type: 'number',
    required: true,
    placeholder: 'ราคา'
  },
  {
    label: 'ชั่วโมง',
    name: 'hour',
    type: 'number',
    required: true,
    placeholder: 'ชั่วโมง'
  },
  {
    label: 'ประเภท',
    name: 'type',
    type: 'select',
    option: [
      { value: '-', name: 'ประเภท', hidden: true },
      { value: 'juniorhighschool', name: 'ม.ต้น' },
      { value: 'seniorhighschool', name: 'ม.ปลาย' },
      { value: 'university', name: 'มหาลัย' }
    ]
  }
]
