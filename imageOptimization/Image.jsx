export default ({ src, sizes = "(min-width: 300px)", ...imgProps }) => {
  const [name, extension] = src.split(".");

  //const breakpoints = [300, 640, 768, 1024, 1280, 1536];
  const breakpoints = [300, 640, 768, 1024, 1280];

  const webpSrcSet = breakpoints
    .map((bp) => `/images/${name}-${bp}.webp ${bp}w`)
    .join(", ");
  const defaultSrcSet = breakpoints
    .map((bp) => `/images/${name}-${bp}.${extension} ${bp}w`)
    .join(", ");

  return (
    <picture>
      {/* <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
        <source
          type={`image/${extension}`}
          srcSet={defaultSrcSet}
          sizes={sizes}
        /> */}
      <source type="image/webp" srcSet={webpSrcSet} />
      <source type={`image/${extension}`} srcSet={defaultSrcSet} />

      <img
        src={`/images/${name}-${breakpoints[0]}.${extension}`}
        {...imgProps}
      />
    </picture>
  );
};
