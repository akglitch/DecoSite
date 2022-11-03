import { gallery } from "./Data";





function Gallery() {
  return(
 
            <div className=" col-md g-0">
                <div className="row gap g-0 ">
                <div className="storyHead">
    <h1>gallery</h1>
  </div>
                {
                  gallery&&
                gallery.map((item) => {
                    return (   
                      <div key={item.id} className="col-lg-4 col-md-4 col-sm-6 col-xs-12" >
                      <div  class="hovereffect">

                      <img src={item.img} height="300" width="250" alt="gallery" />
                    
                    <div class="overlay">
                              <h2>{item.name}</h2>
                      <p>
                        <a href="#hh">Link</a>
                      </p>
                      
                          </div>
                </div>
                         
                  </div>
                
                    )})
                }
                
               
                 </div>
            </div>
           
    )
     
}

export default Gallery;


