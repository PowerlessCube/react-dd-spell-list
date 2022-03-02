import useFetchData from './useFetchData';
import { ClassRequests } from '../constants/constants';

const useGetClasses = () => {
  const API_REQUESTS = new ClassRequests();
  const data = useFetchData(API_REQUESTS.GET_CHARACTER_CLASSES);
  return data && data.results;
};

export default useGetClasses;
