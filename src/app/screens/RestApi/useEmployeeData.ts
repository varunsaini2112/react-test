import { useCallback, useEffect, useState } from 'react';
import { employeeData } from '../../lib/apiUrls';
import APIHandler from '../../lib/APIHandler';
import { Employee } from './types';

const useEmployeeData = (id: number) => {
  const [userId, setUserId] = useState<number>(id);
  const [data, setData] = useState<Employee>();

  const getEmployeeData = useCallback(() => {
    APIHandler(`${employeeData}/${userId}`)
      .then((json) => setData(json))
      .catch((error) => console.log('error>>>', error));
  }, [userId]);

  useEffect(() => {
    getEmployeeData();
  }, [getEmployeeData]);

  return { data, setUserId };
};

export default useEmployeeData;
