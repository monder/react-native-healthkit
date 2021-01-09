"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.EventEmitter = exports.HKUpdateFrequency = exports.HKCorrelationTypeIdentifier = exports.HKDocumentTypeIdentifier = exports.HKClinicalTypeIdentifier = exports.HKCharacteristicTypeIdentifier = exports.HKUnit = exports.HKUnitSI = exports.HKUnitSIPrefix = exports.HKWheelchairUse = exports.HKInsulinDeliveryReason = exports.HKCategoryValueNotApplicable = exports.HKCategoryValueSeverity = exports.HKCategoryValuePresence = exports.HKCategoryValueAppetiteChanges = exports.HKCategoryValueSleepAnalysis = exports.HKCategoryValueOvulationTestResult = exports.HKCategoryValueMenstrualFlow = exports.HKCategoryValueCervicalMucusQuality = exports.HKStatisticsOptions = exports.HKFitzpatrickSkinType = exports.HKBiologicalSex = exports.HKBloodType = exports.HKAuthorizationRequestStatus = exports.HKQuantityTypeIdentifier = exports.HKWeatherCondition = exports.HKWorkoutActivityType = exports.HKCategoryValueAppleStandHour = exports.HKCategoryTypeIdentifier = exports.HKHeartRateMotionContext = void 0;

var _reactNative = require("react-native");

let HKHeartRateMotionContext;
exports.HKHeartRateMotionContext = HKHeartRateMotionContext;

(function (HKHeartRateMotionContext) {
  HKHeartRateMotionContext[HKHeartRateMotionContext["active"] = 2] = "active";
  HKHeartRateMotionContext[HKHeartRateMotionContext["notSet"] = 0] = "notSet";
  HKHeartRateMotionContext[HKHeartRateMotionContext["sedentary"] = 1] = "sedentary";
})(HKHeartRateMotionContext || (exports.HKHeartRateMotionContext = HKHeartRateMotionContext = {}));

let HKCategoryTypeIdentifier;
exports.HKCategoryTypeIdentifier = HKCategoryTypeIdentifier;

(function (HKCategoryTypeIdentifier) {
  HKCategoryTypeIdentifier["sleepAnalysis"] = "HKCategoryTypeIdentifierSleepAnalysis";
  HKCategoryTypeIdentifier["appleStandHour"] = "HKCategoryTypeIdentifierAppleStandHour";
  HKCategoryTypeIdentifier["cervicalMucusQuality"] = "HKCategoryTypeIdentifierCervicalMucusQuality";
  HKCategoryTypeIdentifier["ovulationTestResult"] = "HKCategoryTypeIdentifierOvulationTestResult";
  HKCategoryTypeIdentifier["menstrualFlow"] = "HKCategoryTypeIdentifierMenstrualFlow";
  HKCategoryTypeIdentifier["intermenstrualBleeding"] = "HKCategoryTypeIdentifierIntermenstrualBleeding";
  HKCategoryTypeIdentifier["sexualActivity"] = "HKCategoryTypeIdentifierSexualActivity";
  HKCategoryTypeIdentifier["mindfulSession"] = "HKCategoryTypeIdentifierMindfulSession";
  HKCategoryTypeIdentifier["highHeartRateEvent"] = "HKCategoryTypeIdentifierHighHeartRateEvent";
  HKCategoryTypeIdentifier["lowHeartRateEvent"] = "HKCategoryTypeIdentifierLowHeartRateEvent";
  HKCategoryTypeIdentifier["irregularHeartRhythmEvent"] = "HKCategoryTypeIdentifierIrregularHeartRhythmEvent";
  HKCategoryTypeIdentifier["audioExposureEvent"] = "HKCategoryTypeIdentifierAudioExposureEvent";
  HKCategoryTypeIdentifier["toothbrushingEvent"] = "HKCategoryTypeIdentifierToothbrushingEvent";
})(HKCategoryTypeIdentifier || (exports.HKCategoryTypeIdentifier = HKCategoryTypeIdentifier = {}));

let HKCategoryValueAppleStandHour;
exports.HKCategoryValueAppleStandHour = HKCategoryValueAppleStandHour;

(function (HKCategoryValueAppleStandHour) {
  HKCategoryValueAppleStandHour[HKCategoryValueAppleStandHour["stood"] = 0] = "stood";
  HKCategoryValueAppleStandHour[HKCategoryValueAppleStandHour["idle"] = 1] = "idle";
})(HKCategoryValueAppleStandHour || (exports.HKCategoryValueAppleStandHour = HKCategoryValueAppleStandHour = {}));

let HKWorkoutActivityType;
exports.HKWorkoutActivityType = HKWorkoutActivityType;

(function (HKWorkoutActivityType) {
  HKWorkoutActivityType[HKWorkoutActivityType["americanFootball"] = 1] = "americanFootball";
  HKWorkoutActivityType[HKWorkoutActivityType["archery"] = 2] = "archery";
  HKWorkoutActivityType[HKWorkoutActivityType["australianFootball"] = 3] = "australianFootball";
  HKWorkoutActivityType[HKWorkoutActivityType["badminton"] = 4] = "badminton";
  HKWorkoutActivityType[HKWorkoutActivityType["baseball"] = 5] = "baseball";
  HKWorkoutActivityType[HKWorkoutActivityType["basketball"] = 6] = "basketball";
  HKWorkoutActivityType[HKWorkoutActivityType["bowling"] = 7] = "bowling";
  HKWorkoutActivityType[HKWorkoutActivityType["boxing"] = 8] = "boxing";
  HKWorkoutActivityType[HKWorkoutActivityType["climbing"] = 9] = "climbing";
  HKWorkoutActivityType[HKWorkoutActivityType["cricket"] = 10] = "cricket";
  HKWorkoutActivityType[HKWorkoutActivityType["crossTraining"] = 11] = "crossTraining";
  HKWorkoutActivityType[HKWorkoutActivityType["curling"] = 12] = "curling";
  HKWorkoutActivityType[HKWorkoutActivityType["cycling"] = 13] = "cycling";
  HKWorkoutActivityType[HKWorkoutActivityType["dance"] = 14] = "dance";
  HKWorkoutActivityType[HKWorkoutActivityType["danceInspiredTraining"] = 15] = "danceInspiredTraining";
  HKWorkoutActivityType[HKWorkoutActivityType["elliptical"] = 16] = "elliptical";
  HKWorkoutActivityType[HKWorkoutActivityType["equestrianSports"] = 17] = "equestrianSports";
  HKWorkoutActivityType[HKWorkoutActivityType["fencing"] = 18] = "fencing";
  HKWorkoutActivityType[HKWorkoutActivityType["fishing"] = 19] = "fishing";
  HKWorkoutActivityType[HKWorkoutActivityType["functionalStrengthTraining"] = 20] = "functionalStrengthTraining";
  HKWorkoutActivityType[HKWorkoutActivityType["golf"] = 21] = "golf";
  HKWorkoutActivityType[HKWorkoutActivityType["gymnastics"] = 22] = "gymnastics";
  HKWorkoutActivityType[HKWorkoutActivityType["handball"] = 23] = "handball";
  HKWorkoutActivityType[HKWorkoutActivityType["hiking"] = 24] = "hiking";
  HKWorkoutActivityType[HKWorkoutActivityType["hockey"] = 25] = "hockey";
  HKWorkoutActivityType[HKWorkoutActivityType["hunting"] = 26] = "hunting";
  HKWorkoutActivityType[HKWorkoutActivityType["lacrosse"] = 27] = "lacrosse";
  HKWorkoutActivityType[HKWorkoutActivityType["martialArts"] = 28] = "martialArts";
  HKWorkoutActivityType[HKWorkoutActivityType["mindAndBody"] = 29] = "mindAndBody";
  HKWorkoutActivityType[HKWorkoutActivityType["mixedMetabolicCardioTraining"] = 30] = "mixedMetabolicCardioTraining";
  HKWorkoutActivityType[HKWorkoutActivityType["paddleSports"] = 31] = "paddleSports";
  HKWorkoutActivityType[HKWorkoutActivityType["play"] = 32] = "play";
  HKWorkoutActivityType[HKWorkoutActivityType["preparationAndRecovery"] = 33] = "preparationAndRecovery";
  HKWorkoutActivityType[HKWorkoutActivityType["racquetball"] = 34] = "racquetball";
  HKWorkoutActivityType[HKWorkoutActivityType["rowing"] = 35] = "rowing";
  HKWorkoutActivityType[HKWorkoutActivityType["rugby"] = 36] = "rugby";
  HKWorkoutActivityType[HKWorkoutActivityType["running"] = 37] = "running";
  HKWorkoutActivityType[HKWorkoutActivityType["sailing"] = 38] = "sailing";
  HKWorkoutActivityType[HKWorkoutActivityType["skatingSports"] = 39] = "skatingSports";
  HKWorkoutActivityType[HKWorkoutActivityType["snowSports"] = 40] = "snowSports";
  HKWorkoutActivityType[HKWorkoutActivityType["soccer"] = 41] = "soccer";
  HKWorkoutActivityType[HKWorkoutActivityType["softball"] = 42] = "softball";
  HKWorkoutActivityType[HKWorkoutActivityType["squash"] = 43] = "squash";
  HKWorkoutActivityType[HKWorkoutActivityType["stairClimbing"] = 44] = "stairClimbing";
  HKWorkoutActivityType[HKWorkoutActivityType["surfingSports"] = 45] = "surfingSports";
  HKWorkoutActivityType[HKWorkoutActivityType["swimming"] = 46] = "swimming";
  HKWorkoutActivityType[HKWorkoutActivityType["tableTennis"] = 47] = "tableTennis";
  HKWorkoutActivityType[HKWorkoutActivityType["tennis"] = 48] = "tennis";
  HKWorkoutActivityType[HKWorkoutActivityType["trackAndField"] = 49] = "trackAndField";
  HKWorkoutActivityType[HKWorkoutActivityType["traditionalStrengthTraining"] = 50] = "traditionalStrengthTraining";
  HKWorkoutActivityType[HKWorkoutActivityType["volleyball"] = 51] = "volleyball";
  HKWorkoutActivityType[HKWorkoutActivityType["walking"] = 52] = "walking";
  HKWorkoutActivityType[HKWorkoutActivityType["waterFitness"] = 53] = "waterFitness";
  HKWorkoutActivityType[HKWorkoutActivityType["waterPolo"] = 54] = "waterPolo";
  HKWorkoutActivityType[HKWorkoutActivityType["waterSports"] = 55] = "waterSports";
  HKWorkoutActivityType[HKWorkoutActivityType["wrestling"] = 56] = "wrestling";
  HKWorkoutActivityType[HKWorkoutActivityType["yoga"] = 57] = "yoga";
  HKWorkoutActivityType[HKWorkoutActivityType["barre"] = 58] = "barre";
  HKWorkoutActivityType[HKWorkoutActivityType["coreTraining"] = 59] = "coreTraining";
  HKWorkoutActivityType[HKWorkoutActivityType["crossCountrySkiing"] = 60] = "crossCountrySkiing";
  HKWorkoutActivityType[HKWorkoutActivityType["downhillSkiing"] = 61] = "downhillSkiing";
  HKWorkoutActivityType[HKWorkoutActivityType["flexibility"] = 62] = "flexibility";
  HKWorkoutActivityType[HKWorkoutActivityType["highIntensityIntervalTraining"] = 63] = "highIntensityIntervalTraining";
  HKWorkoutActivityType[HKWorkoutActivityType["jumpRope"] = 64] = "jumpRope";
  HKWorkoutActivityType[HKWorkoutActivityType["kickboxing"] = 65] = "kickboxing";
  HKWorkoutActivityType[HKWorkoutActivityType["pilates"] = 66] = "pilates";
  HKWorkoutActivityType[HKWorkoutActivityType["snowboarding"] = 67] = "snowboarding";
  HKWorkoutActivityType[HKWorkoutActivityType["stairs"] = 68] = "stairs";
  HKWorkoutActivityType[HKWorkoutActivityType["stepTraining"] = 69] = "stepTraining";
  HKWorkoutActivityType[HKWorkoutActivityType["wheelchairWalkPace"] = 70] = "wheelchairWalkPace";
  HKWorkoutActivityType[HKWorkoutActivityType["wheelchairRunPace"] = 71] = "wheelchairRunPace";
  HKWorkoutActivityType[HKWorkoutActivityType["taiChi"] = 72] = "taiChi";
  HKWorkoutActivityType[HKWorkoutActivityType["mixedCardio"] = 73] = "mixedCardio";
  HKWorkoutActivityType[HKWorkoutActivityType["handCycling"] = 74] = "handCycling";
  HKWorkoutActivityType[HKWorkoutActivityType["discSports"] = 75] = "discSports";
  HKWorkoutActivityType[HKWorkoutActivityType["fitnessGaming"] = 76] = "fitnessGaming";
  HKWorkoutActivityType[HKWorkoutActivityType["other"] = 3000] = "other";
})(HKWorkoutActivityType || (exports.HKWorkoutActivityType = HKWorkoutActivityType = {}));

// documented at https://developer.apple.com/documentation/healthkit/hkweathercondition
let HKWeatherCondition;
exports.HKWeatherCondition = HKWeatherCondition;

(function (HKWeatherCondition) {
  HKWeatherCondition[HKWeatherCondition["none"] = 0] = "none";
  HKWeatherCondition[HKWeatherCondition["clear"] = 1] = "clear";
  HKWeatherCondition[HKWeatherCondition["fair"] = 2] = "fair";
  HKWeatherCondition[HKWeatherCondition["partlyCloudy"] = 3] = "partlyCloudy";
  HKWeatherCondition[HKWeatherCondition["mostlyCloudy"] = 4] = "mostlyCloudy";
  HKWeatherCondition[HKWeatherCondition["cloudy"] = 5] = "cloudy";
  HKWeatherCondition[HKWeatherCondition["foggy"] = 6] = "foggy";
  HKWeatherCondition[HKWeatherCondition["haze"] = 7] = "haze";
  HKWeatherCondition[HKWeatherCondition["windy"] = 8] = "windy";
  HKWeatherCondition[HKWeatherCondition["blustery"] = 9] = "blustery";
  HKWeatherCondition[HKWeatherCondition["smoky"] = 10] = "smoky";
  HKWeatherCondition[HKWeatherCondition["dust"] = 11] = "dust";
  HKWeatherCondition[HKWeatherCondition["snow"] = 12] = "snow";
  HKWeatherCondition[HKWeatherCondition["hail"] = 13] = "hail";
  HKWeatherCondition[HKWeatherCondition["sleet"] = 14] = "sleet";
  HKWeatherCondition[HKWeatherCondition["freezingDrizzle"] = 15] = "freezingDrizzle";
  HKWeatherCondition[HKWeatherCondition["freezingRain"] = 16] = "freezingRain";
  HKWeatherCondition[HKWeatherCondition["mixedRainAndHail"] = 17] = "mixedRainAndHail";
  HKWeatherCondition[HKWeatherCondition["mixedRainAndSnow"] = 18] = "mixedRainAndSnow";
  HKWeatherCondition[HKWeatherCondition["mixedRainAndSleet"] = 19] = "mixedRainAndSleet";
  HKWeatherCondition[HKWeatherCondition["mixedSnowAndSleet"] = 20] = "mixedSnowAndSleet";
  HKWeatherCondition[HKWeatherCondition["drizzle"] = 21] = "drizzle";
  HKWeatherCondition[HKWeatherCondition["scatteredShowers"] = 22] = "scatteredShowers";
  HKWeatherCondition[HKWeatherCondition["showers"] = 23] = "showers";
  HKWeatherCondition[HKWeatherCondition["thunderstorms"] = 24] = "thunderstorms";
  HKWeatherCondition[HKWeatherCondition["tropicalStorm"] = 25] = "tropicalStorm";
  HKWeatherCondition[HKWeatherCondition["hurricane"] = 26] = "hurricane";
  HKWeatherCondition[HKWeatherCondition["tornado"] = 27] = "tornado";
})(HKWeatherCondition || (exports.HKWeatherCondition = HKWeatherCondition = {}));

// Straight mapping to https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier
let HKQuantityTypeIdentifier;
exports.HKQuantityTypeIdentifier = HKQuantityTypeIdentifier;

(function (HKQuantityTypeIdentifier) {
  HKQuantityTypeIdentifier["bodyMassIndex"] = "HKQuantityTypeIdentifierBodyMassIndex";
  HKQuantityTypeIdentifier["bodyFatPercentage"] = "HKQuantityTypeIdentifierBodyFatPercentage";
  HKQuantityTypeIdentifier["height"] = "HKQuantityTypeIdentifierHeight";
  HKQuantityTypeIdentifier["bodyMass"] = "HKQuantityTypeIdentifierBodyMass";
  HKQuantityTypeIdentifier["leanBodyMass"] = "HKQuantityTypeIdentifierLeanBodyMass";
  HKQuantityTypeIdentifier["waistCircumference"] = "HKQuantityTypeIdentifierWaistCircumference";
  HKQuantityTypeIdentifier["stepCount"] = "HKQuantityTypeIdentifierStepCount";
  HKQuantityTypeIdentifier["distanceWalkingRunning"] = "HKQuantityTypeIdentifierDistanceWalkingRunning";
  HKQuantityTypeIdentifier["distanceCycling"] = "HKQuantityTypeIdentifierDistanceCycling";
  HKQuantityTypeIdentifier["distanceWheelchair"] = "HKQuantityTypeIdentifierDistanceWheelchair";
  HKQuantityTypeIdentifier["basalEnergyBurned"] = "HKQuantityTypeIdentifierBasalEnergyBurned";
  HKQuantityTypeIdentifier["activeEnergyBurned"] = "HKQuantityTypeIdentifierActiveEnergyBurned";
  HKQuantityTypeIdentifier["flightsClimbed"] = "HKQuantityTypeIdentifierFlightsClimbed";
  HKQuantityTypeIdentifier["nikeFuel"] = "HKQuantityTypeIdentifierNikeFuel";
  HKQuantityTypeIdentifier["appleExerciseTime"] = "HKQuantityTypeIdentifierAppleExerciseTime";
  HKQuantityTypeIdentifier["pushCount"] = "HKQuantityTypeIdentifierPushCount";
  HKQuantityTypeIdentifier["distanceSwimming"] = "HKQuantityTypeIdentifierDistanceSwimming";
  HKQuantityTypeIdentifier["swimmingStrokeCount"] = "HKQuantityTypeIdentifierSwimmingStrokeCount";
  HKQuantityTypeIdentifier["vo2Max"] = "HKQuantityTypeIdentifierVo2Max";
  HKQuantityTypeIdentifier["distanceDownhillSnowSports"] = "HKQuantityTypeIdentifierDistanceDownhillSnowSports";
  HKQuantityTypeIdentifier["appleStandTime"] = "HKQuantityTypeIdentifierAppleStandTime";
  HKQuantityTypeIdentifier["heartRate"] = "HKQuantityTypeIdentifierHeartRate";
  HKQuantityTypeIdentifier["bodyTemperature"] = "HKQuantityTypeIdentifierBodyTemperature";
  HKQuantityTypeIdentifier["basalBodyTemperature"] = "HKQuantityTypeIdentifierBasalBodyTemperature";
  HKQuantityTypeIdentifier["bloodPressureSystolic"] = "HKQuantityTypeIdentifierBloodPressureSystolic";
  HKQuantityTypeIdentifier["bloodPressureDiastolic"] = "HKQuantityTypeIdentifierBloodPressureDiastolic";
  HKQuantityTypeIdentifier["respiratoryRate"] = "HKQuantityTypeIdentifierRespiratoryRate";
  HKQuantityTypeIdentifier["restingHeartRate"] = "HKQuantityTypeIdentifierRestingHeartRate";
  HKQuantityTypeIdentifier["walkingHeartRateAverage"] = "HKQuantityTypeIdentifierWalkingHeartRateAverage";
  HKQuantityTypeIdentifier["heartRateVariabilitySDNN"] = "HKQuantityTypeIdentifierHeartRateVariabilitySDNN";
  HKQuantityTypeIdentifier["oxygenSaturation"] = "HKQuantityTypeIdentifierOxygenSaturation";
  HKQuantityTypeIdentifier["peripheralPerfusionIndex"] = "HKQuantityTypeIdentifierPeripheralPerfusionIndex";
  HKQuantityTypeIdentifier["bloodGlucose"] = "HKQuantityTypeIdentifierBloodGlucose";
  HKQuantityTypeIdentifier["numberOfTimesFallen"] = "HKQuantityTypeIdentifierNumberOfTimesFallen";
  HKQuantityTypeIdentifier["electrodermalActivity"] = "HKQuantityTypeIdentifierElectrodermalActivity";
  HKQuantityTypeIdentifier["inhalerUsage"] = "HKQuantityTypeIdentifierInhalerUsage";
  HKQuantityTypeIdentifier["insulinDelivery"] = "HKQuantityTypeIdentifierInsulinDelivery";
  HKQuantityTypeIdentifier["bloodAlcoholContent"] = "HKQuantityTypeIdentifierBloodAlcoholContent";
  HKQuantityTypeIdentifier["forcedVitalCapacity"] = "HKQuantityTypeIdentifierForcedVitalCapacity";
  HKQuantityTypeIdentifier["forcedExpiratoryVolume1"] = "HKQuantityTypeIdentifierForcedExpiratoryVolume1";
  HKQuantityTypeIdentifier["peakExpiratoryFlowRate"] = "HKQuantityTypeIdentifierPeakExpiratoryFlowRate";
  HKQuantityTypeIdentifier["environmentalAudioExposure"] = "HKQuantityTypeIdentifierEnvironmentalAudioExposure";
  HKQuantityTypeIdentifier["headphoneAudioExposure"] = "HKQuantityTypeIdentifierHeadphoneAudioExposure";
  HKQuantityTypeIdentifier["dietaryFatTotal"] = "HKQuantityTypeIdentifierDietaryFatTotal";
  HKQuantityTypeIdentifier["dietaryFatPolyunsaturated"] = "HKQuantityTypeIdentifierDietaryFatPolyunsaturated";
  HKQuantityTypeIdentifier["dietaryFatMonounsaturated"] = "HKQuantityTypeIdentifierDietaryFatMonounsaturated";
  HKQuantityTypeIdentifier["dietaryFatSaturated"] = "HKQuantityTypeIdentifierDietaryFatSaturated";
  HKQuantityTypeIdentifier["dietaryCholesterol"] = "HKQuantityTypeIdentifierDietaryCholesterol";
  HKQuantityTypeIdentifier["dietarySodium"] = "HKQuantityTypeIdentifierDietarySodium";
  HKQuantityTypeIdentifier["dietaryCarbohydrates"] = "HKQuantityTypeIdentifierDietaryCarbohydrates";
  HKQuantityTypeIdentifier["dietaryFiber"] = "HKQuantityTypeIdentifierDietaryFiber";
  HKQuantityTypeIdentifier["dietarySugar"] = "HKQuantityTypeIdentifierDietarySugar";
  HKQuantityTypeIdentifier["dietaryEnergyConsumed"] = "HKQuantityTypeIdentifierDietaryEnergyConsumed";
  HKQuantityTypeIdentifier["dietaryProtein"] = "HKQuantityTypeIdentifierDietaryProtein";
  HKQuantityTypeIdentifier["dietaryVitaminA"] = "HKQuantityTypeIdentifierDietaryVitaminA";
  HKQuantityTypeIdentifier["dietaryVitaminB6"] = "HKQuantityTypeIdentifierDietaryVitaminB6";
  HKQuantityTypeIdentifier["dietaryVitaminB12"] = "HKQuantityTypeIdentifierDietaryVitaminB12";
  HKQuantityTypeIdentifier["dietaryVitaminC"] = "HKQuantityTypeIdentifierDietaryVitaminC";
  HKQuantityTypeIdentifier["dietaryVitaminD"] = "HKQuantityTypeIdentifierDietaryVitaminD";
  HKQuantityTypeIdentifier["dietaryVitaminE"] = "HKQuantityTypeIdentifierDietaryVitaminE";
  HKQuantityTypeIdentifier["dietaryVitaminK"] = "HKQuantityTypeIdentifierDietaryVitaminK";
  HKQuantityTypeIdentifier["dietaryCalcium"] = "HKQuantityTypeIdentifierDietaryCalcium";
  HKQuantityTypeIdentifier["dietaryIron"] = "HKQuantityTypeIdentifierDietaryIron";
  HKQuantityTypeIdentifier["dietaryThiamin"] = "HKQuantityTypeIdentifierDietaryThiamin";
  HKQuantityTypeIdentifier["dietaryRiboflavin"] = "HKQuantityTypeIdentifierDietaryRiboflavin";
  HKQuantityTypeIdentifier["dietaryNiacin"] = "HKQuantityTypeIdentifierDietaryNiacin";
  HKQuantityTypeIdentifier["dietaryFolate"] = "HKQuantityTypeIdentifierDietaryFolate";
  HKQuantityTypeIdentifier["dietaryBiotin"] = "HKQuantityTypeIdentifierDietaryBiotin";
  HKQuantityTypeIdentifier["dietaryPantothenicAcid"] = "HKQuantityTypeIdentifierDietaryPantothenicAcid";
  HKQuantityTypeIdentifier["dietaryPhosphorus"] = "HKQuantityTypeIdentifierDietaryPhosphorus";
  HKQuantityTypeIdentifier["dietaryIodine"] = "HKQuantityTypeIdentifierDietaryIodine";
  HKQuantityTypeIdentifier["dietaryMagnesium"] = "HKQuantityTypeIdentifierDietaryMagnesium";
  HKQuantityTypeIdentifier["dietaryZinc"] = "HKQuantityTypeIdentifierDietaryZinc";
  HKQuantityTypeIdentifier["dietarySelenium"] = "HKQuantityTypeIdentifierDietarySelenium";
  HKQuantityTypeIdentifier["dietaryCopper"] = "HKQuantityTypeIdentifierDietaryCopper";
  HKQuantityTypeIdentifier["dietaryManganese"] = "HKQuantityTypeIdentifierDietaryManganese";
  HKQuantityTypeIdentifier["dietaryChromium"] = "HKQuantityTypeIdentifierDietaryChromium";
  HKQuantityTypeIdentifier["dietaryMolybdenum"] = "HKQuantityTypeIdentifierDietaryMolybdenum";
  HKQuantityTypeIdentifier["dietaryChloride"] = "HKQuantityTypeIdentifierDietaryChloride";
  HKQuantityTypeIdentifier["dietaryPotassium"] = "HKQuantityTypeIdentifierDietaryPotassium";
  HKQuantityTypeIdentifier["dietaryCaffeine"] = "HKQuantityTypeIdentifierDietaryCaffeine";
  HKQuantityTypeIdentifier["dietaryWater"] = "HKQuantityTypeIdentifierDietaryWater";
  HKQuantityTypeIdentifier["uvExposure"] = "HKQuantityTypeIdentifierUvExposure";
})(HKQuantityTypeIdentifier || (exports.HKQuantityTypeIdentifier = HKQuantityTypeIdentifier = {}));

let HKAuthorizationRequestStatus;
exports.HKAuthorizationRequestStatus = HKAuthorizationRequestStatus;

(function (HKAuthorizationRequestStatus) {
  HKAuthorizationRequestStatus[HKAuthorizationRequestStatus["unknown"] = 0] = "unknown";
  HKAuthorizationRequestStatus[HKAuthorizationRequestStatus["shouldRequest"] = 1] = "shouldRequest";
  HKAuthorizationRequestStatus[HKAuthorizationRequestStatus["unnecessary"] = 2] = "unnecessary";
})(HKAuthorizationRequestStatus || (exports.HKAuthorizationRequestStatus = HKAuthorizationRequestStatus = {}));

let HKBloodType;
exports.HKBloodType = HKBloodType;

(function (HKBloodType) {
  HKBloodType[HKBloodType["notSet"] = 0] = "notSet";
  HKBloodType[HKBloodType["aPositive"] = 1] = "aPositive";
  HKBloodType[HKBloodType["aNegative"] = 2] = "aNegative";
  HKBloodType[HKBloodType["bPositive"] = 3] = "bPositive";
  HKBloodType[HKBloodType["bNegative"] = 4] = "bNegative";
  HKBloodType[HKBloodType["abPositive"] = 5] = "abPositive";
  HKBloodType[HKBloodType["abNegative"] = 6] = "abNegative";
  HKBloodType[HKBloodType["oPositive"] = 7] = "oPositive";
  HKBloodType[HKBloodType["oNegative"] = 8] = "oNegative";
})(HKBloodType || (exports.HKBloodType = HKBloodType = {}));

let HKBiologicalSex;
exports.HKBiologicalSex = HKBiologicalSex;

(function (HKBiologicalSex) {
  HKBiologicalSex[HKBiologicalSex["notSet"] = 0] = "notSet";
  HKBiologicalSex[HKBiologicalSex["female"] = 1] = "female";
  HKBiologicalSex[HKBiologicalSex["male"] = 2] = "male";
  HKBiologicalSex[HKBiologicalSex["other"] = 3] = "other";
})(HKBiologicalSex || (exports.HKBiologicalSex = HKBiologicalSex = {}));

let HKFitzpatrickSkinType;
exports.HKFitzpatrickSkinType = HKFitzpatrickSkinType;

(function (HKFitzpatrickSkinType) {
  HKFitzpatrickSkinType[HKFitzpatrickSkinType["notSet"] = 0] = "notSet";
  HKFitzpatrickSkinType[HKFitzpatrickSkinType["I"] = 1] = "I";
  HKFitzpatrickSkinType[HKFitzpatrickSkinType["II"] = 2] = "II";
  HKFitzpatrickSkinType[HKFitzpatrickSkinType["III"] = 3] = "III";
  HKFitzpatrickSkinType[HKFitzpatrickSkinType["IV"] = 4] = "IV";
  HKFitzpatrickSkinType[HKFitzpatrickSkinType["V"] = 5] = "V";
  HKFitzpatrickSkinType[HKFitzpatrickSkinType["VI"] = 6] = "VI";
})(HKFitzpatrickSkinType || (exports.HKFitzpatrickSkinType = HKFitzpatrickSkinType = {}));

let HKStatisticsOptions;
exports.HKStatisticsOptions = HKStatisticsOptions;

(function (HKStatisticsOptions) {
  HKStatisticsOptions["cumulativeSum"] = "cumulativeSum";
  HKStatisticsOptions["discreteAverage"] = "discreteAverage";
  HKStatisticsOptions["discreteMax"] = "discreteMax";
  HKStatisticsOptions["discreteMin"] = "discreteMin";
  HKStatisticsOptions["discreteMostRecent"] = "discreteMostRecent";
  HKStatisticsOptions["duration"] = "duration";
  HKStatisticsOptions["mostRecent"] = "mostRecent";
  HKStatisticsOptions["separateBySource"] = "separateBySource";
})(HKStatisticsOptions || (exports.HKStatisticsOptions = HKStatisticsOptions = {}));

let HKCategoryValueCervicalMucusQuality;
exports.HKCategoryValueCervicalMucusQuality = HKCategoryValueCervicalMucusQuality;

(function (HKCategoryValueCervicalMucusQuality) {
  HKCategoryValueCervicalMucusQuality[HKCategoryValueCervicalMucusQuality["dry"] = 1] = "dry";
  HKCategoryValueCervicalMucusQuality[HKCategoryValueCervicalMucusQuality["sticky"] = 2] = "sticky";
  HKCategoryValueCervicalMucusQuality[HKCategoryValueCervicalMucusQuality["creamy"] = 3] = "creamy";
  HKCategoryValueCervicalMucusQuality[HKCategoryValueCervicalMucusQuality["watery"] = 4] = "watery";
  HKCategoryValueCervicalMucusQuality[HKCategoryValueCervicalMucusQuality["eggWhite"] = 5] = "eggWhite";
})(HKCategoryValueCervicalMucusQuality || (exports.HKCategoryValueCervicalMucusQuality = HKCategoryValueCervicalMucusQuality = {}));

let HKCategoryValueMenstrualFlow;
exports.HKCategoryValueMenstrualFlow = HKCategoryValueMenstrualFlow;

(function (HKCategoryValueMenstrualFlow) {
  HKCategoryValueMenstrualFlow[HKCategoryValueMenstrualFlow["unspecified"] = 1] = "unspecified";
  HKCategoryValueMenstrualFlow[HKCategoryValueMenstrualFlow["none"] = 5] = "none";
  HKCategoryValueMenstrualFlow[HKCategoryValueMenstrualFlow["light"] = 2] = "light";
  HKCategoryValueMenstrualFlow[HKCategoryValueMenstrualFlow["medium"] = 3] = "medium";
  HKCategoryValueMenstrualFlow[HKCategoryValueMenstrualFlow["heavy"] = 4] = "heavy";
})(HKCategoryValueMenstrualFlow || (exports.HKCategoryValueMenstrualFlow = HKCategoryValueMenstrualFlow = {}));

let HKCategoryValueOvulationTestResult;
exports.HKCategoryValueOvulationTestResult = HKCategoryValueOvulationTestResult;

(function (HKCategoryValueOvulationTestResult) {
  HKCategoryValueOvulationTestResult[HKCategoryValueOvulationTestResult["negative"] = 1] = "negative";
  HKCategoryValueOvulationTestResult[HKCategoryValueOvulationTestResult["luteinizingHormoneSurge"] = 2] = "luteinizingHormoneSurge";
  HKCategoryValueOvulationTestResult[HKCategoryValueOvulationTestResult["indeterminate"] = 3] = "indeterminate";
  HKCategoryValueOvulationTestResult[HKCategoryValueOvulationTestResult["estrogenSurge"] = 4] = "estrogenSurge";
})(HKCategoryValueOvulationTestResult || (exports.HKCategoryValueOvulationTestResult = HKCategoryValueOvulationTestResult = {}));

let HKCategoryValueSleepAnalysis;
exports.HKCategoryValueSleepAnalysis = HKCategoryValueSleepAnalysis;

(function (HKCategoryValueSleepAnalysis) {
  HKCategoryValueSleepAnalysis[HKCategoryValueSleepAnalysis["inBed"] = 0] = "inBed";
  HKCategoryValueSleepAnalysis[HKCategoryValueSleepAnalysis["asleep"] = 1] = "asleep";
  HKCategoryValueSleepAnalysis[HKCategoryValueSleepAnalysis["awake"] = 2] = "awake";
})(HKCategoryValueSleepAnalysis || (exports.HKCategoryValueSleepAnalysis = HKCategoryValueSleepAnalysis = {}));

let HKCategoryValueAppetiteChanges;
exports.HKCategoryValueAppetiteChanges = HKCategoryValueAppetiteChanges;

(function (HKCategoryValueAppetiteChanges) {
  HKCategoryValueAppetiteChanges[HKCategoryValueAppetiteChanges["decreased"] = 2] = "decreased";
  HKCategoryValueAppetiteChanges[HKCategoryValueAppetiteChanges["increased"] = 3] = "increased";
  HKCategoryValueAppetiteChanges[HKCategoryValueAppetiteChanges["noChange"] = 1] = "noChange";
  HKCategoryValueAppetiteChanges[HKCategoryValueAppetiteChanges["unspecified"] = 0] = "unspecified";
})(HKCategoryValueAppetiteChanges || (exports.HKCategoryValueAppetiteChanges = HKCategoryValueAppetiteChanges = {}));

let HKCategoryValuePresence;
exports.HKCategoryValuePresence = HKCategoryValuePresence;

(function (HKCategoryValuePresence) {
  HKCategoryValuePresence[HKCategoryValuePresence["notPresent"] = 1] = "notPresent";
  HKCategoryValuePresence[HKCategoryValuePresence["present"] = 0] = "present";
})(HKCategoryValuePresence || (exports.HKCategoryValuePresence = HKCategoryValuePresence = {}));

let HKCategoryValueSeverity;
exports.HKCategoryValueSeverity = HKCategoryValueSeverity;

(function (HKCategoryValueSeverity) {
  HKCategoryValueSeverity[HKCategoryValueSeverity["notPresent"] = 1] = "notPresent";
  HKCategoryValueSeverity[HKCategoryValueSeverity["mild"] = 2] = "mild";
  HKCategoryValueSeverity[HKCategoryValueSeverity["moderate"] = 3] = "moderate";
  HKCategoryValueSeverity[HKCategoryValueSeverity["severe"] = 4] = "severe";
  HKCategoryValueSeverity[HKCategoryValueSeverity["unspecified"] = 0] = "unspecified";
})(HKCategoryValueSeverity || (exports.HKCategoryValueSeverity = HKCategoryValueSeverity = {}));

let HKCategoryValueNotApplicable;
exports.HKCategoryValueNotApplicable = HKCategoryValueNotApplicable;

(function (HKCategoryValueNotApplicable) {
  HKCategoryValueNotApplicable[HKCategoryValueNotApplicable["notApplicable"] = 0] = "notApplicable";
})(HKCategoryValueNotApplicable || (exports.HKCategoryValueNotApplicable = HKCategoryValueNotApplicable = {}));

let HKInsulinDeliveryReason;
exports.HKInsulinDeliveryReason = HKInsulinDeliveryReason;

(function (HKInsulinDeliveryReason) {
  HKInsulinDeliveryReason[HKInsulinDeliveryReason["basal"] = 1] = "basal";
  HKInsulinDeliveryReason[HKInsulinDeliveryReason["bolus"] = 2] = "bolus";
})(HKInsulinDeliveryReason || (exports.HKInsulinDeliveryReason = HKInsulinDeliveryReason = {}));

// Maps directly to https://developer.apple.com/documentation/healthkit/hkwheelchairuse
let HKWheelchairUse; // Unit types are a straight mapping from here https://developer.apple.com/documentation/healthkit/hkunit/1615733-init

exports.HKWheelchairUse = HKWheelchairUse;

(function (HKWheelchairUse) {
  HKWheelchairUse[HKWheelchairUse["notSet"] = 0] = "notSet";
  HKWheelchairUse[HKWheelchairUse["no"] = 1] = "no";
  HKWheelchairUse[HKWheelchairUse["yes"] = 2] = "yes";
})(HKWheelchairUse || (exports.HKWheelchairUse = HKWheelchairUse = {}));

let HKUnitSIPrefix;
exports.HKUnitSIPrefix = HKUnitSIPrefix;

(function (HKUnitSIPrefix) {
  HKUnitSIPrefix["Pico"] = "p";
  HKUnitSIPrefix["Nano"] = "n";
  HKUnitSIPrefix["Micro"] = "mc";
  HKUnitSIPrefix["Milli"] = "m";
  HKUnitSIPrefix["Centi"] = "c";
  HKUnitSIPrefix["Deci"] = "d";
  HKUnitSIPrefix["Deca"] = "da";
  HKUnitSIPrefix["Hecto"] = "h";
  HKUnitSIPrefix["Kilo"] = "k";
  HKUnitSIPrefix["Mega"] = "M";
  HKUnitSIPrefix["Giga"] = "G";
  HKUnitSIPrefix["Tera"] = "T";
})(HKUnitSIPrefix || (exports.HKUnitSIPrefix = HKUnitSIPrefix = {}));

let HKUnitSI;
exports.HKUnitSI = HKUnitSI;

(function (HKUnitSI) {
  HKUnitSI["Grams"] = "g";
  HKUnitSI["Joules"] = "J";
  HKUnitSI["Kelvin"] = "K";
  HKUnitSI["Liters"] = "l";
  HKUnitSI["Meters"] = "m";
  HKUnitSI["Pascals"] = "Pa";
  HKUnitSI["Seconds"] = "s";
  HKUnitSI["Siemens"] = "S";
})(HKUnitSI || (exports.HKUnitSI = HKUnitSI = {}));

let HKUnit;
exports.HKUnit = HKUnit;

(function (HKUnit) {
  HKUnit["Grams"] = "g";
  HKUnit["Joules"] = "J";
  HKUnit["Kelvin"] = "K";
  HKUnit["Liters"] = "l";
  HKUnit["Meters"] = "m";
  HKUnit["Pascals"] = "Pa";
  HKUnit["Seconds"] = "s";
  HKUnit["Siemens"] = "S";
  HKUnit["Atmospheres"] = "atm";
  HKUnit["CentimetersOfWater"] = "cmAq";
  HKUnit["Count"] = "count";
  HKUnit["Days"] = "d";
  HKUnit["DecibelHearingLevel"] = "dBHL";
  HKUnit["DecibelSoundPressureLevel"] = "dBASPL";
  HKUnit["DegreesCelsius"] = "degC";
  HKUnit["DegreesFahrenheit"] = "degF";
  HKUnit["Feet"] = "ft";
  HKUnit["Hertz"] = "Hz";
  HKUnit["Hours"] = "hr";
  HKUnit["ImperialCup"] = "cup_imp";
  HKUnit["ImperialFluidOunces"] = "fl_oz_imp";
  HKUnit["ImperialPint"] = "pt_imp";
  HKUnit["Inches"] = "in";
  HKUnit["InternationalUnit"] = "IU";
  HKUnit["Kilocalories"] = "kcal";
  HKUnit["LargeCalories"] = "Cal";
  HKUnit["Miles"] = "mi";
  HKUnit["MillimetersOfMercury"] = "mmHg";
  HKUnit["Minutes"] = "min";
  HKUnit["Ounces"] = "oz";
  HKUnit["Percent"] = "%";
  HKUnit["Pounds"] = "lb";
  HKUnit["SmallCalories"] = "cal";
  HKUnit["Stones"] = "st";
  HKUnit["USCup"] = "cup_us";
  HKUnit["USFluidOunces"] = "fl_oz_us";
  HKUnit["USPint"] = "pt_us";
  HKUnit["Yard"] = "yd";
  HKUnit["GlucoseMmolPerL"] = "mmol<180.15588000005408>/l";
  HKUnit["GlucoseMgPerDl"] = "mg/dL";
})(HKUnit || (exports.HKUnit = HKUnit = {}));

// Straight mapping to https://developer.apple.com/documentation/healthkit/hkcharacteristictypeidentifier
let HKCharacteristicTypeIdentifier;
exports.HKCharacteristicTypeIdentifier = HKCharacteristicTypeIdentifier;

(function (HKCharacteristicTypeIdentifier) {
  HKCharacteristicTypeIdentifier["fitzpatrickSkinType"] = "HKCharacteristicTypeIdentifierFitzpatrickSkinType";
  HKCharacteristicTypeIdentifier["biologicalSex"] = "HKCharacteristicTypeIdentifierBiologicalSex";
  HKCharacteristicTypeIdentifier["bloodType"] = "HKCharacteristicTypeIdentifierBloodType";
  HKCharacteristicTypeIdentifier["dateOfBirth"] = "HKCharacteristicTypeIdentifierDateOfBirth";
  HKCharacteristicTypeIdentifier["wheelchairUse"] = "HKCharacteristicTypeIdentifierWheelchairUse";
})(HKCharacteristicTypeIdentifier || (exports.HKCharacteristicTypeIdentifier = HKCharacteristicTypeIdentifier = {}));

let HKClinicalTypeIdentifier;
exports.HKClinicalTypeIdentifier = HKClinicalTypeIdentifier;

(function (HKClinicalTypeIdentifier) {
  HKClinicalTypeIdentifier["allergyRecord"] = "HKClinicalTypeIdentifierAllergyRecord";
  HKClinicalTypeIdentifier["conditionRecord"] = "HKClinicalTypeIdentifierConditionRecord";
  HKClinicalTypeIdentifier["immunizationRecord"] = "HKClinicalTypeIdentifierImmunizationRecord";
  HKClinicalTypeIdentifier["labResultRecord"] = "HKClinicalTypeIdentifierLabResultRecord";
  HKClinicalTypeIdentifier["medicationRecord"] = "HKClinicalTypeIdentifierMedicationRecord";
  HKClinicalTypeIdentifier["procedureRecord"] = "HKClinicalTypeIdentifierProcedureRecord";
  HKClinicalTypeIdentifier["vitalSignRecord"] = "HKClinicalTypeIdentifierVitalSignRecord";
})(HKClinicalTypeIdentifier || (exports.HKClinicalTypeIdentifier = HKClinicalTypeIdentifier = {}));

let HKDocumentTypeIdentifier;
exports.HKDocumentTypeIdentifier = HKDocumentTypeIdentifier;

(function (HKDocumentTypeIdentifier) {
  HKDocumentTypeIdentifier["CDA"] = "HKDocumentTypeIdentifierCDA";
})(HKDocumentTypeIdentifier || (exports.HKDocumentTypeIdentifier = HKDocumentTypeIdentifier = {}));

let HKCorrelationTypeIdentifier;
exports.HKCorrelationTypeIdentifier = HKCorrelationTypeIdentifier;

(function (HKCorrelationTypeIdentifier) {
  HKCorrelationTypeIdentifier["bloodPressure"] = "HKCorrelationTypeIdentifierBloodPressure";
  HKCorrelationTypeIdentifier["food"] = "HKCorrelationTypeIdentifierFood";
})(HKCorrelationTypeIdentifier || (exports.HKCorrelationTypeIdentifier = HKCorrelationTypeIdentifier = {}));

let HKUpdateFrequency;
exports.HKUpdateFrequency = HKUpdateFrequency;

(function (HKUpdateFrequency) {
  HKUpdateFrequency[HKUpdateFrequency["immediate"] = 1] = "immediate";
  HKUpdateFrequency[HKUpdateFrequency["hourly"] = 2] = "hourly";
  HKUpdateFrequency[HKUpdateFrequency["daily"] = 3] = "daily";
  HKUpdateFrequency[HKUpdateFrequency["weekly"] = 4] = "weekly";
})(HKUpdateFrequency || (exports.HKUpdateFrequency = HKUpdateFrequency = {}));

const Native = _reactNative.NativeModules.ReactNativeHealthkit;
const EventEmitter = new _reactNative.NativeEventEmitter(_reactNative.NativeModules.ReactNativeHealthkit);
exports.EventEmitter = EventEmitter;
var _default = Native;
exports.default = _default;
//# sourceMappingURL=native-types.js.map