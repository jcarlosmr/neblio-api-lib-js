/**
 * Neblio REST API Suite
 * APIs for Interacting with NTP1 Tokens & The Neblio Blockchain
 *
 * OpenAPI spec version: 1.2.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
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
    factory(root.expect, root.Neblioapi);
  }
}(this, function(expect, Neblioapi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Neblioapi.GetTransactionInfoResponseTokens();
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

  describe('GetTransactionInfoResponseTokens', function() {
    it('should create an instance of GetTransactionInfoResponseTokens', function() {
      // uncomment below and update the code to test GetTransactionInfoResponseTokens
      //var instane = new Neblioapi.GetTransactionInfoResponseTokens();
      //expect(instance).to.be.a(Neblioapi.GetTransactionInfoResponseTokens);
    });

    it('should have the property tokenId (base name: "tokenId")', function() {
      // uncomment below and update the code to test the property tokenId
      //var instane = new Neblioapi.GetTransactionInfoResponseTokens();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new Neblioapi.GetTransactionInfoResponseTokens();
      //expect(instance).to.be();
    });

    it('should have the property issueTxid (base name: "issueTxid")', function() {
      // uncomment below and update the code to test the property issueTxid
      //var instane = new Neblioapi.GetTransactionInfoResponseTokens();
      //expect(instance).to.be();
    });

    it('should have the property divisibility (base name: "divisibility")', function() {
      // uncomment below and update the code to test the property divisibility
      //var instane = new Neblioapi.GetTransactionInfoResponseTokens();
      //expect(instance).to.be();
    });

    it('should have the property lockStatus (base name: "lockStatus")', function() {
      // uncomment below and update the code to test the property lockStatus
      //var instane = new Neblioapi.GetTransactionInfoResponseTokens();
      //expect(instance).to.be();
    });

    it('should have the property aggregationPolicy (base name: "aggregationPolicy")', function() {
      // uncomment below and update the code to test the property aggregationPolicy
      //var instane = new Neblioapi.GetTransactionInfoResponseTokens();
      //expect(instance).to.be();
    });

  });

}));
