import "./directory-item.styles.scss";
import { Link } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const {title,imageUrl} = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          "backgroundImage": `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h2>{title}</h2>

        <Link to={`/shop/${title.toLowerCase()}`}><p>Shop Now</p></Link>
      </div>
    </div>
  );
};

export default DirectoryItem;
