const wordData = {
  prep: [
    { word: 'during', example: 'He stayed calm during the storm.' },
    { word: 'because of', example: 'The flight was delayed because of the weather.' },
    { word: 'due to', example: 'The cancellation was due to technical issues.' },
    { word: 'owing to', example: 'Owing to traffic, we arrived late.' },
    { word: 'on account of', example: 'She left early on account of her headache.' },
    { word: 'despite', example: 'Despite the rain, we went hiking.' },
    { word: 'in spite of', example: 'In spite of his efforts, the plan failed.' },
    { word: 'notwithstanding', example: 'Notwithstanding the risks, he proceeded.' },
    { word: 'in', example: 'The keys are in the drawer.' },
    { word: 'on', example: 'The book is on the table.' },
    { word: 'at', example: 'We met at the station.' },
    { word: 'by', example: 'He traveled by train.' },
    { word: 'with', example: 'She painted with a brush.' },
    { word: 'about', example: 'We talked about the movie.' },
    { word: 'for', example: 'This gift is for you.' },
    { word: 'from', example: 'He came from Tokyo.' },
    { word: 'to', example: 'She walked to the park.' },
    { word: 'under', example: 'The cat is under the bed.' },
    { word: 'between', example: 'The shop is between the bank and the post office.' },
    { word: 'near', example: 'He lives near the station.' }
  ],
  conj: [
    { word: 'because', example: 'I stayed home because it was raining.' },
    { word: 'while', example: 'She listened to music while studying.' },
    { word: 'since', example: 'Since you’re here, let’s start the meeting.' },
    { word: 'as', example: 'As it was late, we went home.' },
    { word: 'although', example: 'Although it was cold, she went swimming.' },
    { word: 'though', example: 'Though he was tired, he kept working.' },
    { word: 'even though', example: 'Even though he was tired, he kept working.' },
    { word: 'before', example: 'Finish your homework before dinner.' },
    { word: 'after', example: 'She felt better after she took the medicine.' },
    { word: 'until', example: 'Stay here until I return.' },
    { word: 'if', example: 'If it rains, we’ll cancel the picnic.' },
    { word: 'unless', example: 'You won’t pass unless you study.' },
    { word: 'whether', example: 'I don’t know whether he’ll come.' },
    { word: 'whenever', example: 'Call me whenever you need help.' },
    { word: 'whereas', example: 'He likes tea, whereas she prefers coffee.' },
    { word: 'even if', example: 'Even if it’s hard, I’ll try.' },
    { word: 'in case', example: 'Take an umbrella in case it rains.' },
    { word: 'as far as', example: 'As far as I know, she’s coming.' },
    { word: 'as long as', example: 'You can stay as long as you’re quiet.' },
    { word: 'now that', example: 'Now that you’re here, let’s begin.' },
    { word: 'so that', example: 'He studied hard so that he could pass.' },
    { word: 'in order that', example: 'She left early in order that she could catch the train.' },
    { word: 'provided that', example: 'You can go out provided that you finish your work.' },
    { word: 'given that', example: 'Given that it’s late, we should go.' },
    { word: 'in the event that', example: 'In the event that it rains, the event will be canceled.' }
  ],
  conjAdv: [
    { word: 'therefore', example: 'She studied hard; therefore, she passed.' },
    { word: 'however', example: 'He wanted to join; however, he was busy.' },
    { word: 'nevertheless', example: 'It was raining; nevertheless, they played outside.' },
    { word: 'moreover', example: 'The book is well-written; moreover, it’s informative.' },
    { word: 'further', example: 'Further, we need to consider the budget.' },
    { word: 'in addition', example: 'In addition to math, she teaches science.' },
    { word: 'thus', example: 'He forgot the key, thus couldn’t enter.' },
    { word: 'as a result', example: 'She missed the train; as a result, she was late.' },
    { word: 'meanwhile', example: 'He cooked; meanwhile, she set the table.' },
    { word: 'in contrast', example: 'In contrast to his brother, he is quiet.' },
    { word: 'in fact', example: 'He’s not lazy; in fact, he works overtime.' },
    { word: 'otherwise', example: 'You must hurry; otherwise, you’ll miss the bus.' },
    { word: 'instead', example: 'She chose tea instead of coffee.' },
    { word: 'rather', example: 'I’d rather stay home tonight.' }
  ]
};

  const typeLabels = {
    prep: '前置詞（Prepositions）',
    conj: '接続詞（Conjunctions）',
    conjAdv: '副詞（Conjunctive Adverbs）'
  };

  function showWords(type) {
    const list = document.getElementById('word-list');
    const label = typeLabels[type] || type;
    const words = wordData[type] || [];

    const wordItems = words.map(item => {
      const regex = new RegExp(`\\b(${item.word})\\b`, 'gi');
      const highlighted = item.example.replace(regex, '<span class="highlight">$1</span>');
      return `<li><span class="example">${highlighted}</span></li>`;
    }).join('');

    list.innerHTML = `
      <h3>${label}の例文：</h3>
      <ul>${wordItems}</ul>
    `;
  }
