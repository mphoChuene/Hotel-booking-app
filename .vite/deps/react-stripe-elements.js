import {
  require_object_assign,
  require_react_is
} from "./chunk-I6U73IDI.js";
import {
  require_react
} from "./chunk-ST3U5LCA.js";
import {
  __commonJS
} from "./chunk-DFKQJ226.js";

// node_modules/react-stripe-elements/node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/react-stripe-elements/node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/react-stripe-elements/node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/react-stripe-elements/node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = Function.call.bind(Object.prototype.hasOwnProperty);
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/react-stripe-elements/node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/react-stripe-elements/node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var checkPropTypes = require_checkPropTypes();
    var has = Function.call.bind(Object.prototype.hasOwnProperty);
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message) {
        this.message = message;
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            if (checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
              return null;
            }
          }
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (!checker) {
              continue;
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/react-stripe-elements/node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/react-stripe-elements/node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/react-stripe-elements/es/components/Provider.js
var require_Provider = __commonJS({
  "node_modules/react-stripe-elements/es/components/Provider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.providerContextTypes = void 0;
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _objectWithoutProperties(obj, keys) {
      var target = {};
      for (var i in obj) {
        if (keys.indexOf(i) >= 0)
          continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i))
          continue;
        target[i] = obj[i];
      }
      return target;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var providerContextTypes = exports.providerContextTypes = {
      tag: _propTypes2.default.string.isRequired,
      stripe: _propTypes2.default.object,
      addStripeLoadListener: _propTypes2.default.func
    };
    var getOrCreateStripe = function getOrCreateStripe2(apiKey, options) {
      window.Stripe.__cachedInstances = window.Stripe.__cachedInstances || {};
      var cacheKey = "key=" + apiKey + " options=" + JSON.stringify(options);
      var stripe = window.Stripe.__cachedInstances[cacheKey] || window.Stripe(apiKey, options);
      window.Stripe.__cachedInstances[cacheKey] = stripe;
      return stripe;
    };
    var ensureStripeShape = function ensureStripeShape2(stripe) {
      if (stripe && stripe.elements && stripe.createSource && stripe.createToken && stripe.createPaymentMethod && stripe.handleCardPayment) {
        return stripe;
      } else {
        throw new Error("Please pass a valid Stripe object to StripeProvider. You can obtain a Stripe object by calling 'Stripe(...)' with your publishable key.");
      }
    };
    var Provider = function(_React$Component) {
      _inherits(Provider2, _React$Component);
      function Provider2(props) {
        _classCallCheck(this, Provider2);
        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
        if (_this.props.apiKey && _this.props.stripe) {
          throw new Error("Please pass either 'apiKey' or 'stripe' to StripeProvider, not both.");
        } else if (_this.props.apiKey) {
          if (!window.Stripe) {
            throw new Error("Please load Stripe.js (https://js.stripe.com/v3/) on this page to use react-stripe-elements. If Stripe.js isn't available yet (it's loading asynchronously, or you're using server-side rendering), see https://github.com/stripe/react-stripe-elements#advanced-integrations");
          } else {
            var _this$props = _this.props, _apiKey = _this$props.apiKey, _children = _this$props.children, options = _objectWithoutProperties(_this$props, ["apiKey", "children"]);
            var _stripe = getOrCreateStripe(_apiKey, options);
            _this._meta = { tag: "sync", stripe: _stripe };
            _this._register();
          }
        } else if (_this.props.stripe) {
          var _stripe2 = ensureStripeShape(_this.props.stripe);
          _this._meta = { tag: "sync", stripe: _stripe2 };
          _this._register();
        } else if (_this.props.stripe === null) {
          _this._meta = {
            tag: "async",
            stripe: null
          };
        } else {
          throw new Error("Please pass either 'apiKey' or 'stripe' to StripeProvider. If you're using 'stripe' but don't have a Stripe instance yet, pass 'null' explicitly.");
        }
        _this._didWarn = false;
        _this._didWakeUpListeners = false;
        _this._listeners = [];
        return _this;
      }
      Provider2.prototype.getChildContext = function getChildContext() {
        var _this2 = this;
        if (this._meta.tag === "sync") {
          return {
            tag: "sync",
            stripe: this._meta.stripe
          };
        } else {
          return {
            tag: "async",
            addStripeLoadListener: function addStripeLoadListener(fn) {
              if (_this2._meta.stripe) {
                fn(_this2._meta.stripe);
              } else {
                _this2._listeners.push(fn);
              }
            }
          };
        }
      };
      Provider2.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        var apiKeyChanged = this.props.apiKey && prevProps.apiKey && this.props.apiKey !== prevProps.apiKey;
        var stripeInstanceChanged = this.props.stripe && prevProps.stripe && this.props.stripe !== prevProps.stripe;
        if (!this._didWarn && (apiKeyChanged || stripeInstanceChanged) && window.console && window.console.error) {
          this._didWarn = true;
          console.error("StripeProvider does not support changing the apiKey parameter.");
          return;
        }
        if (!this._didWakeUpListeners && this.props.stripe) {
          this._didWakeUpListeners = true;
          var _stripe3 = ensureStripeShape(this.props.stripe);
          this._meta.stripe = _stripe3;
          this._register();
          this._listeners.forEach(function(fn) {
            fn(_stripe3);
          });
        }
      };
      Provider2.prototype._register = function _register() {
        var stripe = this._meta.stripe;
        if (!stripe || !stripe._registerWrapper) {
          return;
        }
        stripe._registerWrapper({
          name: "react-stripe-elements",
          version: "6.1.2"
        });
      };
      Provider2.prototype.render = function render() {
        return _react2.default.Children.only(this.props.children);
      };
      return Provider2;
    }(_react2.default.Component);
    Provider.propTypes = {
      apiKey: _propTypes2.default.string,
      // PropTypes.object is the only way we can accept a Stripe instance
      // eslint-disable-next-line react/forbid-prop-types
      stripe: _propTypes2.default.object,
      children: _propTypes2.default.node
    };
    Provider.childContextTypes = providerContextTypes;
    Provider.defaultProps = {
      apiKey: void 0,
      stripe: void 0,
      children: null
    };
    exports.default = Provider;
  }
});

// node_modules/react-stripe-elements/es/components/Elements.js
var require_Elements = __commonJS({
  "node_modules/react-stripe-elements/es/components/Elements.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.elementContextTypes = exports.injectContextTypes = void 0;
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var _Provider = require_Provider();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _objectWithoutProperties(obj, keys) {
      var target = {};
      for (var i in obj) {
        if (keys.indexOf(i) >= 0)
          continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i))
          continue;
        target[i] = obj[i];
      }
      return target;
    }
    function _toConsumableArray(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      } else {
        return Array.from(arr);
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var injectContextTypes = exports.injectContextTypes = {
      getRegisteredElements: _propTypes2.default.func.isRequired,
      elements: _propTypes2.default.object
    };
    var elementContextTypes = exports.elementContextTypes = {
      addElementsLoadListener: _propTypes2.default.func.isRequired,
      registerElement: _propTypes2.default.func.isRequired,
      unregisterElement: _propTypes2.default.func.isRequired
    };
    var Elements = function(_React$Component) {
      _inherits(Elements2, _React$Component);
      function Elements2(props, context) {
        _classCallCheck(this, Elements2);
        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
        _this._elements = null;
        _this.handleRegisterElement = function(element, impliedTokenType, impliedSourceType, impliedPaymentMethodType) {
          _this.setState(function(prevState) {
            return {
              registeredElements: [].concat(_toConsumableArray(prevState.registeredElements), [_extends({
                element
              }, impliedTokenType ? { impliedTokenType } : {}, impliedSourceType ? { impliedSourceType } : {}, impliedPaymentMethodType ? { impliedPaymentMethodType } : {})])
            };
          });
        };
        _this.handleUnregisterElement = function(el) {
          _this.setState(function(prevState) {
            return {
              registeredElements: prevState.registeredElements.filter(function(_ref) {
                var element = _ref.element;
                return element !== el;
              })
            };
          });
        };
        var _this$props = _this.props, children = _this$props.children, options = _objectWithoutProperties(_this$props, ["children"]);
        if (_this.context.tag === "sync") {
          _this._elements = _this.context.stripe.elements(options);
        }
        _this.state = {
          registeredElements: []
        };
        return _this;
      }
      Elements2.prototype.getChildContext = function getChildContext() {
        var _this2 = this;
        return {
          addElementsLoadListener: function addElementsLoadListener(fn) {
            if (_this2.context.tag === "sync") {
              if (!_this2._elements) {
                throw new Error("Expected elements to be instantiated but it was not.");
              }
              fn(_this2._elements);
            } else {
              _this2.context.addStripeLoadListener(function(stripe) {
                if (_this2._elements) {
                  fn(_this2._elements);
                } else {
                  var _props = _this2.props, _children = _props.children, options = _objectWithoutProperties(_props, ["children"]);
                  _this2._elements = stripe.elements(options);
                  fn(_this2._elements);
                }
              });
            }
          },
          registerElement: this.handleRegisterElement,
          unregisterElement: this.handleUnregisterElement,
          getRegisteredElements: function getRegisteredElements() {
            return _this2.state.registeredElements;
          },
          elements: this._elements
        };
      };
      Elements2.prototype.render = function render() {
        return _react2.default.Children.only(this.props.children);
      };
      return Elements2;
    }(_react2.default.Component);
    Elements.childContextTypes = _extends({}, injectContextTypes, elementContextTypes);
    Elements.contextTypes = _Provider.providerContextTypes;
    Elements.defaultProps = {
      children: null
    };
    exports.default = Elements;
  }
});

// node_modules/react-stripe-elements/es/components/inject.js
var require_inject = __commonJS({
  "node_modules/react-stripe-elements/es/components/inject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _Elements = require_Elements();
    var _Provider = require_Provider();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _objectWithoutProperties(obj, keys) {
      var target = {};
      for (var i in obj) {
        if (keys.indexOf(i) >= 0)
          continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i))
          continue;
        target[i] = obj[i];
      }
      return target;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var inject = function inject2(WrappedComponent) {
      var _class, _temp;
      var componentOptions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var _componentOptions$wit = componentOptions.withRef, withRef = _componentOptions$wit === void 0 ? false : _componentOptions$wit;
      return _temp = _class = function(_React$Component) {
        _inherits(_class2, _React$Component);
        function _class2(props, context) {
          _classCallCheck(this, _class2);
          if (!context || !context.getRegisteredElements) {
            throw new Error("It looks like you are trying to inject Stripe context outside of an Elements context.\nPlease be sure the component that calls createSource or createToken is within an <Elements> component.");
          }
          var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
          _this.parseElementOrData = function(elementOrOptions) {
            return elementOrOptions && (typeof elementOrOptions === "undefined" ? "undefined" : _typeof(elementOrOptions)) === "object" && elementOrOptions._frame && _typeof(elementOrOptions._frame) === "object" && elementOrOptions._frame.id && typeof elementOrOptions._frame.id === "string" && typeof elementOrOptions._componentName === "string" ? { type: "element", element: elementOrOptions } : { type: "data", data: elementOrOptions };
          };
          _this.findElement = function(filterBy, specifiedType) {
            var allElements = _this.context.getRegisteredElements();
            var filteredElements = allElements.filter(function(e) {
              return e[filterBy];
            });
            var matchingElements = specifiedType === "auto" ? filteredElements : filteredElements.filter(function(e) {
              return e[filterBy] === specifiedType;
            });
            if (matchingElements.length === 1) {
              return matchingElements[0].element;
            } else if (matchingElements.length > 1) {
              throw new Error("You did not specify the type of Source, Token, or PaymentMethod to create.\n        We could not infer which Element you want to use for this operation.");
            } else {
              return null;
            }
          };
          _this.requireElement = function(filterBy, specifiedType) {
            var element = _this.findElement(filterBy, specifiedType);
            if (element) {
              return element;
            } else {
              throw new Error("You did not specify the type of Source, Token, or PaymentMethod to create.\n        We could not infer which Element you want to use for this operation.");
            }
          };
          _this.wrappedCreateToken = function(stripe) {
            return function() {
              var tokenTypeOrOptions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              if (tokenTypeOrOptions && (typeof tokenTypeOrOptions === "undefined" ? "undefined" : _typeof(tokenTypeOrOptions)) === "object") {
                var opts = tokenTypeOrOptions;
                var tokenType = opts.type, rest = _objectWithoutProperties(opts, ["type"]);
                var specifiedType = typeof tokenType === "string" ? tokenType : "auto";
                var element = _this.requireElement("impliedTokenType", specifiedType);
                return stripe.createToken(element, rest);
              } else if (typeof tokenTypeOrOptions === "string") {
                var _tokenType = tokenTypeOrOptions;
                return stripe.createToken(_tokenType, options);
              } else {
                throw new Error("Invalid options passed to createToken. Expected an object, got " + (typeof tokenTypeOrOptions === "undefined" ? "undefined" : _typeof(tokenTypeOrOptions)) + ".");
              }
            };
          };
          _this.wrappedCreateSource = function(stripe) {
            return function() {
              var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              if (options && (typeof options === "undefined" ? "undefined" : _typeof(options)) === "object") {
                if (typeof options.type !== "string") {
                  throw new Error("Invalid Source type passed to createSource. Expected string, got " + _typeof(options.type) + ".");
                }
                var element = _this.findElement("impliedSourceType", options.type);
                if (element) {
                  return stripe.createSource(element, options);
                } else {
                  return stripe.createSource(options);
                }
              } else {
                throw new Error("Invalid options passed to createSource. Expected an object, got " + (typeof options === "undefined" ? "undefined" : _typeof(options)) + ".");
              }
            };
          };
          _this.wrappedCreatePaymentMethod = function(stripe) {
            return function(paymentMethodType, elementOrData, maybeData) {
              if (paymentMethodType && (typeof paymentMethodType === "undefined" ? "undefined" : _typeof(paymentMethodType)) === "object") {
                return stripe.createPaymentMethod(paymentMethodType);
              }
              if (!paymentMethodType || typeof paymentMethodType !== "string") {
                throw new Error("Invalid PaymentMethod type passed to createPaymentMethod. Expected a string, got " + (typeof paymentMethodType === "undefined" ? "undefined" : _typeof(paymentMethodType)) + ".");
              }
              var elementOrDataResult = _this.parseElementOrData(elementOrData);
              if (elementOrDataResult.type === "element") {
                var _element = elementOrDataResult.element;
                if (maybeData) {
                  return stripe.createPaymentMethod(paymentMethodType, _element, maybeData);
                } else {
                  return stripe.createPaymentMethod(paymentMethodType, _element);
                }
              }
              var data = elementOrDataResult.data;
              var element = _this.findElement("impliedPaymentMethodType", paymentMethodType);
              if (element) {
                return data ? stripe.createPaymentMethod(paymentMethodType, element, data) : stripe.createPaymentMethod(paymentMethodType, element);
              }
              if (data && (typeof data === "undefined" ? "undefined" : _typeof(data)) === "object") {
                return stripe.createPaymentMethod(paymentMethodType, data);
              } else if (!data) {
                throw new Error("Could not find an Element that can be used to create a PaymentMethod of type: " + paymentMethodType + ".");
              } else {
                throw new Error("Invalid data passed to createPaymentMethod. Expected an object, got " + (typeof data === "undefined" ? "undefined" : _typeof(data)) + ".");
              }
            };
          };
          _this.wrappedHandleCardX = function(stripe, method) {
            return function(clientSecret, elementOrData, maybeData) {
              if (!clientSecret || typeof clientSecret !== "string") {
                throw new Error("Invalid PaymentIntent client secret passed to handleCardPayment. Expected string, got " + (typeof clientSecret === "undefined" ? "undefined" : _typeof(clientSecret)) + ".");
              }
              var elementOrDataResult = _this.parseElementOrData(elementOrData);
              if (elementOrDataResult.type === "element") {
                var _element2 = elementOrDataResult.element;
                if (maybeData) {
                  return stripe[method](clientSecret, _element2, maybeData);
                } else {
                  return stripe[method](clientSecret, _element2);
                }
              }
              var data = elementOrDataResult.data;
              var element = _this.findElement("impliedPaymentMethodType", "card");
              if (element) {
                if (data) {
                  return stripe[method](clientSecret, element, data);
                } else {
                  return stripe[method](clientSecret, element);
                }
              } else if (data) {
                return stripe[method](clientSecret, data);
              } else {
                return stripe[method](clientSecret);
              }
            };
          };
          if (_this.context.tag === "sync") {
            _this.state = {
              stripe: _this.stripeProps(_this.context.stripe)
            };
          } else {
            _this.state = {
              stripe: null
            };
          }
          return _this;
        }
        _class2.prototype.componentDidMount = function componentDidMount() {
          var _this2 = this;
          if (this.context.tag === "async") {
            this.context.addStripeLoadListener(function(stripe) {
              _this2.setState({
                stripe: _this2.stripeProps(stripe)
              });
            });
          } else {
          }
        };
        _class2.prototype.getWrappedInstance = function getWrappedInstance() {
          if (!withRef) {
            throw new Error("To access the wrapped instance, the `{withRef: true}` option must be set when calling `injectStripe()`");
          }
          return this.wrappedInstance;
        };
        _class2.prototype.stripeProps = function stripeProps(stripe) {
          return _extends({}, stripe, {
            // These are the only functions that take elements.
            createToken: this.wrappedCreateToken(stripe),
            createSource: this.wrappedCreateSource(stripe),
            createPaymentMethod: this.wrappedCreatePaymentMethod(stripe),
            handleCardPayment: this.wrappedHandleCardX(stripe, "handleCardPayment"),
            handleCardSetup: this.wrappedHandleCardX(stripe, "handleCardSetup")
          });
        };
        _class2.prototype.render = function render() {
          var _this3 = this;
          return _react2.default.createElement(WrappedComponent, _extends({}, this.props, {
            stripe: this.state.stripe,
            elements: this.context.elements,
            ref: withRef ? function(c) {
              _this3.wrappedInstance = c;
            } : null
          }));
        };
        return _class2;
      }(_react2.default.Component), _class.contextTypes = _extends({}, _Provider.providerContextTypes, _Elements.injectContextTypes), _class.displayName = "InjectStripe(" + (WrappedComponent.displayName || WrappedComponent.name || "Component") + ")", _temp;
    };
    exports.default = inject;
  }
});

// node_modules/react-stripe-elements/es/utils/isEqual.js
var require_isEqual = __commonJS({
  "node_modules/react-stripe-elements/es/utils/isEqual.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var PLAIN_OBJECT_STR = "[object Object]";
    var isEqual = function isEqual2(left, right) {
      if ((typeof left === "undefined" ? "undefined" : _typeof(left)) !== "object" || (typeof right === "undefined" ? "undefined" : _typeof(right)) !== "object") {
        return left === right;
      }
      if (left === null || right === null)
        return left === right;
      var leftArray = Array.isArray(left);
      var rightArray = Array.isArray(right);
      if (leftArray !== rightArray)
        return false;
      var leftPlainObject = Object.prototype.toString.call(left) === PLAIN_OBJECT_STR;
      var rightPlainObject = Object.prototype.toString.call(right) === PLAIN_OBJECT_STR;
      if (leftPlainObject !== rightPlainObject)
        return false;
      if (!leftPlainObject && !leftArray)
        return false;
      var leftKeys = Object.keys(left);
      var rightKeys = Object.keys(right);
      if (leftKeys.length !== rightKeys.length)
        return false;
      var keySet = {};
      for (var i = 0; i < leftKeys.length; i += 1) {
        keySet[leftKeys[i]] = true;
      }
      for (var _i = 0; _i < rightKeys.length; _i += 1) {
        keySet[rightKeys[_i]] = true;
      }
      var allKeys = Object.keys(keySet);
      if (allKeys.length !== leftKeys.length) {
        return false;
      }
      var l = left;
      var r = right;
      var pred = function pred2(key) {
        return isEqual2(l[key], r[key]);
      };
      return allKeys.every(pred);
    };
    exports.default = isEqual;
  }
});

// node_modules/react-stripe-elements/es/components/Element.js
var require_Element = __commonJS({
  "node_modules/react-stripe-elements/es/components/Element.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var _isEqual = require_isEqual();
    var _isEqual2 = _interopRequireDefault(_isEqual);
    var _Elements = require_Elements();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    function _objectWithoutProperties(obj, keys) {
      var target = {};
      for (var i in obj) {
        if (keys.indexOf(i) >= 0)
          continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i))
          continue;
        target[i] = obj[i];
      }
      return target;
    }
    var noop = function noop2() {
    };
    var _extractOptions = function _extractOptions2(props) {
      var id = props.id, className = props.className, onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur, onReady = props.onReady, options = _objectWithoutProperties(props, ["id", "className", "onChange", "onFocus", "onBlur", "onReady"]);
      return options;
    };
    var capitalized = function capitalized2(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };
    var Element = function Element2(type) {
      var _class, _temp;
      var hocOptions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return _temp = _class = function(_React$Component) {
        _inherits(_class2, _React$Component);
        function _class2(props, context) {
          _classCallCheck(this, _class2);
          var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
          _this.handleRef = function(ref) {
            _this._ref = ref;
          };
          _this._element = null;
          var options = _extractOptions(_this.props);
          _this._options = options;
          return _this;
        }
        _class2.prototype.componentDidMount = function componentDidMount() {
          var _this2 = this;
          this.context.addElementsLoadListener(function(elements) {
            if (!_this2._ref) {
              return;
            }
            var element = elements.create(type, _this2._options);
            _this2._element = element;
            _this2._setupEventListeners(element);
            element.mount(_this2._ref);
            _this2.context.registerElement(element, hocOptions.impliedTokenType, hocOptions.impliedSourceType, hocOptions.impliedPaymentMethodType);
          });
        };
        _class2.prototype.componentDidUpdate = function componentDidUpdate() {
          var options = _extractOptions(this.props);
          if (Object.keys(options).length !== 0 && !(0, _isEqual2.default)(options, this._options)) {
            this._options = options;
            if (this._element) {
              this._element.update(options);
            }
          }
        };
        _class2.prototype.componentWillUnmount = function componentWillUnmount() {
          if (this._element) {
            var element = this._element;
            element.destroy();
            this.context.unregisterElement(element);
          }
        };
        _class2.prototype._setupEventListeners = function _setupEventListeners(element) {
          var _this3 = this;
          element.on("ready", function() {
            _this3.props.onReady(_this3._element);
          });
          element.on("change", function(change) {
            _this3.props.onChange(change);
          });
          element.on("blur", function() {
            var _props;
            return (_props = _this3.props).onBlur.apply(_props, arguments);
          });
          element.on("focus", function() {
            var _props2;
            return (_props2 = _this3.props).onFocus.apply(_props2, arguments);
          });
        };
        _class2.prototype.render = function render() {
          return _react2.default.createElement("div", {
            id: this.props.id,
            className: this.props.className,
            ref: this.handleRef
          });
        };
        return _class2;
      }(_react2.default.Component), _class.propTypes = {
        id: _propTypes2.default.string,
        className: _propTypes2.default.string,
        onChange: _propTypes2.default.func,
        onBlur: _propTypes2.default.func,
        onFocus: _propTypes2.default.func,
        onReady: _propTypes2.default.func
      }, _class.defaultProps = {
        id: void 0,
        className: void 0,
        onChange: noop,
        onBlur: noop,
        onFocus: noop,
        onReady: noop
      }, _class.contextTypes = _Elements.elementContextTypes, _class.displayName = capitalized(type) + "Element", _temp;
    };
    exports.default = Element;
  }
});

// node_modules/react-stripe-elements/es/utils/shallowEqual.js
var require_shallowEqual = __commonJS({
  "node_modules/react-stripe-elements/es/utils/shallowEqual.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var shallowEqual = function shallowEqual2(a, b) {
      var keysA = Object.keys(a);
      var keysB = Object.keys(b);
      return keysA.length === keysB.length && keysA.every(function(key) {
        return b.hasOwnProperty(key) && b[key] === a[key];
      });
    };
    exports.default = shallowEqual;
  }
});

// node_modules/react-stripe-elements/es/components/PaymentRequestButtonElement.js
var require_PaymentRequestButtonElement = __commonJS({
  "node_modules/react-stripe-elements/es/components/PaymentRequestButtonElement.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var _shallowEqual = require_shallowEqual();
    var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
    var _Elements = require_Elements();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    function _objectWithoutProperties(obj, keys) {
      var target = {};
      for (var i in obj) {
        if (keys.indexOf(i) >= 0)
          continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i))
          continue;
        target[i] = obj[i];
      }
      return target;
    }
    var noop = function noop2() {
    };
    var _extractOptions = function _extractOptions2(props) {
      var id = props.id, className = props.className, onBlur = props.onBlur, onClick = props.onClick, onFocus = props.onFocus, onReady = props.onReady, paymentRequest = props.paymentRequest, options = _objectWithoutProperties(props, ["id", "className", "onBlur", "onClick", "onFocus", "onReady", "paymentRequest"]);
      return options;
    };
    var PaymentRequestButtonElement = function(_React$Component) {
      _inherits(PaymentRequestButtonElement2, _React$Component);
      function PaymentRequestButtonElement2(props, context) {
        _classCallCheck(this, PaymentRequestButtonElement2);
        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
        _this.handleRef = function(ref) {
          _this._ref = ref;
        };
        var options = _extractOptions(props);
        _this._options = options;
        return _this;
      }
      PaymentRequestButtonElement2.prototype.componentDidMount = function componentDidMount() {
        var _this2 = this;
        this.context.addElementsLoadListener(function(elements) {
          _this2._element = elements.create("paymentRequestButton", _extends({
            paymentRequest: _this2.props.paymentRequest
          }, _this2._options));
          _this2._element.on("ready", function() {
            _this2.props.onReady(_this2._element);
          });
          _this2._element.on("focus", function() {
            var _props;
            return (_props = _this2.props).onFocus.apply(_props, arguments);
          });
          _this2._element.on("click", function() {
            var _props2;
            return (_props2 = _this2.props).onClick.apply(_props2, arguments);
          });
          _this2._element.on("blur", function() {
            var _props3;
            return (_props3 = _this2.props).onBlur.apply(_props3, arguments);
          });
          _this2._element.mount(_this2._ref);
        });
      };
      PaymentRequestButtonElement2.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        if (this.props.paymentRequest !== prevProps.paymentRequest) {
          console.warn("Unsupported prop change: paymentRequest is not a customizable property.");
        }
        var options = _extractOptions(this.props);
        if (Object.keys(options).length !== 0 && !(0, _shallowEqual2.default)(options, this._options)) {
          this._options = options;
          this._element.update(options);
        }
      };
      PaymentRequestButtonElement2.prototype.componentWillUnmount = function componentWillUnmount() {
        this._element.destroy();
      };
      PaymentRequestButtonElement2.prototype.render = function render() {
        return _react2.default.createElement("div", {
          id: this.props.id,
          className: this.props.className,
          ref: this.handleRef
        });
      };
      return PaymentRequestButtonElement2;
    }(_react2.default.Component);
    PaymentRequestButtonElement.propTypes = {
      id: _propTypes2.default.string,
      className: _propTypes2.default.string,
      onBlur: _propTypes2.default.func,
      onClick: _propTypes2.default.func,
      onFocus: _propTypes2.default.func,
      onReady: _propTypes2.default.func,
      paymentRequest: _propTypes2.default.shape({
        canMakePayment: _propTypes2.default.func.isRequired,
        on: _propTypes2.default.func.isRequired,
        show: _propTypes2.default.func.isRequired
      }).isRequired
    };
    PaymentRequestButtonElement.defaultProps = {
      id: void 0,
      className: void 0,
      onBlur: noop,
      onClick: noop,
      onFocus: noop,
      onReady: noop
    };
    PaymentRequestButtonElement.contextTypes = _Elements.elementContextTypes;
    exports.default = PaymentRequestButtonElement;
  }
});

// node_modules/react-stripe-elements/es/index.js
var require_es = __commonJS({
  "node_modules/react-stripe-elements/es/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AuBankAccountElement = exports.FpxBankElement = exports.IdealBankElement = exports.IbanElement = exports.PaymentRequestButtonElement = exports.CardCVCElement = exports.CardCvcElement = exports.CardExpiryElement = exports.CardNumberElement = exports.CardElement = exports.Elements = exports.injectStripe = exports.StripeProvider = void 0;
    var _Provider = require_Provider();
    var _Provider2 = _interopRequireDefault(_Provider);
    var _inject = require_inject();
    var _inject2 = _interopRequireDefault(_inject);
    var _Elements = require_Elements();
    var _Elements2 = _interopRequireDefault(_Elements);
    var _Element = require_Element();
    var _Element2 = _interopRequireDefault(_Element);
    var _PaymentRequestButtonElement = require_PaymentRequestButtonElement();
    var _PaymentRequestButtonElement2 = _interopRequireDefault(_PaymentRequestButtonElement);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var CardElement = (0, _Element2.default)("card", {
      impliedTokenType: "card",
      impliedSourceType: "card",
      impliedPaymentMethodType: "card"
    });
    var CardNumberElement = (0, _Element2.default)("cardNumber", {
      impliedTokenType: "card",
      impliedSourceType: "card",
      impliedPaymentMethodType: "card"
    });
    var CardExpiryElement = (0, _Element2.default)("cardExpiry");
    var CardCvcElement = (0, _Element2.default)("cardCvc");
    var CardCVCElement = CardCvcElement;
    var IbanElement = (0, _Element2.default)("iban", {
      impliedTokenType: "bank_account",
      impliedSourceType: "sepa_debit"
    });
    var IdealBankElement = (0, _Element2.default)("idealBank", { impliedSourceType: "ideal" });
    var FpxBankElement = (0, _Element2.default)("fpxBank");
    var AuBankAccountElement = (0, _Element2.default)("auBankAccount");
    exports.StripeProvider = _Provider2.default;
    exports.injectStripe = _inject2.default;
    exports.Elements = _Elements2.default;
    exports.CardElement = CardElement;
    exports.CardNumberElement = CardNumberElement;
    exports.CardExpiryElement = CardExpiryElement;
    exports.CardCvcElement = CardCvcElement;
    exports.CardCVCElement = CardCVCElement;
    exports.PaymentRequestButtonElement = _PaymentRequestButtonElement2.default;
    exports.IbanElement = IbanElement;
    exports.IdealBankElement = IdealBankElement;
    exports.FpxBankElement = FpxBankElement;
    exports.AuBankAccountElement = AuBankAccountElement;
  }
});
export default require_es();
//# sourceMappingURL=react-stripe-elements.js.map
