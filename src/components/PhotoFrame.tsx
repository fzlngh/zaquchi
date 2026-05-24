interface PhotoFrameProps {
  src?: string;
  alt?: string;
  label?: string;
  style?: React.CSSProperties;
  ratio?: string;
}

export function PhotoFrame({ src, alt, label, style, ratio = '4/3' }: PhotoFrameProps) {
  return (
    <div
      className="photo-frame"
      style={{
        aspectRatio: ratio,
        ...style,
      }}
    >
      {src ? (
        <img src={src} alt={alt || ''} />
      ) : (
        <div className="photo-placeholder">
          <span className="icon">📷</span>
          <span>{label || 'photo'}</span>
        </div>
      )}
    </div>
  );
}
