function getRandomStrings(inputStrings: string[]): string[] {
  const shuffledStrings = inputStrings.sort(() => Math.random() - 0.5);
  return shuffledStrings.slice(0, 3)