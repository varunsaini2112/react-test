import renderTemplate from './template';
import useEmployeeData from './useEmployeeData';

const RestApi: React.FC = () => {
  const { data, setUserId } = useEmployeeData(1);

  function changeUser() {
    const id = Math.floor(Math.random() * 10) + 1;

    setUserId(id);
  }

  return renderTemplate({ data, changeUser });
};

export default RestApi;
