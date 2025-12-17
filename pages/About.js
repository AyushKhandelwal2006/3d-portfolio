import Nav from '../components/Nav';

export default function About() {
  return (
    <>
      <Nav />
      <div className="text-white p-10 text-xl">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p>
          Hi, I'm Ayush — A frontend developer passionate about building creative,
          interactive and modern web experiences. I love working with React, Next.js
          and 3D elements using Three.js.
        </p>
      </div>
    </>
  );
}
