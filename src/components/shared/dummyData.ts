const dummyData = {
  '0': {
    id: 0,
    question: 'Do you know the risk factors for chronic kidney disease (CKD)?',
    skippable: false,
    type: 'text',
    description:
      'This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. ',
    hasNext: true,
    nextId: '1',
  },
  '1': {
    id: 1,
    question: 'Do you know the risk factors for chronic kidney disease (CKD)?',
    skippable: true,
    type: 'yes_no',
    description: '',
    hasNext: true,
    nextId: '2',
    answerDescription: {
      Y: 'Great job getting your labs done! To get more personalized content based on your results, please update your lab data here.',
      N: 'Your Glomerular Filtration Rate (GFR) number tells your doctor how well your kidneys are working. Kidney disease may not cause any symptoms until it is severe so ask your doctor today about checking the health of your kidneys. You can track your number here.',
    },
  },
  '2': {
    id: 2,
    question: 'Do you know the risk factors for chronic kidney disease (CKD)?',
    skippable: true,
    type: 'select',
    options: [
      { value: 'stage-0', name: 'Not Applicable' },
      { value: 'stage-1', name: 'Stage 1' },
      { value: 'stage-2', name: 'Stage 2' },
      { value: 'stage-3', name: 'Stage 3' },
      { value: 'stage-4', name: 'Stage 4' },
    ],
    description:
      'This is the a description to show drop-down option and is skippable. Next page will not be select but non-skippable.',
    hasNext: true,
    nextId: '3',
  },
  '3': {
    id: 3,
    question: 'Do you know the risk factors for chronic kidney disease (CKD)?',
    skippable: false,
    type: 'select',
    options: [
      { value: 'stage-0', name: 'Not Applicable' },
      { value: 'stage-1', name: 'Stage 1' },
      { value: 'stage-2', name: 'Stage 2' },
      { value: 'stage-3', name: 'Stage 3' },
      { value: 'stage-4', name: 'Stage 4' },
    ],
    description:
      'This is the a description to show drop-down option and is last page. This is the a description to show drop-down option and is last page. This is the a description to show drop-down option and is last page. This is the a description to show drop-down option and is last page. This is the a description to show drop-down option and is last page. This is the a description to show drop-down option and is last page. This is the a description to show drop-down option and is last page. This is the a description to show drop-down option and is last page. This is the a description to show drop-down option and is last page. This is the a description to show drop-down option and is last page. This is the a description to show drop-down option and is last page.',
    hasNext: false,
  },
};

export { dummyData };
