function Post({ titel, description, image, price }) {
  
    return (
      <div className="post">
        <img alt={description} src={`https:${image}`} />
        <div className="description">{description}</div>
        <div className="text">
            <p>what</p>
          <h2>{titel}</h2>
          <h3>{price}</h3>
        </div>
      </div>
    )
  }
  
  export default Post