'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';

type Errors = Partial<{
  name: string;
  email: string;
  password: string;
  dob: string;
  terms: string;
}>;

export default function RegisterPage() {
  /*estado do formulário*/
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [profile, setProfile] = useState<'Aluno' | 'Empresa'>('Empresa');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const router = useRouter();

  /*validação  submit*/
  function validate(): Errors {
    const err: Errors = {};
    if (!name.trim()) err.name = 'Nome obrigatório.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) err.email = 'Email inválido.';
    if (password.length < 6) err.password = 'Mín. 6 caracteres.';
    if (!dob) err.dob = 'Informe a data.';
    if (!termsAccepted) err.terms = 'Aceite os termos.';
    return err;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      router.push('/signin'); // redireciona para página de login
    }
  }

  /*componentes*/
  return (
    <div className="min-h-screen flex bg-[#f7f9f8] font-outfit text-base">
      {/* Coluna lateral */}
      <div className="hidden lg:flex items-center justify-center bg-[#f7f9f8]">
        <img
          src="/assets/Lateral login.svg"
          alt="Ilustração decorativa"
          style={{ width: '506px', height: '1002px' }}
          className="object-cover"
        />
      </div>

      {/* Formulário */}
      <div className="flex flex-col items-center justify-center w-full lg:w-[55%] px-6 sm:px-10 py-8">
        {/* Logo */}
        <img
          src="/assets/logo.svg"
          alt="Logo"
          style={{ width: '209px', height: '83px' }}
          className="mb-4"
        />

        {/* Título */}
        <h2
          style={{ fontFamily: 'Geist, sans-serif', fontWeight: 700, fontSize: '46px', lineHeight: '1.2' }}
          className="text-[#0a122a] text-center mb-2"
        >
          Crie sua conta
        </h2>
        <p className="text-[#a8a9ad] text-center mb-6">Preencha os dados abaixo para começar</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          {/* Nome */}
          <div>
            <label className="block mb-1 text-[#0a122a]">Nome</label>
            <input
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              className="w-full border-b border-[#0a122a] bg-transparent py-2 focus:outline-none placeholder:text-[#1b1b1b]"
              placeholder="Seu nome"
            />
            {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-[#0a122a]">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-[#0a122a] bg-transparent py-2 focus:outline-none placeholder:text-[#1b1b1b]"
              placeholder="voce@email.com"
            />
            {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Senha */}
          <div>
            <label className="block mb-1 text-[#0a122a]">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b border-[#0a122a] bg-transparent py-2 focus:outline-none placeholder:text-[#1b1b1b]"
              placeholder="******"
            />
            {errors.password && <p className="text-red-600 text-xs mt-1">{errors.password}</p>}
          </div>

          {/* Data de nascimento */}
          <div>
            <label className="block mb-1 text-[#0a122a]">Data de nascimento</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full border-b border-[#0a122a] bg-transparent py-2 text-[#1b1b1b] focus:outline-none"
            />
            {errors.dob && <p className="text-red-600 text-xs mt-1">{errors.dob}</p>}
          </div>

          {/* Tipo de Perfil */}
          <div>
            <label className="block mb-2 text-[#0a122a]">Tipo de Perfil</label>
            <div className="flex gap-6">
              {(['Aluno', 'Empresa'] as const).map((opt) => (
                <label key={opt} className="flex items-center gap-2 text-[#0a122a]">
                  <input
                    type="radio"
                    name="perfil"
                    checked={profile === opt}
                    onChange={() => setProfile(opt)}
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          {/* Termos de uso */}
          <div>
            <label className="flex items-start gap-2 text-[#0a122a]">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="mt-1"
              />
              <span>
                Eu aceito os{' '}
                <a href="#" className="underline text-[#004ea0]">Termos de Uso</a> e a{' '}
                <a href="#" className="underline text-[#004ea0]">Política de Privacidade</a>.
              </span>
            </label>
            {errors.terms && <p className="text-red-600 text-xs mt-1">{errors.terms}</p>}
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="w-full bg-[#004ea0] text-white py-2 rounded-full font-semibold hover:bg-[#003b7a] transition-colors"
          >
            Cadastrar
          </button>
        </form>

        {/* Link de login */}
        <p className="mt-6 text-center text-[#0a122a]">
          Já é um membro?{' '}
          <a href="/signin" className="underline text-[#004ea0]">Clique aqui para fazer login!</a>
        </p>
      </div>
    </div>
  );
}
