<?php

namespace App\Traits;

use App\Models\NotificationTemplate;

trait NotificationTrait
{
	/**
	 * Obtiene el namespace de la clase que está utilizando este trait.
	 */
	public function getNamespace(): string
	{
		return (new \ReflectionClass(get_called_class()))->getNamespaceName();
	}

	/**
	 * Obtiene el nombre del archivo sin extensión de la clase que está utilizando este trait.
	 */
	public function getFilename(): string
	{
		$reflection = new \ReflectionClass(get_called_class());
		return basename($reflection->getFileName(), '.php');
	}

	public function getNameSpaceAndFileName(): string
	{
		return $this->getNamespace() . '\\' . $this->getFilename();
	}

	public function replaceShortcodes(string $content, string $shorcodeKey, $collection = []): string
	{
		$template = new NotificationTemplate;
		$shortcodes = match ($shorcodeKey) {
			'role.' => $template->roleShortcodes,
			'permission.' => $template->permissionShortcodes,
			'user.' => $template->userShortcodes,
			default => $template->userShortcodes,
		};

		return preg_replace_callback('/\[(.*?)\]/', function ($matches) use ($shortcodes, $shorcodeKey, $collection) {
			$key = $matches[1];

			if (str_starts_with($key, $shorcodeKey)) {
				$field = explode('.', $key)[1] ?? null;
				return htmlspecialchars($collection->{$field} ?? $matches[0]);
			}

			return $shortcodes[$key] ?? $matches[0];
		}, $content);
	}
}
