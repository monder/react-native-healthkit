function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { useState, useEffect, useCallback } from 'react';
import Native, { EventEmitter, HKQuantityTypeIdentifier, HKUnit } from './native-types';

const getPreferredUnit = async type => {
  const [unit] = await getPreferredUnits([type]);
  return unit;
};

const ensureUnit = async (type, providedUnit) => {
  if (providedUnit) {
    return providedUnit;
  }

  const unit = await Native.getPreferredUnits([type]);
  return unit[type];
};

function deserializeSample(sample) {
  return _objectSpread(_objectSpread({}, sample), {}, {
    startDate: new Date(sample.startDate),
    endDate: new Date(sample.endDate)
  });
}

function deserializeWorkout(sample) {
  return _objectSpread(_objectSpread({}, sample), {}, {
    startDate: new Date(sample.startDate),
    endDate: new Date(sample.endDate)
  });
}

const deserializCategorySample = sample => {
  return _objectSpread(_objectSpread({}, sample), {}, {
    startDate: new Date(sample.startDate),
    endDate: new Date(sample.endDate)
  });
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
  const quantitySamples = await Native.queryQuantitySamples(identifier, unit, opts.from, opts.to, opts.limit, opts.ascending);
  return quantitySamples.map(deserializeSample);
};

const subscribeToChanges = async (identifier, callback) => {
  const subscription = EventEmitter.addListener('onChange', ({
    typeIdentifier
  }) => {
    if (typeIdentifier === identifier) {
      callback();
    }
  });
  const queryId = await Native.subscribeToObserverQuery(identifier).catch(error => {
    subscription.remove();
    return Promise.reject(error);
  });
  return () => {
    subscription.remove();
    return Native.unsubscribeQuery(queryId);
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
  const [workout, setWorkout] = useState(null);
  useEffect(() => {
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
  const [category, setCategory] = useState(null);
  const updater = useCallback(() => {
    getMostRecentCategorySample(identifier).then(setCategory);
  }, [identifier]);
  useSubscribeToChanges(identifier, updater);
  return category;
}

function useSubscribeToChanges(identifier, onChange) {
  useEffect(() => {
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
  const [lastSample, setLastSample] = useState(null);
  useEffect(() => {
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
  return Native.saveQuantitySample(identifier, unit, value, start.toISOString(), end.toISOString(), metadata);
};

const queryStatisticsForQuantity = async (identifier, options, from, to, unit) => {
  const actualUnit = await ensureUnit(identifier, unit);
  const toDate = to || new Date();

  const _await$Native$querySt = await Native.queryStatisticsForQuantity(identifier, actualUnit, from.toISOString(), toDate.toISOString(), options),
        {
    mostRecentQuantityDateInterval
  } = _await$Native$querySt,
        rawResponse = _objectWithoutProperties(_await$Native$querySt, ["mostRecentQuantityDateInterval"]);

  const response = _objectSpread(_objectSpread({}, rawResponse), mostRecentQuantityDateInterval ? {
    mostRecentQuantityDateInterval: {
      from: new Date(mostRecentQuantityDateInterval.from),
      to: new Date(mostRecentQuantityDateInterval.to)
    }
  } : {});

  return response;
};

const requestAuthorization = (read, write = []) => {
  const readPermissions = read.reduce((obj, cur) => {
    return _objectSpread(_objectSpread({}, obj), {}, {
      [cur]: true
    });
  }, {});
  const writePermissions = write.reduce((obj, cur) => {
    return _objectSpread(_objectSpread({}, obj), {}, {
      [cur]: true
    });
  }, {});
  return Native.requestAuthorization(writePermissions, readPermissions);
};

const getDateOfBirth = async () => {
  const dateOfBirth = await Native.getDateOfBirth();
  return new Date(dateOfBirth);
};

const getRequestStatusForAuthorization = (read, write = []) => {
  const readPermissions = read.reduce((obj, cur) => {
    return _objectSpread(_objectSpread({}, obj), {}, {
      [cur]: true
    });
  }, {});
  const writePermissions = write.reduce((obj, cur) => {
    return _objectSpread(_objectSpread({}, obj), {}, {
      [cur]: true
    });
  }, {});
  return Native.getRequestStatusForAuthorization(writePermissions, readPermissions);
};

const queryCategorySamples = async (identifier, options) => {
  const opts = prepareOptions(options);
  const results = await Native.queryCategorySamples(identifier, opts.from, opts.to, opts.limit, opts.ascending);
  return results.map(deserializCategorySample);
};

async function getPreferredUnitsTyped(options) {
  let energyUnit = options === null || options === void 0 ? void 0 : options.energyUnit;
  let distanceUnit = options === null || options === void 0 ? void 0 : options.distanceUnit;

  if (!energyUnit || !distanceUnit) {
    const units = await Native.getPreferredUnits([HKQuantityTypeIdentifier.distanceWalkingRunning, HKQuantityTypeIdentifier.activeEnergyBurned]);

    if (!energyUnit) {
      energyUnit = units[HKQuantityTypeIdentifier.distanceWalkingRunning];
    }

    if (!distanceUnit) {
      distanceUnit = units[HKQuantityTypeIdentifier.activeEnergyBurned];
    }
  }

  if (!energyUnit) {
    energyUnit = HKUnit.Kilocalories;
  }

  if (!distanceUnit) {
    distanceUnit = HKUnit.Meters;
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
  const workouts = await Native.queryWorkoutSamples(energyUnit, distanceUnit, opts.from, opts.to, opts.limit, opts.ascending);
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
  return Native.saveCategorySample(identifier, value, start.toISOString(), end.toISOString(), metadata || {});
}

const getPreferredUnits = async identifiers => {
  const units = await Native.getPreferredUnits(identifiers);
  return identifiers.map(i => units[i]);
};

const buildUnitWithPrefix = (prefix, unit) => {
  return "".concat(prefix).concat(unit);
};

function deserializeCorrelation(s) {
  return _objectSpread(_objectSpread({}, s), {}, {
    objects: s.objects.map(o => {
      // @ts-ignore
      if (o.quantity !== undefined) {
        return deserializeSample(o);
      }

      return deserializCategorySample(o);
    }),
    endDate: new Date(s.endDate),
    startDate: new Date(s.startDate)
  });
}

function ensureMetadata(metadata) {
  return metadata || {};
}

const queryClinicalSamples = async (typeIdentifier, options) => {
  const opts = prepareOptions(options);
  const clinicalSamples = await Native.queryClinicalSamples(typeIdentifier, opts.from, opts.to, opts.limit, opts.ascending);
  return clinicalSamples.map(s => {
    return _objectSpread(_objectSpread({}, s), {}, {
      endDate: new Date(s.endDate),
      startDate: new Date(s.startDate)
    });
  });
};

const queryCorrelationSamples = async (typeIdentifier, options) => {
  const opts = prepareOptions(options);
  const correlations = await Native.queryCorrelationSamples(typeIdentifier, opts.from, opts.to);
  return correlations.map(deserializeCorrelation);
};

const saveCorrelationSample = async (typeIdentifier, samples, options) => {
  const start = ((options === null || options === void 0 ? void 0 : options.start) || new Date()).toISOString();
  const end = ((options === null || options === void 0 ? void 0 : options.end) || new Date()).toISOString();
  return Native.saveCorrelationSample(typeIdentifier, samples, start, end, ensureMetadata(options === null || options === void 0 ? void 0 : options.metadata));
};

const queryDocumentSamples = async (typeIdentifier, options) => {
  const opts = prepareOptions(options);
  const documents = await Native.queryDocumentSamples(typeIdentifier, opts.from, opts.to, opts.limit, opts.ascending);
  return documents.map(s => {
    return _objectSpread(_objectSpread({}, s), {}, {
      endDate: new Date(s.endDate),
      startDate: new Date(s.startDate)
    });
  });
};

const saveWorkoutSample = (typeIdentifier, quantities, _start, options) => {
  const start = _start.toISOString();

  const end = ((options === null || options === void 0 ? void 0 : options.end) || new Date()).toISOString();
  return Native.saveWorkoutSample(typeIdentifier, quantities, start, end, ensureMetadata(options === null || options === void 0 ? void 0 : options.metadata));
};

const useMostRecentDocumentSample = type => {
  const [document, setDocument] = useState(null);
  const updater = useCallback(async () => {
    const latestDoc = await queryDocumentSamples(type, {
      limit: 1,
      ascending: false
    });
    setDocument(latestDoc[0]);
  }, [type]);
  useSubscribeToChanges(type, updater);
  return document;
};

const useMostRecentClinicalSample = type => {
  const [document, setDocument] = useState(null);
  const updater = useCallback(async () => {
    const latestDoc = await queryClinicalSamples(type, {
      limit: 1,
      ascending: false
    });
    setDocument(latestDoc[0]);
  }, [type]);
  useSubscribeToChanges(type, updater);
  return document;
};

const Healthkit = {
  authorizationStatusFor: Native.authorizationStatusFor,
  isHealthDataAvailable: Native.isHealthDataAvailable,
  buildUnitWithPrefix,
  disableAllBackgroundDelivery: Native.disableAllBackgroundDelivery,
  disableBackgroundDelivery: Native.disableBackgroundDelivery,
  enableBackgroundDelivery: Native.enableBackgroundDelivery,
  // simple convenience getters
  getBiologicalSex: Native.getBiologicalSex,
  getFitzpatrickSkinType: Native.getFitzpatrickSkinType,
  getWheelchairUse: Native.getWheelchairUse,
  getBloodType: Native.getBloodType,
  getDateOfBirth,
  getMostRecentQuantitySample,
  getMostRecentCategorySample,
  getMostRecentWorkout,
  getPreferredUnit,
  getPreferredUnits,
  getRequestStatusForAuthorization,
  // query methods
  queryCategorySamples,
  queryClinicalSamples,
  queryCorrelationSamples,
  queryDocumentSamples,
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
  useMostRecentClinicalSample,
  useMostRecentDocumentSample,
  useMostRecentQuantitySample,
  useMostRecentWorkout,
  useSubscribeToChanges
};
export * from './types';
export * from './native-types';
export default Healthkit;
//# sourceMappingURL=index.ios.js.map