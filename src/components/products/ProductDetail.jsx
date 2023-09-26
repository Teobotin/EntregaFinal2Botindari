import { Card, CardContent, Grid, Typography } from "@mui/material"
import { useState } from "react"

const ProductDetail = ({product}) => {
    const {id, image, title, price, itHasDues, isAnOffer} = product
    //const [isSelected, setIsSelected] = useState(false)

    return (<Grid item key={id} xs={12} sm={6} md={4} lg={3}>
        <Card className="card-products">
            <img src={image}/>
            <CardContent>
                <Typography>{title}</Typography>
                <Typography>{price}</Typography>
                <Typography>{itHasDues}</Typography>
                <Typography>{isAnOffer}</Typography>
            </CardContent>
        </Card>
    </Grid>)

    
}

export default ProductDetail