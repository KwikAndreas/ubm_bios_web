"use client";
import Profile from "./components/Profile";
import Visimisi from "./components/Visimisi";
import Navbar from "./components/Navbar";
import Struktur from "./components/Struktur";
import Divisi from "./components/Divisi";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <main>
        <Profile/>
        <Visimisi/>
        <Divisi/>
        <Struktur/>
        <Contact/>
      </main>
    </div>
  );
}
