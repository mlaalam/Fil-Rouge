<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title'=>fake()->title(),
            'description'=>fake()->paragraph(3),
            'image'=>'https://res.cloudinary.com/dh8xcvzyi/image/upload/v1766810186/nlifbam7rd9t3ujmwknz.png',
            'artisan_id' => User::where('role','artisan')->inRandomOrder()->first()->id,
            'catigory_id' => Category::inRandomOrder()->first()->id,
        ];
    }
}
