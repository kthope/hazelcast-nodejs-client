/*
 * Copyright (c) 2008-2022, Hazelcast, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * FieldKind for Compact.
 * It is designed to be used with {@link GenericRecord.getFieldKind} API.
 *
 * Note that actual ids in {@link FieldType} and {@link FieldKind} are not matching.
 * {@link FieldType} is the old API for Portable only and only meant to be used with
 * {@link PortableReader.getFieldType} API.
 *
 * This API is currently in Beta and can change at any time.
 */
export enum FieldKind {
    BOOLEAN = 0,
    ARRAY_OF_BOOLEAN = 1,
    INT8 = 2,
    ARRAY_OF_INT8 = 3,
    // char and array of char are not here because portable generic records is not supported yet
    // CHAR = 4,
    // ARRAY_OF_CHAR = 5,
    INT16 = 6,
    ARRAY_OF_INT16 = 7,
    INT32 = 8,
    ARRAY_OF_INT32 = 9,
    INT64 = 10,
    ARRAY_OF_INT64 = 11,
    FLOAT32 = 12,
    ARRAY_OF_FLOAT32 = 13,
    FLOAT64 = 14,
    ARRAY_OF_FLOAT64 = 15,
    STRING = 16,
    ARRAY_OF_STRING = 17,
    DECIMAL = 18,
    ARRAY_OF_DECIMAL = 19,
    TIME = 20,
    ARRAY_OF_TIME = 21,
    DATE = 22,
    ARRAY_OF_DATE = 23,
    TIMESTAMP = 24,
    ARRAY_OF_TIMESTAMP = 25,
    TIMESTAMP_WITH_TIMEZONE = 26,
    ARRAY_OF_TIMESTAMP_WITH_TIMEZONE = 27,
    COMPACT = 28,
    ARRAY_OF_COMPACT = 29,
    // portable and array of portable are not here because portable generic records is not supported yet
    // PORTABLE = 30,
    // ARRAY_OF_PORTABLE = 31,
    NULLABLE_BOOLEAN = 32,
    ARRAY_OF_NULLABLE_BOOLEAN = 33,
    NULLABLE_INT8 = 34,
    ARRAY_OF_NULLABLE_INT8 = 35,
    NULLABLE_INT16 = 36,
    ARRAY_OF_NULLABLE_INT16 = 37,
    NULLABLE_INT32 = 38,
    ARRAY_OF_NULLABLE_INT32 = 39,
    NULLABLE_INT64 = 40,
    ARRAY_OF_NULLABLE_INT64 = 41,
    NULLABLE_FLOAT32 = 42,
    ARRAY_OF_NULLABLE_FLOAT32 = 43,
    NULLABLE_FLOAT64 = 44,
    ARRAY_OF_NULLABLE_FLOAT64 = 45,
    NOT_AVAILABLE = 46,
}
