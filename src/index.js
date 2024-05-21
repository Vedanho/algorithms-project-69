const search = (docs, str) => {
  const sanitize = (text) => text.replace(/[^\w\s]/g, '').toLowerCase();

  const sanitizedStr = sanitize(str);
  return docs.filter(({ text }) => text.split(' ').some((word) => sanitize(word) === sanitizedStr));
};

export default search;
