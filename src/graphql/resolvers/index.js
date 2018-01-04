import helloResolver from './helloResolver';

export default {
  Query: {
    hello: helloResolver.getHello,
  },
};
