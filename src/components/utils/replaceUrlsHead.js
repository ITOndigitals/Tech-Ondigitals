export default function replaceUrlsHead(fullHead) {
  if(!fullHead) return null;
  return fullHead
    .replace(
      /<link\s+rel="canonical"\s+href="https:\/\/itapi\.ondigitals\.com([^"]*)"/g,
      '<link rel="canonical" href="https://it.ondigitals.com$1"'
    )
    .replace(
      /<meta\s+property="og:url"\s+content="https:\/\/itapi\.ondigitals\.com([^"]*)"/g,
      '<meta property="og:url" content="https://it.ondigitals.com$1"'
    );
}
