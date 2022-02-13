let r = require.context("../views/demo", true, /\.vue$/);
let demoRoutes = [];

// eslint-disable-next-line
r.keys().map((name) => {
  const nameArr = name.split(".");
  const comp = r(name).default;
  demoRoutes.push({
    path: `/demo${nameArr[1]}`,
    component: comp,
    title: comp.name,
  });
});

export default demoRoutes;
