import React from 'react';
import styles from './UserDragonPost.module.css';
import useFetch from '../../Hooks/useFetch';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import { DRAGON_GET, DRAGON_UPDATE } from '../../Api';
import { useNavigate, useParams } from 'react-router-dom';

const UserDragonUpdate = () => {
  const [name, setName] = React.useState('');
  const [type, setType] = React.useState('');

  const { error, loading, request } = useFetch();
  const navigate = useNavigate();
  const params = useParams();

  React.useEffect(() => {
    // if (data) navigate('/conta');
    async function fetchDragon() {
      let { id } = params;
      console.log(id);
      const { url, options } = DRAGON_GET(id);
      const { json } = await request(url, options);
      console.log(json);
      setName(json.name);
      setType(json.type);
    }
    fetchDragon();
  }, [navigate, params, request]);

  async function handleSubmit(event) {
    event.preventDefault();
    let { id } = params;
    const { url, options } = DRAGON_UPDATE(id, {
      name: name,
      type: type,
    });
    await request(url, options);
    navigate('/conta');
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nome"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="Tipo"
          type="text"
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        <div
          className={styles.preview}
          style={{ backgroundImage: "url('../../Assets/dragon1.jpg')" }}
        ></div>
      </div>
    </section>
  );
};

export default UserDragonUpdate;
