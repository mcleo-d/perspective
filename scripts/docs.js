/******************************************************************************
 *
 * Copyright (c) 2020, the Perspective Authors.
 *
 * This file is part of the Perspective library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

const {execute} = require("./script_utils.js");

try {
    execute`mkdirp docs/build docs/obj`;
    const project = process.env.PSP_PROJECT;
    if (!project || project === "js") {
        execute`lerna run docs --silent --stream --scope=${process.env.PACKAGE}`;
    }

    if (!project || project === "python") {
        execute`lerna run docs --silent --stream --scope=perspective-python.node`;
    }
} catch (e) {
    console.log(e.message);
    process.exit(1);
}
