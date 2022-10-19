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
  const count = useSelector((state) => state.posts.count);
  const after = useSelector((state) => state.posts.after);
  const token = useSelector((state) => state.token.token);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const { search, page } = useParams();

  useEffect(() => {
    if (!token) return;

    dispatch(postsRequestAsync(page));
  }, [page]);

  useEffect(() => {
    if (!posts.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && after) {
          dispatch(postsRequestAsync());
        }
      },
      {
        rootMargin: '100px',
      }
    );

    observer.observe(endList.current);

    if (count >= 2) observer.unobserve(endList.current);
    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current, posts]);
  console.log(search);
  return (
    <>
      {count < 1 && loading && <PreLoader />}
      <ul className={style.list}>
        {!loading && !posts.length && <>Авторизуйтесь</>}
        {posts.length &&
          posts.map(({ data }) => <Post key={data.id} postData={data} />)
        }
        <li ref={endList} className={style.end} />
      </ul>
      {count >= 1 && loading && <PreLoader />}
      {count >= 2 && (<button
        className={style.btn}
        onClick={() => {
          dispatch(postsRequestAsync());
        }}
      >Загрузить еще</button>
      )}
      <Outlet />
    </>
  );
};
