#!/bin/bash
if [ "$TARGET" = "test-browser" ]; then
   if [ "$TRAVIS_PULL_REQUEST" = "false" ]; then
      ./node_modules/.bin/browserstack-runner
   else
      echo "Not running browser tests on pull requests"
   fi
else
   ./node_modules/.bin/gulp node-test && ./node_modules/.bin/nyc ./node_modules/.bin/mocha
fi