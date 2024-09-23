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


	/**
	 * Accordion
	 */
	public function test_corporate_ui_accordion_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'accordion', 302);
	}

	public function test_corporate_ui_accordion_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'accordion');
	}

	public function test_executive_ui_accordion_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('executive', 'accordion', 302);
	}

	public function test_executive_ui_accordion_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'accordion');
	}

	/**
	 * Alerts
	 */
	public function test_corporate_ui_alerts_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'alerts', 302);
	}

	public function test_corporate_ui_alerts_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'alerts');
	}

	public function test_executive_ui_alerts_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('executive', 'alerts', 302);
	}

	public function test_executive_ui_alerts_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'alerts');
	}

	/**
	 * Avatar
	 */
	public function test_corporate_ui_avatar_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'avatar', 302);
	}

	public function test_corporate_ui_avatar_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'avatar');
	}

	public function test_executive_ui_avatar_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('executive', 'avatar', 302);
	}

	public function test_executive_ui_avatar_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'avatar');
	}

	/**
	 * Breadcrumb
	 */
	public function test_corporate_ui_breadcrumb_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'breadcrumbs', 302);
	}

	public function test_corporate_ui_breadcrumb_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'breadcrumbs');
	}

	public function test_executive_ui_breadcrumb_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('executive', 'breadcrumbs', 302);
	}

	public function test_executive_ui_breadcrumb_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'breadcrumbs');
	}

	/**
	 * Buttons
	 */
	public function test_corporate_ui_buttons_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'buttons', 302);
	}

	public function test_corporate_ui_buttons_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'buttons');
	}

	public function test_executive_ui_buttons_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('executive', 'buttons', 302);
	}

	public function test_executive_ui_buttons_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'buttons');
	}

	/**
	 * Cards
	 */
	public function test_corporate_ui_cards_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'cards', 302);
	}

	public function test_corporate_ui_cards_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'cards');
	}

	public function test_executive_ui_cards_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('executive', 'cards', 302);
	}

	public function test_executive_ui_cards_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'cards');
	}

	/**
	 * Chips
	 */
	public function test_corporate_ui_chips_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'chips', 302);
	}

	public function test_corporate_ui_chips_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'chips');
	}

	public function test_executive_ui_chips_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('executive', 'chips', 302);
	}

	public function test_executive_ui_chips_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'chips');
	}

	/**
	 * Drawer
	 */
	public function test_corporate_ui_drawer_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'drawer', 302);
	}

	public function test_corporate_ui_drawer_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'drawer');
	}

	public function test_executive_ui_drawer_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('executive', 'drawer', 302);
	}

	public function test_executive_ui_drawer_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'drawer');
	}

	/**
	 * Dropdown
	 */
	public function test_corporate_ui_dropdown_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'dropdown', 302);
	}

	public function test_corporate_ui_dropdown_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'dropdown');
	}

	public function test_executive_ui_dropdown_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('executive', 'dropdown', 302);
	}

	public function test_executive_ui_dropdown_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'dropdown');
	}

	/**
	 * Image
	 */
	public function test_corporate_ui_image_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'image', 302);
	}

	public function test_corporate_ui_image_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'image');
	}

	public function test_executive_ui_image_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('executive', 'image', 302);
	}

	public function test_executive_ui_image_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'image');
	}

	/**
	 * Listbox
	 */
	public function test_corporate_ui_listbox_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'listbox', 302);
	}

	public function test_corporate_ui_listbox_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'listbox');
	}

	public function test_executive_ui_listbox_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('executive', 'listbox', 302);
	}

	public function test_executive_ui_listbox_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'listbox');
	}

	/**
	 * Loading
	 */
	public function test_corporate_ui_loading_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'loading', 302);
	}

	public function test_corporate_ui_loading_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'loading');
	}

	public function test_executive_ui_loading_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('executive', 'loading', 302);
	}

	public function test_executive_ui_loading_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'loading');
	}

	/**
	 * Modal
	 */
	public function test_corporate_ui_modal_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'modal', 302);
	}

	public function test_corporate_ui_modal_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'modal');
	}

	public function test_executive_ui_modal_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('executive', 'modal', 302);
	}

	public function test_executive_ui_modal_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'modal');
	}

	/**
	 * Pagination
	 */
	public function test_corporate_ui_pagination_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'pagination', 302);
	}

	public function test_corporate_ui_pagination_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'pagination');
	}

	public function test_executive_ui_pagination_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('executive', 'pagination', 302);
	}

	public function test_executive_ui_pagination_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'pagination');
	}

	/**
	 * Popover
	 */
	public function test_corporate_ui_popover_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'popover', 302);
	}

	public function test_corporate_ui_popover_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'popover');
	}

	public function test_executive_ui_popover_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('executive', 'popover', 302);
	}

	public function test_executive_ui_popover_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'popover');
	}

	/**
	 * Progress
	 */
	public function test_corporate_ui_progress_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'progress', 302);
	}

	public function test_corporate_ui_progress_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'progress');
	}

	public function test_executive_ui_progress_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('executive', 'progress', 302);
	}

	public function test_executive_ui_progress_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'progress');
	}

	/**
	 * Tabs
	 */
	public function test_corporate_ui_tabs_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'tabs', 302);
	}

	public function test_corporate_ui_tabs_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'tabs');
	}

	public function test_executive_ui_tabs_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('executive', 'tabs', 302);
	}

	public function test_executive_ui_tabs_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'tabs');
	}

	/**
	 * Toasts
	 */
	public function test_corporate_ui_toasts_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'toasts', 302);
	}

	public function test_corporate_ui_toasts_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'toasts');
	}

	public function test_executive_ui_toasts_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('executive', 'toasts', 302);
	}

	public function test_executive_ui_toasts_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'toasts');
	}

	/**
	 * Tooltips
	 */
	public function test_corporate_ui_tooltips_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'tooltips', 302);
	}

	public function test_corporate_ui_tooltips_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'tooltips');
	}

	public function test_executive_ui_tooltips_screen_requires_auth(): void
	{
		$this->assertScreenRequiresAuth('executive', 'tooltips', 302);
	}

	public function test_executive_ui_tooltips_screen_can_be_rendered_by_authenticated_user(): void
	{
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'tooltips');
	}




	private function assertScreenRequiresAuth(string $template, string $screen, int $statuscode): void
	{
		$response = $this->get("/dashboard/{$template}/ui/{$screen}");
		$response->assertStatus($statuscode);
		$response->assertRedirect('/login');
	}

	private function assertScreenCanBeAccessedByAuthenticatedUser(string $template, string $screen): void
	{
		$user = User::factory()->create();
		$userRole = Role::create(['name' => 'User']);
		$privateAccess = Permission::create(['name' => 'Private Access']);
		$userRole->givePermissionTo($privateAccess);
		$user->assignRole('User');

		$this->post('/login', [
			'login' => $user->username,
			'password' => 'password',
		]);

		$response = $this->get("/dashboard/{$template}/ui/{$screen}");
		$response->assertStatus(200);
	}
}
