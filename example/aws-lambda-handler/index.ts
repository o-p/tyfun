import has from 'tyfun/has';

const handler: AWSLambda.S3Handler = async (
  event: AWSLambda.S3Event,
  context: AWSLambda.Context,
  callback: AWSLambda.Callback
) => {
  const hasRecord = has('record');
  if (hasRecord(event)) {
    console.log('Has Record');
    return callback(null, 'has record');
  }
  console.log('Non Record');
  return callback('no-record');
};

export { handler };
