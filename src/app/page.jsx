import HomeLink from '../components/HomeLink'

export default function Home() {

  return (
 
    <main className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full bg-opacity-50 flex flex-col justify-center items-center gap-3 text-center h-full"> 
        <h1 className="text-5xl font-extrabold">
          Unlimited movies, TV shows and more
        </h1>
        <p className="text-2xl font-normal"> Watch anywhere. Cancel anytime.</p>

        <HomeLink/>
      </div>
    </main>
 
  );
}
