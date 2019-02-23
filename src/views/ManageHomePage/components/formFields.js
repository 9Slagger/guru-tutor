export const HomecontentFirstFormFields = [
  {
    label: 'ชื่อหัวข้อ',
    name: 'Title',
    type: 'text',
    required: true,
    placeholder: 'สถาบันติวเตอร์ชั้นนำเปิดใหม่...'
  },
  {
    label: 'รายละเอียด',
    name: 'Detail',
    type: 'text',
    required: true,
    placeholder: 'รายละเอียด...'
  },
  {
    label: 'ลิงค์รูปภาพ',
    name: 'Thumbnail',
    type: 'text',
    required: true,
    placeholder: 'https://www.img.com/img1.jpg'
  }
]

export const HomecontentSecondFormFields = [
  {
    label: 'ชื่อหัวข้อ',
    name: 'Title',
    type: 'text',
    required: true,
    placeholder: 'สถาบันติวเตอร์ชั้นนำเปิดใหม่...'
  },
  {
    label: 'รายละเอียด',
    name: 'Detail',
    type: 'text',
    required: true,
    placeholder: 'รายละเอียด...'
  },
  {
    label: 'ไอคอน',
    name: 'Icon',
    type: 'select',
    required: true,
    option: [
      { value: '-', name: 'ไอคอน', hidden: true },
      { value: 'fas fa-tv fa-8x mb-5', name: 'มอนิเตอร์' },
      { value: 'fas fa-graduation-cap fa-8x mb-5', name: 'บัณฑิต' },
      { value: 'fas fa-comments fa-8x mb-5', name: 'แชทสนทนา' }
    ]
  }
]
