/* Text Completion Trainer: one-, two- and three-blank questions with the clue words explained. */
(function () {
  'use strict';
  const TIPS = [
    ['Start with the easiest blank', 'In two- and three-blank questions, the blanks need not be done in order. Fill the one with the clearest clue first.'],
    ['Find the clue', 'Every blank is fixed by words elsewhere in the passage. Underline them before you choose.'],
    ['Watch the signals', 'Although, yet and far from reverse direction. Moreover, indeed and in fact keep it.'],
    ['Reread the whole thing', 'When every blank is filled, read the full passage. It must make sense as one piece.'],
    ['All or nothing', 'Every blank must be right to earn the point, so check each one.'],
  ];
  const App = {
    about: 'Text Completion questions give a short passage with one to three blanks. Each blank has its own list of choices: five for a single blank, three for each blank otherwise. This app has 45 original questions across all three kinds, with explanations that point to the clue words.',
    how: ['Choose a kind of question, or All, in **Practice**.', 'Click a choice under each blank, then Check.', 'Read **Tips** for the habits that cut careless errors.'],
    tabs: [
      SK.bankTab('practice', 'Practice', (ctx) => ctx.data.tc, { sizes: [5, 10, 20] }),
      { id: 'tips', label: 'Tips', render(el) { el.appendChild(SK.card('Tips', SK.table(['Habit', 'Why it helps'], TIPS, false))); } },
    ],
    checks: {
      'one-, two- and three-blank questions are all present and valid': (data, assert) => {
        const kinds = new Set(data.tc.map((x) => x.blanks.length));
        assert.deepEqual([...kinds].sort(), [1, 2, 3]);
        for (const it of data.tc) assert.deepEqual(SK.validateItem(it), []);
      },
    },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = App; else SK.start(App);
})();
