import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 pb-20 flex flex-col items-center gap-16 bg-gradient-to-b from-yellow-50 to-white">
      <main className="max-w-3xl w-full flex flex-col gap-8 items-center text-center">
        <Image
          className="mb-4"
          src="/globe.svg"
          alt="Golden Heaven on Earth"
          width={120}
          height={120}
          priority
        />
        <h1 className="text-4xl font-extrabold text-yellow-700 mb-2">Golden Heaven on Earth</h1>
        <p className="text-lg text-gray-700 mb-4">
          Golden Heaven on Earth is a spiritual community where you can find knowledge and practical guidance regarding your spiritual progression. There is something for everyone including a blog, online meditations and training videos, access to online personal consultations and lots more....
        </p>
        <p className="text-lg text-gray-700 mb-4">
          All resources are designed to help you understand your role in raising the vibration of love and light. We need to raise our vibrations and frequency to help humanity reach the pinnacle of its current spiritual progression.
        </p>
        <p className="text-lg text-yellow-800 font-semibold mb-2">
          This pinnacle is called the Golden Age.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          We are all steadily walking towards this point of spiritual expansion, which is now becoming available to everyone of us. The Golden Age will be upon us by the year 2032.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Now is the time... each step you take towards integrating your spiritual knowledge on all levels—conscious, sub-conscious and superconscious—is a step closer to the fulfillment of your 'Divine Purpose'. Your 'Divine Purpose' is to serve. You serve others with your ongoing intention to raise your own light and refine your own frequency and vibration through dedicated spiritual practise.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Increases in vibration and light mean progression along your spiritual path. As one person progresses on their path so does everyone progress along their spiritual path. Every raised vibration reaches out awakening and lifting everyone it reaches.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Each step you take towards fully integrating your energies, knowledge and vibration in your conscious, sub-conscious and superconscious, your mind body and soul, is a step towards the pinnacle of your journey, Ascension.
        </p>
        <section className="mt-8 w-full">
          <h2 className="text-2xl font-bold text-yellow-700 mb-4">Testimonials</h2>
          <div className="flex flex-col gap-4 text-left">
            <blockquote className="border-l-4 border-yellow-400 pl-4 italic text-gray-800">
              ‘The workshop has been invaluable in helping me to understand the journey I am on…’
            </blockquote>
            <blockquote className="border-l-4 border-yellow-400 pl-4 italic text-gray-800">
              'I would describe today as invaluable, beautiful energies, understanding of Ascension’.
            </blockquote>
            <blockquote className="border-l-4 border-yellow-400 pl-4 italic text-gray-800">
              ‘As Always you're Amazing! Releasing, mind changing. You're Awesome! Keep Being You! Sending Lots of Love’!
            </blockquote>
            <blockquote className="border-l-4 border-yellow-400 pl-4 italic text-gray-800">
              ‘This workshop has been what I expected and more! Illuminating’!
            </blockquote>
            <blockquote className="border-l-4 border-yellow-400 pl-4 italic text-gray-800">
              ‘I wasn’t sure what to expect, but thoroughly enjoyed the day. Relaxing and enlightening…. Fulfilling’
            </blockquote>
            <blockquote className="border-l-4 border-yellow-400 pl-4 italic text-gray-800">
              ‘I was not sure what I was expecting so it exceeded what I was expecting! I look forward to learning more in a deeper way! Powerful, Educating, Affirming. Awesome and Intense. Thank You’
            </blockquote>
            <blockquote className="border-l-4 border-yellow-400 pl-4 italic text-gray-800">
              ‘Greater understanding and refresher of previous teachings. Profound! Start the Angel Course and see where it takes you…..’
            </blockquote>
          </div>
        </section>
      </main>
    </div>
  );
}
