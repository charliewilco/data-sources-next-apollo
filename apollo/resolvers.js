export const resolvers = {
  Query: {
    viewer(_parent, _args, _context, _info) {
      return { id: 1, name: "John Smith", status: "cached" };
    },
    articles(_parent, _args, _context, _info) {
      console.log(_context);
      return _context.dataSources.space.getArticles();
    },
  },
};
