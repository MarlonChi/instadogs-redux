import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import PhotoComments from "./PhotoComments";
import PhotoDelete from "./PhotoDelete";
import Image from "../Helper/Image";

import styles from "./PhotoContent.module.css";

const PhotoContent = ({ single }) => {
  const { user } = useSelector((state) => state);
  const { photo, comments } = useSelector((state) => state.photo.data);

  const dogAge = () => {
    if (photo.idade == 1) {
      return "1 ano";
    } else {
      return photo.idade + " anos";
    }
  };

  return (
    <div className={`${styles.photo} ${single ? styles.single : ""}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={styles.views}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{dogAge()}</li>
          </ul>
        </div>
      </div>
      <PhotoComments single={single} id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
