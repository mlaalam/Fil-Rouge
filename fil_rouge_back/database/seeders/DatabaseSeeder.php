<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
      

        $this->call([CategorySeeder::class]);
        User::factory()->admin()->create([
        'nom_complet' => 'Admin Khdamlink',
        'email' => 'admin@khdamlink.com',
        'password' => Hash::make('123456')
        ]);

        // Artisans
        User::factory(20)->artisan()->create();

        // Clients
        User::factory(30)->create([
            'role' => 'client',
            'jours_de_travail' => null,
            'secteur' =>null,
            'heures_par_jour' => null,
        ]);
    }
}
