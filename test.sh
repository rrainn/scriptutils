#!/bin/bash
if [ "$TARGET" = "test-browser" ]; then
   if [ "$TRAVIS_PULL_REQUEST" = "false" ]; then
      ./node_modules/.bin/gulp browser
      touch browsertestoutput.txt
      ./node_modules/.bin/browserstack-runner | tee browsertestoutput.txt
      
      if grep -q "All tests done, failures: 0." "browsertestoutput.txt";
      then
         echo "Test Success"
         exit 0
      else
         echo "Test Failed"
         exit 1
      fi
   else
      echo "Not running browser tests on pull requests"
   fi
else
   ./node_modules/.bin/gulp node-test && ./node_modules/.bin/nyc ./node_modules/.bin/mocha
fi