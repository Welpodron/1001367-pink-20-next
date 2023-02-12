import { memo, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

export type ImagePropsType = {
  /** Пояснение к изображению */
  alt: string;
  /** Ширина изображения */
  width?: number;
  /** Высота изображения */
  height?: number;
  /** Путь к изображению */
  src: string;
  /** Приоритет загрузки */
  fetchpriority?: "high" | "low" | "auto";
  /** Список путей к изображениям для мобильных устройств необходимо для поддержки DPI */
  mobileSrcSet?: string[];
  /** Список путей к изображениям для мобильных устройств необходимо для поддержки DPI в формате avif */
  mobileAvifSrcSet?: string[];
  /** Список путей к изображениям для мобильных устройств необходимо для поддержки DPI в формате webp */
  mobileWebpSrcSet?: string[];
  /** Размер с которого начинается загрузка изображений для планшетов */
  tabletSize?: number;
  /** Список путей к изображениям для планшетов необходимо для поддержки DPI */
  tabletSrcSet?: string[];
  /** Список путей к изображениям для планшетов необходимо для поддержки DPI в формате avif */
  tabletAvifSrcSet?: string[];
  /** Список путей к изображениям для планшетов необходимо для поддержки DPI в формате webp */
  tabletWebpSrcSet?: string[];
  /** Размер с которого начинается загрузка изображений для ПК */
  desktopSize?: number;
  /** Список путей к изображениям для десктопов необходимо для поддержки DPI */
  desktopSrcSet?: string[];
  /** Список путей к изображениям для десктопов необходимо для поддержки DPI в формате avif */
  desktopAvifSrcSet?: string[];
  /** Список путей к изображениям для десктопов необходимо для поддержки DPI в формате webp */
  desktopWebpSrcSet?: string[];
};

export const Image = memo(
  ({
    alt,
    width,
    height,
    src,
    fetchpriority = "auto",
    className,
    decoding = "async",
    crossOrigin = "anonymous",
    loading = "lazy",
    mobileSrcSet,
    mobileAvifSrcSet,
    mobileWebpSrcSet,
    tabletSize = 768,
    tabletSrcSet,
    tabletAvifSrcSet,
    tabletWebpSrcSet,
    desktopSize = 1024,
    desktopSrcSet,
    desktopAvifSrcSet,
    desktopWebpSrcSet,
  }: ImagePropsType &
    Omit<
      Exclude<React.ImgHTMLAttributes<HTMLImageElement>, ImagePropsType>,
      "srcSet"
    >) => {
    const { basePath } = useRouter();
    const [_src, _setSrc] = useState("data:,");
    const [_mobileSrcSet, _setMobileSrcSet] = useState<string[]>([]);
    const [_mobileAvifSrcSet, _setMobileAvifSrcSet] = useState<string[]>([]);
    const [_mobileWebpSrcSet, _setMobileWebpSrcSet] = useState<string[]>([]);
    const [_tabletSrcSet, _setTabletSrcSet] = useState<string[]>([]);
    const [_tabletAvifSrcSet, _setTabletAvifSrcSet] = useState<string[]>([]);
    const [_tabletWebpSrcSet, _setTabletWebpSrcSet] = useState<string[]>([]);
    const [_desktopSrcSet, _setDesktopSrcSet] = useState<string[]>([]);
    const [_desktopAvifSrcSet, _setDesktopAvifSrcSet] = useState<string[]>([]);
    const [_desktopWebpSrcSet, _setDesktopWebpSrcSet] = useState<string[]>([]);

    const buildSrc = useCallback(
      (src: string) => {
        if (typeof window === "undefined") {
          return "data:,";
        }
        try {
          // Скорее всего изображение находится вне сайта
          new URL(src);
          return src;
        } catch (error) {
          // В случае ошибки добавляем к url базовый путь, предполагая, что изображение находится у нас в проекте
          return `${basePath}${src}`;
        }
      },
      [basePath]
    );

    useEffect(() => {
      if (typeof window === "undefined") {
        return;
      }
      _setSrc(buildSrc(src));
      _setMobileSrcSet(mobileSrcSet?.map(buildSrc) ?? []);
      _setMobileAvifSrcSet(mobileAvifSrcSet?.map(buildSrc) ?? []);
      _setMobileWebpSrcSet(mobileWebpSrcSet?.map(buildSrc) ?? []);
      _setTabletSrcSet(tabletSrcSet?.map(buildSrc) ?? []);
      _setTabletAvifSrcSet(tabletAvifSrcSet?.map(buildSrc) ?? []);
      _setTabletWebpSrcSet(tabletWebpSrcSet?.map(buildSrc) ?? []);
      _setDesktopSrcSet(desktopSrcSet?.map(buildSrc) ?? []);
      _setDesktopAvifSrcSet(desktopAvifSrcSet?.map(buildSrc) ?? []);
      _setDesktopWebpSrcSet(desktopWebpSrcSet?.map(buildSrc) ?? []);

      return () => {};
    }, [
      buildSrc,
      src,
      _setSrc,
      mobileSrcSet,
      _setMobileSrcSet,
      mobileAvifSrcSet,
      _setMobileAvifSrcSet,
      mobileWebpSrcSet,
      _setMobileWebpSrcSet,
      tabletSrcSet,
      _setTabletSrcSet,
      tabletAvifSrcSet,
      _setTabletAvifSrcSet,
      tabletWebpSrcSet,
      _setTabletWebpSrcSet,
      desktopSrcSet,
      _setDesktopSrcSet,
      desktopAvifSrcSet,
      _setDesktopAvifSrcSet,
      desktopWebpSrcSet,
      _setDesktopWebpSrcSet,
    ]);

    // TODO: Велл, в текущей реализации, не поддерживается плотность пикселей экрана
    return (
      <>
        {_src === "data:," ? (
          <img src="data:," {...{ alt }} />
        ) : (
          <picture>
            {_desktopSrcSet.length > 0 && (
              <>
                {_desktopAvifSrcSet.length > 0 && (
                  <source
                    media={`(min-width: ${desktopSize}px)`}
                    type="image/avif"
                    srcSet={_desktopAvifSrcSet.join(",")}
                  />
                )}
                {_desktopWebpSrcSet.length > 0 && (
                  <source
                    media={`(min-width: ${desktopSize}px)`}
                    type="image/webp"
                    srcSet={_desktopWebpSrcSet.join(",")}
                  />
                )}
                <source
                  media={`(min-width: ${desktopSize}px)`}
                  srcSet={_desktopSrcSet.join(",")}
                />
              </>
            )}
            {_tabletSrcSet.length > 0 && (
              <>
                {_tabletAvifSrcSet.length > 0 && (
                  <source
                    media={`(min-width: ${tabletSize}px)`}
                    type="image/avif"
                    srcSet={_tabletAvifSrcSet.join(",")}
                  />
                )}
                {_tabletWebpSrcSet.length > 0 && (
                  <source
                    media={`(min-width: ${tabletSize}px)`}
                    type="image/webp"
                    srcSet={_tabletWebpSrcSet.join(",")}
                  />
                )}
                <source
                  media={`(min-width: ${tabletSize}px)`}
                  srcSet={_tabletSrcSet.join(",")}
                />
              </>
            )}
            {_mobileAvifSrcSet.length > 0 && (
              <source type="image/avif" srcSet={_mobileAvifSrcSet.join(",")} />
            )}
            {_mobileWebpSrcSet.length > 0 && (
              <source type="image/webp" srcSet={_mobileWebpSrcSet.join(",")} />
            )}
            <img
              {...{
                alt,
                className,
                width,
                height,
                src: _src,
                srcSet: _mobileSrcSet.join(","),
                fetchpriority,
                crossOrigin,
                decoding,
                loading,
              }}
            />
          </picture>
        )}
      </>
    );
  }
);
