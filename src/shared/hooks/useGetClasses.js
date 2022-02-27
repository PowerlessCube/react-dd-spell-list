import useFetchData from './useFetchData';

const useGetClasses = () => {
  const { results } = useFetchData('https://www.dnd5eapi.co/api/classes/');
  return { results };
};

export default useGetClasses;
