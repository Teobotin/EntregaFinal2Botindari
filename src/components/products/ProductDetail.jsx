import { Card, CardContent, Grid, Typography } from "@mui/material"
import { useState } from "react"
import ProductInfo from "./Productinfo"

const ProductDetail = ({product}) => {
    const {id, image, title, price, itHasDues, isAnOffer, stock} = product
    const [isSelected, setIsSelected] = useState(false)
    const handleClick = () =>{
        setIsSelected((prev) => !prev)
    }

    return (<><Grid item key={id} xs={12} sm={6} md={4} lg={3}>
        <Card className="card-products" onClick={handleClick}> 
            <img src={image} style={{maxWidth: '300px', maxHeight: '300px'}}/>
            <CardContent>
                <Typography>{title}</Typography>
                <Typography>{price}</Typography>
                <Typography>{itHasDues}</Typography>
                <Typography>{isAnOffer}</Typography>
            </CardContent>
        </Card>
    </Grid>
    {
        isSelected &&
        <ProductInfo product={product} open={isSelected} setOpen={setIsSelected}/>
    }
    
    </> 
    )

    
}

export default ProductDetail