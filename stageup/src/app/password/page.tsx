'use client';

import { useState, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import Borda1 from '../../../public/assets/Lateral login.svg';
import Logo   from '../../../public/assets/logo.svg';

type Errors = { email?: string };

export default function ForgotPasswordPage() {
  const [email, setEmail]     = useState('');
  const [errors, setErrors]   = useState<Errors>({});
  const [submitted, setSent]  = useState(false);
  const router = useRouter();

  /* validação do email*/
  const validate = (): Errors => {
    const err: Errors = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      err.email = 'Email inválido.';
    return err;
  };

  /*submit*/
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      setSent(true);
    }
  }

  /*timer para redirecionar para a pagina de login*/
  useEffect(() => {
    if (submitted) {
      const id = setTimeout(() => router.push('/signin'), 10_000);
      return () => clearTimeout(id);
    }
  }, [submitted, router]);

  /*Interface*/
  return (
    <div className="min-h-screen flex bg-[#f7f9f8] font-outfit text-base">
      {/* Lateral */}
      <div className="hidden lg:flex items-center justify-center">
        <Image
          src={Borda1}
          alt="Padrão decorativo"
          style={{ width: 506, height: 1022.26 }}
          className="object-cover"
        />
      </div>

      <div className="flex flex-col items-center justify-center w-full lg:w-[55%] px-6 sm:px-12">
        <Image src={Logo} alt="Logo tage" width={209} height={83} className="mb-8" />

        {submitted ? (
          /*Tela de confirmação*/
          <>
            <h1
              style={{ fontFamily: 'Geist, sans-serif', fontWeight: 700, fontSize: '46px', lineHeight: '1.2' }}
              className="text-[#001522] text-center"
            >
              Verifique seu e‑mail!
            </h1>
            <p className="text-center text-[#0a122a] mt-6 max-w-md">
              Enviamos um link de redefinição para <strong>{email}</strong>.<br />
              Você será redirecionado para a página de login em 10&nbsp;segundos.
            </p>
          </>
        ) : (
          /*Formulário*/
          <>
            <h1
              style={{ fontFamily: 'Geist, sans-serif', fontWeight: 700, fontSize: '46px', lineHeight: '1.2' }}
              className="text-[#001522] text-center"
            >
              Esqueceu a senha?
            </h1>
            <p className="text-center text-[#6c6d70] mb-10">
              Informe seu e‑mail e enviaremos um link para criar uma nova senha.
            </p>

            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-8">
              <div>
                <label className="block mb-1 text-[#0a122a]">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-b border-[#0a122a] bg-transparent py-2 focus:outline-none"
                />
                {errors.email && (
                  <p className="text-red-600 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-[#005fb8] hover:bg-[#00428a] transition-colors text-white py-3 rounded-full font-semibold"
              >
                Enviar link de redefinição
              </button>
            </form>

            <p className="mt-10 text-center text-[#0a122a]">
              Lembrou sua senha?{' '}
              <a href="/signin" className="underline font-semibold text-[#004ea0]">
                Entrar
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
