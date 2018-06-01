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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BroadcastTxRequest', 'model/BroadcastTxResponse', 'model/BurnTokenRequest', 'model/BurnTokenResponse', 'model/Error', 'model/GetAddressInfoResponse', 'model/GetTokenHoldersResponse', 'model/GetTokenIdResponse', 'model/GetTokenMetadataResponse', 'model/GetTransactionInfoResponse', 'model/IssueTokenRequest', 'model/IssueTokenResponse', 'model/SendTokenRequest', 'model/SendTokenResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BroadcastTxRequest'), require('../model/BroadcastTxResponse'), require('../model/BurnTokenRequest'), require('../model/BurnTokenResponse'), require('../model/Error'), require('../model/GetAddressInfoResponse'), require('../model/GetTokenHoldersResponse'), require('../model/GetTokenIdResponse'), require('../model/GetTokenMetadataResponse'), require('../model/GetTransactionInfoResponse'), require('../model/IssueTokenRequest'), require('../model/IssueTokenResponse'), require('../model/SendTokenRequest'), require('../model/SendTokenResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.NeblioRestApiSuite) {
      root.NeblioRestApiSuite = {};
    }
    root.NeblioRestApiSuite.TestnetNTP1Api = factory(root.NeblioRestApiSuite.ApiClient, root.NeblioRestApiSuite.BroadcastTxRequest, root.NeblioRestApiSuite.BroadcastTxResponse, root.NeblioRestApiSuite.BurnTokenRequest, root.NeblioRestApiSuite.BurnTokenResponse, root.NeblioRestApiSuite.Error, root.NeblioRestApiSuite.GetAddressInfoResponse, root.NeblioRestApiSuite.GetTokenHoldersResponse, root.NeblioRestApiSuite.GetTokenIdResponse, root.NeblioRestApiSuite.GetTokenMetadataResponse, root.NeblioRestApiSuite.GetTransactionInfoResponse, root.NeblioRestApiSuite.IssueTokenRequest, root.NeblioRestApiSuite.IssueTokenResponse, root.NeblioRestApiSuite.SendTokenRequest, root.NeblioRestApiSuite.SendTokenResponse);
  }
}(this, function(ApiClient, BroadcastTxRequest, BroadcastTxResponse, BurnTokenRequest, BurnTokenResponse, Error, GetAddressInfoResponse, GetTokenHoldersResponse, GetTokenIdResponse, GetTokenMetadataResponse, GetTransactionInfoResponse, IssueTokenRequest, IssueTokenResponse, SendTokenRequest, SendTokenResponse) {
  'use strict';

  /**
   * TestnetNTP1 service.
   * @module api/TestnetNTP1Api
   * @version 1.2.0
   */

  /**
   * Constructs a new TestnetNTP1Api. 
   * @alias module:api/TestnetNTP1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the testnetBroadcastTx operation.
     * @callback module:api/TestnetNTP1Api~testnetBroadcastTxCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BroadcastTxResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Broadcasts a signed raw transaction to the network
     * Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction. 
     * @param {module:model/BroadcastTxRequest} body Object representing a transaction to broadcast
     * @param {module:api/TestnetNTP1Api~testnetBroadcastTxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BroadcastTxResponse}
     */
    this.testnetBroadcastTx = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling testnetBroadcastTx");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = BroadcastTxResponse;

      return this.apiClient.callApi(
        '/testnet/ntp1/broadcast', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the testnetBurnToken operation.
     * @callback module:api/TestnetNTP1Api~testnetBurnTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BurnTokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Builds a transaction that burns an NTP1 Token
     * Builds an unsigned raw transaction that burns an NTP1 token on the Neblio blockchain. 
     * @param {module:model/BurnTokenRequest} body Object representing the token to be burned
     * @param {module:api/TestnetNTP1Api~testnetBurnTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BurnTokenResponse}
     */
    this.testnetBurnToken = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling testnetBurnToken");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = BurnTokenResponse;

      return this.apiClient.callApi(
        '/testnet/ntp1/burntoken', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the testnetGetAddressInfo operation.
     * @callback module:api/TestnetNTP1Api~testnetGetAddressInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAddressInfoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Information On a Neblio Address
     * Returns both NEBL and NTP1 token UTXOs held at the given address. 
     * @param {String} address Neblio Address to get information on.
     * @param {module:api/TestnetNTP1Api~testnetGetAddressInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetAddressInfoResponse}
     */
    this.testnetGetAddressInfo = function(address, callback) {
      var postBody = null;

      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling testnetGetAddressInfo");
      }


      var pathParams = {
        'address': address
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetAddressInfoResponse;

      return this.apiClient.callApi(
        '/testnet/ntp1/addressinfo/{address}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the testnetGetTokenHolders operation.
     * @callback module:api/TestnetNTP1Api~testnetGetTokenHoldersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTokenHoldersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Addresses Holding a Token
     * Returns the the the addresses holding a token and how many tokens are held 
     * @param {String} tokenid TokenId to request metadata for
     * @param {module:api/TestnetNTP1Api~testnetGetTokenHoldersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTokenHoldersResponse}
     */
    this.testnetGetTokenHolders = function(tokenid, callback) {
      var postBody = null;

      // verify the required parameter 'tokenid' is set
      if (tokenid === undefined || tokenid === null) {
        throw new Error("Missing the required parameter 'tokenid' when calling testnetGetTokenHolders");
      }


      var pathParams = {
        'tokenid': tokenid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetTokenHoldersResponse;

      return this.apiClient.callApi(
        '/testnet/ntp1/stakeholders/{tokenid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the testnetGetTokenId operation.
     * @callback module:api/TestnetNTP1Api~testnetGetTokenIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTokenIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the tokenId representing a token
     * Translates a token symbol to a tokenId if a token exists with that symbol on the network 
     * @param {String} tokensymbol Token symbol
     * @param {module:api/TestnetNTP1Api~testnetGetTokenIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTokenIdResponse}
     */
    this.testnetGetTokenId = function(tokensymbol, callback) {
      var postBody = null;

      // verify the required parameter 'tokensymbol' is set
      if (tokensymbol === undefined || tokensymbol === null) {
        throw new Error("Missing the required parameter 'tokensymbol' when calling testnetGetTokenId");
      }


      var pathParams = {
        'tokensymbol': tokensymbol
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetTokenIdResponse;

      return this.apiClient.callApi(
        '/testnet/ntp1/tokenid/{tokensymbol}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the testnetGetTokenMetadataOfIssuance operation.
     * @callback module:api/TestnetNTP1Api~testnetGetTokenMetadataOfIssuanceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTokenMetadataResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Issuance Metadata of Token
     * Returns the metadata associated with a token at time of issuance. 
     * @param {String} tokenid TokenId to request metadata for
     * @param {module:api/TestnetNTP1Api~testnetGetTokenMetadataOfIssuanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTokenMetadataResponse}
     */
    this.testnetGetTokenMetadataOfIssuance = function(tokenid, callback) {
      var postBody = null;

      // verify the required parameter 'tokenid' is set
      if (tokenid === undefined || tokenid === null) {
        throw new Error("Missing the required parameter 'tokenid' when calling testnetGetTokenMetadataOfIssuance");
      }


      var pathParams = {
        'tokenid': tokenid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetTokenMetadataResponse;

      return this.apiClient.callApi(
        '/testnet/ntp1/tokenmetadata/{tokenid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the testnetGetTokenMetadataOfUtxo operation.
     * @callback module:api/TestnetNTP1Api~testnetGetTokenMetadataOfUtxoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTokenMetadataResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get UTXO Metadata of Token
     * Returns the metadata associated with a token for that specific utxo instead of the issuance transaction. 
     * @param {String} tokenid TokenId to request metadata for
     * @param {String} utxo Specific UTXO to request metadata for
     * @param {module:api/TestnetNTP1Api~testnetGetTokenMetadataOfUtxoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTokenMetadataResponse}
     */
    this.testnetGetTokenMetadataOfUtxo = function(tokenid, utxo, callback) {
      var postBody = null;

      // verify the required parameter 'tokenid' is set
      if (tokenid === undefined || tokenid === null) {
        throw new Error("Missing the required parameter 'tokenid' when calling testnetGetTokenMetadataOfUtxo");
      }

      // verify the required parameter 'utxo' is set
      if (utxo === undefined || utxo === null) {
        throw new Error("Missing the required parameter 'utxo' when calling testnetGetTokenMetadataOfUtxo");
      }


      var pathParams = {
        'tokenid': tokenid,
        'utxo': utxo
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetTokenMetadataResponse;

      return this.apiClient.callApi(
        '/testnet/ntp1/tokenmetadata/{tokenid}/{utxo}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the testnetGetTransactionInfo operation.
     * @callback module:api/TestnetNTP1Api~testnetGetTransactionInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTransactionInfoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Information On an NTP1 Transaction
     * Returns detailed information regarding an NTP1 transaction. 
     * @param {String} txid Neblio txid to get information on.
     * @param {module:api/TestnetNTP1Api~testnetGetTransactionInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTransactionInfoResponse}
     */
    this.testnetGetTransactionInfo = function(txid, callback) {
      var postBody = null;

      // verify the required parameter 'txid' is set
      if (txid === undefined || txid === null) {
        throw new Error("Missing the required parameter 'txid' when calling testnetGetTransactionInfo");
      }


      var pathParams = {
        'txid': txid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetTransactionInfoResponse;

      return this.apiClient.callApi(
        '/testnet/ntp1/transactioninfo/{txid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the testnetIssueToken operation.
     * @callback module:api/TestnetNTP1Api~testnetIssueTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueTokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Builds a transaction that issues a new NTP1 Token
     * Builds an unsigned raw transaction that issues a new NTP1 token on the Neblio blockchain. 
     * @param {module:model/IssueTokenRequest} body Object representing the token to be created
     * @param {module:api/TestnetNTP1Api~testnetIssueTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueTokenResponse}
     */
    this.testnetIssueToken = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling testnetIssueToken");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = IssueTokenResponse;

      return this.apiClient.callApi(
        '/testnet/ntp1/issue', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the testnetSendToken operation.
     * @callback module:api/TestnetNTP1Api~testnetSendTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SendTokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Builds a transaction that sends an NTP1 Token
     * Builds an unsigned raw transaction that sends an NTP1 token on the Neblio blockchain. 
     * @param {module:model/SendTokenRequest} body Object representing the token to be sent
     * @param {module:api/TestnetNTP1Api~testnetSendTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SendTokenResponse}
     */
    this.testnetSendToken = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling testnetSendToken");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SendTokenResponse;

      return this.apiClient.callApi(
        '/testnet/ntp1/sendtoken', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
