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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GetTokenMetadataResponseMetadataOfIssuanceDataUserData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetTokenMetadataResponseMetadataOfIssuanceDataUserData'));
  } else {
    // Browser globals (root is window)
    if (!root.NeblioRestApiSuite) {
      root.NeblioRestApiSuite = {};
    }
    root.NeblioRestApiSuite.GetTokenMetadataResponseMetadataOfIssuanceData = factory(root.NeblioRestApiSuite.ApiClient, root.NeblioRestApiSuite.GetTokenMetadataResponseMetadataOfIssuanceDataUserData);
  }
}(this, function(ApiClient, GetTokenMetadataResponseMetadataOfIssuanceDataUserData) {
  'use strict';




  /**
   * The GetTokenMetadataResponseMetadataOfIssuanceData model module.
   * @module model/GetTokenMetadataResponseMetadataOfIssuanceData
   * @version 1.1.1
   */

  /**
   * Constructs a new <code>GetTokenMetadataResponseMetadataOfIssuanceData</code>.
   * @alias module:model/GetTokenMetadataResponseMetadataOfIssuanceData
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>GetTokenMetadataResponseMetadataOfIssuanceData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetTokenMetadataResponseMetadataOfIssuanceData} obj Optional instance to populate.
   * @return {module:model/GetTokenMetadataResponseMetadataOfIssuanceData} The populated <code>GetTokenMetadataResponseMetadataOfIssuanceData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('tokenName')) {
        obj['tokenName'] = ApiClient.convertToType(data['tokenName'], 'String');
      }
      if (data.hasOwnProperty('issuer')) {
        obj['issuer'] = ApiClient.convertToType(data['issuer'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('userData')) {
        obj['userData'] = GetTokenMetadataResponseMetadataOfIssuanceDataUserData.constructFromObject(data['userData']);
      }
    }
    return obj;
  }

  /**
   * Token symbol
   * @member {String} tokenName
   */
  exports.prototype['tokenName'] = undefined;
  /**
   * Name of token issuer
   * @member {String} issuer
   */
  exports.prototype['issuer'] = undefined;
  /**
   * Token description
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {module:model/GetTokenMetadataResponseMetadataOfIssuanceDataUserData} userData
   */
  exports.prototype['userData'] = undefined;



  return exports;
}));


