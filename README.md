# Reproduction Steps

- `npm install`
- `npm run test:ui`
- Try to run the single test (hit "play" on the test in the UI mode)
- Notice console errors:

```sh
Error: TypeError: Cannot read properties of undefined (reading '_createTestResult')
    at Be._onTestBegin (http://localhost:58924/trace/watch.575ca3b3.js:1:3028)
    at Be.dispatch (http://localhost:58924/trace/watch.575ca3b3.js:1:1991)
    at window.dispatch (http://localhost:58924/trace/watch.575ca3b3.js:3:296)
    at eval (eval at evaluate (:195:30), <anonymous>:2:10)
    at UtilityScript.evaluate (<anonymous>:197:17)
    at UtilityScript.<anonymous> (<anonymous>:1:44)Error: TypeError: Cannot read properties of undefined (reading 'resultsMap')
    at Be._onStepBegin (http://localhost:58924/trace/watch.575ca3b3.js:1:3534)
    at Be.dispatch (http://localhost:58924/trace/watch.575ca3b3.js:1:2119)
    at window.dispatch (http://localhost:58924/trace/watch.575ca3b3.js:3:296)
    at eval (eval at evaluate (:195:30), <anonymous>:2:10)
    at UtilityScript.evaluate (<anonymous>:197:17)
    at UtilityScript.<anonymous> (<anonymous>:1:44)Error: TypeError: Cannot read properties of undefined (reading 'resultsMap')
    at Be._onStepBegin (http://localhost:58924/trace/watch.575ca3b3.js:1:3534)
    at Be.dispatch (http://localhost:58924/trace/watch.575ca3b3.js:1:2119)
    at window.dispatch (http://localhost:58924/trace/watch.575ca3b3.js:3:296)
    at eval (eval at evaluate (:195:30), <anonymous>:2:10)
    at UtilityScript.evaluate (<anonymous>:197:17)
    at UtilityScript.<anonymous> (<anonymous>:1:44)Error: TypeError: Cannot read properties of undefined (reading 'resultsMap')
    at Be._onStepEnd (http://localhost:58924/trace/watch.575ca3b3.js:1:3884)
    at Be.dispatch (http://localhost:58924/trace/watch.575ca3b3.js:1:2192)
    at window.dispatch (http://localhost:58924/trace/watch.575ca3b3.js:3:296)
    at eval (eval at evaluate (:195:30), <anonymous>:2:10)
    at UtilityScript.evaluate (<anonymous>:197:17)
    at UtilityScript.<anonymous> (<anonymous>:1:44)Error: TypeError: Cannot read properties of undefined (reading 'resultsMap')
    at Be._onStepEnd (http://localhost:58924/trace/watch.575ca3b3.js:1:3884)
    at Be.dispatch (http://localhost:58924/trace/watch.575ca3b3.js:1:2192)
    at window.dispatch (http://localhost:58924/trace/watch.575ca3b3.js:3:296)
    at eval (eval at evaluate (:195:30), <anonymous>:2:10)
    at UtilityScript.evaluate (<anonymous>:197:17)
    at UtilityScript.<anonymous> (<anonymous>:1:44)Error: TypeError: Cannot read properties of undefined (reading 'resultsMap')
    at Be._onStepBegin (http://localhost:58924/trace/watch.575ca3b3.js:1:3534)
    at Be.dispatch (http://localhost:58924/trace/watch.575ca3b3.js:1:2119)
    at window.dispatch (http://localhost:58924/trace/watch.575ca3b3.js:3:296)
    at eval (eval at evaluate (:195:30), <anonymous>:2:10)
    at UtilityScript.evaluate (<anonymous>:197:17)
    at UtilityScript.<anonymous> (<anonymous>:1:44)Error: TypeError: Cannot read properties of undefined (reading 'resultsMap')
    at Be._onStepEnd (http://localhost:58924/trace/watch.575ca3b3.js:1:3884)
    at Be.dispatch (http://localhost:58924/trace/watch.575ca3b3.js:1:2192)
    at window.dispatch (http://localhost:58924/trace/watch.575ca3b3.js:3:296)
    at eval (eval at evaluate (:195:30), <anonymous>:2:10)
    at UtilityScript.evaluate (<anonymous>:197:17)
    at UtilityScript.<anonymous> (<anonymous>:1:44)Error: TypeError: Cannot read properties of undefined (reading 'resultsMap')
    at Be._onStepBegin (http://localhost:58924/trace/watch.575ca3b3.js:1:3534)
    at Be.dispatch (http://localhost:58924/trace/watch.575ca3b3.js:1:2119)
    at window.dispatch (http://localhost:58924/trace/watch.575ca3b3.js:3:296)
    at eval (eval at evaluate (:195:30), <anonymous>:2:10)
    at UtilityScript.evaluate (<anonymous>:197:17)
    at UtilityScript.<anonymous> (<anonymous>:1:44)Error: TypeError: Cannot read properties of undefined (reading 'resultsMap')
    at Be._onStepEnd (http://localhost:58924/trace/watch.575ca3b3.js:1:3884)
    at Be.dispatch (http://localhost:58924/trace/watch.575ca3b3.js:1:2192)
    at window.dispatch (http://localhost:58924/trace/watch.575ca3b3.js:3:296)
    at eval (eval at evaluate (:195:30), <anonymous>:2:10)
    at UtilityScript.evaluate (<anonymous>:197:17)
    at UtilityScript.<anonymous> (<anonymous>:1:44)Error: TypeError: Cannot read properties of undefined (reading 'resultsMap')
    at Be._onStepBegin (http://localhost:58924/trace/watch.575ca3b3.js:1:3534)
    at Be.dispatch (http://localhost:58924/trace/watch.575ca3b3.js:1:2119)
    at window.dispatch (http://localhost:58924/trace/watch.575ca3b3.js:3:296)
    at eval (eval at evaluate (:195:30), <anonymous>:2:10)
    at UtilityScript.evaluate (<anonymous>:197:17)
    at UtilityScript.<anonymous> (<anonymous>:1:44)Error: TypeError: Cannot read properties of undefined (reading 'resultsMap')
    at Be._onStepBegin (http://localhost:58924/trace/watch.575ca3b3.js:1:3534)
    at Be.dispatch (http://localhost:58924/trace/watch.575ca3b3.js:1:2119)
    at window.dispatch (http://localhost:58924/trace/watch.575ca3b3.js:3:296)
    at eval (eval at evaluate (:195:30), <anonymous>:2:10)
    at UtilityScript.evaluate (<anonymous>:197:17)
    at UtilityScript.<anonymous> (<anonymous>:1:44)Error: TypeError: Cannot read properties of undefined (reading 'resultsMap')
    at Be._onStepEnd (http://localhost:58924/trace/watch.575ca3b3.js:1:3884)
    at Be.dispatch (http://localhost:58924/trace/watch.575ca3b3.js:1:2192)
    at window.dispatch (http://localhost:58924/trace/watch.575ca3b3.js:3:296)
    at eval (eval at evaluate (:195:30), <anonymous>:2:10)
    at UtilityScript.evaluate (<anonymous>:197:17)
    at UtilityScript.<anonymous> (<anonymous>:1:44)Error: TypeError: Cannot read properties of undefined (reading 'resultsMap')
    at Be._onStepEnd (http://localhost:58924/trace/watch.575ca3b3.js:1:3884)
    at Be.dispatch (http://localhost:58924/trace/watch.575ca3b3.js:1:2192)
    at window.dispatch (http://localhost:58924/trace/watch.575ca3b3.js:3:296)
    at eval (eval at evaluate (:195:30), <anonymous>:2:10)
    at UtilityScript.evaluate (<anonymous>:197:17)
    at UtilityScript.<anonymous> (<anonymous>:1:44)Error: TypeError: Cannot read properties of undefined (reading 'resultsMap')
    at Be._onTestEnd (http://localhost:58924/trace/watch.575ca3b3.js:1:3294)
    at Be.dispatch (http://localhost:58924/trace/watch.575ca3b3.js:1:2055)
    at window.dispatch (http://localhost:58924/trace/watch.575ca3b3.js:3:296)
    at eval (eval at evaluate (:195:30), <anonymous>:2:10)
    at UtilityScript.evaluate (<anonymous>:197:17)
    at UtilityScript.<anonymous> (<anonymous>:1:44)
```