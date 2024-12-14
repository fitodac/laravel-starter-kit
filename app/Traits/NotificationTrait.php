<?php

namespace App\Traits;

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

/**
 * Replaces shortcodes in the given content with corresponding values from a collection.
 *
 * @param string $content The content containing shortcodes to be replaced.
 * @param string $shorcodeKey The key prefix used to identify relevant shortcodes within the content.
 * @param mixed $collection An array or object containing values to replace the shortcodes with.
 * 
 * @return string The content with shortcodes replaced by their corresponding values.
 */
	public function replaceShortcodes(string $content, string $shorcodeKey, $collection = []): string
	{

		$shortcodes = match ($shorcodeKey) {
			'role.' => [
				'[role.name]' => "The name of the role",
			],

			'permission.' => [
				'[permission.name]' => "The name of the permission",
			],

			'user.' => [
				'[user.id]'                    => "The unique identifier for the user",
				'[user.name]'                  => "The first name of the user",
				'[user.lastname]'              => "The last name of the user",
				'[user.username]'              => "The username chosen by the user",
				'[user.email]'                 => "The user's email address",
				'[user.password]'              => "The user's password",
				'[user.phone]'                 => "The phone number of the user",
				'[user.birth_date]'            => "The birth date of the user",
				'[user.address]'               => "The address of the user",
				'[user.city]'                  => "The city where the user resides",
				'[user.country]'               => "The country where the user resides",
				'[user.zip]'                   => "The postal code of the user's location",
				'[user.job_title]'             => "The job title of the user",
				'[user.company]'               => "The company where the user is employed",
				'[user.bio]'                   => "A short biography of the user",
				'[user.profile_picture]'       => "URL of the user's profile picture",
				'[user.status]'                => "The current status of the user"
			],

			default => [],
		};

		return preg_replace_callback('/\[(.*?)\]/', function ($matches) use ($shortcodes, $shorcodeKey, $collection) {
			$key = $matches[1];

			if (str_starts_with($key, $shorcodeKey)) {
				$field = explode('.', $key)[1] ?? null;
				$value = is_object($collection) ? ($collection->{$field} ?? null) : ($collection[$field] ?? null);
				return htmlspecialchars($value ?? $matches[0]);
			}

			return $shortcodes[$key] ?? $matches[0];
		}, $content);
	}
}
