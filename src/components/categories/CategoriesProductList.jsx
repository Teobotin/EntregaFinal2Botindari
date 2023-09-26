import { useParams } from "react-router-dom"
import useAsyncMock from "../hooks/useAsyncMock"
import products from '../mocks/products.json'
import { CircularProgress, Grid } from "@mui/material"
import ProductDetail from "../products/ProductDetail"

const CategoriesProductList = () => {
    const {categoryId} = useParams()
    const {data, loading} = useAsyncMock(products)
    
    if(loading)return <CircularProgress/>

    const categorySelected = data.filter(category => category.category.toLowerCase() === categoryId.toLocaleLowerCase() )
    return(
        <div>
            <Grid container spacing={3}></Grid>
            {categorySelected.map((product)=>{
                return <ProductDetail key={product.id} product={product}/>
            })}
        </div>
    )
}

export default CategoriesProductList