import { useEffect, useState } from 'react';
import { employeeData } from '../../lib/apiUrls';
import  fetchWrapper  from '../../lib/fetchWrapper';

const useEmployeeData = (id: number) => {
  const [userId, setUserId] = useState<number>(id);
  const [data, setData] = useState({});

  useEffect(() => console.log('data>>>', data), [data]);

  useEffect(() => {
    fetchWrapper(`${employeeData}/${userId}`)
      .then((json) => setData(json))
      .catch((error) => console.log('error>>>', error));
  }, [userId]);

  return [data, setUserId];
};

export default useEmployeeData;
