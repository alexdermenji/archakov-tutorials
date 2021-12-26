import { Link, useParams } from 'react-router-dom';
const Post = () => {
  const { postNumber } = useParams();
  return (
    <div>
      <h1>Статья № {postNumber}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        distinctio fuga animi aliquam sit id veritatis, doloribus ducimus quas,
        dignissimos non minima quia amet possimus? Impedit nemo ducimus fuga
        rem!
      </p>
      <Link to='/'>
        <button>Назад</button>
      </Link>
    </div>
  );
};

export default Post;
