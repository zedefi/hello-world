const { prepareResponse } = require('./response-helper');

const handler = async (event, context) => {
    console.info('req', event);
    let response = null;

    try {
        const result = 'hello!'

        response = prepareResponse(200, null, result);
    } catch (error) {
        console.error(error);
    } finally {
        console.info('resp', response);

        return Promise.resolve(response);
    }
};

exports.handler = handler;
