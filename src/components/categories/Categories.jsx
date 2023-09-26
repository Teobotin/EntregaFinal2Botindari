import {Card, CardContent, Typography, CircularProgress } from '@mui/material'
import categories from '../mocks/categorias.json'
import useAsyncMock from '../hooks/useAsyncMock'
import { Link } from 'react-router-dom'

const Categories = () =>{
    const {data, loading} = useAsyncMock(categories)
    if(loading)return <CircularProgress/>

    return( <div className='container'>    
        <Typography variant='h2'>
                Categorias
        </Typography>
        {
        data.map((category)=>{
            return(
                <Card key={category.id}>
                    <CardContent component={Link} to={`/category/${category.category}`}> 
                        <Typography>{category.category}</Typography>
                    </CardContent>
                </Card>
            )
        })
    }
    </div>)
}

export default Categories