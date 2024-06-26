import { useState, useEffect } from "react";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";

const useFetchDataOne = (url: string) => {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(false);

  function fetchData(url: string) {
    setLoading(true);
    onValue(ref(db, url), (snapshot) => {
      setData({});
      const dataValue = snapshot.val();
       if (dataValue !== null) {
        setData(dataValue);
        setLoading(false);
       }
    });
  }


  useEffect(() => {
    if (url) {
      fetchData(url);
    }
  }, [url]);

  return [data, loading];
};
export default useFetchDataOne;