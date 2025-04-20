import { Header } from "./components/Header";
import { Post } from "./Post";
import "./styles.css";

export function App() {
  return (
    <>
      <Header />
      <Post
        author="Fernanda Degolin"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate doloribus dolor reprehenderit mollitia illo laboriosam porro autem placeat velit odit sint nisi omnis laudantium illum nobis quia doloremque, sed consequatur."
      />
      <Post
        author="Fernanda Degolin"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate doloribus dolor reprehenderit mollitia illo laboriosam porro autem placeat velit odit sint nisi omnis laudantium illum nobis quia doloremque, sed consequatur."
      />
    </>
  );
}
