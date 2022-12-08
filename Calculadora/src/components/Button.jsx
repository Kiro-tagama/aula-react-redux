export default ({label, color, grid, click})=> 
<button 
  className="button" 
  style={{
    backgroundColor:color,
    gridColumn: "span "+grid
    }}
    onClick={e=> click(label)}
>
  {label}
</button>