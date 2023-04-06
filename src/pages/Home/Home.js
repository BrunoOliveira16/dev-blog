import './Home.sass';

// Hooks
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// Components

const Home = () => {
  const [querry, setQuerry] = useState("");
  const [posts] = useState([]);

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
          <h1>Posts...</h1>
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