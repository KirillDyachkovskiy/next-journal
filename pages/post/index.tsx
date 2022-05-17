import { NextPage } from "next";

import { Layout } from "../../views/layouts";
import { Post } from "../../views/ui";
import { TComment } from "../../data/types";
import CommentsSection from "../../views/components/CommentsSection";

import s from "../../views/styles/pages/post.module.scss";

const comments: TComment[] = [
  {
    id: 0,
    text:
      "Need some placeholder text in your code? Type lorem and press Tab. If needed, you can add the text together with a tag: just add a tag name ...\n" +
      "Missing: jsx Must include",
    user: {
      id: 23,
      name: "Вася Пупкин",
      photo: "http//:photos.com/w234324",
    },
    time: new Date(),
  },
  {
    id: 1,
    text: "lorem in jsx? types react lorem ipsum · react-lorem-ipsum without random · how to use lorem ipsum react · lorem ispum react · react phpstorm lorem · react lorem .",
    user: {
      id: 233,
      name: "Nikallay23r",
      photo: "http//:photos.com/w234324",
    },
    time: new Date(),
  },
  {
    id: 2,
    text: "I'm using Lorem ipsum dummy text in the development stage of my React + Redux web app, but the spell checker is making a ton of distracting",
    user: {
      id: 33,
      name: "MF",
      photo: "http//:photos.com/w234324",
    },
    time: new Date(),
  },
  {
    id: 3,
    text: "Learn more about react-lorem-component: package health score, popularity, security, maintenance, versions and more.",
    user: {
      id: 645,
      name: "Alberto",
      photo: "http//:photos.com/w234324",
    },
    time: new Date(),
  },
];

const PostPage: NextPage = () => {
  return (
    <Layout title="Full post" sidebar>
      <div className={s.postPage}>
        <Post full />
        <CommentsSection comments={comments} />
      </div>
    </Layout>
  );
};

export default PostPage;
