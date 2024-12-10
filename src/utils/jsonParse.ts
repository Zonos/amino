export const jsonParse = <DataType>(data: string | null) => {
  if (data) {
    try {
      const json = JSON.parse<DataType>(data);
      return json;
    } catch {
      return null;
    }
  }
  return null;
};
