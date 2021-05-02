"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports.default = void 0;

var _reactNative = require("react-native");

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});

var _nativeTypes = require("./native-types");

Object.keys(_nativeTypes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _nativeTypes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _nativeTypes[key];
    }
  });
});
const notAvailableError = 'Platform "' + _reactNative.Platform.OS + '" not supported, use isHealthDataAvailable to check for availability before using it';

const UnavailableFn = () => {
  throw new Error(notAvailableError);
};

const Healthkit = {
  authorizationStatusFor: UnavailableFn,
  buildUnitWithPrefix: UnavailableFn,
  disableAllBackgroundDelivery: UnavailableFn,
  disableBackgroundDelivery: UnavailableFn,
  enableBackgroundDelivery: UnavailableFn,
  getBiologicalSex: UnavailableFn,
  getBloodType: UnavailableFn,
  getDateOfBirth: UnavailableFn,
  getFitzpatrickSkinType: UnavailableFn,
  getMostRecentCategorySample: UnavailableFn,
  getMostRecentQuantitySample: UnavailableFn,
  getMostRecentWorkout: UnavailableFn,
  getPreferredUnit: UnavailableFn,
  getPreferredUnits: UnavailableFn,
  getRequestStatusForAuthorization: UnavailableFn,
  getWheelchairUse: UnavailableFn,
  isHealthDataAvailable: () => Promise.resolve(false),
  queryCategorySamples: UnavailableFn,
  queryCorrelationSamples: UnavailableFn,
  queryQuantitySamples: UnavailableFn,
  queryStatisticsForQuantity: UnavailableFn,
  queryWorkouts: UnavailableFn,
  requestAuthorization: UnavailableFn,
  saveCategorySample: UnavailableFn,
  saveCorrelationSample: UnavailableFn,
  saveQuantitySample: UnavailableFn,
  saveWorkoutSample: UnavailableFn,
  subscribeToChanges: UnavailableFn,
  useMostRecentCategorySample: UnavailableFn,
  useMostRecentQuantitySample: UnavailableFn,
  useMostRecentWorkout: UnavailableFn,
  useSubscribeToChanges: UnavailableFn
};
var _default = Healthkit;
exports.default = _default;
//# sourceMappingURL=index.js.map