import { Modal, Typography } from "@mui/material"
import PaymentIcon from "@mui/icons-material/Payment"
import ItemCount from "../common/ItemCount"
import { useState} from "react"
import { useCartContext } from "../context/Cartcontext"


const ProductInfo = ({product, open, setOpen}) => {
    const {id, image, title, price, inAnOffer, ItHasDues, stock} = product 
    const { addToCart } = useCartContext()
    const [quantityInCart, setQuantityInCart] = useState(0);

    const handleClose = () => {
        setOpen(prev => !prev)
    }
    
    const handleAddToCart = (count) => {


        setQuantityInCart(count);
        console.log('agregado', count)
        if (count > 0) {
            addToCart({
                id, title, image, price, quantity: count
            })
        }
    };

    return (<>
        <Modal open={true} onClose={handleClose}>
            <div className="cartel">
                <div className="products">
                <img style={{ maxHeight: '300px', maxWidth: '300px' }} src={image} />
                <div>
                <Typography variant="h4" sx={{textAlign: 'center'}}>{title}</Typography>
                <Typography variant="h6" color="primary" sx={{textAlign: 'center'}}> {price}</Typography>
                <Typography sx={{textAlign: 'center'}}>stock: {stock}</Typography>
                </div>
                <div className="modal-scroll-content">
                    <Typography variant="body2" color="textSecondary" sx={{textAlign: 'center'}}>
                        {
                            ItHasDues && (<>
                                <PaymentIcon /> Hasta tres cuotas sin interés </>)

                        }
                    </Typography>
                    <ItemCount stock={stock} initial={quantityInCart} onAdd={handleAddToCart} />
                </div>
                </div>
            </div>
        </Modal>
    </>);
}
export default ProductInfo