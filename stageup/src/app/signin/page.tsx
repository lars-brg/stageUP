'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

type Errors = Partial<{ email: string; password: string }>;

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const router = useRouter();

  /* validação de login */
  function validate(): Errors {
    const err: Errors = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      err.email = 'Email inválido.';
    if (!password) err.password = 'Senha obrigatória.';
    return err;
  }

  /* checa se o email é institucional ou empresarial*/
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const v = validate();
    setErrors(v);

    if (Object.keys(v).length === 0) {
      const isAluno =
        email.toLowerCase().includes('@aluno') ||
        email.toLowerCase().endsWith('alu.ufc.br');

      router.push(isAluno ? '/Aluno' : '/dashboard/Empresa');
    }
  }

  /*Interface*/
  return (
    <div className="min-h-screen flex bg-[#f7f9f8] font-outfit text-base">
      {/* Borda*/}
      <div className="hidden lg:flex items-center justify-center">
        <Image
          src="/assets/Lateral login.svg"
          alt="Padrão decorativo"
          width={506}
          height={1002}
          className="object-cover"
        />
      </div>

      {/* Formulário */}
      <div className="flex flex-col items-center justify-center w-full lg:w-[55%] px-6 sm:px-12">
        {/* Logo */}
        <Image
          src="/assets/logo.svg"
          alt="Logo tage"
          width={209}
          height={83}
          className="mb-8"
        />


        {/* Título */}
        <h1
          style={{
            fontFamily: 'Geist, sans-serif',
            fontWeight: 700,
            fontSize: '46px',
            lineHeight: '1.2',
          }}
          className="text-[#001522] text-center"
        >
          Bem vindo de volta!
        </h1>
        <p className="text-center text-[#6c6d70] mb-10">
          Por favor, insira suas credenciais
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-8">
          {/* Email */}
          <div>
            <label className="block mb-1 text-[#0a122a]">Email</label>
            <input
              type="email"
              placeholder="ex.: joao.silva@alunos.tage.edu.br"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-[#0a122a] bg-transparent py-2 focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-600 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Senha */}
          <div>
            <label className="block mb-1 text-[#0a122a]">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b border-[#0a122a] bg-transparent py-2 focus:outline-none"
            />
            {errors.password && (
              <p className="text-red-600 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Lembrar e esqueci minha senha*/}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-[#0a122a]">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Lembrar de mim
            </label>
            <a href="/password" className="underline text-[#004ea0]">
              Esqueceu a senha?
            </a>
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="w-full bg-[#005fb8] hover:bg-[#00428a] transition-colors text-white py-3 rounded-full font-semibold"
          >
            Entrar
          </button>
        </form>

        {/* Link para cadastro */}
        <p className="mt-10 text-center text-[#0a122a]">
          Ainda não é membro?{' '}
          <a href="/register" className="underline font-semibold">
            Cadastre‑se aqui!
          </a>
        </p>
      </div>
    </div>
  );
}
