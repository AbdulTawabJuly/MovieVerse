import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Actors, MovieInformation, Movies, Profile, NavBar } from './index';

function App() {
  return (
    <div className="flex h-full">
      <CssBaseline />
      <NavBar />
      <main className="py-4 px-4">
        {/*Main tag is use to contain the main content of a document. It is just like a div*/}
        <div className="h-70 font-bold" />
        <Routes>
          <Route exact path="/movies/:id" element={<MovieInformation />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>

    </div>
  );
}
export default App;
