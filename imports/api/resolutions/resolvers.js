import Resolutions from './resolutions';

// Resolutions.insert({
//   name: 'Test Res'
// });

export default {
  Query: {
    resolutions() {
      return Resolutions.find({}).fetch(); // Find: returns cursor, fetch: get array of res from collection
    }
  }
};
