import './Home.sass';

// Hooks
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';

// Components
import PostDetails from '../../components/PostDetails';

const Home = () => {
  const [querry, setQuerry] = useState("");
  const { documents: posts, loading } = useFetchDocument("posts");

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="home">
        <h1>Veja aqui os posts mais recentes</h1>
        <form onSubmit={handleSubmit} className="search_form">
          <input 
            type="text" 
            placeholder="Ou busque por tags..." 
            onChange={(e) => setQuerry(e.targe.value)} 
            value={querry}
          />
          <button className='btn btn-dark'>Pesquisar</button>
        </form>
        <div>
          {loading && <p>Carregando...</p>}
          {posts && posts.map((post) => <PostDetails key={post.id} post={post} />)}
          {posts && posts.length === 0 && (
            <div className="noposts">
              <p>Não Foram encontrados posts</p>
              <Link to="/posts/create" className="btn">Criar primeiro post</Link>
            </div>
          )}
        </div>
    </div>
  );
};

export default Home;