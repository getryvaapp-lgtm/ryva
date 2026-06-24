'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { createClient } = await import('@supabase/supabase-js');
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      );

      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.push('/login');
        return;
      }

      setEmail(data.user.email || '');
      setLoading(false);
    };

    checkUser();
  }, [router]);

  const handleLogout = async () => {
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    await supabase.auth.signOut();
    router.push('/login');
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Ryva, {email}</h1>
      <p className="text-gray-400 mb-8">Your dashboard is coming soon.</p>
      <button
        onClick={handleLogout}
        className="bg-white text-black font-semibold py-3 px-6 rounded-xl hover:bg-gray-200 transition"
      >
        Log out
      </button>
    </main>
  );
}
