import { useEffect, useRef, useState, type FormEventHandler } from 'react'
import { Link, useForm } from '@inertiajs/react'
import { t } from '@/i18n'
import { Input, Button, Switch } from '@nextui-org/react'
import { AuthLayout } from './layout'
import { StatusMessage } from './components'

interface Props {
	status: string
	canResetPassword: boolean
}

const Login = ({ status, canResetPassword }: Props) => {
	const { data, setData, post, processing, errors, reset } = useForm({
		login: '',
		password: '',
		remember: false,
	})

	const [pwdVisibility, setPwdVisibility] = useState<boolean>(false)
	const inputLogin = useRef<HTMLInputElement>(null)

	useEffect(() => {
		inputLogin.current?.focus()

		return () => {
			reset('password')
		}
	}, [])

	const submit: FormEventHandler = (e) => {
		e.preventDefault()

		post(route('login'), {
			onSuccess: (resp) => {
				console.log(resp)
			},
			onError: (error) => console.log(error),
		})
	}

	return (
		<>
			<div className="w-72 space-y-7">
				{status && <StatusMessage {...{ status }} />}

				<form onSubmit={submit}>
					<div className="space-y-4">
						<fieldset className="space-y-1">
							<Input
								id="login"
								type="text"
								name="login"
								label={t('Username or Email')}
								value={data.login}
								isDisabled={processing}
								ref={inputLogin}
								isInvalid={errors.login ? true : false}
								errorMessage={errors.login}
								onValueChange={(e) => setData('login', e)}
							/>
						</fieldset>

						<fieldset className="space-y-1">
							<Input
								id="password"
								type={pwdVisibility ? 'text' : 'password'}
								name="password"
								label={t('Password')}
								value={data.password}
								isDisabled={processing}
								isInvalid={errors.password ? true : false}
								onValueChange={(e) => setData('password', e)}
								errorMessage={errors.password}
								endContent={
									<button
										type="button"
										tabIndex={-1}
										onClick={() => setPwdVisibility(!pwdVisibility)}
									>
										{pwdVisibility ? (
											<i className="ri-eye-fill ri-lg text-primary" />
										) : (
											<i className="ri-eye-off-fill ri-lg text-zinc-400 dark:text-zinc-600" />
										)}
									</button>
								}
							/>
						</fieldset>

						<div>
							<Switch
								size="sm"
								name="remember"
								aria-label="Remember me"
								value={data.remember ? '1' : '0'}
								isDisabled={processing}
								onValueChange={(e) => setData('remember', e)}
							>
								{t('Remember me')}
							</Switch>
						</div>

						<Button
							color="primary"
							fullWidth
							type="submit"
							spinner={<i className="ri-loader-line ri-lg animate-spin"></i>}
							isLoading={processing}
						>
							{t('Log in')}
						</Button>

						<div className="space-y-3">
							{canResetPassword && (
								<div>
									<Button
										as={Link}
										disableRipple
										color="primary"
										variant="light"
										className="p-0 h-auto hover:!bg-transparent"
										href={route('password.request')}
									>
										{t('Forgot your password?')}
									</Button>
								</div>
							)}

							<div>
								<Button
									as={Link}
									disableRipple
									color="primary"
									variant="light"
									className="p-0 h-auto hover:!bg-transparent"
									href={route('register')}
								>
									{t("Don't have an Account?")}
								</Button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</>
	)
}

Login.layout = (page: JSX.Element) => (
	<AuthLayout {...{ children: page, pageTitle: String(t('Log in')) }} />
)

export default Login
