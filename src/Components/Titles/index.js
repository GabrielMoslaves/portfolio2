import './styles.css'


function Titles({children, fontWeight, fontSize, color, fontFamily}) {
  return(
    <h2 style={{fontWeight, fontSize, color, fontFamily}}>
{children}
    </h2>
  )
}

export default Titles;