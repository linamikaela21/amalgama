import React from 'react';
import { useBooks } from '../hooks/useBooks';
import { AuthWapper } from '../components/shared/AuthWapper';
import { Book } from '../interfaces/Book';

export const BooksPage = (): JSX.Element => {
  const { data, isLoading } = useBooks();
  return (
    <AuthWapper>
      <h1>Books</h1>
      {isLoading ? <span>Loading..</span> : null}
      <div>
        {data?.map((user: Book) => (
          <div key={user.id}>
            <span>{user?.title}</span>
            <span>{user?.author?.name}</span>
          </div>
        ))}
      </div>
    </AuthWapper>
  );
};
