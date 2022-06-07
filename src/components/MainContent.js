import productsData from "./productsData"


function MainContent() {
    const products = productsData.map(prod => (
        <div className="grid-container" key={prod.id}> 
            <p className="icons">{prod.IconLeads}</p>
            <p className="icons">{prod.IconCalling}</p> 
            <p className="icons">{prod.IconAppt}</p> 
            <p className="icons">{prod.IconAuto}</p> 
            <p className="icons">{prod.IconWeb}</p>  
            <h3 className="grid-title">{prod.title}</h3>
            <p className="grid-paragraph">{prod.description}</p>
        </div>
    ))
    
    return (
        <div className="main-container">
        
        <div className="grid-container-one">
        <h1 className="grid-header">Grow your business with proven frameworks</h1>
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