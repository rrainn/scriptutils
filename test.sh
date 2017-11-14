#!/bin/bash
if [ "$TARGET" = "test-browser" ]; then
   ./node_modules/.bin/browserstack-runner
else
   ./node_modules/.bin/gulp node-test && ./node_modules/.bin/nyc ./node_modules/.bin/mocha
fi