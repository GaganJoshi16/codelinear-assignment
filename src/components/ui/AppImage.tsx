type AppImageProps = {
  src: string;
  alt: string;
  className?: string;
  /** Above-the-fold / LCP images should stay eager. */
  eager?: boolean;
};

export function AppImage({ src, alt, className, eager = false }: AppImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
