import { useMemo ,memo} from "react"
function Item1(){

    console.log('Item is Render')

    return(<>
    <h3>In Item1 Componnet</h3>
    </>)
}


export default memo(Item1)
// export default Item1

