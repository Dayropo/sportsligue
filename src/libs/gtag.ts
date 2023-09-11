export const pageview = (ga_id: string, url: string) => {
  if (typeof window !== "undefined") {
    window.gtag("config", ga_id, {
      page_path: url,
    })
  }
}
