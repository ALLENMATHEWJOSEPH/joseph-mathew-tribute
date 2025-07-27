import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://qqhnnutmjsvkhafsihje.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxaG5udXRtanN2a2hhZnNpaGplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1NzY2NTgsImV4cCI6MjA2OTE1MjY1OH0.LL9R9SQZPjffWjuBVJMHjkEcvCxhPpgvk2Y3j4-E3vA'
);

export default function Home() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [media, setMedia] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const { data } = await supabase.from('messages').select('*').order('created_at', { ascending: false });
    setMessages(data || []);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    await supabase.from('messages').insert([{ text: message }]);
    setMessage('');
    fetchMessages();
  };

  return (
    <>
      <style>{`
        body {
          background-color: #fff9f0;
          font-family: Georgia, serif;
          color: #333;
          margin: 0;
          padding: 0;
        }

        header {
          text-align: center;
          padding: 3rem 1rem 1rem;
          position: relative;
        }

        header h1 {
          font-size: 3rem;
          font-family: 'Great Vibes', cursive;
          margin-bottom: 0.5rem;
        }

        header p {
          font-size: 1rem;
          font-weight: 500;
          color: #555;
        }

        .floral-top-left,
        .floral-top-right {
          position: absolute;
          top: 0;
          width: 200px;
        }

        .floral-top-left {
          left: 0;
        }

        .floral-top-right {
          right: 0;
        }

        .section {
          max-width: 900px;
          margin: auto;
          padding: 2rem;
          background: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          border-radius: 12px;
          margin-bottom: 2rem;
        }

        .section h2 {
          font-family: Georgia, serif;
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #8b0000;
        }

        .message-box {
          border-bottom: 1px solid #ddd;
          padding: 1rem 0;
        }

        textarea {
          width: 100%;
          padding: 1rem;
          font-size: 1rem;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          border-radius: 6px;
        }

        button {
          background-color: #8b0000;
          color: white;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        .tribute-img {
          max-width: 100%;
          height: auto;
          display: block;
          margin: 1rem auto;
          border-radius: 12px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        .gallery-img {
          width: 100%;
          max-width: 300px;
          margin: 10px;
          border-radius: 8px;
        }
      `}</style>

      <header>
        <img className="floral-top-left" src="/floral-left.png" alt="" />
        <img className="floral-top-right" src="/floral-right.png" alt="" />
        <h1>Joseph Mathew</h1>
        <p>July 6, 1969 – July 24, 2025</p>
        <img className="tribute-img" src="/pappa.png" alt="Joseph Mathew" />
      </header>

      <div className="section">
        <h2>About Joseph Mathew</h2>
        <p>
    Joseph Mathew was the kind of man whose presence lit up a room long before he spoke.
    Born on July 6, 1969, in the warm embrace of a close-knit family, he was the youngest
    of five sons raised by Mr. Mathai Mathai and Mariayamma Mathai. Being the youngest, he
    was lovingly pampered by everyone — but never took that love for granted. From a young
    age, he carried both a deep sense of responsibility and an almost childlike joy for life.
  </p>
  <p>
    He studied at St. John’s Boys School in Nedumkunnam, where he was known not just for his
    friendly nature but for his playful charm and signature smile. Later, he completed his ITI
    studies in Myladi. Like many selfless fathers, Joseph made the hard decision to live away
    from home in his early years to ensure a better future for his family. He worked hard,
    made sacrifices quietly, and always came home with stories and songs.
  </p>
  <p>
    Music ran in his blood. Joseph sang at every chance he got — weddings, birthdays, family
    dinners, even lazy Sundays. Rumor has it that it was his voice that first caught Theresa’s
    heart, who would later become his beloved wife. Together, they built a home full of laughter,
    love, and care — raising Allen Mathew Joseph and Anitta Maria Joseph with strength and gentleness.
  </p>
  <p>
    Joseph had a rare gift: he made friends effortlessly. Strangers turned into friends, and friends
    into family. He was that guy — the one people called when they needed help, a laugh, or simply
    to feel heard. Even animals knew his kindness. He once fed a neighborhood cat daily, and it became
    part of his routine — walking him to the shed as he left for work and greeting him when he returned.
    When the cat passed away, Joseph shed quiet tears. That was the heart he had.
  </p>
  <p>
    On July 24, 2025, Joseph passed away — but not alone. His memory lives on in hundreds of hearts.
    The calls and messages that flooded in afterward came from all corners of the world — people Allen
    hadn’t even met — each one with a story of how “Pappa” made their life better, lighter, or funnier.
  </p>
  <p>
    He wasn’t just a loving father, husband, and son. He was everyone’s person. And though he’s gone,
    his laughter, music, and love will echo forever in our lives. We love you Pappa.
  </p>
      </div>

      <div className="section">
        <h2>Share Your Memory</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            placeholder="Write something you remember about him..."
          />
          <br />
          <button type="submit">Submit Message</button>
        </form>
        <div style={{ marginTop: '2rem' }}>
          {messages.map((msg, i) => (
            <div key={i} className="message-box">{msg.text}</div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Gallery</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          {[...Array(36)].map((_, i) => (
            <img
              key={i}
              className="gallery-img"
              src={`/gallery/${i + 1}.jpg`}
              alt={`Memory ${i + 1}`}
            />
          ))}
          {[...Array(7)].map((_, i) => (
            <video
              key={i + 100}
              className="gallery-img"
              controls
              src={`/gallery/${i + 1}.mp4`}
            >
              Your browser does not support the video tag.
            </video>
          ))}
        </div>
      </div>
    </>
  );
}
