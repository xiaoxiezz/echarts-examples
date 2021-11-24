export const EXAMPLE_CATEGORIES = [
  'line',
  'bar',
  'pie',
  'scatter',
  'map',
  'candlestick',
  'radar',
  'boxplot',
  'heatmap',
  'graph',
  'lines',
  'tree',
  'treemap',
  'sunburst',
  'parallel',
  'sankey',
  'funnel',
  'gauge',
  'pictorialBar',
  'themeRiver',
  'calendar',
  'custom',

  'dataset',
  'dataZoom',
  'drag',
  'rich',

  'globe',
  'bar3D',
  'scatter3D',
  'surface',
  'map3D',
  'lines3D',
  'line3D',
  'scatterGL',
  'linesGL',
  'flowGL',
  'graphGL'
];

export const THEMES = {
  default: [
    '#5470c6',
    '#91cc75',
    '#fac858',
    '#ee6666',
    '#73c0de',
    '#3ba272',
    '#fc8452',
    '#9a60b4',
    '#ea7ccc'
  ],
  dark: [
    '#4992ff',
    '#7cffb2',
    '#fddd60',
    '#ff6e76',
    '#58d9f9',
    '#05c091',
    '#ff8a45',
    '#8d48e3',
    '#dd79ff'
  ]
};

export const BLACK_MAP = (function (list) {
  const map = {};
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = 1;
  }
  return location.href.indexOf('github.io') >= 0 ? {} : map;
})([
  'effectScatter-map',
  'geo-lines',
  'geo-map-scatter',
  'heatmap-map',
  'lines-airline',
  'map-china',
  'map-china-dataRange',
  'map-labels',
  'map-locate',
  'map-province',
  'map-world',
  'map-world-dataRange',
  'scatter-map',
  'scatter-map-brush',
  'scatter-weibo',
  'scatter-world-population',
  'geo3d',
  'geo3d-with-different-height',
  'globe-country-carousel',
  'globe-with-echarts-surface',
  'map3d-alcohol-consumption',
  'map3d-wood-map',
  'scattergl-weibo'
]);

const URL_PARAMS = {};
(location.search || '')
  .substr(1)
  .split('&')
  .forEach(function (item) {
    const kv = item.split('=');
    URL_PARAMS[kv[0]] = kv[1];
  });

export { URL_PARAMS };

export const SCRIPT_URLS = {
  echartsMinJS:
    '/echarts5/cdn/echarts.min.js?v={{version}}',
  echartsDir: '/echarts5/cdn/echarts',

  localEChartsMinJS: 'http://localhost/echarts/dist/echarts.js',
  localEChartsDir: 'http://localhost/echarts',

  echartsStatMinJS:
    '/echarts5/cdn/ecStat.min.js',
  // echartsGLMinJS: 'http://localhost/echarts-gl/dist/echarts-gl.min.js',
  echartsGLMinJS:
    '/echarts5/cdn/echarts-gl.min.js',
  datGUIMinJS:
    '/echarts5/cdn/dat.gui.min.js',
  monacoDir: '/echarts5/cdn/monaco',
  aceDir: '/echarts5/cdn/ace',

  prettierDir: '/echarts5/cdn/prettier'
};
