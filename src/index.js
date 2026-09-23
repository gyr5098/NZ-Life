export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // 优先匹配静态资源，找不到时 fallback 到 index.html（SPA路由支持）
    let asset = await env.ASSETS.fetch(request);
    if (asset.status === 404 && !url.pathname.startsWith("/assets/")) {
      url.pathname = "/index.html";
      asset = await env.ASSETS.fetch(new Request(url, request));
    }
    return asset;
  }
};
