<?php

namespace App\Filament\Pages\Account;

use Filament\Pages\Page;
use Illuminate\Support\Facades\Auth;
use Illuminate\Contracts\Support\Htmlable;
use Filament\Forms\Form;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Actions\Action;
use Filament\Notifications\Notification;
use Filament\Forms\Components\ToggleButtons;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\RichEditor;

class Account extends Page
{
	use InteractsWithForms;

	protected static bool $shouldRegisterNavigation = false;
	protected static ?string $navigationIcon = 'heroicon-o-document-text';
	protected static string $view = 'filament.pages.account.account';
	protected static ?string $title = null;

	public ?array $preferencesData = [];
	public ?array $personalData = [];
	public ?array $locationData = [];

	public static function getNavigationLabel(): string
	{
		return __('Account');
	}

	public function getTitle(): string | Htmlable
	{
		return __('Account');
	}

	public function mount(): void
	{
		$account = Auth::user()->account;

		$this->preferencesForm->fill([
			'language' => $account->language ?? app()->getLocale(),
			'color_mode' => $account->color_mode ?? config('settings.general.color_mode'),
		]);

		$this->personalForm->fill($account->toArray());

		$this->locationForm->fill($account->toArray());
	}

	public function preferencesForm(Form $form): Form
	{
		return $form
			->schema([
				Section::make(__('Preferences'))
					->description(__('Set your account preferences and language settings'))
					->aside()
					->schema([
						// Color mode
						ToggleButtons::make('color_mode')
							->label(__('Color Mode'))
							->grouped()
							->options([
								'light' => 'Light',
								'dark' => 'Dark',
							])
							->icons([
								'light' => 'heroicon-o-sun',
								'dark' => 'heroicon-o-moon',
							]),
						// Language
						Select::make('language')
							->label(__('Language'))
							->options([
								'en' => 'English',
								'es' => 'Spanish',
							])
					])
					->footerActions([
						Action::make('save')
							->label(__('Update'))
							->action(function () {
								$this->savePreferences();
							})
							->extraAttributes(['class' => 'ml-auto']),
					]),
			])
			->statePath('preferencesData');
	}

	public function personalForm(Form $form): Form
	{
		return $form
			->schema([
				Section::make(__('Personal Information'))
					->description(__('Update your personal information and contact details'))
					->aside()
					->schema([
						// Phone
						TextInput::make('phone')
							->label(__('Phone'))
							->tel()
							->telRegex('/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\.\/0-9]*$/'),
						// Birth Date
						DatePicker::make('birth_date')
							->label(__('Birth Date'))
							->native(false)
							->displayFormat(config('settings.general.date_picker_format')),
						// Bio
						RichEditor::make('bio')
							->label(__('Bio'))
							->toolbarButtons([
								'bold',
								'italic',
								'strike',
								'underline',
							]),
						// Company
						TextInput::make('company')
							->label(__('Company')),
						// Job titlle
						TextInput::make('job_title')
							->label(__('Job Title'))

					])
					->footerActions([
						Action::make('save')
							->label(__('Update'))
							->action(function () {
								$this->savePersonal();
							})
							->extraAttributes(['class' => 'ml-auto']),
					])
			])
			->statePath('personalData');
	}


	public function locationForm(Form $form): Form
	{
		return $form
			->schema([
				Section::make(__('Location'))
					->description(__('Update your location information and contact details'))
					->aside()
					->schema([
						// Address
						TextInput::make('address')
							->label(__('Address')),
						// City
						TextInput::make('city')
							->label(__('City')),
						// Country
						TextInput::make('country')
							->label(__('Country')),
						// Zip Code
						TextInput::make('zip_code')
							->label(__('Zip Code')),
					])
					->footerActions([
						Action::make('save')
							->label(__('Update'))
							->action(function () {
								$this->saveLocation();
							})
							->extraAttributes(['class' => 'ml-auto']),
					])
			])
			->statePath('locationData');
	}


	protected function getForms(): array
	{
		return [
			'preferencesForm',
			'personalForm',
			'locationForm'
		];
	}


	public function savePreferences(): void
	{
		$data = $this->preferencesForm->getState();

		Auth::user()->account->update([
			'language' => $data['language'],
			'color_mode' => $data['color_mode']
		]);

		Notification::make()
			->success()
			->title(__('Preferences saved successfully'))
			->send();
	}

	public function savePersonal(): void
	{
		$data = $this->personalForm->getState();

		Auth::user()->account->update([
			'phone' => $data['phone'],
			'birth_date' => $data['birth_date'],
			'bio' => $data['bio'],
			'company' => $data['company'],
			'job_title' => $data['job_title']
		]);

		Notification::make()
			->success()
			->title(__('Personal information saved successfully'))
			->send();
	}

	public function saveLocation(): void
	{
		$data = $this->locationForm->getState();

		Auth::user()->account->update([
			'address' => $data['address'],
			'city' => $data['city'],
			'country' => $data['country'],
			'zip_code' => $data['zip_code']
		]);

		Notification::make()
			->success()
			->title(__('Location information saved successfully'))
			->send();
	}
}
