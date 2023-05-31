import { defineEventHandler } from 'h3';

const startAt = Date.now();
let count = 0;
const pageview = defineEventHandler(() => ({
  pageview: count++,
  startAt
}));

export { pageview as default };
//# sourceMappingURL=pageview.mjs.map
