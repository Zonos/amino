import { format, resolveConfig, resolveConfigFile } from 'prettier';

/**
 * Format css file using prettier api
 * @param content File content to format
 * */
export const formatTS = async (content: string) => {
  const configFile = await resolveConfigFile();
  const options = (await resolveConfig(configFile || '')) || {};
  return format(content, {
    ...options,
    parser: 'typescript',
  });
};
