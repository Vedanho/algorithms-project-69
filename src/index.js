const search = (docs, str) => docs.filter(({ text }) => text.split(' ').some((word) => word === str));

export default search;
