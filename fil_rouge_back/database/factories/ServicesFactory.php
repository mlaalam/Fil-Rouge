<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Services>
 */
class ServicesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->randomElement([
              "Installation robinetterie",
              "Tuyauterie",
              "Réparation fuites",
              "Installation chauffe-eau",
              "Installation piscine",
              "Débouchage",
          ]),
          'artisan_id'=>User::where('role','artisan')->inRandomOrder()->first()->id,
        ];
    }
}
