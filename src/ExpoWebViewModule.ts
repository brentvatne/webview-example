import {
  requireNativeModule,
  requireNativeViewManager,
} from "expo-modules-core";
import { ExpoWebViewProps } from "./ExpoWebView.types";

const NativeModule = requireNativeModule("ExpoWebView");

const NativeView: React.ComponentType<ExpoWebViewProps> =
  requireNativeViewManager("ExpoWebView");

export default NativeModule;
export { NativeView as ExpoWebView };