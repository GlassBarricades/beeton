import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { ref, onValue } from 'firebase/database';

interface DataItem {
  [key: string]: any;
}

const useFetchData = (url: string): [DataItem[], boolean] => {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = (url: string) => {
    setLoading(true);
    onValue(ref(db, url), (snapshot) => {
      setData([]);
      const dataValue = snapshot.val();
      if (dataValue !== null) {
        Object.values(dataValue).map((item: any) =>
          setData((oldArray: DataItem[]) => [...oldArray, item])
        );
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    if (url) {
      fetchData(url);
    }
  }, [url]);

  return [data, loading];
};

export default useFetchData;
