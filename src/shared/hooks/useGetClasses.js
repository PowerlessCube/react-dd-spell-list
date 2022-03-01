import useFetchData from './useFetchData';

const useGetClasses = () => {
  const data = useFetchData('https://www.dnd5eapi.co/api/classes/');
  return data.results;
};

export default useGetClasses;
