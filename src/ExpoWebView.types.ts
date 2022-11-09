export type ChangeEventPayload = {
  value: string;
};

export type ExpoWebViewProps = {
  style: any;
  url: string;
  onLoad: (event: any) => void;
};
