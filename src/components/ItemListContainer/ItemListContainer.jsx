import './ItemListContainer.css'

const ItemListContainer = ({ text }) => {
    console.log("Texto recibido en ItemListContainer:", text);
    return(
        <div class= 'listadeitems'>
            <p>{text}</p>
        </div>
    )
}

export default ItemListContainer