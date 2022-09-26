import style from './List.module.css';
import Post from './Post';
import { usePost } from '../../../hooks/usePost';
import PreLoader from '../../../UI/Preloader';

export const List = (props) => {
  const [posts, loading] = usePost();

  if (posts.length > 0) {
    return (
      <ul className={style.list}>
        {posts && (
          posts.map((post) => (
            <Post key={post.data.id} postData={post.data} />
          )))
        }
      </ul>
    );
  }

  return (
    <>
      {loading ? (
        <PreLoader />
      ) :
      <ul className={style.list}>Авторизуйтесь</ul>}
    </>
  );
};
