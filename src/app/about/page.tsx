import Image from "next/image";

export default function About() {
  return (
    <main className="p-8 flex flex-col items-center max-w-3xl mx-auto">
      <Image
        src="/globe.svg"
        alt="Golden Heaven on Earth Globe"
        width={100}
        height={100}
        className="mb-6"
        priority
      />
      <h1 className="text-3xl font-bold mb-4 text-yellow-700">About Golden Heaven on Earth</h1>
      <p className="text-lg text-gray-700 mb-4 text-center">
        Golden Heaven on Earth is a sanctuary for spiritual seekers, lightworkers, and anyone on a journey of self-discovery and ascension. Our community is dedicated to sharing wisdom, practical guidance, and resources to help you raise your vibration and align with your highest purpose.
      </p>
      <p className="text-lg text-gray-700 mb-4 text-center">
        We believe that every individual has a unique role in the collective awakening of humanity. By nurturing love, compassion, and conscious awareness, we can co-create a world filled with light, harmony, and spiritual abundance.
      </p>
      <p className="text-lg text-gray-700 mb-4 text-center">
        Our mission is to provide a supportive space where you can access:
      </p>
      <ul className="list-disc list-inside text-left text-gray-700 mb-4">
        <li>Inspirational blog articles and spiritual teachings</li>
        <li>Guided meditations and transformative video courses</li>
        <li>Personal coaching and consultations for your spiritual path</li>
        <li>Healing technologies and tools to elevate your energy</li>
        <li>A loving community to share, grow, and celebrate your journey</li>
      </ul>
      <p className="text-lg text-gray-700 mb-4 text-center">
        Together, we are walking the path toward the Golden Age—a time of unity, enlightenment, and divine purpose. Join us as we raise the vibration of love and light on Earth.
      </p>
    </main>
  );
} 