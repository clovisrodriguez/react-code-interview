import React from 'react'
import SwapiList from '../../containers/SwapiList';
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from '../../store/userList/actions'
import { useEffect } from 'react';
import { REQUEST_STATE } from '../../utils/const';
import Pagination from '../../components/Pagination';


const Home = ({ match: { params: { pageId } }, history }) => {
  const { state, pageId: lastPageId, results: list } = useSelector(state => state.userList);
  const dispatch = useDispatch();


  useEffect(() => {
    if (state !== REQUEST_STATE.SUCCESS || lastPageId !== pageId) dispatch(getUserList({ pageId }));
  }, [pageId, dispatch, state, lastPageId])
  return (
    <React.Fragment>
      <Pagination {...{ pageId, history }} />
      <SwapiList {...{ list, history }} />
    </React.Fragment>
  )
}

export default Home
