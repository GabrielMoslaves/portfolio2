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
  href="href",
  className
  
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
        
      
      }} 
      href={href}
      target="_blank"
      className={"button-container"} >
      {children}
    </a>
  );
}

export default Button;
