import { buildLegacyTheme } from "sanity"

const props = {
  "--white": "#fff",
  "--black": "#1a1a1a",
  "--brand": "#f7ab0a",
  "--red": "#db4437",
  "--yellow": "#f4b400",
  "--green": "#0f9d58",
}

export const myTheme = buildLegacyTheme({
  "--black": props["--black"],
  "--white": props["--white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--black"],
  "--component-text-color": props["--white"],

  "--brand-primary": props["--brand"],

  "--default-button-color": "#666",
  "--default-button-primary-color": props["--brand"],
  "--default-button-success-color": props["--green"],
  "--default-button-warning-color": props["--yellow"],
  "--default-button-danger-color": props["--red"],

  "--state-info-color": props["--brand"],
  "--state-success-color": props["--green"],
  "--state-warning-color": props["--yellow"],
  "--state-danger-color": props["--red"],

  "--main-navigation-color": props["--black"],
  "--main-navigation-color--inverted": props["--white"],

  "--focus-color": props["--brand"],
})
