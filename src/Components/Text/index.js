import './styles.css'


function Text({children, fontWeight, fontSize, fontFamily, color}) {
  return(
    <p style={{fontWeight, fontSize, fontFamily, color}}>{children}</p>
  )
}

export default Text;