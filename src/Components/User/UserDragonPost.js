import React from 'react';
import styles from './UserDragonPost.module.css';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import { DRAGON_POST } from '../../Api';
import { useNavigate } from 'react-router-dom';

const UserDragonPost = () => {
  const name = useForm();
  const type = useForm();

  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = DRAGON_POST({
      name: name.value,
      type: type.value,
    });
    request(url, options);
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="name" {...name} />
        <Input label="Tipo" type="text" name="type" {...type} />
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

export default UserDragonPost;
