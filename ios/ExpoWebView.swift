import ExpoModulesCore
import WebKit

class ExpoWebviewView: ExpoView, WKNavigationDelegate {
  let webView = WKWebView()
  let onLoad = EventDispatcher()

  required init(appContext: AppContext? = nil) {
    super.init(appContext: appContext)
    clipsToBounds = true
    webView.navigationDelegate = self
    addSubview(webView)
  }

  override func layoutSubviews() {
    webView.frame = bounds
  }

  func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
    if let url = webView.url {
      onLoad([
        "url": url.absoluteString
      ])
    }
  }
}
