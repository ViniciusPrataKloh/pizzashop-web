import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInFormSchema = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInFormSchema>

export default function SignIn() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

  async function handleSignIn(data: SignInForm) {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log(data)
    toast.success('Enviamos um link de autenticação para o seu e-mail.', {
      action: {
        label: 'Reenviar',
        onClick: () => handleSignIn(data),
      },
    })
    reset()
  }

  return (
    <section className="flex items-center justify-center">
      <Helmet title="Sign-In" />

      <div className="p-8">
        <Button className="absolute right-8 top-8" asChild variant={'ghost'}>
          <Link to="/auth/sign-up">Novo cadastro</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>
            <Button className="w-full" type="submit" disabled={isSubmitting}>
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
