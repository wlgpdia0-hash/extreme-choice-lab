export const questions = [
  {
    id: 1,
    question: '아침에 일어나서 먼저 하는 일은?',
    options: [
      { text: '커피 마시기', score: 1 }, // 외향
      { text: '책 읽기', score: 0 }, // 내향
    ],
  },
  {
    id: 2,
    question: '주말에 무엇을 하고 싶나요?',
    options: [
      { text: '친구들과 만나기', score: 1 },
      { text: '집에서 쉬기', score: 0 },
    ],
  },
  {
    id: 3,
    question: '파티에서 당신의 역할은?',
    options: [
      { text: '모두와 이야기하기', score: 1 },
      { text: '조용히 관찰하기', score: 0 },
    ],
  },
  {
    id: 4,
    question: '새로운 사람을 만날 때?',
    options: [
      { text: '먼저 인사하기', score: 1 },
      { text: '기다리기', score: 0 },
    ],
  },
  {
    id: 5,
    question: '스트레스를 받을 때?',
    options: [
      { text: '친구에게 털어놓기', score: 1 },
      { text: '혼자 해결하기', score: 0 },
    ],
  },
  {
    id: 6,
    question: '여행 계획은?',
    options: [
      { text: '그룹 여행', score: 1 },
      { text: '혼자 여행', score: 0 },
    ],
  },
  {
    id: 7,
    question: '취미 활동은?',
    options: [
      { text: '팀 스포츠', score: 1 },
      { text: '독서나 게임', score: 0 },
    ],
  },
  {
    id: 8,
    question: '회의에서 의견을?',
    options: [
      { text: '먼저 말하기', score: 1 },
      { text: '듣고 말하기', score: 0 },
    ],
  },
  {
    id: 9,
    question: '휴가 때?',
    options: [
      { text: '해변 파티', score: 1 },
      { text: '산 속 오두막', score: 0 },
    ],
  },
  {
    id: 10,
    question: '친구 생일 선물은?',
    options: [
      { text: '파티 초대', score: 1 },
      { text: '개인적인 선물', score: 0 },
    ],
  },
]

export const getResult = (score) => {
  if (score <= 3) return '내향적인 성격입니다. 조용하고 깊이 있는 관계를 선호합니다.'
  if (score <= 6) return '중간 성격입니다. 상황에 따라 외향적 또는 내향적으로 행동합니다.'
  return '외향적인 성격입니다. 사람들과의 상호작용을 즐깁니다.'
}