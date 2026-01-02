<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class UserApiTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    use RefreshDatabase;
  public function test_api_register()
{
    $data = [
        'nom_complet' => 'mouad Test',
        'email' => 'mouad@test.com',
        'numero' => '0600000000',
        'role' => 'client',
        'password' => '123456',
        'password_confirmation' => '123456',
    ];

    $response = $this->postJson('/api/register', $data);

    $response->assertStatus(200)
             ->assertJsonStructure([
                 'messages',
                 'role',
                 'user',
                 'user_id',
                 'token',
             ]);

    $this->assertDatabaseHas('users', [
        'email' => 'mouad@test.com',
        'nom_complet' => 'mouad Test',
    ]);
}

    public function test_api_logins()
    {
        $user = User::factory()->create([
            'email' => 'login@test.com',
            'password' => Hash::make('password123'),
        ]);

        $response = $this->postJson('/api/login', [
            'email' => 'login@test.com',
            'password' => 'password123',
        ]);

        $response->assertStatus(200)
                 ->assertJsonStructure([
                     'success',
                     'token',
                     'user',
                     'role',
                     'user_id'
                 ]);
    }

}
