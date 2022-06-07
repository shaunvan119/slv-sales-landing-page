import productsData from "./productsData"


function MainContent() {
    const products = productsData.map(prod => (
        <div className="grid-container" key={prod.id}>
            <h3>{prod.title}</h3>
            <p>{prod.description}</p>
        </div>
    ))
    
    return (
        <div className="main-container">
        <div className="grid-container-one">
        </div>
        {products}
        </div>


        /*<>
            
            {products}
        </>*/
        /*<div className="main-container">
            <div className="grid-container-one">
            </div>
            <div className="grid-container">

            </div>
            <div className="grid-container">

            </div>
            <div className="grid-container">

            </div>
            <div className="grid-container">

            </div>
            <div className="grid-container">

            </div>
        </div>*/
    )
    
}

export default MainContent