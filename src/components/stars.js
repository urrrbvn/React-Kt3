
function Stars(props) {
    
    const {rating} = props

    const maxStars = [1,2,3,4,5]
    
    return (
      <div>
        {maxStars.map((elem) => 
          <span key={elem} className={Math.floor(elem)<= rating ? 'fa fa-star active' : 'fa fa-star'} ></span>
        )}
      </div>
    );
  }
  
  export default Stars;