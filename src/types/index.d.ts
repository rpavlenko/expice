export {};

declare global {
  interface Window {
    __theme: string;
    __setPreferredTheme: (arg0: string) => void;
  }
}
