import { Mongo } from 'meteor/mongo';

// Create a new collection
const Resolutions = new Mongo.Collection('resolutions');

export default Resolutions;
