import {AppBar, Button, Toolbar, Typography } from '@mui/material';
import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink } from 'react-router-dom';


const Navbar = () =>{
    return(<AppBar>
        <Toolbar sx={{backgroundColor: "black"}}>
                <h1>G-SetUp</h1>
                <div className="div-buttons">
                    <NavLink className='buttons' to='/'>
                        <Typography>Inicio</Typography>
                    </NavLink>
                    <NavLink className='buttons' to='/categories'>
                        <Typography>Categorias</Typography>
                    </NavLink>
                    <NavLink className='buttons' to='/products'>
                        <Typography>Productos</Typography>
                    </NavLink>
                    <NavLink className='buttons'>
                        <Typography>Contacto</Typography>
                    </NavLink>
                    <div className='div-widget'>
                <NavLink className='buttons' to='/Cart'>
                <CartWidget></CartWidget>
                </NavLink>
                </div>
                </div>
                
        </Toolbar>
    </AppBar>)
}

export default Navbar