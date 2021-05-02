import type { HKAuthorizationRequestStatus, HKBiologicalSex, HKBloodType, HKCategorySampleRaw, HKCategoryTypeIdentifier, HKCategoryValueForIdentifier, HKCharacteristicTypeIdentifier, HKCorrelationRaw, HKCorrelationTypeIdentifier, HKFitzpatrickSkinType, MetadataMapperForCategoryIdentifier, HKQuantitySampleRaw, HKQuantityTypeIdentifier, HKSampleTypeIdentifier, HKStatisticsOptions, HKUnit, HKUnitSI, HKUnitSIPrefix, HKWheelchairUse, HKWorkoutActivityType, HKWorkoutMetadata, HKWorkoutRaw, MetadataMapperForCorrelationIdentifier, MetadataMapperForQuantityIdentifier, QueryStatisticsResponseRaw, HKUpdateFrequency } from './native-types';
export interface QueryWorkoutsOptions<TEnergy extends HKUnit, TDistance extends HKUnit> extends GenericQueryOptions {
    energyUnit?: TEnergy;
    distanceUnit?: TDistance;
}
export interface HKCategorySample<T extends HKCategoryTypeIdentifier = HKCategoryTypeIdentifier> extends Omit<HKCategorySampleRaw<T>, 'startDate' | 'endDate'> {
    startDate: Date;
    endDate: Date;
}
export declare type GenericQueryOptions = {
    from?: Date;
    to?: Date;
    limit?: Number;
    ascending?: boolean;
};
export interface HKWorkout<TEnergy extends HKUnit = HKUnit, TDistance extends HKUnit = HKUnit> extends Omit<HKWorkoutRaw<TEnergy, TDistance>, 'startDate' | 'endDate'> {
    startDate: Date;
    endDate: Date;
}
export interface HKQuantitySample<TIdentifier extends HKQuantityTypeIdentifier = HKQuantityTypeIdentifier, TUnit extends HKUnit = HKUnit> extends Omit<HKQuantitySampleRaw<TIdentifier, TUnit>, 'startDate' | 'endDate'> {
    startDate: Date;
    endDate: Date;
}
export interface QueryStatisticsResponse<T extends HKUnit = HKUnit> extends Omit<QueryStatisticsResponseRaw<T>, 'mostRecentQuantityDateInterval'> {
    mostRecentQuantityDateInterval?: {
        from: Date;
        to: Date;
    };
}
declare type UnsubscribeFunction = () => Promise<boolean>;
export declare type IsHealthDataAvailableFn = () => Promise<boolean>;
export declare type GetBloodTypeFn = () => Promise<HKBloodType>;
export declare type GetDateOfBirthFn = () => Promise<Date>;
export declare type GetBiologicalSexFn = () => Promise<HKBiologicalSex>;
export declare type GetWheelchairUseFn = () => Promise<HKWheelchairUse>;
export declare type GetFitzpatrickSkinTypeFn = () => Promise<HKFitzpatrickSkinType>;
export declare type QueryStatisticsForQuantityFn = <TUnit extends HKUnit>(identifier: HKQuantityTypeIdentifier, options: HKStatisticsOptions[], from: Date, to?: Date, unit?: TUnit) => Promise<QueryStatisticsResponse<TUnit>>;
export declare type QueryWorkoutsFn = <TEnergy extends HKUnit, TDistance extends HKUnit>(options: QueryWorkoutsOptions<TEnergy, TDistance>) => Promise<HKWorkout<TEnergy, TDistance>[]>;
export declare type AuthorizationStatusForFn = (type: HKSampleTypeIdentifier | HKCharacteristicTypeIdentifier) => Promise<boolean>;
export declare type QueryCategorySamplesFn = <T extends HKCategoryTypeIdentifier>(identifier: T, options: GenericQueryOptions) => Promise<HKCategorySample<T>[]>;
export declare type GetRequestStatusForAuthorizationFn = (read: (HKCharacteristicTypeIdentifier | HKSampleTypeIdentifier)[], write?: HKSampleTypeIdentifier[]) => Promise<HKAuthorizationRequestStatus>;
export declare type RequestAuthorizationFn = (read: (HKCharacteristicTypeIdentifier | HKSampleTypeIdentifier)[], write?: HKSampleTypeIdentifier[]) => Promise<boolean>;
export declare type SaveQuantitySampleFn = <TUnit extends HKQuantityTypeIdentifier>(identifier: TUnit, unit: HKUnit, value: number, options?: {
    start?: Date;
    end?: Date;
    metadata?: MetadataMapperForQuantityIdentifier<TUnit>;
}) => Promise<boolean>;
export declare type QueryQuantitySamplesFn = <TIdentifier extends HKQuantityTypeIdentifier, TUnit extends HKUnit = HKUnit>(identifier: TIdentifier, options: GenericQueryOptions & {
    unit?: TUnit;
}) => Promise<HKQuantitySample<TIdentifier, TUnit>[]>;
export declare type SubscribeToChangesFn = (identifier: HKSampleTypeIdentifier, callback: () => void) => Promise<UnsubscribeFunction>;
export declare type SaveCategorySampleFn = <T extends HKCategoryTypeIdentifier>(identifier: T, value: HKCategoryValueForIdentifier<T>, options?: {
    start?: Date;
    end?: Date;
    metadata?: MetadataMapperForCategoryIdentifier<T>;
}) => Promise<boolean>;
export declare type GetMostRecentCategorySampleFn = <T extends HKCategoryTypeIdentifier>(identifier: T) => Promise<HKCategorySample<T> | null>;
export declare type MostRecentCategorySampleHook = <T extends HKCategoryTypeIdentifier>(identifier: T) => HKCategorySample<T> | null;
export declare type MostRecentCorrelationSampleHook = <T extends HKCorrelationTypeIdentifier>(identifer: T) => HKCorrelation<T> | null;
export declare type GetMostRecentQuantitySampleFn = <TIdentifier extends HKQuantityTypeIdentifier, TUnit extends HKUnit>(identifier: TIdentifier, unit?: TUnit) => Promise<HKQuantitySample<TIdentifier, TUnit>>;
export declare type MostRecentQuantitySampleHook = <TIdentifier extends HKQuantityTypeIdentifier, TUnit extends HKUnit>(identifier: TIdentifier, unit?: TUnit) => HKQuantitySample<TIdentifier, TUnit> | null;
export declare type GetMostRecentWorkoutFn = <TEnergy extends HKUnit, TDistance extends HKUnit>(options?: Pick<QueryWorkoutsOptions<TEnergy, TDistance>, 'distanceUnit' | 'energyUnit'>) => Promise<HKWorkout<TEnergy, TDistance> | null>;
export declare type MostRecentWorkoutHook = <TEnergy extends HKUnit, TDistance extends HKUnit>(options?: Pick<QueryWorkoutsOptions<TEnergy, TDistance>, 'distanceUnit' | 'energyUnit'>) => HKWorkout<TEnergy, TDistance> | null;
export declare type GetPreferredUnitsFn = (identifiers: HKQuantityTypeIdentifier[]) => Promise<HKUnit[]>;
export declare type GetPreferredUnitFn = (identifier: HKQuantityTypeIdentifier) => Promise<HKUnit>;
export declare type SaveCorrelationSampleFn = <TIdentifier extends HKCorrelationTypeIdentifier>(typeIdentifier: TIdentifier, samples: (Omit<HKCategorySample, 'startDate' | 'endDate' | 'uuid' | 'device'> | Omit<HKQuantitySample, 'startDate' | 'endDate' | 'uuid' | 'device'>)[], options?: {
    start?: Date;
    end?: Date;
    metadata?: MetadataMapperForCorrelationIdentifier<TIdentifier>;
}) => Promise<boolean>;
export declare type SaveWorkoutSampleFn = (typeIdentifier: HKWorkoutActivityType, quantities: Omit<HKQuantitySample, 'startDate' | 'endDate' | 'uuid' | 'device'>[], start: Date, options?: {
    end?: Date;
    metadata?: HKWorkoutMetadata;
}) => Promise<boolean>;
export interface HKCorrelation<TIdentifier extends HKCorrelationTypeIdentifier> extends Omit<HKCorrelationRaw<TIdentifier>, 'startDate' | 'endDate' | 'objects'> {
    objects: (HKQuantitySample | HKCategorySample)[];
    startDate: Date;
    endDate: Date;
}
export declare type QueryCorrelationSamplesFn = <TIdentifier extends HKCorrelationTypeIdentifier>(typeIdentifier: TIdentifier, options: Omit<GenericQueryOptions, 'limit' | 'ascending'>) => Promise<HKCorrelation<TIdentifier>[]>;
export declare type SubscribeToChangesHook = <TIdentifier extends HKSampleTypeIdentifier>(identifier: TIdentifier, onChange: () => void, runInitialUpdate?: boolean) => void;
export declare type ReactNativeHealthkit = {
    authorizationStatusFor: AuthorizationStatusForFn;
    getBiologicalSex: GetBiologicalSexFn;
    getBloodType: GetBloodTypeFn;
    getDateOfBirth: GetDateOfBirthFn;
    getFitzpatrickSkinType: GetFitzpatrickSkinTypeFn;
    getMostRecentQuantitySample: GetMostRecentQuantitySampleFn;
    getMostRecentCategorySample: GetMostRecentCategorySampleFn;
    getMostRecentWorkout: GetMostRecentWorkoutFn;
    getPreferredUnit: GetPreferredUnitFn;
    getPreferredUnits: GetPreferredUnitsFn;
    getRequestStatusForAuthorization: GetRequestStatusForAuthorizationFn;
    getWheelchairUse: GetWheelchairUseFn;
    buildUnitWithPrefix: (prefix: HKUnitSIPrefix, unit: HKUnitSI) => HKUnit;
    isHealthDataAvailable: IsHealthDataAvailableFn;
    queryCategorySamples: QueryCategorySamplesFn;
    queryQuantitySamples: QueryQuantitySamplesFn;
    queryStatisticsForQuantity: QueryStatisticsForQuantityFn;
    queryWorkouts: QueryWorkoutsFn;
    queryCorrelationSamples: QueryCorrelationSamplesFn;
    requestAuthorization: RequestAuthorizationFn;
    saveCategorySample: SaveCategorySampleFn;
    saveQuantitySample: SaveQuantitySampleFn;
    saveCorrelationSample: SaveCorrelationSampleFn;
    saveWorkoutSample: SaveWorkoutSampleFn;
    enableBackgroundDelivery: (typeIdentifier: HKSampleTypeIdentifier, updateFrequency: HKUpdateFrequency) => Promise<boolean>;
    disableBackgroundDelivery: (typeIdentifier: HKSampleTypeIdentifier) => Promise<boolean>;
    disableAllBackgroundDelivery: () => Promise<boolean>;
    subscribeToChanges: SubscribeToChangesFn;
    useMostRecentWorkout: MostRecentWorkoutHook;
    useMostRecentCategorySample: MostRecentCategorySampleHook;
    useMostRecentQuantitySample: MostRecentQuantitySampleHook;
    useSubscribeToChanges: SubscribeToChangesHook;
};
export {};
