const getError = (error) => (error instanceof Error ? error.message : error);

const getResult = (result) => (typeof result == 'string' ? result : translateToResponse(result));

const getBody = (error, result) => (error == null ? getResult(result) : getError(error));

const prepareResponse = (statusCode, error, result) => ({
    statusCode,
    body: getBody(error, result),
});

function translateToResponse(result) {
    return JSON.stringify(result);
}

module.exports = { prepareResponse };
