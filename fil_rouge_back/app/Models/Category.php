<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $fillable = ['title','icon','artisan_id'];

    public function projects(){
      return $this->hasMany(Project::class ,'catigory_id');
    }
    public function artisan(){
      return $this->belongsTo(User::class);
    }
}
