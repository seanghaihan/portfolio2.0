export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
              {/* text */}
              <div className="text-center lg:text-left">
                <span className="text-xl">Graphic Designer</span>
                <h1 className="h1">
                  Hello I'm <br /><span className="text-accent">Tongheng</span>
                </h1>
                <p className="max-w-[500px] mb-9 text-white/80">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora fugiat maxime repellat iste dignissimos maiores sapiente? Enim, ullam?</p>
              </div>
              {/* Photo */}
              <div>Photo</div>
        </div>
      </div>
    </section>
  )
}
