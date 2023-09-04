import { useContext, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import { FetchApiData } from '../../api/fetchData.api'
import {DefaultSpinner} from '../Spiner'
import Right from "./Right";
import { selectContext } from "../../context/selectProvider";
const GettingData = () => {
    const value = useSelector((state) => state.data)
    const dispatch = useDispatch();
    const isMount = useRef(false);
    const { opt } = useContext(selectContext)
    useEffect(() => {
        if(!isMount.current) {
            dispatch(FetchApiData());
            isMount.current = true;
        }
    },[]);
    return (
        <>
            {value.loading && (
                <DefaultSpinner />
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {value.data && !value.error && !value.loading && value.data.map((ele) => {
                    return (
                        opt ? ele.new && <Right ele={ele} key={ele.id} /> : <Right ele={ele} key={ele.id} />
                    )
                })}
            </div>
        </>
    )
}

export default GettingData