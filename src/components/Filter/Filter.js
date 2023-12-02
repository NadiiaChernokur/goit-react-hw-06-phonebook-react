import { useDispatch, useSelector } from 'react-redux';
import { ContainerFilter } from './Filter.styles';
import { toFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filters.filter);
  const dispatch = useDispatch();
  return (
    <ContainerFilter>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={evt => dispatch(toFilter(evt.target.value))}
      ></input>
    </ContainerFilter>
  );
};
