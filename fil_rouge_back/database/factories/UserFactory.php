<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
      $role = fake()->randomElement(['artisan', 'client']);
        return [
            'nom_complet' => fake()->name(),
            'ville' => fake()->randomElement([
                'Casablanca', 'Rabat', 'Marrakech', 'Fes', 'Tanger'
            ]),
            'numero' => '06' . fake()->numberBetween(10000000, 99999999),
            'image' =>'https://res.cloudinary.com/dh8xcvzyi/image/upload/v1766824986/utilisateur_teny5x.png',
            'status' => fake()->randomElement(['En attente','Actif','Suspendu']),
            'jours_de_travail' => $role === 'artisan'
                ? fake()->numberBetween(1, 7)
                : null,
            'heures_par_jour' => $role === 'artisan'
                ? fake()->numberBetween(3, 12)
                : null,
            'email' => fake()->unique()->safeEmail(),
            'propos' =>fake()->paragraph(3),
            'disponibilite' => fake()->boolean(70), 
            'secteur' => fake()->randomElement([
                'Plomberie',
                'Électricité',
                'Peinture',
                'Menuiserie',
                'Climatisation',
                'Serrurerie',
            ]),
            'role' => $role,
            'email_verified_at' => now(),
            'password' => static::$password ??= Hash::make('password'),
            'remember_token' => Str::random(10),

        ];
    }


    public function admin()
    {
        return $this->state(fn () => [
            'role' => 'admin',
            'jours_de_travail' => null,
            'heures_par_jour' => null,
            'disponibilite' => 1,
        ]);
    }

    /**
     * State Artisan
     */
    public function artisan()
    {
        return $this->state(fn () => [
            'role' => 'artisan',
            'jours_de_travail' => fake()->numberBetween(4, 7),
            'heures_par_jour' => fake()->numberBetween(5, 10),
            'disponibilite' => 1,
        ]);
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
