<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nom_complet',
        'ville',
        'numero',
        'image',
        'status',
        'disponibilite',
        'heures_par_jour',
        'jours_de_travail',
        'role',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];


    public function projects(){
      return $this->hasMany(Project::class,'artisan_id');
    }
    public function categories(){
      return $this->hasMany(Category::class ,'artisan_id');
    }
    public function commentaires(){
      return $this->hasMany(Commentaire::class ,'user_id');
    }
    public function services(){
      return $this->hasMany(Services::class ,'artisan_id');
    }

    public function artisanRating(){
      return $this->hasMany(Rating::class , 'artisan_id');
    }
    public function clientRating(){
      return $this->hasMany(Rating::class , 'client_id');
    }

}
