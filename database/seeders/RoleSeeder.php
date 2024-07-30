<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;



class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

			/**
			 * Reset permissions
			 */
			app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();


			$superAdmin = Role::create(['name' => 'superadmin']);
			$admin = Role::create(['name' => 'admin']);
			$user = Role::create(['name' => 'user']);
			
			
			// $admin_permission = Permission::create(['name' => 'access everything']);

			// $client_permission = Permission::create(['name' => 'access its own account']);

			// $private_permission = Permission::create(['name' => 'private access']);


			// # Asignando un permiso a un rol
			// $admin->givePermissionTo($admin_permission);

			// # El otro método es asignar un rol a un permiso
			// $client_permission->assignRole($client);

			// # O puede asignar múltiples roles a un permiso
			// $private_permission->syncRoles([$admin, $client]);

			// # O asignar multiples permisos a un rol
			// $role->syncPermissions(['permission_1', 'permission_2']);
    }
}
