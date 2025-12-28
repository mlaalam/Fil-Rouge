<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('nom_complet');
            $table->string('ville')->nullable();
            $table->string('numero',10)->nullable();
            $table->string('image')->default('https://res.cloudinary.com/dh8xcvzyi/image/upload/v1766824986/utilisateur_teny5x.png');
            $table->string('status')->default('En attente');
            $table->string('secteur')->nullable();
            $table->text('propos')->nullable();
            $table->unsignedTinyInteger('jours_de_travail')->nullable(); 
            $table->unsignedTinyInteger('heures_par_jour')->nullable();  
            $table->string('email')->unique();
            $table->boolean('disponibilite')->default(0);
            $table->enum('role',['artisan','client','admin'])->default('client');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
