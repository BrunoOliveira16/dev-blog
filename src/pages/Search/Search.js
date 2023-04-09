import './search.sass';
import { Link } from 'react-router-dom';

// Hooks
import { useFetchDocument } from '../../hooks/useFetchDocument';
import { useQuery } from '../../hooks/useQuery';

// Components
import PostDetails from '../../components/PostDetails';

const Search = () => {
    const query = useQuery();
    const search = query.get("q");
    const {documents: posts} = useFetchDocument("posts", search);

    return (
        <div className="search_container">
            <h2>Resultado da pesquisa</h2>
            <div>
                {posts && posts.length === 0 && (
                    <div className="noposts">
                        <p>Não foram encontrados posts a partir da sua busca...</p>
                        <Link to="/" className="btn btn-dark">Voltar</Link>
                    </div>
                )}
                {posts && posts.map((post) => (
                    <PostDetails key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Search;