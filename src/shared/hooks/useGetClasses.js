import useFetchData from './useFetchData';
import { AppRequests } from '../helpers/appRequests';

const useGetClasses = () => {
  const API_REQUESTS = new AppRequests();
  const data = useFetchData(API_REQUESTS.GET_CHARACTER_CLASSES);
  return data && data.results;
};

export default useGetClasses;
