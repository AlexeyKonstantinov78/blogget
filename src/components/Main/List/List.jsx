import style from './List.module.css';
import Post from './Post';
import PreLoader from '../../../UI/Preloader';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postsRequestAsync } from '../../../store/posts/postsAction';
import { Outlet, useParams } from 'react-router-dom';

export const List = (props) => {
  const posts = useSelector((state) => state.posts.data);
  const loading = useSelector((state) => state.posts.loading);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const { page } = useParams();

  useEffect(() => {
    dispatch(postsRequestAsync(page));
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          dispatch(postsRequestAsync());
        }
      },
      {
        rootMargin: '100px',
      }
    );
    observer.observe(endList.current);
    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  return (
    <>
      <ul className={style.list}>
        {!loading && !posts.length && <>Авторизуйтесь</>}
        {loading && <PreLoader />}
        {posts.length &&
          posts.map(({ data }) => <Post key={data.id} postData={data} />)}
        <li ref={endList} className={style.end} />
      </ul>
      <Outlet />
    </>
  );
};
