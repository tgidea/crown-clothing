import DirectoryItem from "../directory-item/directory-item.components";
import './directory.styles.scss';

const Directory = ({category}) => {
  return (
    <div className="directory-container">
      {/*key is added where we use map */}
      {category.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
