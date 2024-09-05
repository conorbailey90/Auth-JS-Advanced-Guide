'use client'
import * as z from 'zod'
import React, { useState } from 'react'
import { CardWrapper } from '@/components/auth/CardWrapper'
import { LoginSchema } from '@/schemas'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FormError } from '@/components/FormError'
import { FormSuccess } from '@/components/FormSuccess'
import { login } from '@/actions/login'
import { useTransition } from 'react'


export const LoginForm = () => {
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError('')
        setSuccess('')
        startTransition(() => {
            login(values)
            .then((data) => {
                setError(data.error);
                setSuccess(data.success);
            })
        })
  
    }
  return (
    <CardWrapper
        headerLabel='Welcome back'
        backButtonLabel='Don&apos;t have an account?'
        backButtonHref='/auth/register'
        showSocial
    >
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                <div className='space-y-4'>
                    <FormField 
                        control={form.control} 
                        name='email' 
                        disabled={isPending}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder='Email' type='email' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} 
                    />
                    <FormField 
                        control={form.control} 
                        name='password' 
                        disabled={isPending}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder='******' type='password' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} 
                    />

               
                </div>
                <FormError message={error} />
                <FormSuccess message={success} />
                <Button type='submit' className='w-full' disabled={isPending}>
                    Login
                </Button>
            </form>
        </Form>
    </CardWrapper>
   
  )
}

