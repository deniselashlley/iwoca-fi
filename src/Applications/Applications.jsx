import React, {useState, useEffect, useCallback } from "react";
import axios from 'axios';

import SingleApplication from "../SingleApplication/SingleApplication";
import Button from '../ui/Button';
import styles from "./Applications.module.css";

const Applications = () => {
  const [dataset, setDataset] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getRequest = useCallback(async () => {
    setIsLoading(true);
    axios.get('http://localhost:3001/api/applications', {
      params: { _page: currentPage, _limit: 5}
    })
    .then((res) => {
      const result = res.data.map(item => item);
      setDataset(prev => [...prev, ...result ]);
      setIsDisabled(res.data.length > 0);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
    });
  },[currentPage])

  useEffect(() => { 
    getRequest();
  }, [getRequest]);

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1)
  };

  return (
    <div className={styles.Applications}>
      { !isLoading ? (
        <>
          <SingleApplication application={dataset} />
          <Button label="Load more" onClick={handleLoadMore} isDisabled={!isDisabled} className="button-center"/>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Applications;
