import { useDispatch, useSelector } from "react-redux";

import PhotoContent from "../Photo/PhotoContent";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";

import styles from "./FeedModal.module.css";
import { closeModal } from "../../store/ui";
import { useEffect } from "react";

const FeedModal = () => {
  const { modal } = useSelector((state) => state.ui);
  const { data, loading, error } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      dispatch(closeModal());
    }
  };

  useEffect(() => {
    dispatch(closeModal());
  }, [dispatch]);

  if (!modal) return null;

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent />}
    </div>
  );
};

export default FeedModal;
