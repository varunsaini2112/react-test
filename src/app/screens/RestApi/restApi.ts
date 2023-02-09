import renderTemplate from './template';
import useEmployeeData from './useEmployeeData';

const RestApi: React.FC = () => {
  const [data, setUserId] = useEmployeeData(1);

  function changeUser(e: any) {
    const id = Math.floor(Math.random() * 10);
    console.log('id>>>', id);

    // setUserId?.(id);
  }

  return renderTemplate({ data, changeUser });
};

export default RestApi;
