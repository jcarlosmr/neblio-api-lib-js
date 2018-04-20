/**
 * Neblio REST API Suite
 * APIs for Interacting with NTP1 Tokens & The Neblio Blockchain
 *
 * OpenAPI spec version: 1.1.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NeblioRestApiSuite);
  }
}(this, function(expect, NeblioRestApiSuite) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NeblioRestApiSuite.BurnTokenRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('BurnTokenRequest', function() {
    it('should create an instance of BurnTokenRequest', function() {
      // uncomment below and update the code to test BurnTokenRequest
      //var instane = new NeblioRestApiSuite.BurnTokenRequest();
      //expect(instance).to.be.a(NeblioRestApiSuite.BurnTokenRequest);
    });

    it('should have the property fee (base name: "fee")', function() {
      // uncomment below and update the code to test the property fee
      //var instane = new NeblioRestApiSuite.BurnTokenRequest();
      //expect(instance).to.be();
    });

    it('should have the property from (base name: "from")', function() {
      // uncomment below and update the code to test the property from
      //var instane = new NeblioRestApiSuite.BurnTokenRequest();
      //expect(instance).to.be();
    });

    it('should have the property transfer (base name: "transfer")', function() {
      // uncomment below and update the code to test the property transfer
      //var instane = new NeblioRestApiSuite.BurnTokenRequest();
      //expect(instance).to.be();
    });

    it('should have the property burn (base name: "burn")', function() {
      // uncomment below and update the code to test the property burn
      //var instane = new NeblioRestApiSuite.BurnTokenRequest();
      //expect(instance).to.be();
    });

  });

}));
