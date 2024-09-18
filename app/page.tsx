"use client";
import Profile from "./components/Profile";
import Visimisi from "./components/Visimisi";
import Navbar from "./components/Navbar";
import Struktur from "./components/Struktur";
import Divisi from "./components/Divisi";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <main>
        <Profile/>
        <Visimisi/>
        <Struktur/>
        <Divisi/>
        {/* <IconGroup/> */}
      </main>
    </div>
  );
}
