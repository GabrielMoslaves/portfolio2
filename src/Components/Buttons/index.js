import "./styles.css";

function Button({
  backgroundColor,
  color,
  children,
  fontFamily,
  fontWeight,
  border,
  fontSize,
  padding,
  width,
  href
}) {
  return (
    <a
      style={{
        backgroundColor,
        color,
        fontFamily,
        fontWeight,
        border,
        fontSize,
        padding,
        width,
        href
      }}
      className="button-container"
    >
      {children}
    </a>
  );
}

export default Button;
