import { Image } from "react-bootstrap";

function MookupImage(props) {
  return (
    <div className="mookup">
      <Image fluid src={props.src}/>
      <div className="description">
        <div className="fs-5" dangerouslySetInnerHTML={{__html:props.description}}></div>
      </div>
    </div>
  ); 
}
export default MookupImage;