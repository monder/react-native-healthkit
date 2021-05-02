import { NativeEventEmitter, EmitterSubscription } from 'react-native';
export declare type HKWorkoutTypeIdentifier = 'HKWorkoutTypeIdentifier';
export declare type HKAudiogramTypeIdentifier = 'HKAudiogramTypeIdentifier';
export declare type HKSampleTypeIdentifier = HKWorkoutTypeIdentifier | HKQuantityTypeIdentifier | HKCategoryTypeIdentifier | HKAudiogramTypeIdentifier | HKCorrelationTypeIdentifier;
export declare type TypeToUnitMapping = {
    [key in HKQuantityTypeIdentifier]: HKUnit;
};
export declare enum HKHeartRateMotionContext {
    active = 2,
    notSet = 0,
    sedentary = 1
}
export declare enum HKCategoryTypeIdentifier {
    sleepAnalysis = "HKCategoryTypeIdentifierSleepAnalysis",
    appleStandHour = "HKCategoryTypeIdentifierAppleStandHour",
    cervicalMucusQuality = "HKCategoryTypeIdentifierCervicalMucusQuality",
    ovulationTestResult = "HKCategoryTypeIdentifierOvulationTestResult",
    menstrualFlow = "HKCategoryTypeIdentifierMenstrualFlow",
    intermenstrualBleeding = "HKCategoryTypeIdentifierIntermenstrualBleeding",
    sexualActivity = "HKCategoryTypeIdentifierSexualActivity",
    mindfulSession = "HKCategoryTypeIdentifierMindfulSession",
    highHeartRateEvent = "HKCategoryTypeIdentifierHighHeartRateEvent",
    lowHeartRateEvent = "HKCategoryTypeIdentifierLowHeartRateEvent",
    irregularHeartRhythmEvent = "HKCategoryTypeIdentifierIrregularHeartRhythmEvent",
    audioExposureEvent = "HKCategoryTypeIdentifierAudioExposureEvent",
    toothbrushingEvent = "HKCategoryTypeIdentifierToothbrushingEvent"
}
export declare enum HKCategoryValueAppleStandHour {
    stood = 0,
    idle = 1
}
export declare enum HKWorkoutActivityType {
    americanFootball = 1,
    archery = 2,
    australianFootball = 3,
    badminton = 4,
    baseball = 5,
    basketball = 6,
    bowling = 7,
    boxing = 8,
    climbing = 9,
    cricket = 10,
    crossTraining = 11,
    curling = 12,
    cycling = 13,
    dance = 14,
    danceInspiredTraining = 15,
    elliptical = 16,
    equestrianSports = 17,
    fencing = 18,
    fishing = 19,
    functionalStrengthTraining = 20,
    golf = 21,
    gymnastics = 22,
    handball = 23,
    hiking = 24,
    hockey = 25,
    hunting = 26,
    lacrosse = 27,
    martialArts = 28,
    mindAndBody = 29,
    mixedMetabolicCardioTraining = 30,
    paddleSports = 31,
    play = 32,
    preparationAndRecovery = 33,
    racquetball = 34,
    rowing = 35,
    rugby = 36,
    running = 37,
    sailing = 38,
    skatingSports = 39,
    snowSports = 40,
    soccer = 41,
    softball = 42,
    squash = 43,
    stairClimbing = 44,
    surfingSports = 45,
    swimming = 46,
    tableTennis = 47,
    tennis = 48,
    trackAndField = 49,
    traditionalStrengthTraining = 50,
    volleyball = 51,
    walking = 52,
    waterFitness = 53,
    waterPolo = 54,
    waterSports = 55,
    wrestling = 56,
    yoga = 57,
    barre = 58,
    coreTraining = 59,
    crossCountrySkiing = 60,
    downhillSkiing = 61,
    flexibility = 62,
    highIntensityIntervalTraining = 63,
    jumpRope = 64,
    kickboxing = 65,
    pilates = 66,
    snowboarding = 67,
    stairs = 68,
    stepTraining = 69,
    wheelchairWalkPace = 70,
    wheelchairRunPace = 71,
    taiChi = 72,
    mixedCardio = 73,
    handCycling = 74,
    discSports = 75,
    fitnessGaming = 76,
    other = 3000
}
export declare type HKGenericMetadata = {
    [key: string]: string | number | boolean | HKQuantity | undefined;
    HKExternalUUID?: string;
    HKTimeZone?: string;
    HKWasUserEntered?: boolean;
    HKDeviceSerialNumber?: string;
    HKUDIDeviceIdentifier?: string;
    HKUDIProductionIdentifier?: string;
    HKDigitalSignature?: string;
    HKDeviceName?: string;
    HKDeviceManufacturerName?: string;
    HKSyncIdentifier?: string;
    HKSyncVersion?: number;
    HKWasTakenInLab?: boolean;
    HKReferenceRangeLowerLimit?: number;
    HKReferenceRangeUpperLimit?: number;
};
export declare enum HKWeatherCondition {
    none = 0,
    clear = 1,
    fair = 2,
    partlyCloudy = 3,
    mostlyCloudy = 4,
    cloudy = 5,
    foggy = 6,
    haze = 7,
    windy = 8,
    blustery = 9,
    smoky = 10,
    dust = 11,
    snow = 12,
    hail = 13,
    sleet = 14,
    freezingDrizzle = 15,
    freezingRain = 16,
    mixedRainAndHail = 17,
    mixedRainAndSnow = 18,
    mixedRainAndSleet = 19,
    mixedSnowAndSleet = 20,
    drizzle = 21,
    scatteredShowers = 22,
    showers = 23,
    thunderstorms = 24,
    tropicalStorm = 25,
    hurricane = 26,
    tornado = 27
}
export interface HKWorkoutMetadata extends HKGenericMetadata {
    HKWeatherCondition?: HKWeatherCondition;
    HKWeatherHumidity?: HKQuantity<HKUnit.Percent>;
}
export declare enum HKQuantityTypeIdentifier {
    bodyMassIndex = "HKQuantityTypeIdentifierBodyMassIndex",
    bodyFatPercentage = "HKQuantityTypeIdentifierBodyFatPercentage",
    height = "HKQuantityTypeIdentifierHeight",
    bodyMass = "HKQuantityTypeIdentifierBodyMass",
    leanBodyMass = "HKQuantityTypeIdentifierLeanBodyMass",
    waistCircumference = "HKQuantityTypeIdentifierWaistCircumference",
    stepCount = "HKQuantityTypeIdentifierStepCount",
    distanceWalkingRunning = "HKQuantityTypeIdentifierDistanceWalkingRunning",
    distanceCycling = "HKQuantityTypeIdentifierDistanceCycling",
    distanceWheelchair = "HKQuantityTypeIdentifierDistanceWheelchair",
    basalEnergyBurned = "HKQuantityTypeIdentifierBasalEnergyBurned",
    activeEnergyBurned = "HKQuantityTypeIdentifierActiveEnergyBurned",
    flightsClimbed = "HKQuantityTypeIdentifierFlightsClimbed",
    nikeFuel = "HKQuantityTypeIdentifierNikeFuel",
    appleExerciseTime = "HKQuantityTypeIdentifierAppleExerciseTime",
    pushCount = "HKQuantityTypeIdentifierPushCount",
    distanceSwimming = "HKQuantityTypeIdentifierDistanceSwimming",
    swimmingStrokeCount = "HKQuantityTypeIdentifierSwimmingStrokeCount",
    vo2Max = "HKQuantityTypeIdentifierVo2Max",
    distanceDownhillSnowSports = "HKQuantityTypeIdentifierDistanceDownhillSnowSports",
    appleStandTime = "HKQuantityTypeIdentifierAppleStandTime",
    heartRate = "HKQuantityTypeIdentifierHeartRate",
    bodyTemperature = "HKQuantityTypeIdentifierBodyTemperature",
    basalBodyTemperature = "HKQuantityTypeIdentifierBasalBodyTemperature",
    bloodPressureSystolic = "HKQuantityTypeIdentifierBloodPressureSystolic",
    bloodPressureDiastolic = "HKQuantityTypeIdentifierBloodPressureDiastolic",
    respiratoryRate = "HKQuantityTypeIdentifierRespiratoryRate",
    restingHeartRate = "HKQuantityTypeIdentifierRestingHeartRate",
    walkingHeartRateAverage = "HKQuantityTypeIdentifierWalkingHeartRateAverage",
    heartRateVariabilitySDNN = "HKQuantityTypeIdentifierHeartRateVariabilitySDNN",
    oxygenSaturation = "HKQuantityTypeIdentifierOxygenSaturation",
    peripheralPerfusionIndex = "HKQuantityTypeIdentifierPeripheralPerfusionIndex",
    bloodGlucose = "HKQuantityTypeIdentifierBloodGlucose",
    numberOfTimesFallen = "HKQuantityTypeIdentifierNumberOfTimesFallen",
    electrodermalActivity = "HKQuantityTypeIdentifierElectrodermalActivity",
    inhalerUsage = "HKQuantityTypeIdentifierInhalerUsage",
    insulinDelivery = "HKQuantityTypeIdentifierInsulinDelivery",
    bloodAlcoholContent = "HKQuantityTypeIdentifierBloodAlcoholContent",
    forcedVitalCapacity = "HKQuantityTypeIdentifierForcedVitalCapacity",
    forcedExpiratoryVolume1 = "HKQuantityTypeIdentifierForcedExpiratoryVolume1",
    peakExpiratoryFlowRate = "HKQuantityTypeIdentifierPeakExpiratoryFlowRate",
    environmentalAudioExposure = "HKQuantityTypeIdentifierEnvironmentalAudioExposure",
    headphoneAudioExposure = "HKQuantityTypeIdentifierHeadphoneAudioExposure",
    dietaryFatTotal = "HKQuantityTypeIdentifierDietaryFatTotal",
    dietaryFatPolyunsaturated = "HKQuantityTypeIdentifierDietaryFatPolyunsaturated",
    dietaryFatMonounsaturated = "HKQuantityTypeIdentifierDietaryFatMonounsaturated",
    dietaryFatSaturated = "HKQuantityTypeIdentifierDietaryFatSaturated",
    dietaryCholesterol = "HKQuantityTypeIdentifierDietaryCholesterol",
    dietarySodium = "HKQuantityTypeIdentifierDietarySodium",
    dietaryCarbohydrates = "HKQuantityTypeIdentifierDietaryCarbohydrates",
    dietaryFiber = "HKQuantityTypeIdentifierDietaryFiber",
    dietarySugar = "HKQuantityTypeIdentifierDietarySugar",
    dietaryEnergyConsumed = "HKQuantityTypeIdentifierDietaryEnergyConsumed",
    dietaryProtein = "HKQuantityTypeIdentifierDietaryProtein",
    dietaryVitaminA = "HKQuantityTypeIdentifierDietaryVitaminA",
    dietaryVitaminB6 = "HKQuantityTypeIdentifierDietaryVitaminB6",
    dietaryVitaminB12 = "HKQuantityTypeIdentifierDietaryVitaminB12",
    dietaryVitaminC = "HKQuantityTypeIdentifierDietaryVitaminC",
    dietaryVitaminD = "HKQuantityTypeIdentifierDietaryVitaminD",
    dietaryVitaminE = "HKQuantityTypeIdentifierDietaryVitaminE",
    dietaryVitaminK = "HKQuantityTypeIdentifierDietaryVitaminK",
    dietaryCalcium = "HKQuantityTypeIdentifierDietaryCalcium",
    dietaryIron = "HKQuantityTypeIdentifierDietaryIron",
    dietaryThiamin = "HKQuantityTypeIdentifierDietaryThiamin",
    dietaryRiboflavin = "HKQuantityTypeIdentifierDietaryRiboflavin",
    dietaryNiacin = "HKQuantityTypeIdentifierDietaryNiacin",
    dietaryFolate = "HKQuantityTypeIdentifierDietaryFolate",
    dietaryBiotin = "HKQuantityTypeIdentifierDietaryBiotin",
    dietaryPantothenicAcid = "HKQuantityTypeIdentifierDietaryPantothenicAcid",
    dietaryPhosphorus = "HKQuantityTypeIdentifierDietaryPhosphorus",
    dietaryIodine = "HKQuantityTypeIdentifierDietaryIodine",
    dietaryMagnesium = "HKQuantityTypeIdentifierDietaryMagnesium",
    dietaryZinc = "HKQuantityTypeIdentifierDietaryZinc",
    dietarySelenium = "HKQuantityTypeIdentifierDietarySelenium",
    dietaryCopper = "HKQuantityTypeIdentifierDietaryCopper",
    dietaryManganese = "HKQuantityTypeIdentifierDietaryManganese",
    dietaryChromium = "HKQuantityTypeIdentifierDietaryChromium",
    dietaryMolybdenum = "HKQuantityTypeIdentifierDietaryMolybdenum",
    dietaryChloride = "HKQuantityTypeIdentifierDietaryChloride",
    dietaryPotassium = "HKQuantityTypeIdentifierDietaryPotassium",
    dietaryCaffeine = "HKQuantityTypeIdentifierDietaryCaffeine",
    dietaryWater = "HKQuantityTypeIdentifierDietaryWater",
    uvExposure = "HKQuantityTypeIdentifierUvExposure"
}
export declare enum HKAuthorizationRequestStatus {
    unknown = 0,
    shouldRequest = 1,
    unnecessary = 2
}
export declare type HKQuantity<T extends HKUnit = HKUnit> = {
    unit: T;
    quantity: number;
};
export declare enum HKBloodType {
    notSet = 0,
    aPositive = 1,
    aNegative = 2,
    bPositive = 3,
    bNegative = 4,
    abPositive = 5,
    abNegative = 6,
    oPositive = 7,
    oNegative = 8
}
export declare enum HKBiologicalSex {
    notSet = 0,
    female = 1,
    male = 2,
    other = 3
}
export declare enum HKFitzpatrickSkinType {
    notSet = 0,
    I = 1,
    II = 2,
    III = 3,
    IV = 4,
    V = 5,
    VI = 6
}
export declare enum HKStatisticsOptions {
    cumulativeSum = "cumulativeSum",
    discreteAverage = "discreteAverage",
    discreteMax = "discreteMax",
    discreteMin = "discreteMin",
    discreteMostRecent = "discreteMostRecent",
    duration = "duration",
    mostRecent = "mostRecent",
    separateBySource = "separateBySource"
}
export declare type QueryStatisticsResponseRaw<TUnit extends HKUnit = HKUnit> = {
    averageQuantity?: HKQuantity<TUnit>;
    maximumQuantity?: HKQuantity<TUnit>;
    minimumQuantity?: HKQuantity<TUnit>;
    sumQuantity?: HKQuantity<TUnit>;
    mostRecentQuantity?: HKQuantity<TUnit>;
    mostRecentQuantityDateInterval?: {
        from: string;
        to: string;
    };
    duration?: HKQuantity<HKUnit.Seconds>;
};
export declare enum HKCategoryValueCervicalMucusQuality {
    dry = 1,
    sticky = 2,
    creamy = 3,
    watery = 4,
    eggWhite = 5
}
export declare enum HKCategoryValueMenstrualFlow {
    unspecified = 1,
    none = 5,
    light = 2,
    medium = 3,
    heavy = 4
}
export declare enum HKCategoryValueOvulationTestResult {
    negative = 1,
    luteinizingHormoneSurge = 2,
    indeterminate = 3,
    estrogenSurge = 4
}
export declare enum HKCategoryValueSleepAnalysis {
    inBed = 0,
    asleep = 1,
    awake = 2
}
export declare enum HKCategoryValueAppetiteChanges {
    decreased = 2,
    increased = 3,
    noChange = 1,
    unspecified = 0
}
export declare enum HKCategoryValuePresence {
    notPresent = 1,
    present = 0
}
export declare enum HKCategoryValueSeverity {
    notPresent = 1,
    mild = 2,
    moderate = 3,
    severe = 4,
    unspecified = 0
}
export declare enum HKCategoryValueNotApplicable {
    notApplicable = 0
}
export declare type HKCategoryValue = HKCategoryValueAppetiteChanges | HKCategoryValuePresence | HKCategoryValueSeverity | HKCategoryValuePresence | HKCategoryValueMenstrualFlow | HKCategoryValueSleepAnalysis | HKCategoryValueCervicalMucusQuality | HKCategoryValueOvulationTestResult | number;
export declare enum HKInsulinDeliveryReason {
    basal = 1,
    bolus = 2
}
export declare type MetadataMapperForQuantityIdentifier<TQuantityTypeIdentifier = HKQuantityTypeIdentifier> = TQuantityTypeIdentifier extends HKQuantityTypeIdentifier.insulinDelivery ? HKGenericMetadata & {
    HKInsulinDeliveryReason: HKInsulinDeliveryReason;
} : TQuantityTypeIdentifier extends HKQuantityTypeIdentifier.bloodGlucose ? HKGenericMetadata & {
    HKBloodGlucoseMealTime?: number;
} : TQuantityTypeIdentifier extends HKQuantityTypeIdentifier.heartRate ? HKGenericMetadata & {
    HKHeartRateMotionContext?: HKHeartRateMotionContext;
} : HKGenericMetadata;
export declare type MetadataMapperForCorrelationIdentifier<TCorrelationTypeIdentifier = HKCorrelationTypeIdentifier> = TCorrelationTypeIdentifier extends HKCorrelationTypeIdentifier.food ? HKGenericMetadata & {
    HKFoodType?: string;
} : HKGenericMetadata;
export declare type HKCategoryValueForIdentifier<T extends HKCategoryTypeIdentifier> = T extends HKCategoryTypeIdentifier.cervicalMucusQuality ? HKCategoryValueCervicalMucusQuality : T extends HKCategoryTypeIdentifier.menstrualFlow ? HKCategoryValueMenstrualFlow : T extends HKCategoryTypeIdentifier.ovulationTestResult ? HKCategoryValueOvulationTestResult : T extends HKCategoryTypeIdentifier.sleepAnalysis ? HKCategoryValueSleepAnalysis : T extends HKCategoryTypeIdentifier.mindfulSession ? HKCategoryValueNotApplicable : T extends HKCategoryTypeIdentifier.intermenstrualBleeding ? HKCategoryValueNotApplicable : T extends HKCategoryTypeIdentifier.highHeartRateEvent ? HKCategoryValueNotApplicable : T extends HKCategoryTypeIdentifier.sexualActivity ? HKCategoryValueNotApplicable : T extends HKCategoryTypeIdentifier.appleStandHour ? HKCategoryValueAppleStandHour : number;
export declare type MetadataMapperForCategoryIdentifier<T extends HKCategoryTypeIdentifier> = T extends HKCategoryTypeIdentifier.sexualActivity ? HKGenericMetadata & {
    HKSexualActivityProtectionUsed: boolean;
} : T extends HKCategoryTypeIdentifier.menstrualFlow ? HKGenericMetadata & {
    HKMenstrualCycleStart: boolean;
} : HKGenericMetadata;
export declare enum HKWheelchairUse {
    notSet = 0,
    no = 1,
    yes = 2
}
export declare enum HKUnitSIPrefix {
    Pico = "p",
    Nano = "n",
    Micro = "mc",
    Milli = "m",
    Centi = "c",
    Deci = "d",
    Deca = "da",
    Hecto = "h",
    Kilo = "k",
    Mega = "M",
    Giga = "G",
    Tera = "T"
}
export declare enum HKUnitSI {
    Grams = "g",
    Joules = "J",
    Kelvin = "K",
    Liters = "l",
    Meters = "m",
    Pascals = "Pa",
    Seconds = "s",
    Siemens = "S"
}
export declare enum HKUnit {
    Grams = "g",
    Joules = "J",
    Kelvin = "K",
    Liters = "l",
    Meters = "m",
    Pascals = "Pa",
    Seconds = "s",
    Siemens = "S",
    Atmospheres = "atm",
    CentimetersOfWater = "cmAq",
    Count = "count",
    Days = "d",
    DecibelHearingLevel = "dBHL",
    DecibelSoundPressureLevel = "dBASPL",
    DegreesCelsius = "degC",
    DegreesFahrenheit = "degF",
    Feet = "ft",
    Hertz = "Hz",
    Hours = "hr",
    ImperialCup = "cup_imp",
    ImperialFluidOunces = "fl_oz_imp",
    ImperialPint = "pt_imp",
    Inches = "in",
    InternationalUnit = "IU",
    Kilocalories = "kcal",
    LargeCalories = "Cal",
    Miles = "mi",
    MillimetersOfMercury = "mmHg",
    Minutes = "min",
    Ounces = "oz",
    Percent = "%",
    Pounds = "lb",
    SmallCalories = "cal",
    Stones = "st",
    USCup = "cup_us",
    USFluidOunces = "fl_oz_us",
    USPint = "pt_us",
    Yard = "yd",
    GlucoseMmolPerL = "mmol<180.15588000005408>/l",
    GlucoseMgPerDl = "mg/dL"
}
export declare type HKDevice = {
    name: string;
    firmwareVersion: string;
    hardwareVersion: string;
    localIdentifier: string;
    manufacturer: string;
    model: string;
    softwareVersion: string;
};
export declare type HKSource = {
    name: string;
    bundleIdentifier: string;
};
export declare type HKSourceRevision = {
    source: HKSource;
    version: string;
    operatingSystemVersion?: string;
    productType?: string;
};
export declare type HKQuantitySampleRaw<TQuantityIdentifier extends HKQuantityTypeIdentifier = HKQuantityTypeIdentifier, TUnit extends HKUnit = HKUnit> = {
    uuid: string;
    device?: HKDevice;
    quantityType: TQuantityIdentifier;
    startDate: string;
    endDate: string;
    quantity: number;
    unit: TUnit;
    metadata: MetadataMapperForQuantityIdentifier<TQuantityIdentifier>;
    sourceRevision?: HKSourceRevision;
};
export declare type HKWorkoutRaw<TEnergy extends HKUnit, TDistance extends HKUnit> = {
    workoutActivityType: HKWorkoutActivityType;
    duration: number;
    totalDistance?: HKQuantity<TDistance>;
    totalEnergyBurned?: HKQuantity<TEnergy>;
    totalSwimmingStrokeCount?: HKQuantity<HKUnit.Count>;
    totalFlightsClimbed?: HKQuantity<HKUnit.Count>;
    startDate: string;
    endDate: string;
    metadata?: HKWorkoutMetadata;
    sourceRevision?: HKSourceRevision;
};
export declare enum HKCharacteristicTypeIdentifier {
    fitzpatrickSkinType = "HKCharacteristicTypeIdentifierFitzpatrickSkinType",
    biologicalSex = "HKCharacteristicTypeIdentifierBiologicalSex",
    bloodType = "HKCharacteristicTypeIdentifierBloodType",
    dateOfBirth = "HKCharacteristicTypeIdentifierDateOfBirth",
    wheelchairUse = "HKCharacteristicTypeIdentifierWheelchairUse"
}
export declare type WritePermssions = {
    [key in HKCharacteristicTypeIdentifier | HKQuantityTypeIdentifier | HKCategoryTypeIdentifier]: boolean;
};
export declare type ReadPermssions = {
    [key in HKQuantityTypeIdentifier | HKCharacteristicTypeIdentifier | HKCategoryTypeIdentifier]: boolean;
};
export declare type HKCategorySampleRaw<T extends HKCategoryTypeIdentifier = HKCategoryTypeIdentifier> = {
    uuid: string;
    device?: HKDevice;
    categoryType: T;
    startDate: string;
    endDate: string;
    value: HKCategoryValueForIdentifier<T>;
    metadata: MetadataMapperForCategoryIdentifier<T>;
    sourceRevision?: HKSourceRevision;
};
export declare type HKCorrelationRaw<TIdentifier extends HKCorrelationTypeIdentifier> = {
    correlationType: HKCorrelationTypeIdentifier;
    objects: (HKQuantitySampleRaw | HKCategorySampleRaw)[];
    metadata: MetadataMapperForCorrelationIdentifier<TIdentifier>;
    startDate: string;
    endDate: string;
};
declare type QueryId = string;
export declare enum HKCorrelationTypeIdentifier {
    bloodPressure = "HKCorrelationTypeIdentifierBloodPressure",
    food = "HKCorrelationTypeIdentifierFood"
}
export declare enum HKUpdateFrequency {
    immediate = 1,
    hourly = 2,
    daily = 3,
    weekly = 4
}
declare type ReactNativeHealthkitTypeNative = {
    isHealthDataAvailable(): Promise<boolean>;
    getBloodType(): Promise<HKBloodType>;
    getDateOfBirth(): Promise<string>;
    getBiologicalSex(): Promise<HKBiologicalSex>;
    getFitzpatrickSkinType(): Promise<HKFitzpatrickSkinType>;
    getWheelchairUse: () => Promise<HKWheelchairUse>;
    enableBackgroundDelivery: (typeIdentifier: HKSampleTypeIdentifier, updateFrequency: HKUpdateFrequency) => Promise<boolean>;
    disableBackgroundDelivery: (typeIdentifier: HKSampleTypeIdentifier) => Promise<boolean>;
    disableAllBackgroundDelivery: () => Promise<boolean>;
    saveCorrelationSample: <TIdentifier extends HKCorrelationTypeIdentifier>(typeIdentifier: TIdentifier, samples: Omit<HKQuantitySampleRaw | HKCategorySampleRaw, 'startDate' | 'endDate' | 'uuid' | 'device'>[], start: string, end: string, metadata: MetadataMapperForCorrelationIdentifier<TIdentifier>) => Promise<boolean>;
    saveWorkoutSample: (typeIdentifier: HKWorkoutActivityType, quantities: Omit<HKQuantitySampleRaw, 'startDate' | 'endDate' | 'uuid' | 'device'>[], start: string, end: string, metadata: HKWorkoutMetadata) => Promise<boolean>;
    queryCorrelationSamples: <TIdentifier extends HKCorrelationTypeIdentifier>(typeIdentifier: TIdentifier, from: string, to: string) => Promise<HKCorrelationRaw<TIdentifier>[]>;
    subscribeToObserverQuery(identifier: HKSampleTypeIdentifier): Promise<QueryId>;
    unsubscribeQuery(queryId: QueryId): Promise<boolean>;
    authorizationStatusFor(type: HKSampleTypeIdentifier | HKCharacteristicTypeIdentifier): Promise<boolean>;
    getRequestStatusForAuthorization(write: WritePermssions | {}, read: ReadPermssions | {}): Promise<HKAuthorizationRequestStatus>;
    requestAuthorization(write: WritePermssions | {}, read: ReadPermssions | {}): Promise<boolean>;
    saveQuantitySample: (identifier: HKQuantityTypeIdentifier, unit: HKUnit, value: number, start: string, end: string, metadata: Object) => Promise<boolean>;
    queryWorkoutSamples: <TEnergy extends HKUnit, TDistance extends HKUnit>(energyUnit: TEnergy, distanceUnit: TDistance, from: string, to: string, limit: Number, ascending: boolean) => Promise<HKWorkoutRaw<TEnergy, TDistance>[]>;
    queryCategorySamples: <T extends HKCategoryTypeIdentifier>(identifier: T, from: string, to: string, limit: Number, ascending: boolean) => Promise<HKCategorySampleRaw<T>[]>;
    queryQuantitySamples: <TUnit extends HKUnit, TIdentifier extends HKQuantityTypeIdentifier>(identifier: TIdentifier, unit: TUnit, from: string, to: string, limit: Number, ascending: boolean) => Promise<HKQuantitySampleRaw<TIdentifier, TUnit>[]>;
    saveCategorySample: <T extends HKCategoryTypeIdentifier>(identifier: T, value: HKCategoryValueForIdentifier<T>, start: string, end: string, metadata: Object) => Promise<boolean>;
    queryStatisticsForQuantity: <TUnit extends HKUnit>(identifier: HKQuantityTypeIdentifier, unit: TUnit, from: string, to: string, options: HKStatisticsOptions[]) => Promise<QueryStatisticsResponseRaw<TUnit>>;
    getPreferredUnits: (identifiers: HKQuantityTypeIdentifier[]) => Promise<TypeToUnitMapping>;
};
declare const Native: ReactNativeHealthkitTypeNative;
declare type OnChangeCallback = ({ typeIdentifier, }: {
    typeIdentifier: HKSampleTypeIdentifier;
}) => void;
interface HealthkitEventEmitter extends NativeEventEmitter {
    addListener: (eventType: 'onChange', callback: OnChangeCallback) => EmitterSubscription;
}
export declare const EventEmitter: HealthkitEventEmitter;
export default Native;
