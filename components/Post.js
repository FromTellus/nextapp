function Post({ Titel, Description, ReferencePicture, Price }) {
  
    return (
      <div className="post">
        <img alt={Description} src={`https:${ReferencePicture}`} />
        <div className="description">{Description}</div>
        <div className="text">
          <h2>{Titel}</h2>
          <h3>{Price}</h3>
        </div>
      </div>
    )
  }
  
  export default Post