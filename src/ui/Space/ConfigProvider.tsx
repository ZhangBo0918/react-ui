import { PropsWithChildren, createContext } from 'react';
import { SizeType } from '.';

export type ConfigContextType = {
  space?: {
    size?: SizeType
  }
}

interface ConfigProviderProps extends PropsWithChildren<ConfigContextType>{
}
export function ConfigProvider(props: ConfigProviderProps) {
  const { space, children } = props;
  return <ConfigContext.Provider value={{space}}>{children}</ConfigContext.Provider>
}

export const ConfigContext = createContext<ConfigContextType>({});