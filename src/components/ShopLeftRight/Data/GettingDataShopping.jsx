import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { FetchApiData } from '../../../api/fetchData.api';
// import Right from '../Right';
import TopRight from '../TopRight';
const GettingDataShopping = () => {
    const value = useSelector((state) => state.data);
    const dispatch = useDispatch();
    const isMount = useRef();
    useEffect(() => {
        if(!isMount.current) {
            dispatch(FetchApiData());
            isMount.current = true;
        }
    },[])
  return (
    <div className='flex flex-col'>
    <TopRight />
    <div className='flex flex-col'>
        {value.loading && (
            <h1>loading ....</h1>
        )}
        {value.data && !value.loading && !value.error && value.data.map((ele) => {
            return (
                <div key={ele.id} className='flex'>
                    {/* <Right data={ele} /> */}
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default GettingDataShopping