export const parseStringIntoTags = (
  input: string,
  keyDelimiters: string[] = [],
  wrapDelimiters: string[] = [],
): string[] => {
  const tags: string[] = [];

  // Extract tags wrapped by text wrap delimiters
  wrapDelimiters.forEach(delimiter => {
    const regex = new RegExp(`${delimiter}(.*?)${delimiter}`, 'g');
    console.log(delimiter, regex);
    let match;
    while ((match = regex.exec(input)) !== null) {
      const tag = match[0]; // Include the delimiters in the tag
      if (tag) {
        tags.push(tag.trim());
      }
    }
    // Remove the matched tags from the input
    input = input.replace(regex, '').trim();
  });

  // Split remaining input by key press delimiters
  const additionalTags = input
    .split(new RegExp(`[${keyDelimiters.join('')}]`))
    .map(tag => tag.trim())
    .filter(tag => !!tag.length);

  // Combine and remove duplicates
  return Array.from(new Set([...tags, ...additionalTags]));
};
