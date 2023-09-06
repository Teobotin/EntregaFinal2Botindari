import {AppBar, Button, Toolbar } from '@mui/material';
import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"


const Navbar = () =>{
    return(<AppBar>
        <Toolbar sx={{backgroundColor: "black"}}>
                <h1>G-SetUp</h1>
                <div className="div-buttons">
                <Button className='buttons'>Inicio</Button>
                <Button className='buttons'>Categorias</Button>
                <Button className='buttons'>Productos</Button>
                <Button className='buttons'>Contacto</Button>
                </div>
                <div className='div-widget'>
                <CartWidget></CartWidget>
                </div>
        </Toolbar>
    </AppBar>)
}

export default Navbar