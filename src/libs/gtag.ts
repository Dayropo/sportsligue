export const pageview = (ga_id: string, url: string) => {
  window.gtag("config", ga_id, {
    page_path: url,
  })
}
