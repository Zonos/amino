export const jsonParse = <DataType extends unknown>(data: string | null) => {
  if (data) {
    try {
      const json = JSON.parse<DataType>(data);
      return json;
    } catch (e) {
      return null;
    }
  }
  return null;
};
