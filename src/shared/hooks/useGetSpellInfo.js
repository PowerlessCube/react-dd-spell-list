import useFetchData from './useFetchData';
import { AppRequests } from '../helpers/appRequests';

function useGetSpellInfo(spellIndex) {
  const API_REQUESTS = new AppRequests(spellIndex);
  const spellData = useFetchData(API_REQUESTS.GET_SPELL_BY_INDEX);
  return spellData;
}

export default useGetSpellInfo;
