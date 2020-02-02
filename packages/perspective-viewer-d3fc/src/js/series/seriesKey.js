/******************************************************************************
 *
 * Copyright (c) 2020, the Perspective Authors.
 *
 * This file is part of the Perspective library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

export function groupFromKey(key) {
    return key
        .split("|")
        .slice(0, -1)
        .join("|");
}
