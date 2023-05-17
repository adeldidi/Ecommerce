import Products from "./Products";

const Home = () => {
    return (  
        <div className="hero">
            <div className="card text-bg-dark border-0">
                <img src="/assets/bg3.png" className="card-img" alt="background" height="550px"/>
                <div className="card-img-overlay d-flex flex-column 
                   justify-content-center">
                        <div className="container">
                          <h5 className="card-title display-3 fw-bolder mb-0 "> New Season Arrival</h5>
                          <p className="card-text lead fs-2">
                              Check Out All The Trends
                         </p>
                        </div>
    
    
                </div>
             </div>
   <Products/>
        </div>
    );
}
 
export default Home;