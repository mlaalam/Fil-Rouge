<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    use HasFactory;
    protected $table = 'artisan_ratings';
    protected $fillable = ['rating','comment','artisan_id','client_id'];

    public function artisan()
    {
        return $this->belongsTo(User::class, 'artisan_id');
    }

    public function client()
    {
        return $this->belongsTo(User::class, 'client_id');
    }
}
