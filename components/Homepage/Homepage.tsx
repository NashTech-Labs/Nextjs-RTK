import React from "react";
import { usePhotosQuery } from "../../api/photosData";
import styles from "./Homepage.module.css";

function Homepage() {
  const { data, isLoading, error } = usePhotosQuery();

  let content = null;

  if (isLoading) {
    content = <div className={styles.loading}> Please wait ............ </div>;
  }

  if (error) {
    content = (
      <div className={styles.error}>
        {" "}
        Something went wrong, Please retry after some time{" "}
      </div>
    );
  }

  if (data) {
    content = (
      <>
        <h1 className={styles.heading}>List of Photos</h1>
        <div className={styles.main}>
          <ol className={styles.listSection}>
            {data?.map((data, index) => (
              <li key={index} className={styles.itemSection}>
                {data.title}{" "}
                <img className={styles["image-section"]} src={data.url} />
              </li>
            ))}
          </ol>
        </div>
      </>
    );
  }

  return <>{content}</>;
}

export default Homepage;
