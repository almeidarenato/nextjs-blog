import React from "react";
import Link from "next/link";
// import { Container } from './styles';

function firstPost() {
  return (
    <>
      <h1>Titulo do Post</h1>
      <h2>
        <Link href="/">
          <a>Retornar para Home</a>
        </Link>
      </h2>
    </>
  );
}

export default firstPost;
