import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  history:{ type: 'hash'},
  ignoreMomentLocale: true,
  publicPath: "./",
  chunks: ['react', 'react-dom', 'antdesigns', 'vendors.umi', 'umi'],
  routes: [
    {
      path: '/',
      component: '@/layouts',
      routes: [
        { exact: true, path: '/', redirect: '/home/0' },
        { exact: true, path: '/login', component: '@/pages/login' },
        { exact: true, path: '/register', component: '@/pages/register' },
        { exact: true, path: '/home/:id', component: '@/pages/home' },
        { exact: true, path: '/topic/:id', component: '@/pages/topicDetail' },
        { exact: true, path: '/member/:id', component: '@/pages/memberDetail'}
      ],
    },
  ],
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:7001/api/v2',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    },
  },
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
    // generate stats file while ANALYZE_DUMP exist
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed', // stat  // gzip
  },
  chainWebpack: function (config, { webpack }) {
       // webpack 拆包 
       config.optimization.splitChunks({
        chunks: 'all', // 提取 chunks 的时候从哪里提取，如果为 all 那么不管是不是 async 的都可能被抽出 chunk，为 initial 则会从非 async 里面提取。
        automaticNameDelimiter: '.', // 文件名分隔符
        name: true,  // chunk 的名称，如果设置为固定的字符串那么所有的 chunk 都会被合并成一个，这就是为什么 umi 默认只有一个 vendors.async.js。
        minSize: 30000, // byte, == 30 kb，越大那么单个文件越大，chunk 数就会变少（针对于提取公共 chunk 的时候，不管再大也不会把动态加载的模块合并到初始化模块中）当这个值很大的时候就不会做公共部分的抽取了
        maxSize: 0, // 文件的最大尺寸，优先级：maxInitialRequest/maxAsyncRequests < maxSize < minSize，需要注意的是这个如果配置了，umi.js 就可能被拆开，最后构建出来的 chunkMap 中可能就找不到 umi.js 了。
        minChunks: 1, // 被提取的一个模块至少需要在几个 chunk 中被引用，这个值越大，抽取出来的文件就越小
        maxAsyncRequests: 10, // 在做一次按需加载的时候最多有多少个异步请求，为 1 的时候就不会抽取公共 chunk 了
        maxInitialRequests: 5, // 针对一个 entry 做初始化模块分隔的时候的最大文件数，优先级高于 cacheGroup，所以为 1 的时候就不会抽取 initial common 了。
        cacheGroups: {
          react: {
            name: "react",
            test: /[\\/]node_modules[\\/](react)[\\/]/,
            priority: 12,
            enforce: true,
          },
          reactDom: {
            name: "react-dom",
            test: /[\\/]node_modules[\\/](react-dom)[\\/]/,
            priority: 11,
            enforce: true,
          },
          antdesigns: { // antdsign
            name: 'antdesigns',
            chunks: 'all',
            test: /(@antd|antd|@ant-design)/,
            priority: 10,
          }
        },
      });
  }
})
