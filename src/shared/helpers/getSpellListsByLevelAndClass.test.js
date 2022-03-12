import getSpellListsByLevelAndClass from './getSpellListsByLevelAndClass';

test('Return empty spell list', async () => {
  const sut = await getSpellListsByLevelAndClass();
  expect(sut).toEqual([[]]);
});
