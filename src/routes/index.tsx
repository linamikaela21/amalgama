import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import { LoginPage } from '../pages/Login';
import { ContactPage } from '../components/Contacts/Contact';
import { AuthProvider } from '../hooks/useAuth';
import { UsersPage } from '../pages/Users';
import { BooksPage } from '../pages/Books';

export const Router = (): JSX.Element => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts/:id" element={<ContactPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </AuthProvider>
  );
};
