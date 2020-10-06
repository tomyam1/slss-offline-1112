# slss-offline-1112
> Reproduction for https://github.com/dherault/serverless-offline/issues/1112

1. `npm run start`
2. Open http://localhost:4555/dev/hello

## 6.6.0

Works!

## 6.7.0

```shell script
Error: Module did not self-register.
    at Object.Module._extensions..node (internal/modules/cjs/loader.js:1003:18)
    at Module.load (internal/modules/cjs/loader.js:812:32)
    at Function.Module._load (internal/modules/cjs/loader.js:724:14)
    at Module.require (internal/modules/cjs/loader.js:849:19)
    at require (internal/modules/cjs/helpers.js:74:18)
    at Object.<anonymous> (c:\code\slss-offline-1112\node_modules\canvas\lib\bindings.js:3:18)
    at Module._compile (internal/modules/cjs/loader.js:956:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)
    at Module.load (internal/modules/cjs/loader.js:812:32)
    at Function.Module._load (internal/modules/cjs/loader.js:724:14)
    at Module.require (internal/modules/cjs/loader.js:849:19)
    at require (internal/modules/cjs/helpers.js:74:18)
    at Object.<anonymous> (c:\code\slss-offline-1112\node_modules\canvas\lib\canvas.js:9:18)
    at Module._compile (internal/modules/cjs/loader.js:956:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)
    at Module.load (internal/modules/cjs/loader.js:812:32)
    at Function.Module._load (internal/modules/cjs/loader.js:724:14)
    at Module.require (internal/modules/cjs/loader.js:849:19)
    at require (internal/modules/cjs/helpers.js:74:18)
    at Object.<anonymous> (c:\code\slss-offline-1112\node_modules\canvas\index.js:1:16)
    at Module._compile (internal/modules/cjs/loader.js:956:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)
    at Module.load (internal/modules/cjs/loader.js:812:32)
    at Function.Module._load (internal/modules/cjs/loader.js:724:14)
    at Module.require (internal/modules/cjs/loader.js:849:19)
    at require (internal/modules/cjs/helpers.js:74:18)
    at hello (c:\code\slss-offline-1112\handler.js:4:5)
    at InProcessRunner.run (c:\code\slss-offline-1112\node_modules\serverless-offline\dist\lambda\handler-runner\in-process-runner\InProcessRunner.js:178:16)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
    at LambdaFunction.runHandler (c:\code\slss-offline-1112\node_modules\serverless-offline\dist\lambda\LambdaFunction.js:325:20)
    at hapiHandler (c:\code\slss-offline-1112\node_modules\serverless-offline\dist\events\http\HttpServer.js:521:18)
    at module.exports.internals.Manager.execute (c:\code\slss-offline-1112\node_modules\@hapi\hapi\lib\toolkit.js:45:28)
    at Object.internals.handler (c:\code\slss-offline-1112\node_modules\@hapi\hapi\lib\handler.js:46:20)
    at exports.execute (c:\code\slss-offline-1112\node_modules\@hapi\hapi\lib\handler.js:31:20)
    at Request._lifecycle (c:\code\slss-offline-1112\node_modules\@hapi\hapi\lib\request.js:312:32)
    at Request._execute (c:\code\slss-offline-1112\node_modules\@hapi\hapi\lib\request.js:221:9)
```

## 6.8.0

```shell script
Error: Module did not self-register.
    at Object.Module._extensions..node (internal/modules/cjs/loader.js:1003:18)
    at Module.load (internal/modules/cjs/loader.js:812:32)
    at Function.Module._load (internal/modules/cjs/loader.js:724:14)
    at Module.require (internal/modules/cjs/loader.js:849:19)
    at require (internal/modules/cjs/helpers.js:74:18)
    at Object.<anonymous> (c:\code\slss-offline-1112\node_modules\canvas\lib\bindings.js:3:18)
    at Module._compile (internal/modules/cjs/loader.js:956:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)
    at Module.load (internal/modules/cjs/loader.js:812:32)
    at Function.Module._load (internal/modules/cjs/loader.js:724:14)
    at Module.require (internal/modules/cjs/loader.js:849:19)
    at require (internal/modules/cjs/helpers.js:74:18)
    at Object.<anonymous> (c:\code\slss-offline-1112\node_modules\canvas\lib\canvas.js:9:18)
    at Module._compile (internal/modules/cjs/loader.js:956:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)
    at Module.load (internal/modules/cjs/loader.js:812:32)
    at Function.Module._load (internal/modules/cjs/loader.js:724:14)
    at Module.require (internal/modules/cjs/loader.js:849:19)
    at require (internal/modules/cjs/helpers.js:74:18)
    at Object.<anonymous> (c:\code\slss-offline-1112\node_modules\canvas\index.js:1:16)
    at Module._compile (internal/modules/cjs/loader.js:956:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)
    at Module.load (internal/modules/cjs/loader.js:812:32)
    at Function.Module._load (internal/modules/cjs/loader.js:724:14)
    at Module.require (internal/modules/cjs/loader.js:849:19)
    at require (internal/modules/cjs/helpers.js:74:18)
    at hello (c:\code\slss-offline-1112\handler.js:4:5)
    at InProcessRunner.run (c:\code\slss-offline-1112\node_modules\serverless-offline\dist\lambda\handler-runner\in-process-runner\InProcessRunner.js:178:16)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
    at LambdaFunction.runHandler (c:\code\slss-offline-1112\node_modules\serverless-offline\dist\lambda\LambdaFunction.js:325:20)
    at hapiHandler (c:\code\slss-offline-1112\node_modules\serverless-offline\dist\events\http\HttpServer.js:521:18)
    at module.exports.internals.Manager.execute (c:\code\slss-offline-1112\node_modules\@hapi\hapi\lib\toolkit.js:45:28)
    at Object.internals.handler (c:\code\slss-offline-1112\node_modules\@hapi\hapi\lib\handler.js:46:20)
    at exports.execute (c:\code\slss-offline-1112\node_modules\@hapi\hapi\lib\handler.js:31:20)
    at Request._lifecycle (c:\code\slss-offline-1112\node_modules\@hapi\hapi\lib\request.js:312:32)
    at Request._execute (c:\code\slss-offline-1112\node_modules\@hapi\hapi\lib\request.js:221:9)
```