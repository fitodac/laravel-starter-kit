<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;


class DemoRoutesTest extends TestCase
{
	use RefreshDatabase;

	protected $user;

	protected function setUp(): void
	{
		parent::setUp();

		// Create a user with roles and permissions
		$this->user = User::factory()->create();
		$userRole = Role::create(['name' => 'User']);
		$privateAccess = Permission::create(['name' => 'Private Access']);
		$userRole->givePermissionTo($privateAccess);
		$this->user->assignRole('User');
	}

	/**
	 * Corporate
	 */
	// Accordion
	public function test_corporate_ui_accordion_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('corporate', 'accordion', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('corporate', 'accordion');
	}
	// Alerts
	public function test_corporate_ui_alerts_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('corporate', 'alerts', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('corporate', 'alerts');
	}
	// Avatar
	public function test_corporate_ui_avatar_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('corporate', 'avatar', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('corporate', 'avatar');
	}
	// Breadcrumbs
	public function test_corporate_ui_breadcrumb_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('corporate', 'breadcrumbs', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('corporate', 'breadcrumbs');
	}
	// Buttons
	public function test_corporate_ui_buttons_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('corporate', 'buttons', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('corporate', 'buttons');
	}
	// Cards
	public function test_corporate_ui_cards_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('corporate', 'cards', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('corporate', 'cards');
	}
	// Chips
	public function test_corporate_ui_chips_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('corporate', 'chips', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('corporate', 'chips');
	}
	// Drawer
	public function test_corporate_ui_drawer_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('corporate', 'drawer', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('corporate', 'drawer');
	}
	// Dropdown
	public function test_corporate_ui_dropdown_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('corporate', 'dropdown', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('corporate', 'dropdown');
	}
	// Image
	public function test_corporate_ui_image_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('corporate', 'image', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('corporate', 'image');
	}
	// Listbox
	public function test_corporate_ui_listbox_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('corporate', 'listbox', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('corporate', 'listbox');
	}
	// Loading
	public function test_corporate_ui_loading_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('corporate', 'loading', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('corporate', 'loading');
	}
	// Modal
	public function test_corporate_ui_modal_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('corporate', 'modal', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('corporate', 'modal');
	}
	// Pagination
	public function test_corporate_ui_pagination_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('corporate', 'pagination', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('corporate', 'pagination');
	}
	// Popover
	public function test_corporate_ui_popover_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('corporate', 'popover', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('corporate', 'popover');
	}
	// Progress
	public function test_corporate_ui_progress_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('corporate', 'progress', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('corporate', 'progress');
	}
	// Tabs
	public function test_corporate_ui_tabs_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('corporate', 'tabs', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('corporate', 'tabs');
	}
	// Toasts
	public function test_corporate_ui_toasts_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('corporate', 'toasts', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('corporate', 'toasts');
	}
	// Tooltips
	public function test_corporate_ui_tooltips_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('corporate', 'tooltips', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('corporate', 'tooltips');
	}
	/** Utilities */
	// Color
	public function test_corporate_utilities_color_screen_can_be_rendered(): void
	{
		$this->assertUtilityScreenRequiresAuth('corporate', 'color', 302);
		$this->assertUtilityScreenCanBeAccessedByAuthenticatedUser('corporate', 'color');
	}
	// Image uploader
	public function test_corporate_utilities_image_uploader_screen_can_be_rendered(): void
	{
		$this->assertUtilityScreenRequiresAuth('corporate', 'image-uploader', 302);
		$this->assertUtilityScreenCanBeAccessedByAuthenticatedUser('corporate', 'image-uploader');
	}
	// Icons
	public function test_corporate_utilities_icons_screen_can_be_rendered(): void
	{
		$this->assertUtilityScreenRequiresAuth('corporate', 'icons', 302);
		$this->assertUtilityScreenCanBeAccessedByAuthenticatedUser('corporate', 'icons');
	}



	/**
	 * Executive
	 */
	// Accordion
	public function test_executive_ui_accordion_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('executive', 'accordion', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('executive', 'accordion');
	}
	// Alerts
	public function test_executive_ui_alerts_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('executive', 'alerts', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('executive', 'alerts');
	}
	// Avatar
	public function test_executive_ui_avatar_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('executive', 'avatar', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('executive', 'avatar');
	}
	// Breadcrumbs
	public function test_executive_ui_breadcrumb_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('executive', 'breadcrumbs', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('executive', 'breadcrumbs');
	}
	// Buttons
	public function test_executive_ui_buttons_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('executive', 'buttons', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('executive', 'buttons');
	}
	// Cards
	public function test_executive_ui_cards_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('executive', 'cards', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('executive', 'cards');
	}
	// Chips
	public function test_executive_ui_chips_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('executive', 'chips', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('executive', 'chips');
	}
	// Drawer
	public function test_executive_ui_drawer_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('executive', 'drawer', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('executive', 'drawer');
	}
	// Dropdown
	public function test_executive_ui_dropdown_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('executive', 'dropdown', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('executive', 'dropdown');
	}
	// Image
	public function test_executive_ui_image_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('executive', 'image', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('executive', 'image');
	}
	// Listbox
	public function test_executive_ui_listbox_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('executive', 'listbox', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('executive', 'listbox');
	}
	// Loading
	public function test_executive_ui_loading_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('executive', 'loading', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('executive', 'loading');
	}
	// Modal
	public function test_executive_ui_modal_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('executive', 'modal', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('executive', 'modal');
	}
	// Pagination
	public function test_executive_ui_pagination_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('executive', 'pagination', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('executive', 'pagination');
	}
	// Popover
	public function test_executive_ui_popover_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('executive', 'popover', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('executive', 'popover');
	}
	// Progress
	public function test_executive_ui_progress_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('executive', 'progress', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('executive', 'progress');
	}
	// Tabs
	public function test_executive_ui_tabs_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('executive', 'tabs', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('executive', 'tabs');
	}
	// Toasts
	public function test_executive_ui_toasts_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('executive', 'toasts', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('executive', 'toasts');
	}
	// Tooltips
	public function test_executive_ui_tooltips_screen_can_be_rendered(): void
	{
		$this->assertUiScreenRequiresAuth('executive', 'tooltips', 302);
		$this->assertUiScreenCanBeAccessedByAuthenticatedUser('executive', 'tooltips');
	}
	/** Utilities */
	// Color
	public function test_executive_utilities_color_screen_can_be_rendered(): void
	{
		$this->assertUtilityScreenRequiresAuth('executive', 'color', 302);
		$this->assertUtilityScreenCanBeAccessedByAuthenticatedUser('executive', 'color');
	}
	// Image uploader
	public function test_executive_utilities_image_uploader_screen_can_be_rendered(): void
	{
		$this->assertUtilityScreenRequiresAuth('executive', 'image-uploader', 302);
		$this->assertUtilityScreenCanBeAccessedByAuthenticatedUser('executive', 'image-uploader');
	}
	// Icons
	public function test_executive_utilities_icons_screen_can_be_rendered(): void
	{
		$this->assertUtilityScreenRequiresAuth('executive', 'icons', 302);
		$this->assertUtilityScreenCanBeAccessedByAuthenticatedUser('executive', 'icons');
	}




	private function assertUiScreenRequiresAuth(string $template, string $screen, int $statuscode): void
	{
		$response = $this->get("/dashboard/{$template}/ui/{$screen}");
		$response->assertStatus($statuscode);
		$response->assertRedirect('/login');
	}

	private function assertUtilityScreenRequiresAuth(string $template, string $screen, int $statuscode): void
	{
		$response = $this->get("/dashboard/{$template}/utilities/{$screen}");
		$response->assertStatus($statuscode);
		$response->assertRedirect('/login');
	}

	private function assertFormScreenRequiresAuth(string $template, string $screen, int $statuscode): void
	{
		$response = $this->get("/dashboard/{$template}/form/{$screen}");
		$response->assertStatus($statuscode);
		$response->assertRedirect('/login');
	}

	private function assertTableScreenRequiresAuth(string $template, string $screen, int $statuscode): void
	{
		$response = $this->get("/dashboard/{$template}/tables/{$screen}");
		$response->assertStatus($statuscode);
		$response->assertRedirect('/login');
	}

	private function assertUiScreenCanBeAccessedByAuthenticatedUser(string $template, string $screen): void
	{
		$this->post('/login', ['login' => $this->user->username, 'password' => 'password']);
		$response = $this->get("/dashboard/{$template}/ui/{$screen}");
		$response->assertStatus(200);
	}

	private function assertUtilityScreenCanBeAccessedByAuthenticatedUser(string $template, string $screen): void
	{
		$this->post('/login', ['login' => $this->user->username, 'password' => 'password']);
		$response = $this->get("/dashboard/{$template}/utilities/{$screen}");
		$response->assertStatus(200);
	}

	private function assertFormScreenCanBeAccessedByAuthenticatedUser(string $template, string $screen): void
	{
		$this->post('/login', ['login' => $this->user->username, 'password' => 'password']);
		$response = $this->get("/dashboard/{$template}/form/{$screen}");
		$response->assertStatus(200);
	}

	private function assertTableScreenCanBeAccessedByAuthenticatedUser(string $template, string $screen): void
	{
		$this->post('/login', ['login' => $this->user->username, 'password' => 'password']);
		$response = $this->get("/dashboard/{$template}/tables/{$screen}");
		$response->assertStatus(200);
	}
}
