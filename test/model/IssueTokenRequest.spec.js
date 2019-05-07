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
    instance = new Neblioapi.IssueTokenRequest();
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

  describe('IssueTokenRequest', function() {
    it('should create an instance of IssueTokenRequest', function() {
      // uncomment below and update the code to test IssueTokenRequest
      //var instane = new Neblioapi.IssueTokenRequest();
      //expect(instance).to.be.a(Neblioapi.IssueTokenRequest);
    });

    it('should have the property issueAddress (base name: "issueAddress")', function() {
      // uncomment below and update the code to test the property issueAddress
      //var instane = new Neblioapi.IssueTokenRequest();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new Neblioapi.IssueTokenRequest();
      //expect(instance).to.be();
    });

    it('should have the property divisibility (base name: "divisibility")', function() {
      // uncomment below and update the code to test the property divisibility
      //var instane = new Neblioapi.IssueTokenRequest();
      //expect(instance).to.be();
    });

    it('should have the property fee (base name: "fee")', function() {
      // uncomment below and update the code to test the property fee
      //var instane = new Neblioapi.IssueTokenRequest();
      //expect(instance).to.be();
    });

    it('should have the property reissuable (base name: "reissuable")', function() {
      // uncomment below and update the code to test the property reissuable
      //var instane = new Neblioapi.IssueTokenRequest();
      //expect(instance).to.be();
    });

    it('should have the property flags (base name: "flags")', function() {
      // uncomment below and update the code to test the property flags
      //var instane = new Neblioapi.IssueTokenRequest();
      //expect(instance).to.be();
    });

    it('should have the property transfer (base name: "transfer")', function() {
      // uncomment below and update the code to test the property transfer
      //var instane = new Neblioapi.IssueTokenRequest();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instane = new Neblioapi.IssueTokenRequest();
      //expect(instance).to.be();
    });

  });

}));
