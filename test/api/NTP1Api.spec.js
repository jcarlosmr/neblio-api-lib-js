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
    instance = new NeblioRestApiSuite.NTP1Api();
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

  describe('NTP1Api', function() {
    describe('broadcastTx', function() {
      it('should call broadcastTx successfully', function(done) {
        //uncomment below and update the code to test broadcastTx
        //instance.broadcastTx(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('burnToken', function() {
      it('should call burnToken successfully', function(done) {
        //uncomment below and update the code to test burnToken
        //instance.burnToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAddressInfo', function() {
      it('should call getAddressInfo successfully', function(done) {
        //uncomment below and update the code to test getAddressInfo
        //instance.getAddressInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTokenHolders', function() {
      it('should call getTokenHolders successfully', function(done) {
        //uncomment below and update the code to test getTokenHolders
        //instance.getTokenHolders(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTokenId', function() {
      it('should call getTokenId successfully', function(done) {
        //uncomment below and update the code to test getTokenId
        //instance.getTokenId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTokenMetadataOfIssuance', function() {
      it('should call getTokenMetadataOfIssuance successfully', function(done) {
        //uncomment below and update the code to test getTokenMetadataOfIssuance
        //instance.getTokenMetadataOfIssuance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTokenMetadataOfUtxo', function() {
      it('should call getTokenMetadataOfUtxo successfully', function(done) {
        //uncomment below and update the code to test getTokenMetadataOfUtxo
        //instance.getTokenMetadataOfUtxo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTransactionInfo', function() {
      it('should call getTransactionInfo successfully', function(done) {
        //uncomment below and update the code to test getTransactionInfo
        //instance.getTransactionInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('issueToken', function() {
      it('should call issueToken successfully', function(done) {
        //uncomment below and update the code to test issueToken
        //instance.issueToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendToken', function() {
      it('should call sendToken successfully', function(done) {
        //uncomment below and update the code to test sendToken
        //instance.sendToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
