
function Content({ titleText, paragraphText, imgSrc }) {
    return (

        <div className="content-block">
 
            <h2>{titleText}</h2>
            <p>{paragraphText}</p>

            <img src={imgSrc} alt={titleText} style={{ width: '200px' }} />
        </div>
    );
}

export default Content;