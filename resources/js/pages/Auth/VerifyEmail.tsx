import { FormEventHandler } from 'react'
import { t } from '@/i18n'
import { Link, useForm } from '@inertiajs/react'
import { Button } from '@nextui-org/react'
import { AuthLayout } from './layout'
import { StatusMessage } from './components'

interface Props {
	status: string
}

const VerifyEmail = ({ status }: Props) => {
	const { post, processing } = useForm({})

	const submit: FormEventHandler = (e) => {
		e.preventDefault()

		post(route('verification.send'), {
			preserveScroll: true,
		})
	}

	return (
		<>
			<div className="w-72 space-y-7">
				<p>{t('email-verification-message')}</p>

				{status && <StatusMessage {...{ status }} />}

				<form onSubmit={submit}>
					<Button
						type="submit"
						color="primary"
						fullWidth
						isLoading={processing}
					>
						{t('Resend Verification Email')}
					</Button>
				</form>
			</div>

			<div className="text-center">
				<Button
					as={Link}
					disableRipple
					color="primary"
					variant="light"
					className="p-0 h-auto hover:!bg-transparent"
					href={route('login')}
				>
					{t('Already registered?')}
				</Button>
			</div>
		</>
	)
}

VerifyEmail.layout = (page: JSX.Element) => (
	<AuthLayout {...{ children: page, pageTitle: t('Email Verification') }} />
)

export default VerifyEmail
