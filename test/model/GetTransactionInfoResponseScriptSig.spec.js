/**
 * Neblio REST API Suite
 * APIs for Interacting with NTP1 Tokens & The Neblio Blockchain
 *
 * OpenAPI spec version: 1.2.0
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
    instance = new NeblioRestApiSuite.GetTransactionInfoResponseScriptSig();
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

  describe('GetTransactionInfoResponseScriptSig', function() {
    it('should create an instance of GetTransactionInfoResponseScriptSig', function() {
      // uncomment below and update the code to test GetTransactionInfoResponseScriptSig
      //var instane = new NeblioRestApiSuite.GetTransactionInfoResponseScriptSig();
      //expect(instance).to.be.a(NeblioRestApiSuite.GetTransactionInfoResponseScriptSig);
    });

    it('should have the property asm (base name: "asm")', function() {
      // uncomment below and update the code to test the property asm
      //var instane = new NeblioRestApiSuite.GetTransactionInfoResponseScriptSig();
      //expect(instance).to.be();
    });

    it('should have the property hex (base name: "hex")', function() {
      // uncomment below and update the code to test the property hex
      //var instane = new NeblioRestApiSuite.GetTransactionInfoResponseScriptSig();
      //expect(instance).to.be();
    });

  });

}));
