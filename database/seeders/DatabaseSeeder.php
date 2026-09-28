<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class AdminUserSeeder extends Seeder
{
    public function run(): void
    {
        User::updateOrCreate(
            [
                'email' => 'admin@ansainnovations.com',
            ],
            [
                'name' => 'Admin',
                'role' => 'admin',
                'password' => 'ansa@0005',
            ]
        );
    }
}