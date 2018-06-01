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
    instance = new NeblioRestApiSuite.TestnetNTP1Api();
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

  describe('TestnetNTP1Api', function() {
    describe('testnetBroadcastTx', function() {
      it('should call testnetBroadcastTx successfully', function(done) {
        //uncomment below and update the code to test testnetBroadcastTx
        //instance.testnetBroadcastTx(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('testnetBurnToken', function() {
      it('should call testnetBurnToken successfully', function(done) {
        //uncomment below and update the code to test testnetBurnToken
        //instance.testnetBurnToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('testnetGetAddressInfo', function() {
      it('should call testnetGetAddressInfo successfully', function(done) {
        //uncomment below and update the code to test testnetGetAddressInfo
        //instance.testnetGetAddressInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('testnetGetTokenHolders', function() {
      it('should call testnetGetTokenHolders successfully', function(done) {
        //uncomment below and update the code to test testnetGetTokenHolders
        //instance.testnetGetTokenHolders(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('testnetGetTokenId', function() {
      it('should call testnetGetTokenId successfully', function(done) {
        //uncomment below and update the code to test testnetGetTokenId
        //instance.testnetGetTokenId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('testnetGetTokenMetadataOfIssuance', function() {
      it('should call testnetGetTokenMetadataOfIssuance successfully', function(done) {
        //uncomment below and update the code to test testnetGetTokenMetadataOfIssuance
        //instance.testnetGetTokenMetadataOfIssuance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('testnetGetTokenMetadataOfUtxo', function() {
      it('should call testnetGetTokenMetadataOfUtxo successfully', function(done) {
        //uncomment below and update the code to test testnetGetTokenMetadataOfUtxo
        //instance.testnetGetTokenMetadataOfUtxo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('testnetGetTransactionInfo', function() {
      it('should call testnetGetTransactionInfo successfully', function(done) {
        //uncomment below and update the code to test testnetGetTransactionInfo
        //instance.testnetGetTransactionInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('testnetIssueToken', function() {
      it('should call testnetIssueToken successfully', function(done) {
        //uncomment below and update the code to test testnetIssueToken
        //instance.testnetIssueToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('testnetSendToken', function() {
      it('should call testnetSendToken successfully', function(done) {
        //uncomment below and update the code to test testnetSendToken
        //instance.testnetSendToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
