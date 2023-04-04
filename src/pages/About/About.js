import { Link } from 'react-router-dom';
import './about.sass';

const About = () => {
  return (
    <div className='about'>
        <h2>Sobre o Dev<span>Blog</span></h2>
        <p>Este projeto consite em um blog feito com React no front-end e Firebase no back-end.</p>
        <Link to="/posts/create" className='btn'>Criar Post</Link>
    </div>
  );
};

export default About;