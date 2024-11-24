<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>{{ $subject ?? 'Email Notification' }}</title>
	<style>
		/* Estilos básicos para emails */
		body {
			font-family: Arial, sans-serif;
			margin: 0;
			padding: 0;
			background-color: #f4f4f4;
			color: #333;
		}

		table {
			width: 100%;
			border-spacing: 0;
			margin: 0;
			padding: 0;
		}

		td {
			padding: 20px;
		}

		.container {
			max-width: 600px;
			margin: 20px auto;
			background: #ffffff;
			border: 1px solid #ddd;
			border-radius: 8px;
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		}

		.header {
			background: #4CAF50;
			color: #ffffff;
			text-align: center;
			padding: 10px 0;
			border-radius: 8px 8px 0 0;
		}

		.content {
			padding: 20px;
		}

		.footer {
			background: #f4f4f4;
			color: #555;
			text-align: center;
			font-size: 12px;
			padding: 10px;
			border-radius: 0 0 8px 8px;
		}

		a {
			color: #4CAF50;
			text-decoration: none;
		}
	</style>
</head>

<body>
	<table>
		<tr>
			<td>
				<div class="container">
					<!-- Encabezado del email -->
					<div class="header">
						<h1>{{ $subject ?? 'Email Notification' }}</h1>
					</div>

					<!-- Contenido principal -->
					<div class="content">
						{!! $content !!}
					</div>

					<!-- Pie del email -->
					<div class="footer">
						<p>
							Este email fue enviado automáticamente. Por favor, no respondas a este mensaje.
							<br>
							Si tienes dudas, contacta con nosotros en <a href="mailto:soporte@ejemplo.com">soporte@ejemplo.com</a>.
						</p>
					</div>
				</div>
			</td>
		</tr>
	</table>
</body>

</html>