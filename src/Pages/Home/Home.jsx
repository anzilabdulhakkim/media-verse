import { useState } from 'react';
import './Home.css';
import Sidebar from '../../Component/Sidebar/Sidebar';
import Feed from '../../Component/Feed/Feed';

function Home({ sidebar, searchTerm }) {
  const [category, setCategory] = useState(0);

  return (
    <>
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div className={`container ${sidebar ? '' : 'large-container'}`}>
        <Feed category={category} searchTerm={searchTerm} />
      </div>
    </>
  );
}

export default Home;
