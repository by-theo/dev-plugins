export let useReactNavigationDevTools: typeof import('./useReactNavigationDevTools').useReactNavigationDevTools;

if (process.env.NODE_ENV !== 'production') {
  useReactNavigationDevTools = require('./useReactNavigationDevTools').useReactNavigationDevTools;
} else {
  useReactNavigationDevTools = () => {};
}
