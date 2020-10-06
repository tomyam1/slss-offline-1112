'use strict'

exports.hello = async function hello() {
    require('canvas');
    return {
        body: JSON.stringify({ foo: 'bar', IS_OFFLINE: process.env.IS_OFFLINE }),
        statusCode: 200,
    }
}