import axios from 'axios';
import React, {useState, useEffect } from 'react';

const Topics = () => {

  const [value, setValue] = useState('goku');
  const [posts, setPosts] = useState([]);

  //Equivale a un componentDidUpdate porque el array del final tiene contenido
  useEffect(() => {
    async function fetchData() {
      try {
        // Petición HTTP
        const res = await axios.get(`https://www.reddit.com/r/${value}.json`);
        const json = res.data;
        // Guarda en el array de posts el resultado. Procesa los datos
        setPosts(json.data.children.map(c => c.data));
      }catch (error) {
        console.log("error", error)
        setPosts([])
      }
    }
    fetchData();
  }, [value]);

  const handleSubmit = e => {
    e.preventDefault();
    setValue(e.target.topic.value);
    console.log(e.target.topic.value)
  };

  return<>
        <h1>Búsqueda por topic</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="topic"/>
        </form>

        {posts.length!==0 ? 
              <ul>
                {posts.map(post=> (<li key={post.id}>{post.title}</li>))}
              </ul> 
              : <p>No hay resultados con la búsqueda</p>}
    
        </>
    
};

export default Topics;
