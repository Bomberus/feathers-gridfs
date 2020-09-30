const { expect } = require('chai');
const plugin = require('../src');

describe('feathers-gridfs', () => {
  it('basic functionality', () => {
    expect(typeof plugin).to.equal('function', 'It worked');
    expect(plugin()).to.equal('feathers-gridfs');
  });
});
