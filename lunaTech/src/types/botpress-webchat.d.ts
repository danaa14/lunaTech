export {};

declare global {
  interface Window {
    botpressWebChat?: {
      init?: (config?: any) => void;
      sendEvent: (event: { type: string; payload?: any }) => void;
      show?: () => void;
      hide?: () => void;
      toggle?: () => void;
      mergeConfig?: (cfg: any) => void;
      destroy?: () => void;
      onEvent?: (cb: (event: any) => void) => void;
    };
  }
}
