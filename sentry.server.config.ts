import * as Sentry from "@sentry/nuxt";

Sentry.init({
  dsn: "add-your-dsn-here",

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});
