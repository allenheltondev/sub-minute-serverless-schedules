export const handler = async (event) => {
  let source = event.source;
  if (!source) {
    const record = JSON.parse(event.Records[0]);
    source = record.source;
  }
  const logRecord = {
    source: source,
    timestamp: new Date().toISOString()
  };

  console.log(JSON.stringify(logRecord));

  return { success: true };
};
