"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports.default = void 0;

var _react = require("react");

var _nativeTypes = _interopRequireWildcard(require("./native-types"));

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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const getPreferredUnit = async type => {
  const [unit] = await getPreferredUnits([type]);
  return unit;
};

const ensureUnit = async (type, providedUnit) => {
  if (providedUnit) {
    return providedUnit;
  }

  const unit = await _nativeTypes.default.getPreferredUnits([type]);
  return unit[type];
};

function deserializeSample(sample) {
  return { ...sample,
    startDate: new Date(sample.startDate),
    endDate: new Date(sample.endDate)
  };
}

function deserializeWorkout(sample) {
  return { ...sample,
    startDate: new Date(sample.startDate),
    endDate: new Date(sample.endDate)
  };
}

const deserializCategorySample = sample => {
  return { ...sample,
    startDate: new Date(sample.startDate),
    endDate: new Date(sample.endDate)
  };
};

const serializeDate = date => {
  return date ? date.toISOString() : new Date(0).toISOString();
};

const prepareOptions = options => {
  var _options$ascending;

  const limit = !options.limit || options.limit === Infinity ? 0 : options.limit;
  const ascending = (_options$ascending = options.ascending) !== null && _options$ascending !== void 0 ? _options$ascending : limit === 0;
  const from = serializeDate(options.from);
  const to = serializeDate(options.to);
  return {
    limit,
    ascending,
    from,
    to
  };
};

const queryQuantitySamples = async (identifier, options) => {
  const unit = await ensureUnit(identifier, options.unit);
  const opts = prepareOptions(options);
  const quantitySamples = await _nativeTypes.default.queryQuantitySamples(identifier, unit, opts.from, opts.to, opts.limit, opts.ascending);
  return quantitySamples.map(deserializeSample);
};

const subscribeToChanges = async (identifier, callback) => {
  const subscription = _nativeTypes.EventEmitter.addListener('onChange', ({
    typeIdentifier
  }) => {
    if (typeIdentifier === identifier) {
      callback();
    }
  });

  const queryId = await _nativeTypes.default.subscribeToObserverQuery(identifier).catch(error => {
    subscription.remove();
    return Promise.reject(error);
  });
  return () => {
    subscription.remove();
    return _nativeTypes.default.unsubscribeQuery(queryId);
  };
};

const getMostRecentQuantitySample = async (identifier, unit) => {
  const samples = await queryQuantitySamples(identifier, {
    limit: 1,
    unit: unit
  });
  return samples[0];
};

function useMostRecentWorkout(options) {
  const [workout, setWorkout] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    let cancelSubscription;

    const init = async () => {
      const {
        energyUnit,
        distanceUnit
      } = await getPreferredUnitsTyped(options);
      cancelSubscription = await subscribeToChanges('HKWorkoutTypeIdentifier', () => {
        getMostRecentWorkout({
          energyUnit,
          distanceUnit
        }).then(setWorkout);
      });
    };

    init();
    return () => {
      cancelSubscription && cancelSubscription();
    };
  }, [options]);
  return workout;
}

const getMostRecentCategorySample = async identifier => {
  const samples = await queryCategorySamples(identifier, {
    limit: 1,
    ascending: false
  });
  return samples[0];
};

function useMostRecentCategorySample(identifier) {
  const [category, setCategory] = (0, _react.useState)(null);
  const updater = (0, _react.useCallback)(() => {
    getMostRecentCategorySample(identifier).then(setCategory);
  }, [identifier]);
  useSubscribeToChanges(identifier, updater);
  return category;
}

function useSubscribeToChanges(identifier, onChange) {
  (0, _react.useEffect)(() => {
    let cancelSubscription;

    const init = async () => {
      cancelSubscription = await subscribeToChanges(identifier, onChange);
    };

    init();
    return () => {
      cancelSubscription && cancelSubscription();
    };
  }, [identifier, onChange]);
}

function useMostRecentQuantitySample(identifier, unit) {
  const [lastSample, setLastSample] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    let cancelSubscription;

    const init = async () => {
      const actualUnit = await ensureUnit(identifier, unit);
      cancelSubscription = await subscribeToChanges(identifier, () => {
        getMostRecentQuantitySample(identifier, actualUnit).then(value => {
          setLastSample(value);
        });
      });
    };

    init();
    return () => {
      cancelSubscription && cancelSubscription();
    };
  }, [identifier, unit]);
  return lastSample;
}

const saveQuantitySample = (identifier, unit, value, options) => {
  const start = (options === null || options === void 0 ? void 0 : options.start) || (options === null || options === void 0 ? void 0 : options.end) || new Date();
  const end = (options === null || options === void 0 ? void 0 : options.end) || (options === null || options === void 0 ? void 0 : options.start) || new Date();
  const metadata = (options === null || options === void 0 ? void 0 : options.metadata) || {};
  return _nativeTypes.default.saveQuantitySample(identifier, unit, value, start.toISOString(), end.toISOString(), metadata);
};

const queryStatisticsForQuantity = async (identifier, options, from, to, unit) => {
  const actualUnit = await ensureUnit(identifier, unit);
  const toDate = to || new Date();
  const {
    mostRecentQuantityDateInterval,
    ...rawResponse
  } = await _nativeTypes.default.queryStatisticsForQuantity(identifier, actualUnit, from.toISOString(), toDate.toISOString(), options);
  const response = { ...rawResponse,
    ...(mostRecentQuantityDateInterval ? {
      mostRecentQuantityDateInterval: {
        from: new Date(mostRecentQuantityDateInterval.from),
        to: new Date(mostRecentQuantityDateInterval.to)
      }
    } : {})
  };
  return response;
};

const requestAuthorization = (read, write = []) => {
  const readPermissions = read.reduce((obj, cur) => {
    return { ...obj,
      [cur]: true
    };
  }, {});
  const writePermissions = write.reduce((obj, cur) => {
    return { ...obj,
      [cur]: true
    };
  }, {});
  return _nativeTypes.default.requestAuthorization(writePermissions, readPermissions);
};

const getDateOfBirth = async () => {
  const dateOfBirth = await _nativeTypes.default.getDateOfBirth();
  return new Date(dateOfBirth);
};

const getRequestStatusForAuthorization = (read, write = []) => {
  const readPermissions = read.reduce((obj, cur) => {
    return { ...obj,
      [cur]: true
    };
  }, {});
  const writePermissions = write.reduce((obj, cur) => {
    return { ...obj,
      [cur]: true
    };
  }, {});
  return _nativeTypes.default.getRequestStatusForAuthorization(writePermissions, readPermissions);
};

const queryCategorySamples = async (identifier, options) => {
  const opts = prepareOptions(options);
  const results = await _nativeTypes.default.queryCategorySamples(identifier, opts.from, opts.to, opts.limit, opts.ascending);
  return results.map(deserializCategorySample);
};

async function getPreferredUnitsTyped(options) {
  let energyUnit = options === null || options === void 0 ? void 0 : options.energyUnit;
  let distanceUnit = options === null || options === void 0 ? void 0 : options.distanceUnit;

  if (!energyUnit || !distanceUnit) {
    const units = await _nativeTypes.default.getPreferredUnits([_nativeTypes.HKQuantityTypeIdentifier.distanceWalkingRunning, _nativeTypes.HKQuantityTypeIdentifier.activeEnergyBurned]);

    if (!energyUnit) {
      energyUnit = units[_nativeTypes.HKQuantityTypeIdentifier.distanceWalkingRunning];
    }

    if (!distanceUnit) {
      distanceUnit = units[_nativeTypes.HKQuantityTypeIdentifier.activeEnergyBurned];
    }
  }

  if (!energyUnit) {
    energyUnit = _nativeTypes.HKUnit.Kilocalories;
  }

  if (!distanceUnit) {
    distanceUnit = _nativeTypes.HKUnit.Meters;
  }

  return {
    energyUnit,
    distanceUnit
  };
}

const queryWorkouts = async options => {
  const {
    energyUnit,
    distanceUnit
  } = await getPreferredUnitsTyped(options);
  const opts = prepareOptions(options);
  const workouts = await _nativeTypes.default.queryWorkoutSamples(energyUnit, distanceUnit, opts.from, opts.to, opts.limit, opts.ascending);
  return workouts.map(deserializeWorkout);
};

const getMostRecentWorkout = async options => {
  const workouts = await queryWorkouts({
    limit: 1,
    ascending: false,
    energyUnit: options === null || options === void 0 ? void 0 : options.energyUnit,
    distanceUnit: options === null || options === void 0 ? void 0 : options.distanceUnit
  });
  return workouts[0];
};

function saveCategorySample(identifier, value, options) {
  const start = (options === null || options === void 0 ? void 0 : options.start) || (options === null || options === void 0 ? void 0 : options.end) || new Date();
  const end = (options === null || options === void 0 ? void 0 : options.end) || (options === null || options === void 0 ? void 0 : options.start) || new Date();
  const metadata = (options === null || options === void 0 ? void 0 : options.metadata) || {};
  return _nativeTypes.default.saveCategorySample(identifier, value, start.toISOString(), end.toISOString(), metadata || {});
}

const getPreferredUnits = async identifiers => {
  const units = await _nativeTypes.default.getPreferredUnits(identifiers);
  return identifiers.map(i => units[i]);
};

const buildUnitWithPrefix = (prefix, unit) => {
  return `${prefix}${unit}`;
};

function deserializeCorrelation(s) {
  return { ...s,
    objects: s.objects.map(o => {
      // @ts-ignore
      if (o.quantity !== undefined) {
        return deserializeSample(o);
      }

      return deserializCategorySample(o);
    }),
    endDate: new Date(s.endDate),
    startDate: new Date(s.startDate)
  };
}

function ensureMetadata(metadata) {
  return metadata || {};
}

const queryCorrelationSamples = async (typeIdentifier, options) => {
  const opts = prepareOptions(options);
  const correlations = await _nativeTypes.default.queryCorrelationSamples(typeIdentifier, opts.from, opts.to);
  return correlations.map(deserializeCorrelation);
};

const saveCorrelationSample = async (typeIdentifier, samples, options) => {
  const start = ((options === null || options === void 0 ? void 0 : options.start) || new Date()).toISOString();
  const end = ((options === null || options === void 0 ? void 0 : options.end) || new Date()).toISOString();
  return _nativeTypes.default.saveCorrelationSample(typeIdentifier, samples, start, end, ensureMetadata(options === null || options === void 0 ? void 0 : options.metadata));
};

const saveWorkoutSample = (typeIdentifier, quantities, _start, options) => {
  const start = _start.toISOString();

  const end = ((options === null || options === void 0 ? void 0 : options.end) || new Date()).toISOString();
  return _nativeTypes.default.saveWorkoutSample(typeIdentifier, quantities, start, end, ensureMetadata(options === null || options === void 0 ? void 0 : options.metadata));
};

const Healthkit = {
  authorizationStatusFor: _nativeTypes.default.authorizationStatusFor,
  isHealthDataAvailable: _nativeTypes.default.isHealthDataAvailable,
  buildUnitWithPrefix,
  disableAllBackgroundDelivery: _nativeTypes.default.disableAllBackgroundDelivery,
  disableBackgroundDelivery: _nativeTypes.default.disableBackgroundDelivery,
  enableBackgroundDelivery: _nativeTypes.default.enableBackgroundDelivery,
  // simple convenience getters
  getBiologicalSex: _nativeTypes.default.getBiologicalSex,
  getFitzpatrickSkinType: _nativeTypes.default.getFitzpatrickSkinType,
  getWheelchairUse: _nativeTypes.default.getWheelchairUse,
  getBloodType: _nativeTypes.default.getBloodType,
  getDateOfBirth,
  getMostRecentQuantitySample,
  getMostRecentCategorySample,
  getMostRecentWorkout,
  getPreferredUnit,
  getPreferredUnits,
  getRequestStatusForAuthorization,
  // query methods
  queryCategorySamples,
  queryCorrelationSamples,
  queryQuantitySamples,
  queryStatisticsForQuantity,
  queryWorkouts,
  requestAuthorization,
  // save methods
  saveCategorySample,
  saveCorrelationSample,
  saveQuantitySample,
  saveWorkoutSample,
  // subscriptions
  subscribeToChanges,
  // hooks
  useMostRecentCategorySample,
  useMostRecentQuantitySample,
  useMostRecentWorkout,
  useSubscribeToChanges
};
var _default = Healthkit;
exports.default = _default;
//# sourceMappingURL=index.ios.js.map